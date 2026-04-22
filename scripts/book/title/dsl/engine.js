/**
 * engine.js  — Morphologie-DSL Engine (korrigierte Fassung)
 *
 * Korrekturen gegenüber Erstversion:
 *   1. resolveNOM(): fixedNumerus — wordData.number überschreibt Token-Numerus.
 *      Betrifft z.B. mountainRangeArray (number:'plural'/'singular').
 *   2. resolveNOM()/resolveADJ(): Meta-Numerus 'tags'/'genus' gibt Metafelder zurück.
 *   3. parseNOMToken()/parseADJToken(): _META_FLAGS erkannt; Render-Flags bei Meta-Numerus ignoriert.
 *   4. resolveNAM(): genus='rnd' löst zufälliges Geschlecht via generateRandomAuthorGender() auf.
 */
'use strict';

// ═══════════════════════════════════════════════════════════════════════════
// 1. MORPHOLOGIE
// ═══════════════════════════════════════════════════════════════════════════
function norm(str) {
	return typeof str === 'string' ? str.normalize('NFC') : str;
}

function normalizeGenus(genus) {
	switch (genus) {
		case 'maskulinum':
		case 'msk':
			return 'msk';
		case 'femininum':
		case 'fem':
			return 'fem';
		case 'neutrum':
		case 'neu':
			return 'neu';
		default:
			console.warn('[normalizeGenus] Unbekannt: "' + genus + '" → "msk"');
			return 'msk';
	}
}

function extractSlotIndex(key) {
	if (!key) return null;

	const match = key.match(/\d+$/);
	return match ? match[0] : null;
}

const _DEF = {
	sgl: {
		msk: {nom: 'der', gen: 'des', dat: 'dem', akk: 'den'},
		fem: {nom: 'die', gen: 'der', dat: 'der', akk: 'die'},
		neu: {nom: 'das', gen: 'des', dat: 'dem', akk: 'das'},
	},
	plu: {
		msk: {nom: 'die', gen: 'der', dat: 'den', akk: 'die'},
		fem: {nom: 'die', gen: 'der', dat: 'den', akk: 'die'},
		neu: {nom: 'die', gen: 'der', dat: 'den', akk: 'die'},
	},
};
function declineDefiniteArticle(n, k, g) {
	return _DEF[n]?.[normalizeGenus(g)]?.[k] ?? '';
}

const _IND = {
	msk: {nom: 'ein', gen: 'eines', dat: 'einem', akk: 'einen'},
	fem: {nom: 'eine', gen: 'einer', dat: 'einer', akk: 'eine'},
	neu: {nom: 'ein', gen: 'eines', dat: 'einem', akk: 'ein'},
};
function declineIndefiniteArticle(k, g) {
	return _IND[normalizeGenus(g)]?.[k] ?? '';
}

const _NEG_END = {
	sgl: {
		msk: {nom: '', gen: 'es', dat: 'em', akk: 'en'},
		fem: {nom: 'e', gen: 'er', dat: 'er', akk: 'e'},
		neu: {nom: '', gen: 'es', dat: 'em', akk: ''},
	},
	plu: {
		msk: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
		fem: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
		neu: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
	},
};
function declineNegativeArticle(n, k, g) {
	const end = _NEG_END[n]?.[normalizeGenus(g)]?.[k];
	return end !== undefined ? 'kein' + end : '';
}

const _STRONG_END = {
	sgl: {
		msk: {nom: 'er', gen: 'es', dat: 'em', akk: 'en'},
		fem: {nom: 'e', gen: 'er', dat: 'er', akk: 'e'},
		neu: {nom: 'es', gen: 'es', dat: 'em', akk: 'es'},
	},
	plu: {
		msk: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
		fem: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
		neu: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
	},
};
const _WEAK_ADJ_END = {
	sgl: {
		msk: {nom: 'e', gen: 'en', dat: 'en', akk: 'en'},
		fem: {nom: 'e', gen: 'en', dat: 'en', akk: 'e'},
		neu: {nom: 'e', gen: 'en', dat: 'en', akk: 'e'},
	},
	plu: {
		msk: {nom: 'en', gen: 'en', dat: 'en', akk: 'en'},
		fem: {nom: 'en', gen: 'en', dat: 'en', akk: 'en'},
		neu: {nom: 'en', gen: 'en', dat: 'en', akk: 'en'},
	},
};
const _MIXED_ADJ_END = {
	sgl: {
		msk: {nom: 'er', gen: 'en', dat: 'en', akk: 'en'},
		fem: {nom: 'e', gen: 'en', dat: 'en', akk: 'e'},
		neu: {nom: 'es', gen: 'en', dat: 'en', akk: 'es'},
	},
	plu: {
		msk: {nom: 'en', gen: 'en', dat: 'en', akk: 'en'},
		fem: {nom: 'en', gen: 'en', dat: 'en', akk: 'en'},
		neu: {nom: 'en', gen: 'en', dat: 'en', akk: 'en'},
	},
};

function declineAdjective(numerus, kasus, steigerung, attribute, genus, positiv) {
	const g = normalizeGenus(genus);
	const stem =
		steigerung === 'kom' ? positiv + 'er' : steigerung === 'sup' ? positiv + 'st' : positiv;
	const tbl =
		attribute === 'schwach'
			? _WEAK_ADJ_END
			: attribute === 'gemischt'
				? _MIXED_ADJ_END
				: _STRONG_END;
	return stem + (tbl[numerus]?.[g]?.[kasus] ?? '');
}

const _POSS_STEM_MAP = {
	p1sgl: 'mein',
	p2sgl: 'dein',
	p3sgl_msk: 'sein',
	p3sgl_fem: 'ihr',
	p3sgl_neu: 'sein',
	p1plu: 'unser',
	p2plu: 'euer',
	p3plu: 'ihr',
	p2form: 'Ihr',
};
function _selectPossessiveStem(person, oN, oG) {
	if (person === 'p2form') return _POSS_STEM_MAP.p2form;
	const bk = person + oN;
	if (bk === 'p3sgl') return _POSS_STEM_MAP['p3sgl_' + normalizeGenus(oG ?? 'msk')] ?? 'sein';
	return _POSS_STEM_MAP[bk] ?? 'mein';
}
function _appendEinEnding(stem, n, k, g) {
	const end = _NEG_END[n]?.[normalizeGenus(g)]?.[k];
	if (end === undefined) return stem;
	if (stem === 'euer' && end.length > 0 && end[0] === 'e') return 'eur' + end;
	return stem + end;
}
function declinePossessiveArticle(person, oN, oG, tN, tK, tG) {
	return _appendEinEnding(_selectPossessiveStem(person, oN, oG), tN, tK, tG);
}
const _DEM_ART_STEM_MAP = {
	dieser: 'dies',
	jener: 'jen',
	jeder: 'jed',
	mancher: 'manch',
	solcher: 'solch',
};
function declineDemonstrativeArticle(stemName, n, k, g) {
	return (
		(_DEM_ART_STEM_MAP[stemName] ?? stemName) + (_STRONG_END[n]?.[normalizeGenus(g)]?.[k] ?? '')
	);
}
function declineWArticle(n, k, g) {
	return 'welch' + (_STRONG_END[n]?.[normalizeGenus(g)]?.[k] ?? '');
}
const _QUANT_STEM_MAP = {
	alle: 'all',
	beide: 'beid',
	einige: 'einig',
	manche: 'manch',
	viele: 'viel',
	wenige: 'wenig',
	jeder: 'jed',
};
function declineQuantArticle(stemName, n, k, g) {
	return (
		(_QUANT_STEM_MAP[stemName] ?? stemName) + (_STRONG_END[n]?.[normalizeGenus(g)]?.[k] ?? '')
	);
}

function declineArticle(type, parsed, tN, tK, gen) {
	const num = tN ?? parsed.targetNumerus ?? 'sgl';
	const kas = tK ?? parsed.targetKasus ?? 'nom';
	switch (type) {
		case 'def':
			return declineDefiniteArticle(num, kas, gen);
		case 'ind':
			return declineIndefiniteArticle(kas, gen);
		case 'neg':
			return declineNegativeArticle(num, kas, gen);
		case 'poss':
			return declinePossessiveArticle(
				parsed.person,
				parsed.ownerNumerus,
				parsed.ownerGenus,
				num,
				kas,
				gen,
			);
		case 'dem':
			return declineDemonstrativeArticle(parsed.stem || 'dieser', num, kas, gen);
		case 'w':
			return declineWArticle(num, kas, gen);
		case 'quant':
			return declineQuantArticle(parsed.stem || 'alle', num, kas, gen);
		default:
			console.warn('[declineArticle] Unbekannt: "' + type + '"');
			return '';
	}
}

const _PERS = {
	p1sgl: {nom: 'ich', gen: 'meiner', dat: 'mir', akk: 'mich'},
	p2sgl: {nom: 'du', gen: 'deiner', dat: 'dir', akk: 'dich'},
	p3sgl_msk: {nom: 'er', gen: 'seiner', dat: 'ihm', akk: 'ihn'},
	p3sgl_fem: {nom: 'sie', gen: 'ihrer', dat: 'ihr', akk: 'sie'},
	p3sgl_neu: {nom: 'es', gen: 'seiner', dat: 'ihm', akk: 'es'},
	p1plu: {nom: 'wir', gen: 'unser', dat: 'uns', akk: 'uns'},
	p2plu: {nom: 'ihr', gen: 'euer', dat: 'euch', akk: 'euch'},
	p3plu: {nom: 'sie', gen: 'ihrer', dat: 'ihnen', akk: 'sie'},
	p2form: {nom: 'Sie', gen: 'Ihrer', dat: 'Ihnen', akk: 'Sie'},
};
function declinePersonalPronoun(person, n, k, g) {
	let key = person === 'p2form' ? 'p2form' : person + n;
	if (key === 'p3sgl') key = 'p3sgl_' + normalizeGenus(g ?? 'msk');
	return _PERS[key]?.[k] ?? '';
}
function declineReflexivePronoun(person, n, k) {
	const R = {
		p1sgl: {dat: 'mir', akk: 'mich'},
		p2sgl: {dat: 'dir', akk: 'dich'},
		p3sgl: {dat: 'sich', akk: 'sich'},
		p1plu: {dat: 'uns', akk: 'uns'},
		p2plu: {dat: 'euch', akk: 'euch'},
		p3plu: {dat: 'sich', akk: 'sich'},
		p2form: {dat: 'sich', akk: 'sich'},
	};
	return R[person === 'p2form' ? 'p2form' : person + n]?.[k] ?? '';
}
const _POSS_PRO_END = {
	sgl: {
		msk: {nom: 'er', gen: 'es', dat: 'em', akk: 'en'},
		fem: {nom: 'e', gen: 'er', dat: 'er', akk: 'e'},
		neu: {nom: 'es', gen: 'es', dat: 'em', akk: 'es'},
	},
	plu: {
		msk: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
		fem: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
		neu: {nom: 'e', gen: 'er', dat: 'en', akk: 'e'},
	},
};
function declinePossessivePronoun(person, oN, oG, tN, tK, tG) {
	const stem = _selectPossessiveStem(person, oN, oG),
		g = normalizeGenus(tG ?? 'msk'),
		end = _POSS_PRO_END[tN]?.[g]?.[tK] ?? '';
	if (stem === 'euer' && end.length > 0 && end[0] === 'e') return 'eur' + end;
	return stem + end;
}
const _DER_JENIGE = {
	sgl: {
		msk: {nom: 'derjenige', gen: 'desjenigen', dat: 'demjenigen', akk: 'denjenigen'},
		fem: {nom: 'diejenige', gen: 'derjenigen', dat: 'derjenigen', akk: 'diejenige'},
		neu: {nom: 'dasjenige', gen: 'desjenigen', dat: 'demjenigen', akk: 'dasjenige'},
	},
	plu: {
		msk: {nom: 'diejenigen', gen: 'derjenigen', dat: 'denjenigen', akk: 'diejenigen'},
		fem: {nom: 'diejenigen', gen: 'derjenigen', dat: 'denjenigen', akk: 'diejenigen'},
		neu: {nom: 'diejenigen', gen: 'derjenigen', dat: 'denjenigen', akk: 'diejenigen'},
	},
};
const _DER_SELBE = {
	sgl: {
		msk: {nom: 'derselbe', gen: 'desselben', dat: 'demselben', akk: 'denselben'},
		fem: {nom: 'dieselbe', gen: 'derselben', dat: 'derselben', akk: 'dieselbe'},
		neu: {nom: 'dasselbe', gen: 'desselben', dat: 'demselben', akk: 'dasselbe'},
	},
	plu: {
		msk: {nom: 'dieselben', gen: 'derselben', dat: 'denselben', akk: 'dieselben'},
		fem: {nom: 'dieselben', gen: 'derselben', dat: 'denselben', akk: 'dieselben'},
		neu: {nom: 'dieselben', gen: 'derselben', dat: 'denselben', akk: 'dieselben'},
	},
};
function declineDemonstrativePronoun(stemName, n, k, g) {
	const gg = normalizeGenus(g ?? 'msk');
	switch (stemName) {
		case 'dieser':
			return declineDemonstrativeArticle('dieser', n, k, gg);
		case 'jener':
			return declineDemonstrativeArticle('jener', n, k, gg);
		case 'derjenige':
			return _DER_JENIGE[n]?.[gg]?.[k] ?? '';
		case 'derselbe':
			return _DER_SELBE[n]?.[gg]?.[k] ?? '';
		default:
			return '';
	}
}
const _REL = {
	sgl: {
		msk: {nom: 'der', gen: 'dessen', dat: 'dem', akk: 'den'},
		fem: {nom: 'die', gen: 'deren', dat: 'der', akk: 'die'},
		neu: {nom: 'das', gen: 'dessen', dat: 'dem', akk: 'das'},
	},
	plu: {
		msk: {nom: 'die', gen: 'deren', dat: 'denen', akk: 'die'},
		fem: {nom: 'die', gen: 'deren', dat: 'denen', akk: 'die'},
		neu: {nom: 'die', gen: 'deren', dat: 'denen', akk: 'die'},
	},
};
function declineRelativePronoun(n, k, g) {
	return _REL[n]?.[normalizeGenus(g ?? 'msk')]?.[k] ?? '';
}
const _JEMAND = {nom: 'jemand', gen: 'jemandes', dat: 'jemandem', akk: 'jemanden'};
const _NIEMAND = {nom: 'niemand', gen: 'niemandes', dat: 'niemandem', akk: 'niemanden'};
function declineQuantPronoun(stemName, n, k, g) {
	if (stemName === 'jemand') return _JEMAND[k] ?? 'jemand';
	if (stemName === 'niemand') return _NIEMAND[k] ?? 'niemand';
	return declineQuantArticle(stemName, n, k, g);
}
function declinePronoun(type, parsed, n, k, g) {
	switch (type) {
		case 'pers':
			return declinePersonalPronoun(parsed.person, n, k, g);
		case 'poss':
			return declinePossessivePronoun(
				parsed.person,
				parsed.ownerNumerus,
				parsed.ownerGenus,
				n,
				k,
				g,
			);
		case 'refl':
			return declineReflexivePronoun(parsed.person, n, k);
		case 'dem':
			return declineDemonstrativePronoun(parsed.stem || 'dieser', n, k, g);
		case 'rel':
			return declineRelativePronoun(n, k, g);
		case 'quant':
			return declineQuantPronoun(parsed.stem || 'alle', n, k, g);
		default:
			return '';
	}
}

/**
 * Dekliniert ein Nomen.
 * numerus='tags'  → gibt tags zurück (kein Deklinieren)
 * numerus='genus' → gibt gender zurück (kein Deklinieren)
 */
function declineNoun(
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
	const g = normalizeGenus(gender ?? 'maskulinum');
	if (numerus === 'tags') return tags ?? '';
	if (numerus === 'genus') return gender ?? '';
	const base = numerus === 'plu' ? plural : singular;
	let declined;
	if (declinationRule === 'substantiviertesAdjektiv') {
		let stem = base;

		// wichtig: nur ein finales -e entfernen (typisch für substantivierte Adjektive)
		if (stem.endsWith('e')) {
			stem = stem.slice(0, -1);
		}

		declined = declineAdjective(numerus, kasus, 'pos', attribute, g, stem);
	} else {
		declined = _applyNounTable(numerus, kasus, g, declinationRule, declinationPattern, base);
	}
	let adjStr = '';
	if (adjective && adjective.trim().length > 0) {
		adjStr =
			declineAdjective(numerus, kasus, 'pos', attribute, g, adjective.replace(/e$/, '')) +
			' ';
	}
	return (prefix ? prefix + ' ' : '') + adjStr + declined + (suffix ? ' ' + suffix : '');
}
function _applyNounTable(numerus, kasus, genus, rule, pattern, stem) {
	const eE = (s) => s.endsWith('e');
	const eN = (s) => s.endsWith('n');
	const eSXZ = (s) => /[sxzß]$/.test(s);
	// Stämme auf -el/-er/-en erhalten das kurze Suffix -n statt -en (z.B. Bauer→Bauern)
	const eShortSuffix = (s) => s.endsWith('el') || s.endsWith('er') || s.endsWith('en');

	// Stark: Dativ Plural bekommt +n, sofern noch nicht vorhanden
	if (numerus === 'plu' && kasus === 'dat' && rule === 'starkeDeklination')
		return eN(stem) ? stem : stem + 'n';

	if (rule === 'schwacheDeklination') {
		// W2: Feminina — Singular ist immer unverändert; Plural verwendet den Datensatz direkt
		if (pattern === 'W2') return stem;

		// W1: Maskuline N-Deklination — Singular (außer Nom.) bekommt -(e)n
		if (numerus === 'sgl' && kasus !== 'nom') {
			if (eE(stem)) return stem + 'n'; // Hase  → Hasen
			if (eShortSuffix(stem)) return stem + 'n'; // Bauer → Bauern, Sockel → Sockeln
			return stem + 'en'; // Mensch → Menschen
		}
		return stem;
	}

	if (
		numerus === 'sgl' &&
		kasus === 'gen' &&
		(genus === 'msk' || genus === 'neu') &&
		rule === 'starkeDeklination'
	)
		return pattern === 'S2' || pattern === 'S4' ? stem + 'es' : stem + 's';

	// if (rule === 'eigenname' && kasus === 'gen') return eSXZ(stem) ? stem + "'" : stem + 's';

	if (rule === 'gemischteDeklination' && pattern === 'W4' && kasus === 'dat') {
		if (eE(stem)) return stem + 'n';
		if (eN(stem)) return stem;
		return stem + 'en';
	}

	return stem;
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. NORMALIZER
// ═══════════════════════════════════════════════════════════════════════════

const _FLAG_NORMALIZE_MAP = {
	slg: 'sgl',
	sng: 'sgl',
	sing: 'sgl',
	singular: 'sgl',
	pl: 'plu',
	pull: 'plu',
	plural: 'plu',
	pluural: 'plu',
	nominativ: 'nom',
	genitiv: 'gen',
	dativ: 'dat',
	akkusativ: 'akk',
	m: 'msk',
	maskulin: 'msk',
	maskulinum: 'msk',
	f: 'fem',
	feminin: 'fem',
	femininum: 'fem',
	n: 'neu',
	neutrum: 'neu',
};
const _VARIABLE_PATTERN = /^\p{Lu}\p{L}+[0-9]+$/u;
function _isVariable(flag) {
	return _VARIABLE_PATTERN.test(flag);
}
function normalizeFlag(flag) {
	if (_isVariable(flag)) return flag;
	const lower = flag.toLowerCase();
	const norm = _FLAG_NORMALIZE_MAP[lower];
	return norm !== undefined && norm !== lower ? norm : flag;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. PARSER
// ═══════════════════════════════════════════════════════════════════════════

const _NUMERUS_FLAGS = new Set(['sgl', 'plu']);
const _KASUS_FLAGS = new Set(['nom', 'gen', 'dat', 'akk']);
const _ARTIKEL_FLAGS = new Set(['def', 'ind', 'neg', '-']);
const _GENUS_FLAGS = new Set(['msk', 'fem', 'neu']);
const _PERSON_FLAGS = new Set(['p1', 'p2', 'p3', 'p2form']);
const _STEIGERUNG_FLAGS = new Set(['pos', 'kom', 'sup']);
// Meta-Flags: kein Deklinieren, direkter Datenzugriff
const _META_FLAGS = new Set(['tags', 'genus']);

const _KNOWN_DEM_PRO_STEMS = new Set(['dieser', 'jener', 'derjenige', 'derselbe']);
const _KNOWN_QUANT_STEMS = new Set([
	'alle',
	'beide',
	'einige',
	'manche',
	'viele',
	'wenige',
	'jeder',
	'jemand',
	'niemand',
]);
const _KNOWN_DEM_ART_STEMS = new Set(['dieser', 'jener', 'jeder', 'mancher', 'solcher']);
const _KNOWN_VOLK_VALUES = new Set([
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

const _KNOWN_REGION_VALUES = new Set([
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

function tokenize(template) {
	const result = [];
	let i = 0;
	while (i < template.length) {
		if (template[i] === '{') {
			const end = template.indexOf('}', i);
			if (end === -1) {
				result.push({type: 'literal', text: template.slice(i)});
				break;
			}
			const raw = template.slice(i + 1, end);
			let mod = null,
				next = end + 1;
			if (template[next] === '^' || template[next] === '_') {
				mod = template[next];
				next++;
			}
			result.push({type: 'token', raw, mod});
			i = next;
		} else {
			const nb = template.indexOf('{', i);
			result.push({
				type: 'literal',
				text: nb === -1 ? template.slice(i) : template.slice(i, nb),
			});
			i = nb === -1 ? template.length : nb;
		}
	}
	return result;
}

/**
 * parseNOMToken
 * KORREKTUR: _META_FLAGS erkannt. Render-Flags werden bei Meta-Numerus übersprungen.
 */
function parseNOMToken(rawInner) {
	const parts = rawInner.split('|');
	const rawLemma = parts[0].split(':')[1];

	const lemma = norm(rawLemma);

	const flags = parts.slice(1);

	const token = {
		type: 'NOM',
		lemma,
		numerus: 'sgl',
		kasus: 'nom',
		art: 'def',
		renderArticle: false,
		renderOverride: null,
	};

	const renderIdx = _findRenderFlagIdx(flags);
	const morphFlags = renderIdx === -1 ? flags : flags.slice(0, renderIdx);

	for (const raw of morphFlags) {
		const f = normalizeFlag(raw);

		if (_META_FLAGS.has(f)) {
			token.numerus = f;
			continue;
		}
		if (_NUMERUS_FLAGS.has(f)) {
			token.numerus = f;
			continue;
		}
		if (_KASUS_FLAGS.has(f)) {
			token.kasus = f;
			continue;
		}
		if (_ARTIKEL_FLAGS.has(f)) {
			token.art = f;
			continue;
		}
		if (f !== '') console.warn('[NOM] Unbekannter Flag:', f);
	}

	if (renderIdx !== -1 && !_META_FLAGS.has(token.numerus)) {
		const renderFlags = flags.slice(renderIdx);
		const firstFlag = renderFlags[0];

		if (firstFlag === 'art') {
			token.renderArticle = true;
		} else {
			const renderRaw = renderFlags.join('|');
			const renderType = firstFlag.split(':')[0];

			if (renderType === 'ART') token.renderOverride = parseARTToken(renderRaw);
			else if (renderType === 'PRO') token.renderOverride = parsePROToken(renderRaw);
		}
	}

	return token;
}

function parseARTToken(rawInner) {
	const parts = rawInner.split('|'),
		subtype = parts[0].split(':')[1],
		flags = parts.slice(1);
	const token = {
		type: 'ART',
		subtype,
		variable: null,
		person: 'p1',
		ownerNumerus: 'sgl',
		ownerGenus: 'msk',
		targetNumerus: 'sgl',
		targetKasus: 'nom',
		targetGenus: null,
		stem: '',
	};
	if (subtype === 'poss') {
		let oNS = false,
			oGS = false,
			tP = false;
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				token.variable = f;
				continue;
			}
			if (_PERSON_FLAGS.has(f)) {
				token.person = f;
				continue;
			}
			if (_KASUS_FLAGS.has(f)) {
				token.targetKasus = f;
				tP = true;
				continue;
			}
			if (_NUMERUS_FLAGS.has(f)) {
				if (!oNS) {
					token.ownerNumerus = f;
					oNS = true;
				} else {
					token.targetNumerus = f;
					tP = true;
				}
				continue;
			}
			if (_GENUS_FLAGS.has(f)) {
				if (!tP && !oGS && token.person === 'p3') {
					token.ownerGenus = f;
					oGS = true;
				} else {
					token.targetGenus = f;
					tP = true;
				}
				continue;
			}
		}
	} else {
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				token.variable = f;
				continue;
			}
			if (_NUMERUS_FLAGS.has(f)) {
				token.targetNumerus = f;
				continue;
			}
			if (_KASUS_FLAGS.has(f)) {
				token.targetKasus = f;
				continue;
			}
			if (_GENUS_FLAGS.has(f)) {
				token.targetGenus = f;
				continue;
			}
			if (_KNOWN_DEM_ART_STEMS.has(f)) {
				token.stem = f;
				continue;
			}
			if (_KNOWN_QUANT_STEMS.has(f)) {
				token.stem = f;
				continue;
			}
		}
	}
	return token;
}

function parsePROToken(rawInner) {
	const parts = rawInner.split('|'),
		subtype = parts[0].split(':')[1],
		flags = parts.slice(1);
	const token = {
		type: 'PRO',
		subtype,
		variable: null,
		person: 'p1',
		ownerNumerus: 'sgl',
		ownerGenus: 'msk',
		numerus: 'sgl',
		kasus: 'nom',
		genus: null,
		stem: '',
	};
	if (subtype === 'pers' || subtype === 'refl') {
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				token.variable = f;
				continue;
			}
			if (_PERSON_FLAGS.has(f)) {
				token.person = f;
				continue;
			}
			if (_NUMERUS_FLAGS.has(f)) {
				token.numerus = f;
				continue;
			}
			if (_KASUS_FLAGS.has(f)) {
				token.kasus = f;
				continue;
			}
			if (_GENUS_FLAGS.has(f)) {
				token.genus = f;
				continue;
			}
		}
	} else if (subtype === 'poss') {
		let oNS = false,
			oGS = false,
			tP = false;
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				token.variable = f;
				continue;
			}
			if (_PERSON_FLAGS.has(f)) {
				token.person = f;
				continue;
			}
			if (_KASUS_FLAGS.has(f)) {
				token.kasus = f;
				tP = true;
				continue;
			}
			if (_NUMERUS_FLAGS.has(f)) {
				if (!oNS) {
					token.ownerNumerus = f;
					oNS = true;
				} else {
					token.numerus = f;
					tP = true;
				}
				continue;
			}
			if (_GENUS_FLAGS.has(f)) {
				if (!tP && !oGS && token.person === 'p3') {
					token.ownerGenus = f;
					oGS = true;
				} else {
					token.genus = f;
					tP = true;
				}
				continue;
			}
		}
	} else {
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				token.variable = f;
				continue;
			}
			if (_NUMERUS_FLAGS.has(f)) {
				token.numerus = f;
				continue;
			}
			if (_KASUS_FLAGS.has(f)) {
				token.kasus = f;
				continue;
			}
			if (_GENUS_FLAGS.has(f)) {
				token.genus = f;
				continue;
			}
			if (_KNOWN_DEM_PRO_STEMS.has(f)) {
				token.stem = f;
				continue;
			}
			if (_KNOWN_QUANT_STEMS.has(f)) {
				token.stem = f;
				continue;
			}
		}
	}
	return token;
}

/**
 * parseADJToken
 * KORREKTUR: _META_FLAGS erkannt ('tags' → Meta-Numerus).
 */
function parseADJToken(rawInner) {
	const parts = rawInner.split('|'),
		lemma = parts[0].split(':')[1],
		flags = parts.slice(1);
	const token = {
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
		if (_META_FLAGS.has(f)) {
			token.numerus = f;
			continue;
		}
		if (_NUMERUS_FLAGS.has(f)) {
			token.numerus = f;
			continue;
		}
		if (_KASUS_FLAGS.has(f)) {
			token.kasus = f;
			continue;
		}
		if (_GENUS_FLAGS.has(f)) {
			token.genus = f;
			continue;
		}
		if (_ARTIKEL_FLAGS.has(f)) {
			token.art = f;
			continue;
		}
		if (_STEIGERUNG_FLAGS.has(f)) {
			token.steigerung = f;
			continue;
		}
	}
	return token;
}

function parseCOMToken(rawInner) {
	const parts = rawInner.split('|'),
		lemma = parts[0].split(':')[1],
		flags = parts.slice(1);
	const token = {type: 'COM', lemma, fugaTyp: null};
	for (const raw of flags) {
		const f = normalizeFlag(raw);
		if (f === 'gen' || f === 'plu' || f === 'auto') token.fugaTyp = f;
	}
	return token;
}

/**
 * parseNAMToken
 * KORREKTUR: Standardgenus ist 'rnd' (resolveNAM löst es zufällig auf).
 */
function parseNAMToken(rawInner) {
	const parts = rawInner.split('|'),
		subtype = parts[0].split(':')[1],
		flags = parts.slice(1);
	const token = {type: 'NAM', subtype, volk: 'rnd', genus: 'rnd', kasus: 'nom'};
	for (const f of flags) {
		if (_KASUS_FLAGS.has(normalizeFlag(f))) {
			token.kasus = normalizeFlag(f);
			continue;
		}
		if (f === 'msk' || f === 'fem') {
			token.genus = f;
			continue;
		}
		if (f.startsWith('ref:')) {
			token.ref = f.split(':')[1];
			continue;
		}
		if (_KNOWN_VOLK_VALUES.has(f)) {
			token.volk = f;
			continue;
		}
		if (_KNOWN_REGION_VALUES.has(f) || f === 'rnd') {
			token.region = f;
			continue;
		}
	}
	return token;
}

function parseFUNToken(rawInner) {
	const parts = rawInner.split('|');
	return {type: 'FUN', fn: parts[0].split(':')[1], arg: parts.slice(1).join('|') || null};
}

function parseToken(rawInner, mod) {
	const ci = rawInner.indexOf(':');
	if (ci === -1) return {type: 'UNKNOWN', raw: rawInner, mod: mod ?? null};
	let token;
	switch (rawInner.slice(0, ci)) {
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
		default:
			console.warn('[parseToken] Unbekannter Typ: "' + rawInner.slice(0, ci) + '"');
			token = {type: 'UNKNOWN', raw: rawInner};
	}
	token.mod = mod ?? null;
	return token;
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. RESOLVER
// ═══════════════════════════════════════════════════════════════════════════

function resolveGenus(parsed, contextGenus, variableMap) {
	if (parsed.variable) {
		const entry = (variableMap ?? {})[parsed.variable];
		if (entry?.gender) return normalizeGenus(entry.gender);
		console.warn('[resolveGenus] Variable nicht gefunden: "' + parsed.variable + '"');
	}
	if (contextGenus) return normalizeGenus(contextGenus);
	if (parsed.targetGenus) return normalizeGenus(parsed.targetGenus);
	if (parsed.genus) return normalizeGenus(parsed.genus);
	return 'msk';
}

function mapArtFlagToAttribute(artFlag) {
	if (artFlag === 'def') return 'schwach';
	if (artFlag === 'ind' || artFlag === 'neg') return 'gemischt';
	return 'stark';
}
function mapArtFlagToArticleStr(artFlag, n, k, g, renderArticle) {
	if (!renderArticle) return '';
	if (artFlag === 'def') return declineDefiniteArticle(n, k, g);
	if (artFlag === 'ind') return declineIndefiniteArticle(k, g);
	if (artFlag === 'neg') return declineNegativeArticle(n, k, g);
	return '';
}
function resolveRenderOverride(override, cN, cK, cG, variableMap) {
	const gen = resolveGenus(override, cG, variableMap);
	if (override.type === 'ART') return declineArticle(override.subtype, override, cN, cK, gen);
	if (override.type === 'PRO') return declinePronoun(override.subtype, override, cN, cK, gen);
	return '';
}

/**
 * resolveNOM
 * KORREKTUREN:
 *   1. Meta-Numerus 'tags'/'genus': Sofortrückgabe ohne Deklination.
 *   2. fixedNumerus: wordData.number überschreibt token.numerus.
 *      Normalisiert 'plural'→'plu', 'singular'→'sgl' via normalizeFlag().
 *      Ermöglicht z.B. mountainRangeArray-Einträge mit number:'plural' immer
 *      im Plural zu rendern, unabhängig vom Token-Numerus.
 */
function resolveNOM(token, activeSettings, variableMap) {
	let wordData;

	// NORMALISIERUNG
	const lemmaKey = norm(token.lemma);

	if (_isVariable(lemmaKey) && variableMap?.[lemmaKey]) {
		wordData = variableMap[lemmaKey];
	} else {
		const entry = LEMMA_MAP[lemmaKey];
		if (!entry) {
			console.warn('[resolveNOM] Unbekanntes Lemma:', {
				original: token.lemma,
				normalized: lemmaKey,
				availableKeys: Object.keys(LEMMA_MAP),
				variableKeys: variableMap ? Object.keys(variableMap) : [],
			});
			return '[' + token.lemma + '?]';
		}
		wordData = selectRandom(entry.arrays, activeSettings);
	}

	if (!wordData) {
		console.warn('[resolveNOM] Keine Daten für:', lemmaKey);
		return '[' + token.lemma + '?]';
	}

	// Meta-Numerus
	if (token.numerus === 'tags') return wordData.tags ?? '';
	if (token.numerus === 'genus') return wordData.gender ?? '';

	const effectiveNumerus = wordData.number ? normalizeFlag(wordData.number) : token.numerus;

	const genus = normalizeGenus(wordData.gender ?? 'maskulinum');
	const attribute = mapArtFlagToAttribute(token.art);

	const articleStr = token.renderOverride
		? resolveRenderOverride(
				token.renderOverride,
				effectiveNumerus,
				token.kasus,
				genus,
				variableMap,
			)
		: mapArtFlagToArticleStr(
				token.art,
				effectiveNumerus,
				token.kasus,
				genus,
				token.renderArticle,
			);

	const declined = declineNoun(
		effectiveNumerus,
		token.kasus,
		attribute,
		wordData.singular,
		wordData.plural,
		wordData.adjective ?? '',
		wordData.prefix ?? '',
		wordData.suffix ?? '',
		wordData.gender,
		wordData.declinationRule,
		wordData.declinationPattern,
		wordData.tags,
	);

	return articleStr ? articleStr + ' ' + declined : declined;
}

function resolveART(token, variableMap) {
	return declineArticle(
		token.subtype,
		token,
		token.targetNumerus,
		token.targetKasus,
		resolveGenus(token, null, variableMap),
	);
}
function resolvePRO(token, variableMap) {
	return declinePronoun(
		token.subtype,
		token,
		token.numerus,
		token.kasus,
		resolveGenus(token, null, variableMap),
	);
}

/**
 * resolveADJ
 * KORREKTUR: Meta-Numerus 'tags' gibt tags des Adjektiv-Datums zurück.
 */
function resolveADJ(token, variableMap) {
	const entry = LEMMA_MAP[token.lemma];
	if (token.numerus === 'tags') {
		if (entry && entry.type === 'adj') {
			const wd = selectRandom(entry.arrays, []);
			return wd?.tags ?? '';
		}
		return '';
	}
	let positiv;
	if (entry && entry.type === 'adj') {
		const wd = selectRandom(entry.arrays, []);
		positiv = wd ? (wd.positive ?? wd.positiv ?? token.lemma) : token.lemma;
	} else positiv = token.lemma;
	return declineAdjective(
		token.numerus,
		token.kasus,
		token.steigerung,
		mapArtFlagToAttribute(token.art),
		token.genus,
		positiv,
	);
}

function resolveCOM(token, activeSettings, variableMap) {
	let wordData;
	if (_isVariable(token.lemma) && variableMap?.[token.lemma]) {
		wordData = variableMap[token.lemma];
	} else {
		const entry = LEMMA_MAP[token.lemma];
		if (!entry) {
			console.warn('[resolveCOM] Unbekannt: "' + token.lemma + '"');
			return '[' + token.lemma + '?]';
		}
		wordData = selectRandom(entry.arrays, activeSettings);
	}
	if (!wordData) return '[' + token.lemma + '?]';
	if (token.fugaTyp === 'auto') return _resolveAutoKomposition(wordData);
	if (!token.fugaTyp) return wordData.singular;
	if (token.fugaTyp === 'plu')
		return declineNoun(
			'plu',
			'nom',
			'stark',
			wordData.singular,
			wordData.plural,
			'',
			'',
			'',
			wordData.gender,
			wordData.declinationRule,
			wordData.declinationPattern,
		);
	if (token.fugaTyp === 'gen')
		return declineNoun(
			'sgl',
			'gen',
			'stark',
			wordData.singular,
			wordData.plural,
			'',
			'',
			'',
			wordData.gender,
			wordData.declinationRule,
			wordData.declinationPattern,
		);
	return wordData.singular;
}

/** Fugenselektion — vollständige Übernahme aus compoundWords.js (Sprint 7). */
function _resolveAutoKomposition(w) {
	const s = w.singular ?? '',
		rule = w.declinationRule ?? '';
	let compound;
	if (
		(rule === 'schwacheDeklination' || rule === 'gemischteDeklination') &&
		!s.endsWith('vent')
	) {
		compound = w.plural ?? s;
	} else if (rule === 'substantiviertesAdjektiv') {
		compound = (w.plural ?? s) + 'n';
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
		compound = s + 's';
	} else {
		compound = s;
	}
	compound = compound.replace(/\s/g, '-');
	return compound.charAt(0).toUpperCase() + compound.slice(1);
}

function resolveReference(value) {
	if (nameContextStore[value]) {
		return nameContextStore[value];
	}
	return null;
}

const nameContextStore = {};

// function getOrCreateNameContext(token) {
// 	const slotIndex = extractSlotIndex(token.key);

// 	if (!slotIndex) return createFreshContext(token);

// 	// Falls bereits vorhanden → wiederverwenden
// 	if (nameContextStore[slotIndex]) {
// 		return nameContextStore[slotIndex];
// 	}

// 	// Sonst neu erzeugen
// 	const context = createFreshContext(token);

// 	nameContextStore[slotIndex] = context;

// 	return context;
// }

/**
 * Gibt den gespeicherten Kontext für einen NAM-Slot zurück oder erstellt ihn neu.
 *
 * Beim ersten Auftreten eines Slots (z.B. "Vorname1") innerhalb eines render()-Aufrufs
 * wird ein frischer Kontext per createFreshContext() angelegt und gespeichert.
 * Nachname-Tokens können über ref: auf denselben Slot verweisen und erhalten so
 * identische Rasse + Region → konsistentes Namenspaar.
 */
function getOrCreateNameContext(token) {
	const key = token.subtype; // z.B. "Vorname1"
	if (!nameContextStore[key]) {
		nameContextStore[key] = createFreshContext(token);
	}
	return nameContextStore[key];
}

function mapGenusToGender(genus) {
	if (genus === 'fem') return 'weiblich';
	if (genus === 'neu') return 'nicht-binär';
	return 'männlich'; // msk + fallback
}

function createFreshContext(token) {
	const gender =
		token.genus === 'rnd' ? generateRandomAuthorGender() : mapGenusToGender(token.genus);
	const race = token.volk === 'rnd' ? generateRandomAuthorRace() : token.volk;
	const region = token.region === 'rnd' ? generateRandomAuthorRegion() : token.region;
	return {gender, race, region};
}

/**
 * resolveNAM
 * KORREKTUR: genus='rnd' → zufälliges Geschlecht via generateRandomAuthorGender().
 * Fallback: 50/50 wenn Funktion nicht verfügbar.
 */
// function resolveNAM(token) {
// 	let gender;
// 	const kasus = token.kasus;

// 	if (token.genus === 'rnd') {
// 		gender =
// 			typeof generateRandomAuthorGender === 'function'
// 				? generateRandomAuthorGender()
// 				: Math.random() < 0.5
// 					? 'männlich'
// 					: 'weiblich';
// 	} else {
// 		gender = token.genus === 'fem' ? 'weiblich' : 'männlich';
// 	}

// 	const race = token.volk === 'rnd' ? generateRandomAuthorRace() : token.volk;

// 	let region;
// 	if (token.region === 'rnd') {
// 		const rndRegion =
// 			typeof generateRandomAuthorRegion === 'function'
// 				? generateRandomAuthorRegion()
// 				: undefined;

// 		region = rndRegion ?? 'Default-Region'; // oder sinnvoller Wert
// 	} else {
// 		region = token.region;
// 	}

// 	//console.log('INPUT →', {gender, race, region});

// 	const name = generateRandomAuthorFirstName(gender, race, region);
// 	const eSXZ = (s) => /[sxzß]$/.test(s);
// 	if (kasus === 'gen') return eSXZ(name) ? name + "'" : name + 's';
// 	// console.log('OUTPUT →', name);

// 	return name ?? '[Vorname?]';

// 	if (typeof generateRandomAuthorFirstName === 'function' && token.subtype === 'Vorname') {
// 		try {
// 			return generateRandomAuthorFirstName(gender, race, region) ?? '[Vorname?]';
// 		} catch (e) {
// 			return '[Vorname?]';
// 		}
// 	}
// 	if (typeof generateRandomAuthorLastName === 'function' && token.subtype === 'Nachname') {
// 		const race = token.volk === 'rnd' ? undefined : token.volk;
// 		try {
// 			return generateRandomAuthorLastName(race, region) ?? '[Nachname?]';
// 		} catch (e) {
// 			return '[Nachname?]';
// 		}
// 	}
// 	return '[' + token.subtype + '?]';
// }

// function resolveNAM(token) {
// 	const {gender, race, region} = getOrCreateNameContext(token);

// 	const kasus = token.kasus;

// 	let name;
// 	console.log('token:', token);

// 	if (token.subtype.startsWith('Vorname')) {
// 		try {
// 			name = generateRandomAuthorFirstName(gender, race, region);
// 		} catch {
// 			return '[Vorname?]';
// 		}
// 	}

// 	if (token.subtype.startsWith('Nachname')) {
// 		try {
// 			name = generateRandomAuthorLastName(race, region);
// 		} catch {
// 			return '[Nachname?]';
// 		}
// 	}

// 	if (!name) return `[${token.subtype}?]`;

// 	if (!name) {
// 		console.warn('Name fehlgeschlagen:', {gender, race, region});
// 		name = generateRandomAuthorFirstName(gender, race, 'germanisch') || 'Unbekannt';
// 	}

// 		// Kasus-Handling
// 	const eSXZ = (s) => /[sxzß]$/.test(s);
// 	if (kasus === 'gen') return eSXZ(name) ? name + "'" : name + 's';

// 	console.log('NAM DEBUG:', {
// 		subtype: token.subtype,
// 		gender,
// 		race,
// 		region,
// 	});

// 	console.log('NAME RESULT:', name, 'Volk:', race, 'Region:', region);
// 	return name;
// }

// function resolveNAM(token) {
// 	let context;

// 	// Prüfe ob Referenz
// 	const ref = resolveReference(token.volk);

// 	if (ref) {
// 		context = ref;
// 	} else {
// 		context = getOrCreateNameContext(token);
// 	}

// 	const {gender, race, region} = context;

// 	let name;

// 	if (token.subtype.startsWith('Vorname')) {
// 		name = generateRandomAuthorFirstName(gender, race, region);
// 	} else if (token.subtype.startsWith('Nachname')) {
// 		name = generateRandomAuthorLastName(race, region);
// 	}

// 	return name || `[${token.subtype}?]`;
// }

function resolveNAM(token) {
	let context;
	const kasus = token.kasus;

	if (token.ref && nameContextStore[token.ref]) {
		context = nameContextStore[token.ref];
	} else {
		context = getOrCreateNameContext(token);
	}

	const {gender, race, region} = context;
	console.log('resolveNAM Kontext:', 'gender', gender, 'race', race, 'region', region, 'kasus', kasus);
	let name;

	if (token.subtype.startsWith('Vorname')) {
		name = generateRandomAuthorFirstName(gender, race, region);
		console.log('resolveNAM Vorname:', 'name', name, 'race', race, 'region', region, 'gender', gender,'kasus', kasus);
	} else if (token.subtype.startsWith('Nachname')) {
		name = generateRandomAuthorLastName(race, region, gender);
		console.log('resolveNAM Nachname:', 'name', name, 'race', race, 'region', region, 'gender', gender, 'kasus', kasus);
	}

	// Kasus-Handling
	const eSXZ = (s) => /[sxzß]$/.test(s);
	if (kasus === 'gen') return eSXZ(name) ? name + "'" : name + 's';

	return name || `[${token.subtype}?]`;
}

function resolveFUN(fn, arg) {
	const offset = arg ? parseInt(arg, 10) || 0 : 0;
	switch (fn) {
		case 'd4':
			return String(Math.floor(Math.random() * 4) + 1 + offset);
		case 'd6':
			return String(Math.floor(Math.random() * 6) + 1 + offset);
		case 'd8':
			return String(Math.floor(Math.random() * 8) + 1 + offset);
		case 'd10':
			return String(Math.floor(Math.random() * 10) + 1 + offset);
		case 'd12':
			return String(Math.floor(Math.random() * 12) + 1 + offset);
		case 'd20':
			return String(Math.floor(Math.random() * 20) + 1 + offset);
		default:
			console.warn('[resolveFUN] Unbekannte Funktion: "' + fn + '"');
			return '';
	}
}

function resolveToken(token, activeSettings, variableMap) {
	let result;
	switch (token.type) {
		case 'NOM':
			result = resolveNOM(token, activeSettings, variableMap);
			break;
		case 'ART':
			result = resolveART(token, variableMap);
			break;
		case 'PRO':
			result = resolvePRO(token, variableMap);
			break;
		case 'ADJ':
			result = resolveADJ(token, variableMap);
			break;
		case 'COM':
			result = resolveCOM(token, activeSettings, variableMap);
			break;
		case 'NAM':
			result = resolveNAM(token);
			break;
		case 'FUN':
			result = resolveFUN(token.fn, token.arg);
			break;
		default:
			console.warn('[resolveToken] Unbekannter Typ: "' + token.type + '"');
			result = '[?' + token.type + ']';
	}
	if (token.mod === '^' && result) return result.charAt(0).toUpperCase() + result.slice(1);
	if (token.mod === '_' && result) return result.toLowerCase();
	return result;
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. ENGINE-CORE — LEMMA_MAP, selectRandom, render
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Verbindet DSL-Lemma-Bezeichner mit den zugehörigen Datenarrays.
 * Wird zur Laufzeit durch data.js befüllt.
 * @type {Object.<string, {type:string, arrays:Array}>}
 */
const LEMMA_MAP = {};

/**
 * Wählt einen zufälligen Eintrag aus einem Array, gefiltert nach activeSettings.
 * Wenn nach Filterung nichts übrig bleibt, wird ungefiltert gewählt.
 */
function selectRandom(arr, activeSettings) {
	if (!Array.isArray(arr) || arr.length === 0) return null;
	const settings = activeSettings && activeSettings.length > 0 ? activeSettings : ['Universal'];
	const filtered = arr.filter((e) => !e.campaignSetting || settings.includes(e.campaignSetting));
	const pool = filtered.length > 0 ? filtered : arr;
	return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Hauptfunktion: Rendert ein DSL-Template zu einem deutschen String.
 *
 * @param {string}   template         DSL-Template-String
 * @param {object}   [variableMap]    Vorgebundene Wortdaten (z. B. {Volk1: {...}})
 * @param {string[]} [activeSettings] Aktive Campaign-Settings
 * @returns {string}
 */
function render(template, variableMap, activeSettings) {
	// Store vor jedem neuen Template zurücksetzen, damit jeder Titel
	// einen eigenen Namens-Kontext erhält (Vorname1/Nachname1 pro Titel).
	Object.keys(nameContextStore).forEach((k) => delete nameContextStore[k]);
	const vMap = variableMap ?? {};
	const settings = activeSettings ?? ['Universal'];
	const elements = tokenize(template);
	const parts = [];
	for (const el of elements) {
		if (el.type === 'literal') {
			parts.push(el.text);
		} else {
			parts.push(resolveToken(parseToken(el.raw, el.mod), settings, vMap));
		}
	}
	return parts.join('');
}
