'use strict';

/**
 * engine.js — Morphologie-DSL Engine
 *
 * MIGRATION Phase 1+2+3:
 *  - tokenize()          → core/dsl-tokenizer.js (gemeinsamer Tokenizer mit Editor)
 *  - parseARTToken()     → schema-basiert via core/slot-schema.js
 *  - parsePROToken()     → schema-basiert via core/slot-schema.js
 *  - resolveART/PRO      → slot-Map-Adapter (decline*-Funktionen bleiben)
 *  - RuntimeContext      → core/runtime-context.js
 *  - resolveSlotGenus    → resolveGenusExt(value, ctx)
 *  - resolveSlotNumerus  → resolveNumerusExt(value, ctx)
 *  - resolveNOM          → registriert var in ctx
 *  - resolveDEF          → neu: Defektiva-Rendering
 *  - render()            → sequenziell (DEF→var: Abhängigkeit)
 */

import { getRandomElement } from './rand.js';

// Phase 1: Gemeinsamer Tokenizer (Editor-kompatibel, mit start/end-Positionen)
import { tokenize } from './dsl-tokenizer.js';

// Phase 2: Slot-Schema-System für ART/PRO
import {
  lookupArtSchema,
  lookupProSchema,
  bindSlots,
  VALID_ART_SUBTYPES,
  VALID_PRO_SUBTYPES,
} from './slot-schema.js';

// Phase 3: RuntimeContext für var:/def:-Auflösung
import * as _rCtx from './runtime-context.js';
export { createRuntimeContext } from './runtime-context.js';

// Phase 4: flex-tables Rendering-Backend (ersetzt inline decline*-Aufrufe für ART/PRO)
import { generateSurface } from './flex-tables.js';

// Phase 6: Nomen- und Adjektivflexion ausgelagert
import { declineNoun, declineAdjective } from './noun-declension.js';
export { declineNoun, declineAdjective } from './noun-declension.js';

// Phase 8: Geteilte DSL-Hilfsfunktionen ausgelagert
import {
  norm, normalizeGenus, normalizeFlag, isVariable as _isVariable,
  NUM as _NUM, KAS as _KAS, ART as _ART, GEN as _GEN, PER as _PER,
  STE as _STE, META as _MET,
  DEM_ART as _DEM_ART, DEM_PRO as _DEM_PRO, QUANT as _QUANT,
} from './dsl-utils.js';
export { norm, normalizeGenus, normalizeFlag } from './dsl-utils.js';

// Re-export für Downstream-Nutzung
export { VAR_PATTERN, DEF_PATTERN } from './slot-schema.js';

/**
 * Alle validen DSL-Token-Typen.
 * DEF ist noch nicht vollständig implementiert (Phase 3+), wird aber erkannt.
 */
export const VALID_TYPES = new Set(['NOM', 'ADJ', 'ART', 'PRO', 'COM', 'NAM', 'FUN', 'DEF']);

// ═══════════════════════════════════════════════════════════════════════════
// 1. MORPHOLOGIE
// ═══════════════════════════════════════════════════════════════════════════

// ── Phase 8: norm / normalizeGenus / normalizeFlag / _isVariable / Flag-Mengen ──
// Ausgelagert in core/dsl-utils.js (importiert oben).

// ═══════════════════════════════════════════════════════════════════════════
// 2. NORMALIZER + PARSER
// ═══════════════════════════════════════════════════════════════════════════
const _VOLK = new Set([
	'Mensch',
	'Elf',
	'Zwerg',
	'Halbling',
	'Gnom',
	'Halbelf',
	'Halbork',
	'Drachenblütiger',
	'Tiefling',
]);
const _REGION = new Set([
	'germanisch',
	'slawisch',
	'romanisch',
	'skandinavisch',
	'keltisch',
	'griechisch',
	'arabisch',
	'persisch',
	'bantuisch',
	'ägyptisch',
	'meso-amerikanisch',
	'polynesisch',
	'indisch',
	'chinesisch',
	'japanisch',
]);

function _findRenderFlagIdx(flags) {
	for (let i = 0; i < flags.length; i++) {
		const f = flags[i];
		if (f === 'art' || f.startsWith('ART:') || f.startsWith('PRO:')) return i;
	}
	return -1;
}

// tokenize() ist in core/dsl-tokenizer.js und wird oben importiert.
// Alle Renderpfade nutzen den importierten Tokenizer.

function parseNOMToken(r) {
	const p = r.split('|'),
		lemma = norm(p[0].split(':')[1]),
		flags = p.slice(1);
	const t = {
		type: 'NOM',
		lemma,
		numerus: 'sgl',
		kasus: 'nom',
		art: 'def',
		renderArticle: false,
		renderOverride: null,
	};
	const ri = _findRenderFlagIdx(flags),
		mf = ri === -1 ? flags : flags.slice(0, ri);
	for (const raw of mf) {
		const f = normalizeFlag(raw);
		if (_MET.has(f)) {
			t.numerus = f;
		} else if (_NUM.has(f)) {
			t.numerus = f;
		} else if (_KAS.has(f)) {
			t.kasus = f;
		} else if (_ART.has(f)) {
			t.art = f;
		}
	}
	if (ri !== -1 && !_MET.has(t.numerus)) {
		const rf = flags.slice(ri),
			ff = rf[0];
		if (ff === 'art') {
			t.renderArticle = true;
		} else {
			const rt = ff.split(':')[0];
			if (rt === 'ART') t.renderOverride = parseARTToken(rf.join('|'));
			else if (rt === 'PRO') t.renderOverride = parsePROToken(rf.join('|'));
		}
	}
	return t;
}
/**
 * parseARTToken — Schema-basierter Parser für ART-Token (Phase 2)
 *
 * VORHER (Set-basiert):
 *   Flags wurden gegen flache Sets geprüft, Reihenfolge egal.
 *   Rückgabe: {type, subtype, variable, person, ownerNumerus, targetKasus, ...}
 *
 * JETZT (Schema-basiert):
 *   Flags werden positional gegen ART_SCHEMAS gebunden.
 *   Rückgabe: {type, subtype, slots: Map<slotName, value>}
 *
 * BREAKING CHANGE:
 *   {ART:poss|msk|p1|sgl|nom} (alte Reihenfolge) → Parsing-Fehler + console.warn
 *   {ART:poss|p1|sgl|nom|msk|sgl} (neue Reihenfolge) → korrekt
 *
 * ADAPTER: resolveART() übersetzt das neue Format zurück auf die alten decline*()-Funktionen.
 */
function parseARTToken(r) {
	const parts   = r.split('|');
	const subtype = parts[0].split(':')[1];
	const rawFlags = parts.slice(1);

	const schema = lookupArtSchema(subtype);

	if (!schema) {
		const valid = [...VALID_ART_SUBTYPES].join(', ');
		console.warn(
			`[parseARTToken] Unbekannter ART-Subtyp: "${subtype}". ` +
			`Erlaubt: ${valid}`,
		);
		return {
			type:       'ART',
			subtype:    subtype ?? 'unknown',
			slots:      new Map(),
			parseError: `Unbekannter Subtyp "${subtype}"`,
		};
	}

	const { resolved, errors, warnings } = bindSlots(rawFlags, schema.slots);

	// Diagnostik: Reihenfolge-Fehler oder fehlende Pflicht-Slots
	if (errors.length > 0) {
		errors.forEach(e =>
			console.warn(`[parseARTToken] {ART:${subtype}|${rawFlags.join('|')}}: ${e}`),
		);
	}
	if (warnings.length > 0) {
		warnings.forEach(w =>
			console.warn(`[parseARTToken] {ART:${subtype}|${rawFlags.join('|')}}: ${w}`),
		);
	}

	return {
		type:    'ART',
		subtype,
		slots:   resolved,
	};
}

/**
 * parsePROToken — Schema-basierter Parser für PRO-Token (Phase 2)
 * Analog zu parseARTToken. Rückgabe: {type, subtype, slots: Map}
 */
function parsePROToken(r) {
	const parts    = r.split('|');
	const subtype  = parts[0].split(':')[1];
	const rawFlags = parts.slice(1);

	const schema = lookupProSchema(subtype);

	if (!schema) {
		const valid = [...VALID_PRO_SUBTYPES].join(', ');
		console.warn(
			`[parsePROToken] Unbekannter PRO-Subtyp: "${subtype}". ` +
			`Erlaubt: ${valid}`,
		);
		return {
			type:       'PRO',
			subtype:    subtype ?? 'unknown',
			slots:      new Map(),
			parseError: `Unbekannter Subtyp "${subtype}"`,
		};
	}

	const { resolved, errors, warnings } = bindSlots(rawFlags, schema.slots);

	if (errors.length > 0) {
		errors.forEach(e =>
			console.warn(`[parsePROToken] {PRO:${subtype}|${rawFlags.join('|')}}: ${e}`),
		);
	}
	if (warnings.length > 0) {
		warnings.forEach(w =>
			console.warn(`[parsePROToken] {PRO:${subtype}|${rawFlags.join('|')}}: ${w}`),
		);
	}

	return {
		type:    'PRO',
		subtype,
		slots:   resolved,
	};
}

function parseADJToken(r) {
	const p = r.split('|'),
		lemma = p[0].split(':')[1],
		flags = p.slice(1);
	const t = {
		type: 'ADJ',
		lemma,
		numerus: 'sgl',
		kasus: 'nom',
		genus: 'msk',
		art: '-',
		steigerung: 'pos',
	};
	for (const raw of flags) {
		const f = normalizeFlag(raw);
		if (_MET.has(f)) {
			t.numerus = f;
		} else if (_NUM.has(f)) {
			t.numerus = f;
		} else if (_KAS.has(f)) {
			t.kasus = f;
		} else if (_GEN.has(f)) {
			t.genus = f;
		} else if (_ART.has(f)) {
			t.art = f;
		} else if (_STE.has(f)) {
			t.steigerung = f;
		}
	}
	return t;
}
function parseCOMToken(r) {
	const p = r.split('|'),
		lemma = p[0].split(':')[1],
		flags = p.slice(1),
		t = {type: 'COM', lemma, fugaTyp: null};
	for (const raw of flags) {
		const f = normalizeFlag(raw);
		if (f === 'gen' || f === 'plu' || f === 'auto') t.fugaTyp = f;
	}
	return t;
}
function parseNAMToken(r) {
	const p = r.split('|'),
		subtype = p[0].split(':')[1],
		flags = p.slice(1);
	const t = {type: 'NAM', subtype, volk: 'rnd', genus: 'rnd', kasus: 'nom', ref: null};
	for (const f of flags) {
		if (_KAS.has(normalizeFlag(f))) {
			t.kasus = normalizeFlag(f);
		} else if (f === 'msk' || f === 'fem') {
			t.genus = f;
		} else if (f.startsWith('ref:')) {
			t.ref = f.split(':')[1];
		} else if (_isVariable(f)) {
			t.ref = f;
		} else if (_VOLK.has(f)) {
			t.volk = f;
		} else if (_REGION.has(f) || f === 'rnd') {
			t.region = f;
		}
	}
	return t;
}
function parseFUNToken(r) {
	const p = r.split('|');
	return {type: 'FUN', fn: p[0].split(':')[1], arg: p.slice(1).join('|') || null};
}

/**
 * parseDEFToken — Parser für Defektiva-Token (Phase 3)
 *
 * Format: {DEF:Gebirge1|nom} oder {DEF:Gebirge1|nom|adj}
 *
 * DEF-Token repräsentieren Nomen die nur in einem Numerus existieren:
 *   Pluraliatantum: "die Alpen", "die Rauvinberge" (immer Plural)
 *   Singulariatantum: "der Mut", "das Gold" (immer Singular)
 *
 * Der Numerus ist NICHT im Token gesetzt — er ergibt sich aus den Defektiva-Daten.
 * Das ist der Grund warum def:Gebirge1 in anderen Token nicht direkt 'sgl'/'plu'
 * eintragen kann: erst nach resolveDEF() ist der Numerus bekannt.
 *
 * @param {string} raw - 'DEF:Gebirge1|nom'
 */
function parseDEFToken(raw) {
	const parts  = raw.split('|');
	const varKey = norm(parts[0].split(':')[1]); // 'Gebirge1'
	const kasus  = normalizeFlag(parts[1] ?? 'nom');
	const flags  = parts.slice(2);
	return {
		type:   'DEF',
		varKey,               // z.B. 'Gebirge1' — entspricht dem def:X-Schlüssel
		kasus:  _KAS.has(kasus) ? kasus : 'nom',
		art:    flags.find(f => _ART.has(f)) ?? '-',
		renderArticle: flags.includes('art'),
	};
}

function parseToken(rawInner, mod) {
	const ci = rawInner.indexOf(':');
	if (ci === -1) return {type: 'UNKNOWN', raw: rawInner, mod: mod ?? null};
	const typePart = rawInner.slice(0, ci);
	// Unbekannte Typen diagnostizieren (nicht still akzeptieren)
	if (!VALID_TYPES.has(typePart)) {
		console.warn(`[parseToken] Unbekannter Token-Typ: "${typePart}". Erlaubt: ${[...VALID_TYPES].join(', ')}`);
		return {type: 'UNKNOWN', raw: rawInner, mod: mod ?? null};
	}
	let token;
	switch (typePart) {
		case 'NOM':
			token = parseNOMToken(rawInner);
			break;
		case 'ART':
			token = parseARTToken(rawInner);
			break;
		case 'PRO':
			token = parsePROToken(rawInner);
			break;
		case 'ADJ':
			token = parseADJToken(rawInner);
			break;
		case 'COM':
			token = parseCOMToken(rawInner);
			break;
		case 'NAM':
			token = parseNAMToken(rawInner);
			break;
		case 'FUN':
			token = parseFUNToken(rawInner);
			break;
		case 'DEF':
			token = parseDEFToken(rawInner);
			break;
		default:
			console.warn('[parseToken] Unbekannt:', typePart);
			token = {type: 'UNKNOWN', raw: rawInner};
	}
	token.mod = mod ?? null;
	return token;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. RESOLVER
// ═══════════════════════════════════════════════════════════════════════════

// ── Slot-Auflösungs-Helpers (Phase 2) ─────────────────────────────────────────

/**
 * resolveSlotGenus — Löst einen GENUS_EXT-Wert auf (Phase 6: vMap-Legacy entfernt).
 *
 * @param {string|undefined} value
 * @param {RuntimeContext}   ctx
 */
function resolveSlotGenus(value, ctx) {
	if (!value) return 'msk';
	if (ctx && value.startsWith('var:')) {
		const { resolved, error } = _rCtx.resolveGenusExt(value, ctx);
		if (resolved) return normalizeGenus(resolved);
		console.warn(`[resolveSlotGenus] ${error} — Fallback: msk`);
		return 'msk';
	}
	if (value.startsWith('var:')) {
		// var: ohne ctx → unauflösbar, Fallback mit Diagnose
		console.warn(`[resolveSlotGenus] Genus-Variable "${value.slice(4)}" ohne RuntimeContext — Fallback: msk`);
		return 'msk';
	}
	return normalizeGenus(value);
}

/**
 * resolveSlotNumerus — Löst einen NUMERUS_EXT-Wert auf (Phase 3 implementiert).
 *
 * VORHER (Phase 2): def:X → console.warn + 'sgl' (Fallback, TODO)
 * JETZT (Phase 3):  def:X → ctx.vars.get(X).numerus (echter Wert)
 *
 * @param {string|undefined}  value
 * @param {RuntimeContext}    ctx
 */
function resolveSlotNumerus(value, ctx) {
	if (!value) return 'sgl';
	if (value.startsWith('def:')) {
		if (ctx) {
			const { resolved, error } = _rCtx.resolveNumerusExt(value, ctx);
			if (resolved) return resolved;
			// Variable noch nicht registriert — Warnmeldung mit Kontext
			console.warn(`[resolveSlotNumerus] ${error} — Fallback: sgl`);
		} else {
			console.warn(
				`[resolveSlotNumerus] DEF-Variable "${value}" ohne RuntimeContext — Fallback: sgl`,
			);
		}
		return 'sgl';
	}
	return value;
}

// ── Genus-Resolver für ADJ (alt, bleibt erhalten) ─────────────────────────────

/**
 * resolveGenus — Für ADJ-Token und NOM-Render-Override-Kontext.
 * NICHT für ART/PRO-Tokens verwenden (die nutzen resolveSlotGenus).
 */
function resolveGenus(parsed, ctxG, vMap) {
	if (parsed.variable) {
		const e = (vMap ?? {})[parsed.variable];
		if (e?.gender) return normalizeGenus(e.gender);
	}
	if (ctxG) return normalizeGenus(ctxG);
	if (parsed.targetGenus) return normalizeGenus(parsed.targetGenus);
	if (parsed.genus) return normalizeGenus(parsed.genus);
	return 'msk';
}

function _artAttr(a) {
	return a === 'def' ? 'schwach' : a === 'ind' || a === 'neg' ? 'gemischt' : 'stark';
}

/**
 * _artStr — Artikel-String für NOM-Rendering (Phase 5 migriert)
 *
 * VORHER (Phase 1-4): declineDefiniteArticle / declineIndefiniteArticle / declineNegativeArticle
 * JETZT (Phase 5):    generateSurface({ type:'ART', subtype:a, numerus:n, kasus:k, genus:g })
 *
 * Warum _artStr noch existiert (nicht direkt generateSurface in resolveNOM):
 *   resolveNOM hat einen guard `if (!token.renderArticle) return ''` der hier
 *   kompakt abgebildet wird. Die Funktion ist ein Thin-Wrapper ohne eigene Logik.
 */
function _artStr(a, n, k, g, render) {
	if (!render || !a || a === '-') return '';
	const surface = generateSurface({ type: 'ART', subtype: a, numerus: n, kasus: k, genus: g });
	return (typeof surface === 'string' && surface.startsWith('??')) ? '' : surface;
}

/**
 * resolveRenderOverride — Löst ein ART/PRO-Render-Override-Token auf.
 *
 * Wird aufgerufen wenn NOM ein eingebettetes ART:/PRO:-Token hat:
 *   {NOM:Held1|sgl|gen|ART:poss|p1|sgl|nom|msk|sgl}
 *
 * cN/cK/cG kommen vom NOM-Token (effektiver Numerus, Kasus, Genus des Nomens).
 * Für poss: Possessor-Infos kommen aus dem ART/PRO-Token's eigenen Slots.
 *
 * @param {object} ov   - Slot-basiertes ART oder PRO Token
 * @param {string} cN   - NOM-Numerus (Override)
 * @param {string} cK   - NOM-Kasus (Override)
 * @param {string} cG   - NOM-Genus (Override)
 * @param {object} vMap
 */
/**
 * resolveRenderOverride — Phase 4: generateSurface(buildMFBForOverride)
 *
 * VORHER (Phase 3): Großer switch pro ART/PRO-Subtyp.
 * JETZT (Phase 4):  buildMFBForOverride() kombiniert Slot-Info mit NOM-Kontext,
 *                   generateSurface() rendert das Ergebnis.
 *
 * Die NOM-Kongruenz (cN/cK/cG) überschreibt immer die Ziel-Features des MFB.
 */
function resolveRenderOverride(ov, cN, cK, cG, vMap, ctx) {
	if (!ov || !ov.slots) return '';
	const mfb     = buildMFBForOverride(ov, cN, cK, cG, vMap, ctx);
	const surface = generateSurface(mfb);
	if (typeof surface === 'string' && surface.startsWith('??')) {
		console.warn(`[resolveRenderOverride] generateSurface: "${surface}" für ${ov.type}:${ov.subtype}`);
		return '';
	}
	return surface;
}

// ── Resolver ───────────────────────────────────────────────────────────────────

/**
 * resolveNOM — Nomen-Resolver (Phase 3 erweitert)
 *
 * Neu gegenüber Phase 1+2:
 *   - Akzeptiert RuntimeContext (ctx) als zusätzlichen Parameter
 *   - Registriert aufgelöste Variablen in ctx.vars (registerVar),
 *     damit nachfolgende var:Tier1 / def:Gebirge1-Verweise korrekt auflösen
 *
 * @param {object}   token    - Parsed NOM-Token
 * @param {string[]} settings
 * @param {object}   vMap     - Legacy variableMap (Abwärtskompatibilität)
 * @param {import('./runtime-context.js').RuntimeContext} ctx
 */
function resolveNOM(token, settings, vMap, ctx) {
	let wd;
	const lk = norm(token.lemma);
	if (_isVariable(lk) && vMap?.[lk]) {
		wd = vMap[lk];
	} else {
		const e = LEMMA_MAP[lk];
		if (!e) {
			console.warn('[NOM] Unbekannt:', lk);
			return '[' + token.lemma + '?]';
		}
		wd = selectRandom(e.arrays, settings);
	}
	if (!wd) return '[' + token.lemma + '?]';
	if (token.numerus === 'tags') return wd.tags ?? '';
	if (token.numerus === 'genus') return wd.gender ?? '';
	const eN = wd.number ? normalizeFlag(wd.number) : token.numerus,
		g = normalizeGenus(wd.gender ?? 'maskulinum'),
		attr = _artAttr(token.art);

	// Phase 3: Variable im RuntimeContext registrieren, damit downstream
	// var:Tier1-Verweise in ART/PRO das richtige Genus auflösen können.
	if (ctx && _isVariable(lk)) {
		_rCtx.registerVar(ctx, lk, {
			genus:   g,
			numerus: eN,
			lemma:   wd.singular ?? lk,
		});
	}

	const artS = token.renderOverride
		? resolveRenderOverride(token.renderOverride, eN, token.kasus, g, vMap, ctx)
		: _artStr(token.art, eN, token.kasus, g, token.renderArticle);
	const dec = declineNoun(
		eN,
		token.kasus,
		attr,
		wd.singular,
		wd.plural,
		wd.adjective ?? '',
		wd.prefix ?? '',
		wd.suffix ?? '',
		wd.gender,
		wd.declinationRule,
		wd.declinationPattern,
		wd.tags,
	);
	return artS ? artS + ' ' + dec : dec;
}
/**
 * resolveART — Slot-basierter Adapter (Phase 2)
 *
 * Übersetzt das neue {type:'ART', subtype, slots:Map} Format in Aufrufe der
 * bestehenden decline*()-Funktionen. Die decline*()-Funktionen selbst bleiben
 * unverändert (Phase 4+ ersetzt sie durch flex-tables).
 *
 * ADAPTER-MUSTER: Neues Format rein → alte Funktion aufrufen → String raus.
 */
// ── MFB-Builder (Phase 4) ──────────────────────────────────────────────────────

/**
 * buildMFB — Konvertiert ein slot-basiertes Token (Phase 2) in ein ResolvedMFB (Phase 4).
 *
 * Phase 6: vMap wird intern nicht mehr genutzt (resolveSlotGenus ist ctx-only).
 *          Parameter bleibt für mögliche zukünftige Extension erhalten.
 *
 * @param {'ART'|'PRO'} type
 * @param {string}      subtype
 * @param {Map}         slots
 * @param {RuntimeContext} ctx
 * @param {object}      _vMap   - Ungenutzt seit Phase 6 (reserviert)
 */
function buildMFB(type, subtype, slots, ctx, _vMap) {
	const mfb = { type, subtype };

	// 1. Alle Slot-Werte direkt ins MFB kopieren
	for (const [key, val] of slots) {
		mfb[key] = val;
	}

	// 2. var:X-Genus-Felder auflösen
	const GENUS_FIELDS = ['genus', 'ziel_genus', 'p3genus', 'ant_genus'];
	for (const field of GENUS_FIELDS) {
		if (mfb[field]) {
			mfb[field] = resolveSlotGenus(mfb[field], ctx);
		}
	}

	// 3. def:X-Numerus-Felder auflösen
	const NUMERUS_FIELDS = ['numerus', 'poss_num', 'ziel_num', 'ant_num'];
	for (const field of NUMERUS_FIELDS) {
		if (mfb[field]) {
			mfb[field] = resolveSlotNumerus(mfb[field], ctx);
		}
	}

	return mfb;
}

/**
 * buildMFBForOverride — Baut ein MFB für NOM-Render-Overrides.
 *
 * KONTEXT:
 *   Wenn ein NOM-Token ein eingebettetes ART/PRO-Token trägt:
 *   {NOM:Held1|sgl|gen|ART:poss|p1|sgl|nom|msk|sgl}
 *
 *   Das NOM-Token hat den effektiven Numerus/Kasus/Genus bestimmt (cN/cK/cG).
 *   Das Override-Token liefert Possesssor-Info (person, p3genus, poss_num).
 *
 *   Regel: cN/cK/cG überschreiben immer die "Ziel"-Felder des MFB,
 *   weil das Nomen die Kongruenz erzwingt.
 *
 * @param {object} ov   - Slot-basiertes ART/PRO-Token
 * @param {string} cN   - Effektiver NOM-Numerus
 * @param {string} cK   - Effektiver NOM-Kasus
 * @param {string} cG   - Effektiver NOM-Genus
 * @param {object} vMap
 * @param {RuntimeContext} ctx
 */
function buildMFBForOverride(ov, cN, cK, cG, vMap, ctx) {
	const mfb = buildMFB(ov.type, ov.subtype, ov.slots, ctx, vMap);

	// NOM-Kontext überschreibt Ziel-Features — das Nomen bestimmt die Kongruenz
	mfb.numerus = cN;
	mfb.kasus   = cK;
	mfb.genus   = cG;

	// Phase 9: ziel_num / ziel_genus nur für Subtypen setzen, die diese Felder kennen.
	// Vorher: immer gesetzt → unnötige MFB-Verschmutzung bei genposs/rez/indef/int.
	const POSSESSIVE_SUBTYPES = new Set(['poss']);
	if (POSSESSIVE_SUBTYPES.has(ov.subtype)) {
		mfb.ziel_num   = cN;
		mfb.ziel_genus = cG;
	}

	return mfb;
}

/**
 * resolveART — Phase 4: generateSurface(buildMFB)
 *
 * VORHER (Phase 3): Großer switch mit decline*()-Aufrufen pro Subtyp.
 * JETZT (Phase 4):  buildMFB() → generateSurface() — unabhängig vom Subtyp.
 *
 * Die decline*()-Funktionen werden für ART/PRO nicht mehr direkt aufgerufen.
 * Sie bleiben für NOM (_artStr, declineNoun) und ADJ (declineAdjective).
 */
function resolveART(t, vMap, ctx) {
	if (t.parseError) {
		console.warn(`[resolveART] Parse-Fehler bei ART:${t.subtype}: ${t.parseError}`);
		return '';
	}
	const mfb = buildMFB('ART', t.subtype, t.slots, ctx, vMap);
	const surface = generateSurface(mfb);
	if (typeof surface === 'string' && surface.startsWith('??')) {
		console.warn(`[resolveART] generateSurface: "${surface}" für {ART:${t.subtype}}`);
		return '';
	}
	return surface;
}

/**
 * resolvePRO — Phase 4: generateSurface(buildMFB)
 * Analoges Muster zu resolveART.
 */
function resolvePRO(t, vMap, ctx) {
	if (t.parseError) {
		console.warn(`[resolvePRO] Parse-Fehler bei PRO:${t.subtype}: ${t.parseError}`);
		return '';
	}
	const mfb = buildMFB('PRO', t.subtype, t.slots, ctx, vMap);
	const surface = generateSurface(mfb);
	if (typeof surface === 'string' && surface.startsWith('??')) {
		console.warn(`[resolvePRO] generateSurface: "${surface}" für {PRO:${t.subtype}}`);
		return '';
	}
	return surface;
}

/**
 * resolveDEF — Defektiva-Resolver (Phase 3)
 *
 * Rendert ein Defektiva-Nomen und registriert es im RuntimeContext,
 * damit nachfolgende Tokens via def:VarKey den Numerus auflösen können.
 *
 * DEF_MAP wird aus defektiva-registry.js geladen (analog zu LEMMA_MAP).
 * Format eines DEF_MAP-Eintrags: { type:'defektiv', arrays: [{noun, gender, number, ...}] }
 *
 * WICHTIG — Numerus-Quelle:
 *   Der Numerus kommt aus wd.number (CSV-Feld), NICHT aus dem Token.
 *   Damit wird die Idee hinter Defektiva korrekt abgebildet:
 *   Das Wort legt seinen Numerus fest, nicht das Template.
 *
 * @param {object}           token    - Parsed DEF-Token
 * @param {string[]}         settings
 * @param {RuntimeContext}   ctx
 */
function resolveDEF(token, settings, ctx) {
	const entry = DEF_MAP[token.varKey];
	if (!entry) {
		console.warn(`[resolveDEF] Unbekannte Defektiva-Variable: "${token.varKey}"`);
		return '[DEF:' + token.varKey + '?]';
	}

	const wd = selectRandom(entry.arrays, settings);
	if (!wd) return '[DEF:' + token.varKey + '?]';

	const numerus = normalizeFlag(wd.number ?? 'sgl');
	const genus   = normalizeGenus(wd.gender ?? 'maskulinum');

	// Im RuntimeContext registrieren — damit def:Gebirge1 in ART/PRO aufgelöst werden kann
	if (ctx) {
		_rCtx.registerVar(ctx, token.varKey, {
			genus,
			numerus,
			lemma: wd.noun ?? token.varKey,
		});
	}

	// Artikel rendern via generateSurface (Phase 5)
	const artType = (token.art === '-' || !token.art) ? 'def' : token.art;
	const artS = token.renderArticle
		? generateSurface({ type: 'ART', subtype: artType, numerus, kasus: token.kasus, genus })
		: '';

	// Nomen flektieren
	// DEF-Einträge haben nur 'noun' (kein singular/plural-Doppeleintrag)
	const dec = declineNoun(
		numerus,
		token.kasus,
		_artAttr(token.art === '-' ? 'def' : token.art),
		wd.noun ?? '',
		wd.noun ?? '',           // Singular = Plural für Defektiva-Lookups
		wd.adjective ?? '',
		wd.prefix ?? '',
		wd.suffix ?? '',
		wd.gender,
		wd.declinationRule,
		wd.declinationPattern,
	);

	return artS ? artS + ' ' + dec : dec;
}

/**
 * resolveADJ — Adjektiv-Resolver (Phase 9: CSV-Steigerungsformen)
 *
 * Phase 9-Korrektur:
 *   VORHER: Immer wd.positive gelesen, dann Komparativ/Superlativ algorithmisch gebaut.
 *   JETZT:  Je nach t.steigerung die korrekte CSV-Spalte lesen:
 *             pos → wd.positive
 *             kom → wd.comparative  (Fallback: wd.positive)
 *             sup → wd.superlative  (Fallback: wd.positive)
 *
 *   declineAdjective() wird immer mit steigerung='pos' aufgerufen, da die
 *   Steigerungsform bereits vollständig in der CSV-Spalte steht.
 *   _adjStem() entfernt dabei das trailing -e aus Superlativformen wie
 *   'anmutigste' → 'anmutigst', damit die Flexionsendung korrekt angehängt wird.
 *
 * WARUM KEIN ALGORITHMISCHER FALLBACK FÜR KOM/SUP:
 *   Der Algorithmus (base + 'er' / base + 'st') erzeugte falsche Superlative
 *   (anmutigst statt anmutigste) und fehlende Umlaute (gut→güter statt besser).
 *   CSV-Formen sind explizit und immer korrekt.
 */
function resolveADJ(t, vMap, ctx) {
	const e = LEMMA_MAP[t.lemma];

	if (t.numerus === 'tags') {
		return e?.type === 'adj' ? (selectRandom(e.arrays, [])?.tags ?? '') : '';
	}

	let csvForm;
	if (e?.type === 'adj') {
		const wd = selectRandom(e.arrays, []);
		if (wd) {
			// Phase 9: Richtige CSV-Spalte je nach Steigerungsgrad
			if (t.steigerung === 'kom') {
				csvForm = wd.comparative ?? wd.positive ?? wd.positiv ?? t.lemma;
			} else if (t.steigerung === 'sup') {
				csvForm = wd.superlative ?? wd.positive ?? wd.positiv ?? t.lemma;
			} else {
				csvForm = wd.positive ?? wd.positiv ?? t.lemma;
			}
		} else {
			csvForm = t.lemma;
		}
	} else {
		csvForm = t.lemma;
	}

	// Steigerungsform ist bereits in csvForm enthalten → steigerung='pos' für
	// declineAdjective (nur Flexionsendung anhängen, keine Steigerungssuffix mehr)
	return declineAdjective(t.numerus, t.kasus, 'pos', _artAttr(t.art), t.genus, csvForm);
}
function resolveCOM(t, settings, vMap) {
	let wd;
	if (_isVariable(t.lemma) && vMap?.[t.lemma]) {
		wd = vMap[t.lemma];
	} else {
		const e = LEMMA_MAP[t.lemma];
		if (!e) {
			console.warn('[COM] Unbekannt:', t.lemma);
			return '[' + t.lemma + '?]';
		}
		wd = selectRandom(e.arrays, settings);
	}
	if (!wd) return '[' + t.lemma + '?]';
	if (t.fugaTyp === 'auto') return _autoKom(wd);
	if (!t.fugaTyp) return wd.singular;
	if (t.fugaTyp === 'plu')
		return declineNoun(
			'plu',
			'nom',
			'stark',
			wd.singular,
			wd.plural,
			'',
			'',
			'',
			wd.gender,
			wd.declinationRule,
			wd.declinationPattern,
		);
	if (t.fugaTyp === 'gen')
		return declineNoun(
			'sgl',
			'gen',
			'stark',
			wd.singular,
			wd.plural,
			'',
			'',
			'',
			wd.gender,
			wd.declinationRule,
			wd.declinationPattern,
		);
	return wd.singular;
}
function _autoKom(w) {
	const s = w.singular ?? '',
		rule = w.declinationRule ?? '';
	let c;
	if (
		(rule === 'schwacheDeklination' || rule === 'gemischteDeklination') &&
		!s.endsWith('vent')
	) {
		c = w.plural ?? s;
	} else if (rule === 'substantiviertesAdjektiv') {
		c = (w.plural ?? s) + 'n';
	} else if (
		(s.endsWith('en') ||
			s.endsWith('heit') ||
			s.endsWith('ion') ||
			s.endsWith('keit') ||
			s.endsWith('schaft') ||
			s.endsWith('sicht') ||
			s.endsWith('tät') ||
			s.endsWith('ung') ||
			s.endsWith('vent') ||
			(s.endsWith('ar') && w.gender === 'maskulinum') ||
			(s.endsWith('ch') && w.gender === 'maskulinum') ||
			(s.endsWith('at') && w.gender !== 'femininum') ||
			(s.endsWith('tum') && w.gender !== 'femininum') ||
			(s.endsWith('ling') && w.gender !== 'femininum') ||
			s.startsWith('Be') ||
			s.startsWith('Ge') ||
			s.startsWith('Ent') ||
			s.startsWith('Er') ||
			s.startsWith('Ver') ||
			s.startsWith('Wider') ||
			s.startsWith('Zer')) &&
		!s.endsWith('s') &&
		!s.endsWith('ß') &&
		!s.endsWith('z') &&
		!s.endsWith('er') &&
		!s.endsWith('ir') &&
		!s.endsWith('or') &&
		!s.endsWith('ur') &&
		w.declinationPattern !== 'S1'
	) {
		c = s + 's';
	} else {
		c = s;
	}
	c = c.replace(/\s/g, '-');
	return c.charAt(0).toUpperCase() + c.slice(1);
}

// ─── Name-Kontext ─────────────────────────────────────────────────────────

const nameCtx = {};

function mapGenusToGender(g) {
	if (g === 'fem') return 'weiblich';
	if (g === 'neu') return 'nicht-binär';
	return 'männlich';
}

function getOrCreateNameContext(token) {
	const key = token.subtype;
	if (!nameCtx[key]) {
		const {generateRandomAuthorGender, generateRandomAuthorRace, generateRandomAuthorRegion} =
			_authorFns;
		nameCtx[key] = {
			gender:
				token.genus === 'rnd'
					? generateRandomAuthorGender()
					: mapGenusToGender(token.genus),
			race: token.volk === 'rnd' ? generateRandomAuthorRace() : token.volk,
			region: (token.region ?? 'rnd') === 'rnd' ? generateRandomAuthorRegion() : token.region,
		};
	}
	return nameCtx[key];
}

/**
 * FIX: resolveNAM ist async — awaitet die async Namensgeneratoren.
 * Ohne await kam [object Promise] als String raus.
 */
async function resolveNAM(token) {
	let context;
	if (token.ref && nameCtx[token.ref]) {
		context = nameCtx[token.ref];
	} else {
		context = getOrCreateNameContext(token);
		if (token.ref) nameCtx[token.ref] = context;
	}

	const {generateRandomAuthorFirstName, generateRandomAuthorLastName} = _authorFns;
	let name;
	try {
		if (token.subtype.startsWith('Vorname')) {
			name = await generateRandomAuthorFirstName(
				context.gender,
				context.race,
				context.region,
			);
		} else if (token.subtype.startsWith('Nachname')) {
			name = await generateRandomAuthorLastName(context.race, context.region, context.gender);
		}
	} catch (err) {
		console.warn('[resolveNAM] Fallback aktiviert für', token.subtype, '—', err.message);
		// Stabile Fallback-Namen wenn CSV nicht erreichbar
		const fallbacks = {
			Vorname: ['Aria', 'Dorn', 'Elan', 'Fira', 'Gael'],
			Nachname: ['Sturm', 'Stein', 'Brand', 'Wald', 'Fels'],
		};
		const pool = token.subtype.startsWith('Vorname') ? fallbacks.Vorname : fallbacks.Nachname;
		name = pool[Math.floor(Math.random() * pool.length)];
	}

	if (!name || typeof name !== 'string' || name.trim() === '') {
		name = token.subtype.startsWith('Vorname') ? 'Aria' : 'Sturm';
	}

	const eSXZ = (s) => /[sxzß]$/.test(s);
	if (token.kasus === 'gen') return eSXZ(name) ? name + "'" : name + 's';
	return name;
}

function resolveFUN(fn, arg) {
	const offset = arg ? parseInt(arg, 10) || 0 : 0,
		dice = {d4: 4, d6: 6, d8: 8, d10: 10, d12: 12, d20: 20},
		sides = dice[fn];
	if (sides) return String(Math.floor(Math.random() * sides) + 1 + offset);
	return '';
}

/**
 * resolveToken — Dispatcht ein geparstes Token an den passenden Resolver.
 *
 * Phase 3 Änderungen:
 *  - Akzeptiert RuntimeContext (ctx)
 *  - DEF-Token werden vollständig gerendert via resolveDEF()
 *  - ctx wird an alle Resolver weitergegeben
 *
 * @param {object}   token
 * @param {string[]} settings
 * @param {object}   vMap     - Legacy variableMap
 * @param {RuntimeContext} ctx
 */
async function resolveToken(token, settings, vMap, ctx) {
	let result;
	switch (token.type) {
		case 'NOM':
			result = resolveNOM(token, settings, vMap, ctx);
			break;
		case 'DEF':
			result = resolveDEF(token, settings, ctx);
			break;
		case 'ART':
			result = resolveART(token, vMap, ctx);
			break;
		case 'PRO':
			result = resolvePRO(token, vMap, ctx);
			break;
		case 'ADJ':
			result = resolveADJ(token, vMap, ctx);
			break;
		case 'COM':
			result = resolveCOM(token, settings, vMap);
			break;
		case 'NAM':
			result = await resolveNAM(token);
			break;
		case 'FUN':
			result = resolveFUN(token.fn, token.arg);
			break;
		default:
			result = '[?' + token.type + ']';
	}
	result = result ?? '';
	if (token.mod === '^' && result) return result.charAt(0).toUpperCase() + result.slice(1);
	if (token.mod === '_' && result) return result.toLowerCase();
	return result;
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. EXPORTS
// ═══════════════════════════════════════════════════════════════════════════

export const LEMMA_MAP = {};

export function selectRandom(arr, settings) {
	if (!Array.isArray(arr) || arr.length === 0) return null;
	const s = settings?.length > 0 ? settings : ['Universal'];
	const filtered = arr.filter((e) => !e.campaignSetting || s.includes(e.campaignSetting));
	const pool = filtered.length > 0 ? filtered : arr;
	return pool[Math.floor(Math.random() * pool.length)];
}

const _authorFns = {};
export function registerAuthorFunctions(fns) {
	Object.assign(_authorFns, fns);
}

// DEF_MAP: befüllt von defektiva-registry.js (analog zu LEMMA_MAP für Defektiva)
export const DEF_MAP = {};

/**
 * render() — Async-Renderer für DSL-Templates (Phase 3)
 *
 * KRITISCHE ÄNDERUNG: Promise.all → sequenzielle for-of-Schleife
 *
 * WARUM SEQUENZIELL (nicht mehr Promise.all):
 *   DEF-Token müssen VOR dem ersten Verweis auf ihre Variable (def:X) verarbeitet
 *   werden. Mit Promise.all wäre die Reihenfolge nicht garantiert:
 *
 *   Template: "{DEF:Gebirge1|nom} {ART:def|def:Gebirge1|nom|msk}"
 *   Promise.all → ART könnte vor DEF auflösen → def:Gebirge1 nicht im ctx → Fallback
 *   for-of    → DEF immer zuerst → def:Gebirge1 ist registriert → korrekte Auflösung
 *
 *   NOM-Token mit var:X funktionieren genauso: die Variable wird beim NOM-Rendering
 *   registriert, danach können ART/PRO-Tokens sie via var:X lesen.
 *
 *   PERFORMANCE-HINWEIS: Der einzige async Resolver ist resolveNAM (Namensgenerator).
 *   Alle anderen Resolver sind synchron. Die sequenzielle Schleife ist daher in 99%
 *   der Fälle nicht langsamer als Promise.all.
 *
 * @param {string}   template
 * @param {object}   variableMap   - { Tier1: {gender,singular,...}, ... }
 * @param {string[]} activeSettings
 * @returns {Promise<string>}
 */
export async function render(template, variableMap, activeSettings) {
	Object.keys(nameCtx).forEach((k) => delete nameCtx[k]);
	const vMap     = variableMap ?? {};
	const settings = activeSettings ?? ['Universal'];

	// Phase 3: Frischer RuntimeContext pro render()-Aufruf
	// Kein globaler Mutable State — Kontext lebt nur für diesen Template-Durchlauf
	const ctx = _rCtx.createRuntimeContext();

	const tokens = tokenize(template);
	const parts  = [];

	// SEQUENZIELL — notwendig für DEF→var:/def:-Abhängigkeiten
	for (const el of tokens) {
		if (el.type === 'literal') {
			parts.push(el.text);
			continue;
		}
		if (el.type === 'unclosed') {
			console.warn(`[render] Nicht geschlossener Token an Position ${el.start}: "${el.text}"`);
			parts.push('');
			continue;
		}
		// eslint-disable-next-line no-await-in-loop
		const resolved = await resolveToken(parseToken(el.raw, el.mod), settings, vMap, ctx);
		parts.push(resolved);
	}

	return parts.join('');
}
