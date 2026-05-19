'use strict';

/**
 * noun-declension.js — Nomen- und Adjektivflexion (Phase 6)
 *
 * HERKUNFT: Aus core/engine.js extrahiert.
 *
 * INHALT:
 *   - Adjektiv-Endungstabellen (stark / schwach / gemischt)
 *   - declineAdjective()
 *   - declineNoun() + _applyNounTable()
 *
 * WARUM EIN EIGENES MODUL:
 *   Symmetrie zur flex-tables.js-Trennung (ART/PRO). Nomen- und Adjektiv-
 *   Flexion ist eigenständige morphologische Logik ohne Abhängigkeit auf
 *   Slot-Schemas oder RuntimeContext. Eigenes Modul ermöglicht:
 *
 *   (a) Separate Testbarkeit ohne engine.js-Kontext
 *   (b) Vorbereitung für Phase 7 (noun-flex-tables mit vollständigen
 *       Deklinationstabellen, analog zu flex-tables.js für ART/PRO)
 *   (c) Klare Trennung: Flexions-Engine ≠ Render-Pipeline ≠ Token-Parser
 *
 * NOCH NICHT IN FLEX-TABLES:
 *   `declineNoun` und `declineAdjective` nutzen noch prozedurale Logik
 *   statt deklarative Lookup-Tabellen. Das ist Phase 7.
 *
 * @module noun-declension
 */

// ── Adjektiv-Endungstabellen ───────────────────────────────────────────────────

/**
 * Starke Adjektivendungen (ohne Artikel — volle Flexion).
 * Beispiel: alter Wein, alten Weins, altem Wein
 */
export const ADJ_STRONG_END = {
	sgl: {
		msk: { nom: 'er', gen: 'es', dat: 'em', akk: 'en' },
		fem: { nom: 'e',  gen: 'er', dat: 'er', akk: 'e'  },
		neu: { nom: 'es', gen: 'es', dat: 'em', akk: 'es' },
	},
	plu: {
		msk: { nom: 'e', gen: 'er', dat: 'en', akk: 'e' },
		fem: { nom: 'e', gen: 'er', dat: 'en', akk: 'e' },
		neu: { nom: 'e', gen: 'er', dat: 'en', akk: 'e' },
	},
};

/**
 * Schwache Adjektivendungen (nach bestimmtem Artikel — reduzierte Flexion).
 * Beispiel: der alte Wein, des alten Weins, dem alten Wein
 */
export const ADJ_WEAK_END = {
	sgl: {
		msk: { nom: 'e',  gen: 'en', dat: 'en', akk: 'en' },
		fem: { nom: 'e',  gen: 'en', dat: 'en', akk: 'e'  },
		neu: { nom: 'e',  gen: 'en', dat: 'en', akk: 'e'  },
	},
	plu: {
		msk: { nom: 'en', gen: 'en', dat: 'en', akk: 'en' },
		fem: { nom: 'en', gen: 'en', dat: 'en', akk: 'en' },
		neu: { nom: 'en', gen: 'en', dat: 'en', akk: 'en' },
	},
};

/**
 * Gemischte Adjektivendungen (nach unbestimmtem Artikel / kein- / Possessiv).
 * Beispiel: ein alter Wein, eines alten Weins, einem alten Wein
 */
export const ADJ_MIXED_END = {
	sgl: {
		msk: { nom: 'er', gen: 'en', dat: 'en', akk: 'en' },
		fem: { nom: 'e',  gen: 'en', dat: 'en', akk: 'e'  },
		neu: { nom: 'es', gen: 'en', dat: 'en', akk: 'es' },
	},
	plu: {
		msk: { nom: 'en', gen: 'en', dat: 'en', akk: 'en' },
		fem: { nom: 'en', gen: 'en', dat: 'en', akk: 'en' },
		neu: { nom: 'en', gen: 'en', dat: 'en', akk: 'en' },
	},
};

// ── Adjektiv-Elision Hilfsdaten (müssen vor declineAdjective deklariert sein) ──

/**
 * Adjektive bei denen das -e- aus -er vor Flexionsendungen ausfällt.
 * Lexikalisch geregelt — keine produktive Regel.
 */
const _ER_ELISION = new Set(['teuer', 'sauer', 'ungeheuer', 'geheuer', 'lauer']);

// ── declineAdjective ───────────────────────────────────────────────────────────

/**
 * Flektiert ein Adjektiv.
 *
 * @param {'sgl'|'plu'}              numerus
 * @param {'nom'|'gen'|'dat'|'akk'}  kasus
 * @param {'pos'|'kom'|'sup'}        steigerung   - Komparationsgrad
 * @param {'schwach'|'gemischt'|'stark'} attribute - Deklinations-Typ
 * @param {'msk'|'fem'|'neu'}        genus
 * @param {string}                   positiv      - Adjektiv-Stamm (z.B. 'alt', 'groß')
 * @returns {string}
 */
export function declineAdjective(numerus, kasus, steigerung, attribute, genus, positiv) {
	const g = _normalizeGenus(genus);
	// Elision normalisieren bevor Komparativ/Superlativ-Suffix angehängt wird
	const base = _adjStem(positiv);
	const stem =
		steigerung === 'kom'
			? base + 'er'
			: steigerung === 'sup'
				? base + 'st'
				: base;
	const tbl =
		attribute === 'schwach'
			? ADJ_WEAK_END
			: attribute === 'gemischt'
				? ADJ_MIXED_END
				: ADJ_STRONG_END;
	return stem + (tbl[numerus]?.[g]?.[kasus] ?? '');
}

// ── DECLENSION_PATTERNS — Deklarative Muster-Registry (Phase 7) ───────────────

/**
 * Für jedes Muster definieren wir zwei Regeln:
 *
 *   genitivSuffix(genus, stem):
 *     Was im Singular-Genitiv (msk/neu) angehängt wird.
 *     '' = unveränderlich, null = kein Genitiv-s (fem immer null).
 *
 *   pluralDativSuffix(pluralStem):
 *     Was im Plural-Dativ angehängt wird.
 *     '+n'   = +n (Standard: wenn Stamm nicht schon auf n endet)
 *     'as-is' = unveränderlich (fremdWort, eigenname)
 *
 * MUSTER-SEMANTIK (aus Korpusanalyse der CSV-Daten):
 *
 *   S1: Plural -e / Umlaut-e       (Stab→Stäbe, Sack→Säcke)
 *       sgl-gen msk/neu: +es | plu-dat: +n
 *
 *   S2: Plural -er / Umlaut-er     (Hammer→Hämmer, Geist→Geister)
 *       sgl-gen msk/neu: +es | plu-dat: +n
 *
 *   S3: Plural -er kein Umlaut     (Schwert→Schwerter)
 *       sgl-gen msk/neu: +es | plu-dat: +n
 *
 *   S4: Nullplural, einsilbig      (Tiger→Tiger)
 *       sgl-gen msk/neu: +s  | plu-dat: +n
 *
 *   S5: Plural -e ohne Umlaut      (Kostüm→Kostüme, Laden→Läden)
 *       sgl-gen msk/neu: +s  | plu-dat: +n
 *
 *   S6: Nullplural, -er/-el/-en    (Eimer→Eimer, Köcher→Köcher)
 *       sgl-gen msk/neu: +s  | plu-dat: +n (nur wenn nicht auf n)
 *       S6 = identisch zu S4 in der Logik; separates Label für Klarheit.
 *
 *   W1: n-Deklination strict       (Barde→Barden, Alchemist→Alchemisten)
 *       sgl gen/dat/akk: +en oder +n (nach -e/-el/-er/-en)
 *
 *   W2: Unveränderlich sgl         (Herz-Klasse)
 *       sgl: immer Stamm | plu-dat: +n
 *
 *   W3: gemischteDeklination       (Gladiator→Gladiatoren, Buch→Bücher)
 *       sgl: wie stark | plu: Plural-Stamm aus CSV
 *       Für plu-dat: Plural endet meist auf -en (Gladiatoren) → kein +n nötig
 *       oder auf -er (Bücher) → +n = Büchern
 *
 *   fremdWort: Fremdwort-Plural    (Goblin→Goblins, Tabu→Tabus)
 *       plu-dat: kein +n (Goblins bleibt Goblins)
 *       sgl-gen: +s
 *
 *   eigenname: Eigenname           (Vorname, Ort)
 *       Alle Kasus unveränderlich. sgl-gen: +s.
 */
const DECLENSION_PATTERNS = {

  // ── Stark ──────────────────────────────────────────────────────────────────

  S1: {
    sglGen:    (genus, _stem) => (genus === 'fem') ? '' : 'es',
    pluDat:    'conditional-n',
  },
  S2: {
    sglGen:    (genus, _stem) => (genus === 'fem') ? '' : 'es',
    pluDat:    'conditional-n',
  },
  S3: {
    sglGen:    (genus, _stem) => (genus === 'fem') ? '' : 'es',
    pluDat:    'conditional-n',
  },
  S4: {
    sglGen:    (genus, _stem) => (genus === 'fem') ? '' : 's',
    pluDat:    'conditional-n',
  },
  S5: {
    sglGen:    (genus, _stem) => (genus === 'fem') ? '' : 's',
    pluDat:    'conditional-n',
  },
  S6: {
    sglGen:    (genus, _stem) => (genus === 'fem') ? '' : 's',
    pluDat:    'conditional-n',
  },

  // ── Schwach ────────────────────────────────────────────────────────────────

  W1: {
    // n-Deklination: alle obliquen Kasus im Singular + ganzes Plural-Paradigma
    sglGen:    () => '__weak__',   // Signal für n-Deklinations-Logik
    pluDat:    'conditional-n',
  },
  W2: {
    // Unveränderlich im Singular (Herz-Typ); Plural aus CSV
    sglGen:    () => '',           // kein Genitiv-s
    pluDat:    'conditional-n',
  },

  // ── Gemischt ───────────────────────────────────────────────────────────────

  W3: {
    /**
     * W3 (gemischteDeklination) Genitiv-Logik:
     *
     * Das Muster W3 umfasst zwei strukturell verschiedene Gruppen:
     *
     *   (a) Latein-/Fremdwörter auf -or, -ator: Gladiator, Inquisitor, Autor
     *       → sgl-gen msk: +s  (des Gladiators, des Autors)
     *       CSV-Plural endet auf -oren → klar erkennbar
     *
     *   (b) Einsilbige Neutra: Buch, Kettenhemd (mit Umlaut-Plural -er)
     *       → sgl-gen neu: +es (des Buches) oder +s (des Buchs) — beide akzeptiert
     *       Wir nehmen +es als konservative Form.
     *
     *   (c) Maskulina auf -ee (See): → sgl-gen: +s (des Sees)
     *
     * Entscheidungsregel: endet der Singular auf -or oder ist Genus msk → +s
     *                     sonst → +es
     */
    sglGen: (genus, stem) => {
      if (genus === 'fem') return '';
      if (genus === 'msk') return 's';   // Gladiator, See, Rapier (msk)
      return 'es';                        // Buch, Kettenhemd (neu)
    },
    pluDat: 'conditional-n',
  },

  // ── Sonderklassen ──────────────────────────────────────────────────────────

  fremdWort: {
    // Plural s-Form (Goblins, Tabus) — kein Dativ-n
    sglGen:    () => 's',
    pluDat:    'as-is',
  },

  eigenname: {
    // Eigennamen: im Kontext des Generators unveränderlich
    sglGen:    () => 's',
    pluDat:    'as-is',
  },

  substantiviertesAdjektiv: {
    // Wird separat via declineAdjective behandelt (kein eigenes Muster)
    sglGen:    () => '__adj__',
    pluDat:    'conditional-n',
  },
};

// ── _applyNounTable ────────────────────────────────────────────────────────────

/**
 * Wendet ein deklaratives Deklinationsmuster auf einen Nomen-Stamm an.
 *
 * Phase 7 (gegenüber Phase 6):
 *   Die Logik ist jetzt tabellen-gesteuert via DECLENSION_PATTERNS.
 *   Neue Muster (fremdWort, eigenname, W3) werden korrekt behandelt.
 *   Adjektiv-Elision bei -el-Stämmen ist implementiert.
 *
 * @param {'sgl'|'plu'}    numerus
 * @param {'nom'|'gen'|'dat'|'akk'} kasus
 * @param {'msk'|'fem'|'neu'} genus
 * @param {string}         rule     - z.B. 'starkeDeklination'
 * @param {string}         pattern  - z.B. 'S4', 'W1', 'fremdWort'
 * @param {string}         stem     - Singular- oder Plural-Stamm aus CSV
 * @returns {string}
 */
// ── Pattern-Key-Normalisierung (Phase 9) ──────────────────────────────────────

/**
 * Bekannte Schreibweisen-Abweichungen zwischen Editor und Generator.
 *
 * PROBLEM: Editor (declension-rules.js) exportiert `declinationPattern: 'eigenName'`
 * (camelCase). Generator (DECLENSION_PATTERNS) registriert `eigenname` (Kleinbuchstabe).
 * Ergebnis: Silent-Failure — _applyNounTable gibt Stamm unverändert + console.warn zurück.
 *
 * LÖSUNG: Normalisierung vor dem Lookup. Explizite Map statt blindem toLower(),
 * damit Groß-/Kleinschreibung in anderen Mustern (fremdWort, S1-S6) erhalten bleibt.
 */
const _PATTERN_ALIASES = new Map([
  ['eigenName',  'eigenname'],   // Editor → Generator
  ['fremdwort',  'fremdWort'],   // Defensiv: Kleinschreibungs-Variante
]);

function _normalizePattern(pattern) {
  return _PATTERN_ALIASES.get(pattern) ?? pattern;
}

export function _applyNounTable(numerus, kasus, genus, rule, pattern, stem) {
  // Phase 9: Schreibweisen-Alias vor Lookup auflösen
  const pat = DECLENSION_PATTERNS[_normalizePattern(pattern)];

  // Unbekanntes Muster → Stamm unverändert, mit Diagnose
  if (!pat) {
    const normalized = _normalizePattern(pattern);
    console.warn(
      `[noun-declension] Unbekanntes Deklinationsmuster "${pattern}"` +
      (normalized !== pattern ? ` (normalisiert: "${normalized}")` : '') +
      ` (Regel: "${rule}"). Stamm wird unverändert zurückgegeben.`,
    );
    return stem;
  }

  // ── n-Deklination (W1) ────────────────────────────────────────────────────
  if (pat.sglGen(genus) === '__weak__') {
    if (numerus === 'sgl' && kasus !== 'nom') {
      return _weakSuffix(stem);
    }
    // Plural + Dativ: conditional-n auf den Plural-Stamm
    if (numerus === 'plu' && kasus === 'dat') {
      return _conditionalN(stem);
    }
    return stem;
  }

  // ── Substantiviertes Adjektiv (deklarativ signalisiert, wird in declineNoun
  //    behandelt — hier als Fallback)
  if (pat.sglGen(genus) === '__adj__') {
    return stem;
  }

  // ── Singular ─────────────────────────────────────────────────────────────
  if (numerus === 'sgl') {
    if (kasus === 'gen' && (genus === 'msk' || genus === 'neu')) {
      return stem + pat.sglGen(genus, stem);
    }
    return stem;
  }

  // ── Plural + Dativ ────────────────────────────────────────────────────────
  if (kasus === 'dat') {
    if (pat.pluDat === 'conditional-n') return _conditionalN(stem);
    if (pat.pluDat === 'as-is')         return stem;
  }

  return stem;
}

/**
 * Schwache Deklination: Suffix für oblique Singular-Kasus.
 * Endet Stamm auf -e, -el, -er, -en → +n; sonst → +en.
 */
function _weakSuffix(stem) {
  if (_endsE(stem) || _endsEl(stem)) return stem + 'n';
  return stem + 'en';
}

/**
 * Konditionelles -n: +n wenn Stamm nicht auf n-Laut endet.
 * Deutsche Regel: Dativ Plural nie auf n+n (Tigern, nicht Tigernn).
 */
function _conditionalN(stem) {
  return stem.endsWith('n') ? stem : stem + 'n';
}

const _endsE  = (s) => s.endsWith('e');
const _endsEl = (s) => s.endsWith('el') || s.endsWith('er') || s.endsWith('en');

// ── declineNoun ────────────────────────────────────────────────────────────────

/**
 * Flektiert ein Nomen vollständig, inklusive Adjektiv-Attribut und Präfix/Suffix.
 *
 * Phase 7 Ergänzungen:
 *   - fremdWort / eigenname: kein plu-dat-n (as-is aus Muster)
 *   - Adjektiv -el-Elision: dunkel → dunkle (nicht dunkele)
 *
 * @param {'sgl'|'plu'|'tags'|'genus'} numerus
 * @param {'nom'|'gen'|'dat'|'akk'}    kasus
 * @param {'schwach'|'gemischt'|'stark'} attribute - Artikel-Typ → Adjektiv-Dekl.
 * @param {string}  singular
 * @param {string}  plural
 * @param {string}  adjective
 * @param {string}  prefix
 * @param {string}  suffix
 * @param {string}  gender            - CSV-Genus
 * @param {string}  declinationRule
 * @param {string}  declinationPattern
 * @param {string}  [tags]
 * @returns {string}
 */
export function declineNoun(
	numerus,
	kasus,
	attribute,
	singular,
	plural,
	adjective,
	prefix,
	suffix,
	gender,
	declinationRule,
	declinationPattern,
	tags,
) {
	const g = _normalizeGenus(gender ?? 'maskulinum');
	if (numerus === 'tags')  return tags ?? '';
	if (numerus === 'genus') return gender ?? '';

	const base = numerus === 'plu' ? plural : singular;

	let declined;
	if (declinationRule === 'substantiviertesAdjektiv') {
		// Substantiviertes Adjektiv: Stamm ist die Basis ohne trailing -e
		const stem = base.endsWith('e') ? base.slice(0, -1) : base;
		declined = declineAdjective(numerus, kasus, 'pos', attribute, g, stem);
	} else {
		declined = _applyNounTable(numerus, kasus, g, declinationRule, declinationPattern, base);
	}

	let adjStr = '';
	if (adjective && adjective.trim().length > 0) {
		const adjStem = _adjStem(adjective);
		adjStr = declineAdjective(numerus, kasus, 'pos', attribute, g, adjStem) + ' ';
	}

	return (prefix ? prefix + ' ' : '') + adjStr + declined + (suffix ? ' ' + suffix : '');
}

// ── _adjStem — Adjektiv-Stamm mit -el-Elision ─────────────────────────────────

/**
 * Bereitet den Adjektivstamm für die Flexion vor.
 *
 * Phase 9: Wird nur noch für Positiv-Formen aus CSV und für Adjektiv-Attribute
 * in declineNoun() aufgerufen. Komparativ/Superlativ kommen jetzt direkt aus
 * CSV — _adjStem() muss diese nur noch von einem trailing -e befreien (z.B.
 * 'anmutigste' → 'anmutigst' damit die Flexionsendung korrekt angehängt wird).
 *
 * ELISION bei -el: dunkel→dunkl, edel→edl
 * ELISION bei ausgewählten -er-Wörtern (_ER_ELISION): teuer→teur, sauer→saur
 */
function _adjStem(adjective) {
  const base = adjective.endsWith('e') ? adjective.slice(0, -1) : adjective;
  if (base.endsWith('el') && base.length > 2) {
    return base.slice(0, -2) + 'l';
  }
  if (_ER_ELISION.has(base)) {
    return base.replace(/e(r)$/, '$1');
  }
  return base;
}

// ── Hilfsfunktion ──────────────────────────────────────────────────────────────

/** Normalisiert CSV-Genus-Strings auf interne 3-Buchstaben-Form. */
function _normalizeGenus(g) {
	if (!g) return 'msk';
	const lc = g.toLowerCase();
	if (lc === 'maskulinum' || lc === 'msk' || lc === 'm') return 'msk';
	if (lc === 'femininum'  || lc === 'fem' || lc === 'f') return 'fem';
	if (lc === 'neutrum'    || lc === 'neu' || lc === 'n') return 'neu';
	return 'msk';
}
