'use strict';

/**
 * title.js — Buchtitel-Generierung via genre.csv + DSL-Engine
 *
 * Ersetzt scripts/book/generateRandomTitle.js.
 * Nutzt loadCsv() aus core/csvLoader.js statt eigener Implementierung.
 */

import { loadCsv }                  from '../core/csvLoader.js';
import { render, LEMMA_MAP, selectRandom, norm } from '../core/engine.js';
import { getRandomElement }         from '../core/rand.js';
import { DEF_MAP }                  from '../core/engine.js';
import { selectDefektiv }           from '../core/defektiva-registry.js';

// ─── CSV-Cache ────────────────────────────────────────────────────────────

let _genreMap = null;

async function loadGenreTemplates() {
	if (_genreMap) return _genreMap;
	const rows = await loadCsv('./data/genre/genre.csv');
	_genreMap  = new Map();
	for (const row of rows) {
		const genre = row.genre;
		const title = row.title;
		if (!genre || !title) continue;
		if (!_genreMap.has(genre)) _genreMap.set(genre, []);
		_genreMap.get(genre).push({ title, tags: row.tags ?? '' });
	}
	return _genreMap;
}

// ─── Slot-Definitionen ───────────────────────────────────────────────────

const SLOT_DEFINITIONS = [
	{key: 'Volk1',                 lemma: 'Volk'},
	{key: 'Volk2',                 lemma: 'Volk'},
	{key: 'Klasse1',               lemma: 'Klasse'},
	{key: 'Klasse2',               lemma: 'Klasse'},
	{key: 'Terrain1',              lemma: 'Terrain'},
	{key: 'Waffe1',                lemma: 'Waffe'},
	{key: 'Kreaturtyp1',           lemma: 'Kreaturtyp'},
	{key: 'Abenteuerausrüstung1',  lemma: 'Abenteuerausrüstung'},
	{key: 'Abenteuerausrüstung2',  lemma: 'Abenteuerausrüstung'},
	{key: 'Abenteuerausrüstung3',  lemma: 'Abenteuerausrüstung'},
	{key: 'Beruf1',                lemma: 'Beruf'},
	{key: 'Beruf2',                lemma: 'Beruf'},
	{key: 'Beruf3',                lemma: 'Beruf'},
	{key: 'Gebäude1',              lemma: 'Gebäude'},
	{key: 'Gebäude2',              lemma: 'Gebäude'},
	{key: 'Gebäude3',              lemma: 'Gebäude'},
	{key: 'Tier1',                 lemma: 'Tier'},
	{key: 'Metall1',               lemma: 'Metall'},
	{key: 'Metall2',               lemma: 'Metall'},
	{key: 'Ereignis1',             lemma: 'Ereignis'},
	{key: 'Rüstung1',              lemma: 'Rüstung'},
	{key: 'Ort1',                  lemma: 'Ort'},
	{key: 'Ort2',                  lemma: 'Ort'},
	{key: 'Ort3',                  lemma: 'Ort'},
];

// ─── DEF-Slot-Definitionen (Phase 3) ────────────────────────────────────────

/**
 * DEF_SLOT_DEFINITIONS — Defektiva-Variablen-Keys für Templates.
 *
 * Jeder Key entspricht einem {DEF:Gebirge1|nom}-Token im Template.
 * Der RuntimeContext speichert das Rendering-Ergebnis (genus + numerus),
 * damit nachfolgende ART/PRO-Tokens via def:Gebirge1 den richtigen Numerus bekommen.
 */
const DEF_SLOT_DEFINITIONS = [
	{ key: 'Gebirge1', lemma: 'Gebirge' },
	{ key: 'Gebirge2', lemma: 'Gebirge' },
];

// ─── Variablen-Befüllung ─────────────────────────────────────────────────

/**
 * buildVariableMap — Befüllt vMap für NOM-Slots und DEF-Slots.
 *
 * Phase 9: DEF-Deduplizierung ergänzt.
 *   Vorher: Gebirge1 und Gebirge2 konnten dasselbe Gebirge liefern.
 *   Jetzt: usedPerLemma-Logik gilt auch für DEF_SLOT_DEFINITIONS.
 *
 * HINWEIS: DEF-Werte landen NICHT in vMap (sie werden zur Render-Zeit
 * via resolveDEF() + registerVar(ctx) aufgelöst). Aber die Vorab-Selektion
 * hier sorgt dafür, dass DEF_MAP pro Render-Aufruf konsistent bleibt
 * wenn mehrere DEF-Slots auf dieselbe Kategorie zeigen.
 *
 * Technisch: DEF-Slots legen einen festen Eintrag in DEF_MAP[varKey] an,
 * sodass resolveDEF() bei demselben varKey immer denselben Wert bekommt.
 */
function buildVariableMap(activeSettings) {
	const vMap         = {};
	const usedPerLemma = {};

	// ── NOM-Slots ──────────────────────────────────────────────────────────
	for (const slot of SLOT_DEFINITIONS) {
		const lemmaKey = norm(slot.lemma);
		const entry    = LEMMA_MAP[lemmaKey];
		if (!entry || entry.type === 'name') continue;

		const used   = usedPerLemma[lemmaKey] ?? [];
		let wordData = null;
		let attempts = 0;

		do {
			wordData = selectRandom(entry.arrays, activeSettings);
			attempts++;
		} while (
			wordData &&
			used.length < entry.arrays.length &&
			used.some(w => w.singular === wordData.singular) &&
			attempts < 50
		);

		if (wordData) {
			vMap[norm(slot.key)] = wordData;
			usedPerLemma[lemmaKey] = [...used, wordData];
		}
	}

	// ── DEF-Slots (Phase 9: Deduplizierung) ────────────────────────────────
	// DEF_MAP[varKey] wird mit einem vorab selektierten Eintrag belegt,
	// damit beim späteren resolveDEF() Gebirge1 ≠ Gebirge2 gilt.
	for (const slot of DEF_SLOT_DEFINITIONS) {
		const lemmaKey = norm(slot.lemma);
		const entry    = DEF_MAP[lemmaKey];
		if (!entry?.arrays?.length) continue;

		const used   = usedPerLemma[lemmaKey] ?? [];
		let wordData = null;
		let attempts = 0;

		do {
			wordData = selectRandom(entry.arrays, activeSettings);
			attempts++;
		} while (
			wordData &&
			used.length < entry.arrays.length &&
			used.some(w => w.noun === wordData.noun) &&
			attempts < 50
		);

		if (wordData) {
			// Direkter Eintrag im DEF_MAP unter dem Variablen-Key:
			// resolveDEF() liest DEF_MAP[token.varKey] = DEF_MAP['Gebirge1']
			DEF_MAP[norm(slot.key)] = { type: 'defektiv', arrays: [wordData] };
			usedPerLemma[lemmaKey] = [...used, wordData];
		}
	}

	return vMap;
}

// ─── Haupt-Export ────────────────────────────────────────────────────────

/**
 * Generiert einen zufälligen Buchtitel.
 *
 * @param {string[]} selectedSettings  - Aktive Campaign-Settings
 * @param {string[]} selectedGenres    - Gewählte Genres
 * @returns {Promise<{title:string, tags:string}>}
 */
export async function generateRandomTitle(selectedSettings, selectedGenres) {
	const activeSettings = selectedSettings?.length > 0 ? selectedSettings : ['Universal'];
	const genreMap       = await loadGenreTemplates();

	const candidates = [];
	for (const genre of selectedGenres) {
		const templates = genreMap.get(genre);
		if (templates?.length > 0) {
			const picked = getRandomElement(templates);
			if (picked) candidates.push(picked);
		}
	}

	if (candidates.length === 0) {
		return { title: 'Unbekanntes Werk', tags: selectedGenres[0] ?? 'Unbekannt' };
	}

	const template    = getRandomElement(candidates);
	const variableMap = buildVariableMap(activeSettings);
	// FIX: render() ist async — muss awaitet werden, sonst [object Promise] im Output
	const [title, tags] = await Promise.all([
		render(template.title, variableMap, activeSettings),
		render(template.tags,  variableMap, activeSettings),
	]);

	return {
		title: title.charAt(0).toUpperCase() + title.slice(1),
		tags,
	};
}
