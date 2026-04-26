'use strict';

/**
 * csvLoader.js — Generischer CSV-Loader mit eingebautem Cache
 *
 * Lädt CSV-Dateien per fetch und cached das Ergebnis.
 * Unterstützt Semikolon als Trennzeichen und BOM-Entfernung.
 */

const _cache = new Map();

/**
 * Lädt eine CSV-Datei und gibt sie als Array von Objekten zurück.
 * Nachfolgende Aufrufe mit derselben URL liefern das gecachte Ergebnis.
 *
 * @param {string} url   - Relativer oder absoluter Pfad zur CSV-Datei
 * @param {string} [sep] - Trennzeichen (Standard: ';')
 * @returns {Promise<Object[]>}
 */
export async function loadCsv(url, sep = ';') {
	if (_cache.has(url)) return _cache.get(url);

	let response;
	try {
		response = await fetch(url);
	} catch (err) {
		throw new Error(`CSV nicht erreichbar: ${url} — ${err.message}`);
	}

	if (!response.ok) {
		throw new Error(`CSV nicht erreichbar: ${url} — HTTP ${response.status}`);
	}

	const text  = await response.text();
	const clean = text.replace(/^\uFEFF/, '');           // BOM entfernen
	const lines = clean.split('\n').map(l => l.trimEnd());
	const headers = lines[0].split(sep).map(h => h.trim());

	const rows = lines
		.slice(1)
		.filter(l => l.length > 0)
		.map(line => {
			const cells = line.split(sep);
			return Object.fromEntries(
				headers.map((h, i) => [h, (cells[i] ?? '').trim()])
			);
		});

	_cache.set(url, rows);
	return rows;
}

/**
 * Hilfsfunktion: Liest eine einzelne Spalte als flaches String-Array.
 *
 * @param {string} url
 * @param {string} column
 * @returns {Promise<string[]>}
 */
export async function loadCsvColumn(url, column) {
	const rows = await loadCsv(url);
	return rows.map(r => r[column]).filter(Boolean);
}
