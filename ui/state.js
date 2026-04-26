'use strict';

/**
 * state.js — Anwendungszustand
 * Ersetzt scripts/state.js.
 */

const ALL_SETTINGS = [
	'Drachenlanze','Eberron','Exandria','Greyhawk',
	'Ravenloft','Ravnica','Spelljammer','Strixhaven',
	'Theros','Vergessene Reiche',
];

const ALL_GENRES = [
	'Belletristik','Biographie','Freizeit','Geographie','Geschichte',
	'Handwerk','Heilkunde','Kinderbuch','Kochkunst','Bildende Kunst',
	'Darstellende Kunst','Magie','Naturkunde','Philosophie','Psychologie',
	'Recht','Religion','Sport','Sprache','Völkerkunde',
];

const ALL_FIELDS = [
	'Autor','Seitenanzahl','Auflage','Alter','Sprache','Schlagwörter',
	'Buchgröße','Seitenmaterial','Gewicht','Buchzustand','Buchbindung',
	'Buchwert','Material des Einbands','Farbe des Einbands','Detail des Einbands',
	'Textqualität','Produktionsart des Texts','Anzahl der Bilder',
	'Qualität der Bilder','Größe der Bilder','Farbe der Bilder',
	'Stil der Bilder','Lesezeichen','Eigenart',
];

const INTERNAL_SETTING = 'Universal'; // immer in getSettings() enthalten

let _settings = new Set(ALL_SETTINGS);
let _genres   = new Set(ALL_GENRES);
let _fields   = new Set(ALL_FIELDS);

export const AppState = {
	getSettings() {
		const a = Array.from(_settings);
		if (!a.includes(INTERNAL_SETTING)) a.push(INTERNAL_SETTING);
		return a;
	},
	getGenres()  { return Array.from(_genres); },
	getFields()  { return Array.from(_fields); },

	toggleSetting(v, on) { on ? _settings.add(v) : _settings.delete(v); },
	toggleGenre(v, on)   { on ? _genres.add(v)   : _genres.delete(v);   },
	toggleField(v, on)   { on ? _fields.add(v)   : _fields.delete(v);   },

	selectAllSettings()   { ALL_SETTINGS.forEach(s => _settings.add(s)); },
	deselectAllSettings() { _settings.clear(); },
	selectAllGenres()     { ALL_GENRES.forEach(g => _genres.add(g)); },
	deselectAllGenres()   { _genres.clear(); },
	selectAllFields()     { ALL_FIELDS.forEach(f => _fields.add(f)); },
	deselectAllFields()   { _fields.clear(); },

	isValid() { return _settings.size > 0 && _genres.size > 0; },
};
