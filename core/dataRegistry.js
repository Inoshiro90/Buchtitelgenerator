'use strict';

/**
 * dataRegistry.js — Datenregistrierung
 *
 * Lädt alle CSV-Dateien asynchron und befüllt die LEMMA_MAP der DSL-Engine.
 * Erster Aufruf löst das Laden aus; danach ist LEMMA_MAP dauerhaft befüllt.
 *
 * Ersetzt: data.js + alle categoryArray.js-Dateien
 */

import { loadCsv } from './csvLoader.js';
import { LEMMA_MAP } from './engine.js';

let _initialized = false;

/**
 * Lädt alle Wortlisten und registriert sie in der LEMMA_MAP.
 * Idempotent — mehrfache Aufrufe laden die Daten nur einmal.
 */
export async function initDataRegistry() {
	if (_initialized) return;
	_initialized = true;

	const base = './data/';

	const nomenFiles = [
		{ lemma: 'Waffe',             file: 'nomen/Waffen.csv' },
		{ lemma: 'Tier',              file: 'nomen/Tiere.csv' },
		{ lemma: 'Volk',              file: 'nomen/Voelker.csv' },
		{ lemma: 'Klasse',            file: 'nomen/Klassen.csv' },
		{ lemma: 'Kreaturtyp',        file: 'nomen/Kreaturtypen.csv' },
		{ lemma: 'Beruf',             file: 'nomen/Berufe.csv' },
		{ lemma: 'Rüstung',           file: 'nomen/Ruestungen.csv' },
		{ lemma: 'Gebäude',           file: 'nomen/Gebaeude.csv' },
		{ lemma: 'Ereignis',          file: 'nomen/Ereignisse.csv' },
		{ lemma: 'Metall',            file: 'nomen/Metalle.csv' },
		{ lemma: 'Abenteuerausrüstung', file: 'nomen/Abenteuerausruestung.csv' },
		{ lemma: 'Terrain',           file: 'nomen/Terrain.csv' },
		{ lemma: 'Religioeses',       file: 'nomen/Religioeses.csv' },
		{ lemma: 'Ort',               file: 'nomen/Orte.csv' },
	];

	const adjFiles = [
		{ lemma: 'PersonAussehen',  file: 'adjektive/PersonAussehen.csv' },
		{ lemma: 'Himmelsrichtung', file: 'adjektive/Himmelsrichtungen.csv' },
	];

	// Alle Ladevorgänge parallel starten
	const loadTasks = [
		...nomenFiles.map(({ lemma, file }) =>
			loadCsv(base + file).then(rows => {
				LEMMA_MAP[lemma] = { type: 'noun', arrays: rows };
			})
		),
		...adjFiles.map(({ lemma, file }) =>
			loadCsv(base + file).then(rows => {
				LEMMA_MAP[lemma] = { type: 'adj', arrays: rows };
			})
		),
	];

	// Namen-Einträge (kein Array — werden direkt von author.js aufgelöst)
	LEMMA_MAP['Vorname']  = { type: 'name' };
	LEMMA_MAP['Nachname'] = { type: 'name' };

	await Promise.all(loadTasks);
}
