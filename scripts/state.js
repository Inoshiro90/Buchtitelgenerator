export const AppState = (function () {

	var ALL_SETTINGS = [
		'Drachenlanze', 'Eberron', 'Exandria', 'Greyhawk',
		'Ravenloft', 'Ravnica', 'Spelljammer', 'Strixhaven',
		'Theros', 'Vergessene Reiche'
	];

	var ALL_GENRES = [
		'Belletristik', 'Biographie', 'Freizeit', 'Geographie',
		'Geschichte', 'Handwerk', 'Heilkunde', 'Kinderbuch',
		'Kochkunst', 'Bildende Kunst', 'Darstellende Kunst', 'Magie',
		'Naturkunde', 'Philosophie', 'Psychologie', 'Recht',
		'Religion', 'Sport', 'Sprache', 'Völkerkunde'
	];

	var ALL_FIELDS = [
		'Autor', 'Seitenanzahl', 'Auflage', 'Alter', 'Sprache',
		'Schlagwörter', 'Buchgröße', 'Seitenmaterial', 'Gewicht',
		'Buchzustand', 'Buchbindung', 'Buchwert',
		'Material des Einbands', 'Farbe des Einbands',
		'Detail des Einbands', 'Textqualität',
		'Produktionsart des Texts', 'Anzahl der Bilder',
		'Qualität der Bilder', 'Größe der Bilder',
		'Farbe der Bilder', 'Stil der Bilder',
		'Lesezeichen', 'Eigenart'
	];

	// 'Universal' is a pseudo-setting required by noun arrays — always included.
	var INTERNAL_SETTING = 'Universal';

	var _settings = new Set(ALL_SETTINGS);
	var _genres   = new Set(ALL_GENRES);
	var _fields   = new Set(ALL_FIELDS);

	return {
		getSettings: function () {
			var result = Array.from(_settings);
			if (result.indexOf(INTERNAL_SETTING) === -1) result.push(INTERNAL_SETTING);
			return result;
		},
		getGenres:  function () { return Array.from(_genres); },
		getFields:  function () { return Array.from(_fields); },

		toggleSetting: function (v, on) { on ? _settings.add(v) : _settings.delete(v); },
		toggleGenre:   function (v, on) { on ? _genres.add(v)   : _genres.delete(v);   },
		toggleField:   function (v, on) { on ? _fields.add(v)   : _fields.delete(v);   },

		selectAllSettings:   function () { ALL_SETTINGS.forEach(function (s) { _settings.add(s); }); },
		deselectAllSettings: function () { _settings.clear(); },
		selectAllGenres:     function () { ALL_GENRES.forEach(function (g) { _genres.add(g); }); },
		deselectAllGenres:   function () { _genres.clear(); },
		selectAllFields:     function () { ALL_FIELDS.forEach(function (f) { _fields.add(f); }); },
		deselectAllFields:   function () { _fields.clear(); },

		isValid: function () { return _settings.size > 0 && _genres.size > 0; }
	};
})();

// Minimal bridge for traditional scripts (getRandomNoun, getRandomAdjective).
// Only exposes getSettings() — not the full AppState surface.
window.getActiveSettings = function () { return AppState.getSettings(); };
