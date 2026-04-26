'use strict';

/**
 * engine.js — Morphologie-DSL Engine
 *
 * FIX v2:
 *  - resolveNAM / resolveToken / render sind async
 *  - Keine [object Promise] mehr im Output
 *  - Defensive try/catch in resolveNAM
 */

import {getRandomElement} from './rand.js';

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
			return 'msk';
	}
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
	const num = tN ?? parsed.targetNumerus ?? 'sgl',
		kas = tK ?? parsed.targetKasus ?? 'nom';
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
		const stem = base.endsWith('e') ? base.slice(0, -1) : base;
		declined = declineAdjective(numerus, kasus, 'pos', attribute, g, stem);
	} else {
		declined = _applyNounTable(numerus, kasus, g, declinationRule, declinationPattern, base);
	}
	let adjStr = '';
	if (adjective && adjective.trim().length > 0)
		adjStr =
			declineAdjective(numerus, kasus, 'pos', attribute, g, adjective.replace(/e$/, '')) +
			' ';
	return (prefix ? prefix + ' ' : '') + adjStr + declined + (suffix ? ' ' + suffix : '');
}

function _applyNounTable(numerus, kasus, genus, rule, pattern, stem) {
	const eE = (s) => s.endsWith('e'),
		eN = (s) => s.endsWith('n'),
		eSS = (s) => s.endsWith('el') || s.endsWith('er') || s.endsWith('en');
	if (numerus === 'plu' && kasus === 'dat' && rule === 'starkeDeklination')
		return eN(stem) ? stem : stem + 'n';
	if (rule === 'schwacheDeklination') {
		if (pattern === 'W2') return stem;
		if (numerus === 'sgl' && kasus !== 'nom') {
			if (eE(stem)) return stem + 'n';
			if (eSS(stem)) return stem + 'n';
			return stem + 'en';
		}
		return stem;
	}
	if (
		numerus === 'sgl' &&
		kasus === 'gen' &&
		(genus === 'msk' || genus === 'neu') &&
		rule === 'starkeDeklination'
	) {
		if (pattern === 'S2') return stem + 'es';
		if (pattern === 'S4') return stem + 's';
		return stem + 's'; // fallback
	}
	if (rule === 'gemischteDeklination' && pattern === 'W4' && kasus === 'dat') {
		if (eE(stem)) return stem + 'n';
		if (eN(stem)) return stem;
		return stem + 'en';
	}
	return stem;
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. NORMALIZER + PARSER
// ═══════════════════════════════════════════════════════════════════════════

const _FLAG_MAP = {
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
function _isVariable(f) {
	return _VARIABLE_PATTERN.test(f);
}
function normalizeFlag(flag) {
	if (_isVariable(flag)) return flag;
	const n = _FLAG_MAP[flag.toLowerCase()];
	return n !== undefined && n !== flag.toLowerCase() ? n : flag;
}

const _NUM = new Set(['sgl', 'plu']),
	_KAS = new Set(['nom', 'gen', 'dat', 'akk']),
	_ART = new Set(['def', 'ind', 'neg', '-']),
	_GEN = new Set(['msk', 'fem', 'neu']),
	_PER = new Set(['p1', 'p2', 'p3', 'p2form']),
	_STE = new Set(['pos', 'kom', 'sup']),
	_MET = new Set(['tags', 'genus']);
const _DEM_PRO = new Set(['dieser', 'jener', 'derjenige', 'derselbe']),
	_QUANT = new Set([
		'alle',
		'beide',
		'einige',
		'manche',
		'viele',
		'wenige',
		'jeder',
		'jemand',
		'niemand',
	]),
	_DEM_ART = new Set(['dieser', 'jener', 'jeder', 'mancher', 'solcher']);
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
function parseARTToken(r) {
	const p = r.split('|'),
		subtype = p[0].split(':')[1],
		flags = p.slice(1);
	const t = {
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
				t.variable = f;
			} else if (_PER.has(f)) {
				t.person = f;
			} else if (_KAS.has(f)) {
				t.targetKasus = f;
				tP = true;
			} else if (_NUM.has(f)) {
				if (!oNS) {
					t.ownerNumerus = f;
					oNS = true;
				} else {
					t.targetNumerus = f;
					tP = true;
				}
			} else if (_GEN.has(f)) {
				if (!tP && !oGS && t.person === 'p3') {
					t.ownerGenus = f;
					oGS = true;
				} else {
					t.targetGenus = f;
					tP = true;
				}
			}
		}
	} else {
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				t.variable = f;
			} else if (_NUM.has(f)) {
				t.targetNumerus = f;
			} else if (_KAS.has(f)) {
				t.targetKasus = f;
			} else if (_GEN.has(f)) {
				t.targetGenus = f;
			} else if (_DEM_ART.has(f) || _QUANT.has(f)) {
				t.stem = f;
			}
		}
	}
	return t;
}
function parsePROToken(r) {
	const p = r.split('|'),
		subtype = p[0].split(':')[1],
		flags = p.slice(1);
	const t = {
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
				t.variable = f;
			} else if (_PER.has(f)) {
				t.person = f;
			} else if (_NUM.has(f)) {
				t.numerus = f;
			} else if (_KAS.has(f)) {
				t.kasus = f;
			} else if (_GEN.has(f)) {
				t.genus = f;
			}
		}
	} else if (subtype === 'poss') {
		let oNS = false,
			oGS = false,
			tP = false;
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				t.variable = f;
			} else if (_PER.has(f)) {
				t.person = f;
			} else if (_KAS.has(f)) {
				t.kasus = f;
				tP = true;
			} else if (_NUM.has(f)) {
				if (!oNS) {
					t.ownerNumerus = f;
					oNS = true;
				} else {
					t.numerus = f;
					tP = true;
				}
			} else if (_GEN.has(f)) {
				if (!tP && !oGS && t.person === 'p3') {
					t.ownerGenus = f;
					oGS = true;
				} else {
					t.genus = f;
					tP = true;
				}
			}
		}
	} else {
		for (const raw of flags) {
			const f = normalizeFlag(raw);
			if (_isVariable(f)) {
				t.variable = f;
			} else if (_NUM.has(f)) {
				t.numerus = f;
			} else if (_KAS.has(f)) {
				t.kasus = f;
			} else if (_GEN.has(f)) {
				t.genus = f;
			} else if (_DEM_PRO.has(f) || _QUANT.has(f)) {
				t.stem = f;
			}
		}
	}
	return t;
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
			console.warn('[parseToken] Unbekannt:', rawInner.slice(0, ci));
			token = {type: 'UNKNOWN', raw: rawInner};
	}
	token.mod = mod ?? null;
	return token;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. RESOLVER
// ═══════════════════════════════════════════════════════════════════════════

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
function _artStr(a, n, k, g, render) {
	if (!render) return '';
	if (a === 'def') return declineDefiniteArticle(n, k, g);
	if (a === 'ind') return declineIndefiniteArticle(k, g);
	if (a === 'neg') return declineNegativeArticle(n, k, g);
	return '';
}
function resolveRenderOverride(ov, cN, cK, cG, vMap) {
	const g = resolveGenus(ov, cG, vMap);
	if (ov.type === 'ART') return declineArticle(ov.subtype, ov, cN, cK, g);
	if (ov.type === 'PRO') return declinePronoun(ov.subtype, ov, cN, cK, g);
	return '';
}
function resolveNOM(token, settings, vMap) {
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
	const artS = token.renderOverride
		? resolveRenderOverride(token.renderOverride, eN, token.kasus, g, vMap)
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
function resolveART(t, vMap) {
	return declineArticle(
		t.subtype,
		t,
		t.targetNumerus,
		t.targetKasus,
		resolveGenus(t, null, vMap),
	);
}
function resolvePRO(t, vMap) {
	return declinePronoun(t.subtype, t, t.numerus, t.kasus, resolveGenus(t, null, vMap));
}
function resolveADJ(t, vMap) {
	const e = LEMMA_MAP[t.lemma];
	if (t.numerus === 'tags') {
		return e?.type === 'adj' ? (selectRandom(e.arrays, [])?.tags ?? '') : '';
	}
	let pos;
	if (e?.type === 'adj') {
		const wd = selectRandom(e.arrays, []);
		pos = wd ? (wd.positive ?? wd.positiv ?? t.lemma) : t.lemma;
	} else {
		pos = t.lemma;
	}
	return declineAdjective(t.numerus, t.kasus, t.steigerung, _artAttr(t.art), t.genus, pos);
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

/** FIX: async — awaitet resolveNAM */
async function resolveToken(token, settings, vMap) {
	let result;
	switch (token.type) {
		case 'NOM':
			result = resolveNOM(token, settings, vMap);
			break;
		case 'ART':
			result = resolveART(token, vMap);
			break;
		case 'PRO':
			result = resolvePRO(token, vMap);
			break;
		case 'ADJ':
			result = resolveADJ(token, vMap);
			break;
		case 'COM':
			result = resolveCOM(token, settings, vMap);
			break;
		case 'NAM':
			result = await resolveNAM(token);
			break; // ← await
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

/**
 * FIX: render() ist async — alle Token werden parallel aufgelöst via Promise.all.
 * @returns {Promise<string>}
 */
export async function render(template, variableMap, activeSettings) {
	Object.keys(nameCtx).forEach((k) => delete nameCtx[k]);
	const vMap = variableMap ?? {},
		settings = activeSettings ?? ['Universal'];
	const parts = await Promise.all(
		tokenize(template).map((el) =>
			el.type === 'literal'
				? Promise.resolve(el.text)
				: resolveToken(parseToken(el.raw, el.mod), settings, vMap),
		),
	);
	return parts.join('');
}
