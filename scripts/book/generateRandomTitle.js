/**
 * generateRandomTitle.js  (refaktoriert — CSV + DSL)
 *
 * Lädt Templates async aus genre.csv und rendert sie via DSL-Engine.
 *
 * Architektur (drei klare Schichten):
 *   1. CSV-Loader    — lädt und parst genre.csv einmalig (gecacht)
 *   2. Variablen-    — wählt je Aufruf zufällige Wörter pro Slot
 *      Selektion
 *   3. Rendering     — render() aus engine.js, keine Grammatik hier
 *
 * KORREKTUREN gegenüber Erstversion:
 *   • Templates bleiben in genre.csv (keine Hardcodierung in JS)
 *   • Funktion ist wieder async (wegen CSV-Ladevorgang)
 *   • generateBooks.js muss wieder await verwenden
 *   • evalTemplate() aus Sprint 7 entfernt → render() übernimmt
 *   • CSV-Spalten \'title\'/\'tags\'/\'genre\' direkt als DSL-Templates behandelt
 *
 * Abhängigkeiten (müssen vor dieser Datei geladen sein):
 *   dsl/engine.js    — render(), LEMMA_MAP, selectRandom
 *   dsl/data.js      — LEMMA_MAP-Registrierung
 *   scripts/getRandomElement.js
 */

// ─── CSV-Loader ─────────────────────────────────────────────────────────────

/** Gecachte Genre-Map: genre → [{title, tags}, ...] */
let _cachedGenreData = null;
function resetNameContextStore() {
	Object.keys(nameContextStore).forEach((k) => delete nameContextStore[k]);
}
resetNameContextStore();
/**
 * Lädt und parst genre.csv einmalig. Nachfolgende Aufrufe nutzen den Cache.
 * Wirft einen Fehler wenn die CSV nicht erreichbar ist oder Spalten fehlen.
 *
 * @returns {Promise<Map<string, Array<{title:string, tags:string}>>>}
 */
async function loadGenreTemplates() {
	if (_cachedGenreData) return _cachedGenreData;

	let response;
	try {
		response = await fetch('./files/csv/genre/genre.csv');
	} catch (networkError) {
		throw new Error('genre.csv konnte nicht geladen werden: ' + networkError.message);
	}

	if (!response.ok) {
		throw new Error('genre.csv konnte nicht geladen werden: HTTP ' + response.status);
	}

	const csvText = await response.text();

	// BOM entfernen, Zeilen splitten
	const cleanText = csvText.replace(/^\uFEFF/, '');
	const rows = cleanText.split('\n').map((row) => row.split(';').map((cell) => cell.trim()));
	const headers = rows[0];
	const dataRows = rows
		.slice(1)
		.filter((row) => row.length >= headers.length && row.some((c) => c !== ''));

	const titleIdx = headers.indexOf('title');
	const tagsIdx = headers.indexOf('tags');
	const genreIdx = headers.indexOf('genre');

	if (titleIdx === -1 || tagsIdx === -1 || genreIdx === -1) {
		throw new Error(
			'genre.csv: Pflicht-Spalten fehlen (erwartet: title, tags, genre). Gefunden: ' +
				headers.join(', '),
		);
	}

	const map = new Map();
	for (const row of dataRows) {
		const genre = row[genreIdx];
		const title = row[titleIdx];
		if (!genre || !title) continue;
		if (!map.has(genre)) map.set(genre, []);
		map.get(genre).push({title, tags: row[tagsIdx] ?? ''});
	}

	_cachedGenreData = map;
	return map;
}

// ─── Slot-Definitionen ───────────────────────────────────────────────────────
//
// Jeder Slot verbindet einen DSL-Variablen-Bezeichner (z.B. "Volk1")
// mit dem LEMMA_MAP-Key ("Volk"), aus dem er befüllt wird.
// Die variableMap wird EINMAL pro generateRandomTitle-Aufruf erzeugt.

const SLOT_DEFINITIONS = [
	{key: 'Volk1', lemma: 'Volk'},
	{key: 'Volk2', lemma: 'Volk'},
	{key: 'Klasse1', lemma: 'Klasse'},
	{key: 'Klasse2', lemma: 'Klasse'},
	{key: 'Terrain1', lemma: 'Terrain'},
	{key: 'Waffe1', lemma: 'Waffe'},
	{key: 'Kreaturtyp1', lemma: 'Kreaturtyp'},
	{key: 'Abenteuerausrüstung1', lemma: 'Abenteuerausrüstung'},
	{key: 'Abenteuerausrüstung2', lemma: 'Abenteuerausrüstung'},
	{key: 'Abenteuerausrüstung3', lemma: 'Abenteuerausrüstung'},
	{key: 'Beruf1', lemma: 'Beruf'},
	{key: 'Beruf2', lemma: 'Beruf'},
	{key: 'Beruf3', lemma: 'Beruf'},
	{key: 'Gebäude1', lemma: 'Gebäude'},
	{key: 'Gebäude2', lemma: 'Gebäude'},
	{key: 'Gebäude3', lemma: 'Gebäude'},
	{key: 'Tier1', lemma: 'Tier'},
	{key: 'Metall1', lemma: 'Metall'},
	{key: 'Metall2', lemma: 'Metall'},
	{key: 'Ereignis1', lemma: 'Ereignis'},
	{key: 'Rüstung1', lemma: 'Rüstung'},
	{key: 'Ort1', lemma: 'Ort'},
	{key: 'Ort2', lemma: 'Ort'},
	{key: 'Ort3', lemma: 'Ort'},
	{key: 'Vorname1', lemma: 'Vorname'},
	{key: 'Vorname2', lemma: 'Vorname'},
	{key: 'Vorname3', lemma: 'Vorname'},
	{key: 'Vorname4', lemma: 'Vorname'},
	{key: 'Vorname5', lemma: 'Vorname'},
	{key: 'Nachname1', lemma: 'Nachname'},
	{key: 'Nachname2', lemma: 'Nachname'},
	{key: 'Nachname3', lemma: 'Nachname'},
	{key: 'Nachname4', lemma: 'Nachname'},
	{key: 'Nachname5', lemma: 'Nachname'},
];

// ─── Variablen-Selektion ────────────────────────────────────────────────────

/**
 * Befüllt die variableMap mit je einem zufälligen Wort pro Slot.
 * Slots desselben Lemmas werden dedupliziert (soweit Pool groß genug).
 *
 * @param {string[]} activeSettings
 * @returns {Object}  { Volk1: wordData, Klasse1: wordData, ... }
 */
function buildVariableMap(activeSettings) {
	const vMap = {};
	const usedPerLemma = {};

	for (const slot of SLOT_DEFINITIONS) {
		const lemmaKey = norm(slot.lemma);
		const key = norm(slot.key);
		let token = {
			key: slot.key,
			lemma: slot.lemma,
			subtype: slot.lemma,
		};

		const entry = LEMMA_MAP[lemmaKey];
		if (!entry) {
			console.warn('[buildVariableMap] Unbekanntes Lemma:', {
				original: slot.lemma,
				normalized: lemmaKey,
				available: Object.keys(LEMMA_MAP),
			});
			continue;
		}

		const alreadyUsed = usedPerLemma[lemmaKey] ?? [];
		let wordData = null;
		let attempts = 0;
		const MAX_TRIES = 50;

		do {
			wordData = selectRandom(entry.arrays, activeSettings);
			attempts++;
		} while (
			wordData &&
			alreadyUsed.length < entry.arrays.length &&
			alreadyUsed.some((w) => w.singular === wordData.singular) &&
			attempts < MAX_TRIES
		);

		if (wordData) {
			vMap[key] = wordData;
			usedPerLemma[lemmaKey] = alreadyUsed.concat([wordData]);
		}
	}

	return vMap;
}

// ─── Haupt-Funktion ─────────────────────────────────────────────────────────

/**
 * Generiert einen zufälligen Buchtitel für die gewählten Genres.
 *
 * Async, da genre.csv beim ersten Aufruf geladen wird.
 * Nachfolgende Aufrufe nutzen den Cache.
 *
 * @param {number}   _i               (ignoriert — war Loop-Index im alten System)
 * @param {string[]} selectedSettings  Aktive Campaign-Settings
 * @param {string[]} selectedGenres    Gewählte Genres
 * @returns {Promise<{title:string, tags:string}>}
 */
export async function generateRandomTitle(_i, selectedSettings, selectedGenres) {
	const activeSettings =
		selectedSettings && selectedSettings.length > 0 ? selectedSettings : ['Universal'];

	// 1. Templates aus CSV laden (gecacht nach erstem Aufruf)
	const genreMap = await loadGenreTemplates();

	// 2. Kandidaten für alle gewählten Genres sammeln
	const candidates = [];
	for (const genre of selectedGenres) {
		const templates = genreMap.get(genre);
		if (templates && templates.length > 0) {
			const picked = getRandomElement(templates);
			if (picked) candidates.push(picked);
		}
	}

	if (candidates.length === 0) {
		console.error('[generateRandomTitle] Keine Templates für Genres:', selectedGenres);
		return {title: 'Unbekanntes Werk', tags: selectedGenres[0] || 'Unbekannt'};
	}

	// 3. Zufälligen Kandidaten wählen
	const template = getRandomElement(candidates);
	if (!template) {
		return {title: 'Unbekanntes Werk', tags: selectedGenres[0] || 'Unbekannt'};
	}

	// 4. Variablen-Slots einmalig befüllen
	const variableMap = buildVariableMap(activeSettings);

	// 5. Titel und Tags via DSL-Engine rendern — keine Grammatik hier
	const title = render(template.title, variableMap, activeSettings);
	const tags = render(template.tags, variableMap, activeSettings);

	return {
		title: title.charAt(0).toUpperCase() + title.slice(1),
		tags,
	};
}
