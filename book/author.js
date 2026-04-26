'use strict';

/**
 * author.js — Autorenname-Generierung (konsolidiert)
 *
 * FIX v2:
 *  - Nonbinary-Fallback: kombiniert Male + Female Silben wenn keine NonBinary-Daten vorhanden
 *  - Tiefling-Nachname: nutzt Human-Nachnamen (wie Original)
 *  - Halfling/Dwarf/Gnome/HalfOrc: Part1+Part2 Compound-Logik implementiert
 *  - getSyllables: try/catch — niemals Crash bei fehlender CSV
 *  - Nonbinary human CSV: Fallback auf male+female kombiniert
 */

import { loadCsv } from '../core/csvLoader.js';

// ═══════════════════════════════════════════════════════════════════════════
// 1. WAHRSCHEINLICHKEITEN
// ═══════════════════════════════════════════════════════════════════════════

export function generateRandomAuthorGender() {
	const n = Math.floor(Math.random() * 100) + 1;
	if (n <= 49) return 'männlich';
	if (n <= 98) return 'weiblich';
	return 'nicht-binär';
}

export function generateRandomAuthorRace() {
	const n = Math.floor(Math.random() * 100) + 1;
	if (n <= 49) return 'Mensch';
	if (n <= 59) return 'Zwerg';
	if (n <= 69) return 'Elf';
	if (n <= 74) return 'Halbling';
	if (n <= 79) return 'Gnom';
	if (n <= 84) return 'Halbelf';
	if (n <= 89) return 'Halbork';
	if (n <= 94) return 'Drachenblütiger';
	return 'Tiefling';
}

export function generateRandomAuthorRegion() {
	const n = Math.floor(Math.random() * 100) + 1;
	if (n <= 40) return 'germanisch';
	if (n <= 55) return 'slawisch';
	if (n <= 70) return 'romanisch';
	if (n <= 80) return 'skandinavisch';
	if (n <= 85) return 'keltisch';
	const other = ['griechisch','arabisch','persisch','bantuisch','ägyptisch','meso-amerikanisch','polynesisch','indisch','chinesisch','japanisch'];
	return other[Math.floor(Math.random() * other.length)];
}

// ═══════════════════════════════════════════════════════════════════════════
// 2. CSV-CACHE MIT FEHLERBEHANDLUNG
// ═══════════════════════════════════════════════════════════════════════════

const _sylCache = {};

/**
 * FIX: try/catch — gibt leeres Objekt zurück wenn CSV nicht existiert (z. B. 404).
 * Das System crasht nie wegen fehlender Dateien.
 */
async function getSyllables(csvPath) {
	if (_sylCache[csvPath] !== undefined) return _sylCache[csvPath];

	let rows;
	try {
		rows = await loadCsv(csvPath);
	} catch {
		// CSV nicht erreichbar (404, Netzwerk, etc.) → leeres Objekt cachen
		_sylCache[csvPath] = {};
		return {};
	}

	const columns = {};
	if (rows.length > 0) {
		for (const key of Object.keys(rows[0])) {
			columns[key] = rows.map(r => r[key]).filter(Boolean);
		}
	}
	_sylCache[csvPath] = columns;
	return columns;
}

// ═══════════════════════════════════════════════════════════════════════════
// 3. NAMENSKERN
// ═══════════════════════════════════════════════════════════════════════════

const DIGRAPHS = new Set(['ch','chs','ck','dh','dsch','dt','gh','ng','ph','sch','sp','ss','st','sz','th','tz','tzsch','zsch']);
function isDigraph(s) { return DIGRAPHS.has(s.toLowerCase()); }
function pick(arr) {
	if (!arr || arr.length === 0) return '';
	return arr[Math.floor(Math.random() * arr.length)];
}

function buildName(sylArrays, minLen = 3, maxLen = 12, maxTries = 200) {
	// Leere Arrays filtern — verhindert Endlosschleife
	const valid = sylArrays.filter(a => a && a.length > 0);
	if (valid.length === 0) return '';

	let name = '';
	let tries = 0;
	let prevVowel = '';
	let consecutiveVowels = 0;

	do {
		const parts = valid.map(pick);
		name = parts.join('');

		const vowelMatch = name.match(/[aeiouäöü]/gi);
		const firstVowel = vowelMatch ? vowelMatch[0] : '';
		if (firstVowel && firstVowel === prevVowel) consecutiveVowels++;
		else consecutiveVowels = 0;
		prevVowel = firstVowel;

		const hasTripleConsonant = /[bcdfghjklmnpqrstvwxyzßäöü]{3,}/i.test(name);
		const hasXZQ             = /xz|xq|zx|zq|qz/i.test(name);
		const hasTooManyVowels   = /[aeiouäöü]{4,}/i.test(name);

		if (
			consecutiveVowels <= 1 &&
			!hasTooManyVowels &&
			name.length >= minLen &&
			name.length <= maxLen &&
			!hasTripleConsonant &&
			!hasXZQ
		) break;

		tries++;
	} while (tries < maxTries);

	return name ? name.charAt(0).toUpperCase() + name.slice(1) : '';
}

/**
 * Compound-Name aus Part1 + Part2 (für Halbling, Zwerg, Gnom, Halbork).
 * Stellt sicher dass Part1 !== Part2.
 */
function buildCompoundName(part1arr, part2arr, maxTries = 50) {
	if (!part1arr?.length || !part2arr?.length) return '';
	let p1, p2, tries = 0;
	do {
		p1 = pick(part1arr);
		p2 = pick(part2arr);
		tries++;
	} while (p1 === p2 && tries < maxTries);
	const name = p1 + p2;
	return name.charAt(0).toUpperCase() + name.slice(1);
}

// ═══════════════════════════════════════════════════════════════════════════
// 4. FANTASY-RASSEN
// ═══════════════════════════════════════════════════════════════════════════

const RACE_CSV_KEY = {
	dragonborn: 'dragonborn',
	dwarf:      'dwarf',
	elf:        'elf',
	gnome:      'gnome',
	halfOrc:    'halfOrc',
	halfling:   'halfling',
	tiefling:   'tiefling',
};

/**
 * FIX: Nonbinary-Fallback für Fantasy-Rassen.
 * Spalten 'NonBinary' existieren in CSVs nicht → kombiniert Male + Female.
 */
async function buildFantasyFirstName(raceKey, gender) {
	const cols = await getSyllables(`./data/namen/silben/${RACE_CSV_KEY[raceKey]}.csv`);
	const rk   = raceKey;

	// Bestimme welches Geschlecht-Infix zu benutzen ist
	let genderInfix;
	if (gender === 'weiblich') {
		genderInfix = 'Female';
	} else if (gender === 'männlich') {
		genderInfix = 'Male';
	} else {
		// FIX: Nicht-binär → 50/50 Male oder Female
		genderInfix = Math.random() < 0.5 ? 'Male' : 'Female';
	}

	const sylArrays = [1,2,3,4,5]
		.map(i => cols[`${rk}FirstName${genderInfix}Syllable${i}`] || [])
		.filter(a => a.length > 0);

	// Fallback auf das jeweils andere Geschlecht wenn leer
	if (sylArrays.length === 0) {
		const fallbackInfix = genderInfix === 'Male' ? 'Female' : 'Male';
		const fb = [1,2,3,4,5]
			.map(i => cols[`${rk}FirstName${fallbackInfix}Syllable${i}`] || [])
			.filter(a => a.length > 0);
		if (fb.length === 0) return rk.charAt(0).toUpperCase() + rk.slice(1); // letzter Fallback
		return buildName(fb, 3, 10);
	}
	return buildName(sylArrays, 3, 10);
}

/**
 * FIX: Vollständige Last-Name-Logik für alle Rassen.
 *  - Rassen mit Syllable1-5: Silben-basiert (wie buildName)
 *  - Rassen mit Part1+Part2: Compound-Logik (50/50 oder immer)
 *  - Tiefling: keine Nachnamen in CSV → wird in generateRandomAuthorLastName umgeleitet
 */
async function buildFantasyLastName(raceKey) {
	const cols = await getSyllables(`./data/namen/silben/${RACE_CSV_KEY[raceKey]}.csv`);
	const rk   = raceKey;

	const sylArrays = [1,2,3,4,5,6]
		.map(i => cols[`${rk}LastNameSyllable${i}`] || [])
		.filter(a => a.length > 0);

	const part1 = cols[`${rk}LastNamePart1`] || [];
	const part2 = cols[`${rk}LastNamePart2`] || [];
	const hasParts = part1.length > 0 && part2.length > 0;

	// Rassen mit nur Part1/Part2 (Halbling, Gnom, HalfOrc, Zwerg)
	if (sylArrays.length === 0 && hasParts) {
		return buildCompoundName(part1, part2);
	}

	// Rassen mit Silben UND Parts (50/50)
	if (sylArrays.length > 0 && hasParts) {
		return Math.random() < 0.5
			? buildName(sylArrays, 3, 15)
			: buildCompoundName(part1, part2);
	}

	// Nur Silben (Elf, Dragonborn)
	if (sylArrays.length > 0) {
		return buildName(sylArrays, 3, 15);
	}

	// Letzter Fallback
	return rk.charAt(0).toUpperCase() + rk.slice(1) + 'son';
}

// ═══════════════════════════════════════════════════════════════════════════
// 5. MENSCHLICHE NAMEN (regional)
// ═══════════════════════════════════════════════════════════════════════════

const REGION_TO_CSV = {
	'germanisch':        'Germanic',
	'slawisch':          'Slavic',
	'romanisch':         'Romanesque',
	'skandinavisch':     'Scandinavian',
	'keltisch':          'Celtic',
	'griechisch':        'Greek',
	'arabisch':          'Arabic',
	'persisch':          'Persian',
	'bantuisch':         'Bantu',
	'ägyptisch':         'Egyptian',
	'meso-amerikanisch': 'MesoAmerican',
	'polynesisch':       'Polynesian',
	'indisch':           'Indian',
	'chinesisch':        'Chinese',
	'japanisch':         'Japanese',
};

/**
 * FIX: Nonbinary-Fallback für menschliche Vornamen.
 * *_nonbinary.csv existieren nicht → kombiniert male + female Silben.
 */
async function buildHumanFirstName(gender, region) {
	const csvKey = REGION_TO_CSV[region] ?? 'Germanic';

	let cols;
	if (gender === 'nicht-binär') {
		// FIX: nonbinary.csv existiert nicht → male + female kombinieren
		const [maleCols, femaleCols] = await Promise.all([
			getSyllables(`./data/namen/human/${csvKey}_male.csv`),
			getSyllables(`./data/namen/human/${csvKey}_female.csv`),
		]);

		// Wähle zufällig zwischen male und female Silbensets
		cols = Math.random() < 0.5 ? maleCols : femaleCols;

		// Wenn beide leer: Germanic als Fallback
		if (Object.keys(cols).length === 0) {
			const [mFb, fFb] = await Promise.all([
				getSyllables('./data/namen/human/Germanic_male.csv'),
				getSyllables('./data/namen/human/Germanic_female.csv'),
			]);
			cols = Math.random() < 0.5 ? mFb : fFb;
		}
	} else {
		const genderSuffix = gender === 'weiblich' ? 'female' : 'male';
		cols = await getSyllables(`./data/namen/human/${csvKey}_${genderSuffix}.csv`);

		// Fallback auf Germanic wenn leer
		if (Object.keys(cols).length === 0) {
			cols = await getSyllables(`./data/namen/human/Germanic_${genderSuffix}.csv`);
		}
	}

	const sylArrays = [1,2,3,4,5]
		.map(i => cols[`syl${i}`] || [])
		.filter(a => a.length > 0);

	if (sylArrays.length === 0) return 'Alric'; // absoluter Fallback
	return buildName(sylArrays, 3, 12);
}

async function buildHumanLastName(region, gender) {
	const csvKey = REGION_TO_CSV[region] ?? 'Germanic';
	let cols = await getSyllables(`./data/namen/human/${csvKey}_last.csv`);

	// Fallback auf Germanic wenn leer
	if (Object.keys(cols).length === 0) {
		cols = await getSyllables('./data/namen/human/Germanic_last.csv');
	}

	// Optionales Präfix (z. B. "von", "de")
	let prefix = '';
	if (cols['prefix']?.length > 0 && Math.random() < 0.25) {
		prefix = pick(cols['prefix']) + ' ';
	}

	const sylArrays = [1,2,3,4,5,6]
		.map(i => cols[`syl${i}`] || [])
		.filter(a => a.length > 0);
	
	if (sylArrays.length === 0) return prefix + 'Steiner'; // absoluter Fallback
	return prefix + buildName(sylArrays, 3, 15);
}

// ═══════════════════════════════════════════════════════════════════════════
// 6. ÖFFENTLICHE API
// ═══════════════════════════════════════════════════════════════════════════

function normalizeGender(g) {
	if (g === 'msk') return 'männlich';
	if (g === 'fem') return 'weiblich';
	if (g === 'neu') return 'nicht-binär';
	return g;
}

export async function generateRandomAuthorFirstName(gender, race, region) {
	gender = normalizeGender(gender);

	switch (race) {
		case 'Mensch':
			return buildHumanFirstName(region ?? generateRandomAuthorRegion(), gender);
		case 'Zwerg':
			return buildFantasyFirstName('dwarf', gender);
		case 'Elf':
			return buildFantasyFirstName('elf', gender);
		case 'Halbling':
			return buildFantasyFirstName('halfling', gender);
		case 'Gnom':
			return buildFantasyFirstName('gnome', gender);
		case 'Halbelf':
			return Math.random() < 0.5
				? buildHumanFirstName(gender, region ?? generateRandomAuthorRegion())
				: buildFantasyFirstName('elf', gender);
		case 'Halbork':
			return buildFantasyFirstName('halfOrc', gender);
		case 'Drachenblütiger':
			return buildFantasyFirstName('dragonborn', gender);
		case 'Tiefling':
			// Tieflings haben keine eigene Silbentabelle — nutzen menschliche Namen
			return buildHumanFirstName(gender, region ?? generateRandomAuthorRegion());
		default:
			return buildHumanFirstName(gender, region ?? 'germanisch');
	}
}

export async function generateRandomAuthorLastName(race, region, gender) {
	switch (race) {
		case 'Mensch':
			return buildHumanLastName(gender, region ?? generateRandomAuthorRegion());
		case 'Zwerg':
			return buildFantasyLastName('dwarf');
		case 'Elf':
			return buildFantasyLastName('elf');
		case 'Halbling':
			return buildFantasyLastName('halfling');
		case 'Gnom':
			return buildFantasyLastName('gnome');
		case 'Halbelf':
			return Math.random() < 0.5
				? buildHumanLastName(region ?? generateRandomAuthorRegion())
				: buildFantasyLastName('elf');
		case 'Halbork':
			return buildFantasyLastName('halfOrc');
		case 'Drachenblütiger':
			return buildFantasyLastName('dragonborn');
		case 'Tiefling':
			// FIX: Tiefling hat keine Nachnamen-CSV → Human-Nachnamen wie im Original
			return buildHumanLastName(region ?? generateRandomAuthorRegion());
		default:
			return buildHumanLastName(region ?? 'germanisch');
	}
}

/**
 * Generiert einen vollständigen Autor.
 * @returns {Promise<{gender, race, region, first_name, last_name}>}
 */
export async function generateRandomAuthor() {
	const gender = generateRandomAuthorGender();
	const race   = generateRandomAuthorRace();
	const region = generateRandomAuthorRegion();
	const [first_name, last_name] = await Promise.all([
		generateRandomAuthorFirstName(gender, race, region),
		generateRandomAuthorLastName(race, region, gender),
	]);
	return { gender, race, region, first_name, last_name };
}
