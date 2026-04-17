import { AppState } from '../state.js';

var genresInfo = [
	{ id: 'checkbox-genre-fiction',         name: 'Belletristik' },
	{ id: 'checkbox-genre-biography',       name: 'Biographie' },
	{ id: 'checkbox-genre-leisure',         name: 'Freizeit' },
	{ id: 'checkbox-genre-geography',       name: 'Geographie' },
	{ id: 'checkbox-genre-history',         name: 'Geschichte' },
	{ id: 'checkbox-genre-craft',           name: 'Handwerk' },
	{ id: 'checkbox-genre-medicine',        name: 'Heilkunde' },
	{ id: 'checkbox-genre-childrens-book',  name: 'Kinderbuch' },
	{ id: 'checkbox-genre-culinary-arts',   name: 'Kochkunst' },
	{ id: 'checkbox-genre-fine-arts',       name: 'Bildende Kunst' },
	{ id: 'checkbox-genre-performing-arts', name: 'Darstellende Kunst' },
	{ id: 'checkbox-genre-magic',           name: 'Magie' },
	{ id: 'checkbox-genre-nature-studies',  name: 'Naturkunde' },
	{ id: 'checkbox-genre-philosophy',      name: 'Philosophie' },
	{ id: 'checkbox-genre-psychology',      name: 'Psychologie' },
	{ id: 'checkbox-genre-law',             name: 'Recht' },
	{ id: 'checkbox-genre-religion',        name: 'Religion' },
	{ id: 'checkbox-genre-sport',           name: 'Sport' },
	{ id: 'checkbox-genre-language',        name: 'Sprache' },
	{ id: 'checkbox-genre-ethnology',       name: 'Völkerkunde' },
];

genresInfo.forEach(function (g) {
	var cb = document.getElementById(g.id);
	cb.addEventListener('change', function () { AppState.toggleGenre(g.name, cb.checked); });
});

document.getElementById('btn-select-all-genre').addEventListener('click', function () {
	genresInfo.forEach(function (g) { document.getElementById(g.id).checked = true; });
	AppState.selectAllGenres();
});

document.getElementById('btn-deselect-all-genre').addEventListener('click', function () {
	genresInfo.forEach(function (g) { document.getElementById(g.id).checked = false; });
	AppState.deselectAllGenres();
});
