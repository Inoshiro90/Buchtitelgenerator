import { AppState } from '../state.js';

var descriptionsInfo = [
	{ id: 'checkbox-description-author',          name: 'Autor' },
	{ id: 'checkbox-description-page-count',      name: 'Seitenanzahl' },
	{ id: 'checkbox-description-book-edition',    name: 'Auflage' },
	{ id: 'checkbox-description-book-age',        name: 'Alter' },
	{ id: 'checkbox-description-book-language',   name: 'Sprache' },
	{ id: 'checkbox-description-book-tags',       name: 'Schlagwörter' },
	{ id: 'checkbox-description-book-size',       name: 'Buchgröße' },
	{ id: 'checkbox-description-page-material',   name: 'Seitenmaterial' },
	{ id: 'checkbox-description-book-weight',     name: 'Gewicht' },
	{ id: 'checkbox-description-book-condition',  name: 'Buchzustand' },
	{ id: 'checkbox-description-book-value',      name: 'Buchwert' },
	{ id: 'checkbox-description-book-binding',    name: 'Buchbindung' },
	{ id: 'checkbox-description-cover-material',  name: 'Material des Einbands' },
	{ id: 'checkbox-description-cover-color',     name: 'Farbe des Einbands' },
	{ id: 'checkbox-description-cover-detail',    name: 'Detail des Einbands' },
	{ id: 'checkbox-description-text-quality',    name: 'Textqualität' },
	{ id: 'checkbox-description-text-production', name: 'Produktionsart des Texts' },
	{ id: 'checkbox-description-image-number',    name: 'Anzahl der Bilder' },
	{ id: 'checkbox-description-image-quality',   name: 'Qualität der Bilder' },
	{ id: 'checkbox-description-image-size',      name: 'Größe der Bilder' },
	{ id: 'checkbox-description-image-color',     name: 'Farbe der Bilder' },
	{ id: 'checkbox-description-image-style',     name: 'Stil der Bilder' },
	{ id: 'checkbox-description-bookmark',        name: 'Lesezeichen' },
	{ id: 'checkbox-description-quirk',           name: 'Eigenart' },
];

descriptionsInfo.forEach(function (d) {
	var cb = document.getElementById(d.id);
	cb.addEventListener('change', function () { AppState.toggleField(d.name, cb.checked); });
});

document.getElementById('btn-select-all-description').addEventListener('click', function () {
	descriptionsInfo.forEach(function (d) { document.getElementById(d.id).checked = true; });
	AppState.selectAllFields();
});

document.getElementById('btn-deselect-all-description').addEventListener('click', function () {
	descriptionsInfo.forEach(function (d) { document.getElementById(d.id).checked = false; });
	AppState.deselectAllFields();
});
