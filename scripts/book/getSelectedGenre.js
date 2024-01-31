// Array mit den Checkbox-IDs und den entsprechenden Genres
let genresInfo = [
	{id: 'checkbox-genre-fiction', name: 'Belletristik'},
	{id: 'checkbox-genre-biography', name: 'Biographie'},
	{id: 'checkbox-genre-leisure', name: 'Freizeit'},
	{id: 'checkbox-genre-geography', name: 'Geographie'},
	{id: 'checkbox-genre-history', name: 'Geschichte'},
	{id: 'checkbox-genre-craft', name: 'Handwerk'},
	{id: 'checkbox-genre-medicine', name: 'Heilkunde'},
	{id: 'checkbox-genre-childrens-book', name: 'Kinderbuch'},
	{id: 'checkbox-genre-culinary-arts', name: 'Kochkunst'},
	{id: 'checkbox-genre-fine-arts', name: 'Bildende Kunst'},
	{id: 'checkbox-genre-performing-arts', name: 'Darstellende Kunst'},
	{id: 'checkbox-genre-magic', name: 'Magie'},
	{id: 'checkbox-genre-nature-studies', name: 'Naturkunde'},
	{id: 'checkbox-genre-philosophy', name: 'Philosophie'},
	{id: 'checkbox-genre-psychology', name: 'Psychologie'},
	{id: 'checkbox-genre-law', name: 'Recht'},
	{id: 'checkbox-genre-religion', name: 'Religion'},
	{id: 'checkbox-genre-sport', name: 'Sport'},
	{id: 'checkbox-genre-language', name: 'Sprache'},
	{id: 'checkbox-genre-ethnology', name: 'Völkerkunde'},
];

// Initialisiere die Variable mit allen Genres
let selectedGenre = genresInfo.map(function (genre) {
	return genre.name;
});

// Funktion zur Überprüfung und Aktualisierung der ausgewählten Genres für eine Checkbox
function updateSelectedGenre(checkboxId, genreName) {
	let checkbox = document.getElementById(checkboxId);

	checkbox.addEventListener('change', function () {
		if (checkbox.checked && selectedGenre.indexOf(genreName) === -1) {
			// Füge das ausgewählte Genre zum Array hinzu (nur wenn es noch nicht vorhanden ist)
			selectedGenre.push(genreName);
		} else if (!checkbox.checked) {
			// Entferne das ausgewählte Genre aus dem Array
			let index = selectedGenre.indexOf(genreName);
			if (index !== -1) {
				selectedGenre.splice(index, 1);
			}
		}

		// Sortiere das Array alphabetisch
		selectedGenre.sort();

		// Gib das aktualisierte Array der ausgewählten Genres aus
		// console.log(
		// 	'Folgende Werte befinden sich im Array selectedGenre:',
		// 	selectedGenre
		// );
	});
}

// Funktion zum Hinzufügen von Event-Listenern für alle Checkboxen der Genres
function addEventListenersForGenres() {
	// Füge Event-Listener für jede Checkbox hinzu
	genresInfo.forEach(function (genre) {
		updateSelectedGenre(genre.id, genre.name);
	});

	// Beispiel: Event-Listener für 'Alle auswählen' und 'Alle abwählen' Buttons
	document
		.getElementById('btn-select-all-genre')
		.addEventListener('click', function () {
			// Setze alle Checkboxen auf den nicht ausgewählten Zustand
			genresInfo.forEach(function (genre) {
				document.getElementById(genre.id).checked = false;
			});

			// Leere das Array der ausgewählten Genres
			selectedGenre = [];

			// Setze alle Checkboxen auf den ausgewählten Zustand
			genresInfo.forEach(function (genre) {
				let checkbox = document.getElementById(genre.id);
				checkbox.checked = true;
				// Füge das ausgewählte Genre zum Array hinzu (nur wenn es noch nicht vorhanden ist)
				if (selectedGenre.indexOf(genre.name) === -1) {
					selectedGenre.push(genre.name);
				}
			});

			// Sortiere das Array alphabetisch
			selectedGenre.sort();

			// Gib das aktualisierte Array der ausgewählten Genres aus
			// console.log(
			// 	'Folgende Werte befinden sich im Array selectedGenre:',
			// 	selectedGenre
			// );
		});

	document
		.getElementById('btn-deselect-all-genre')
		.addEventListener('click', function () {
			// Setze alle Checkboxen auf den nicht ausgewählten Zustand
			genresInfo.forEach(function (genre) {
				document.getElementById(genre.id).checked = false;
			});

			// Leere das Array der ausgewählten Genres
			selectedGenre = [];

			// Gib das aktualisierte Array der ausgewählten Genres aus
			// console.log(
			// 	'Folgende Werte befinden sich im Array selectedGenre:',
			// 	selectedGenre
			// );
		});
}

// Funktion zum Abrufen der ausgewählten Genres
function getSelectedGenre() {
	return selectedGenre;
}

// Rufe die Funktion auf, um Event-Listener für alle Checkboxen der Genres hinzuzufügen
addEventListenersForGenres();