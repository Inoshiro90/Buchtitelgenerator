// Array mit den Checkbox-IDs und den entsprechenden Beschreibungen
let descriptionsInfo = [
	{id: 'checkbox-description-author', name: 'Autor'},
	{id: 'checkbox-description-page-count', name: 'Seitenanzahl'},
	{id: 'checkbox-description-book-edition', name: 'Auflage'},	
	{id: 'checkbox-description-book-age', name: 'Alter'},
	{id: 'checkbox-description-book-language', name: 'Sprache'},
	{id: 'checkbox-description-book-tags', name: 'Schlagwörter'},
	{id: 'checkbox-description-book-size', name: 'Buchgröße'},
	{id: 'checkbox-description-page-material', name: 'Seitenmaterial'},
	{id: 'checkbox-description-book-weight', name: 'Gewicht'},
	{id: 'checkbox-description-book-condition', name: 'Buchzustand'},
	{id: 'checkbox-description-book-value', name: 'Buchwert'},
	{id: 'checkbox-description-book-binding', name: 'Buchbindung'},
	{id: 'checkbox-description-cover-material', name: 'Material des Einbands'},
	{id: 'checkbox-description-cover-color', name: 'Farbe des Einbands'},
	{id: 'checkbox-description-cover-detail', name: 'Detail des Einbands'},
	{id: 'checkbox-description-text-quality', name: 'Textqualität'},
	{id: 'checkbox-description-text-production', name: 'Produktionsart des Texts'},
	{id: 'checkbox-description-image-number', name: 'Anzahl der Bilder'},
	{id: 'checkbox-description-image-quality', name: 'Qualität der Bilder'},
	{id: 'checkbox-description-image-size', name: 'Größe der Bilder'},
	{id: 'checkbox-description-image-color', name: 'Farbe der Bilder'},
	{id: 'checkbox-description-image-style', name: 'Stil der Bilder'},	
	{id: 'checkbox-description-bookmark', name: 'Lesezeichen'},	
	{id: 'checkbox-description-quirk', name: 'Eigenart'},
];

// Initialisiere die Variable mit allen Beschreibungen
let selectedDescription = descriptionsInfo.map(function (description) {
	return description.name;
});

// Funktion zur Überprüfung und Aktualisierung der ausgewählten Beschreibungen für eine Checkbox
function updateSelectedDescription(checkboxId, descriptionName) {
	let checkbox = document.getElementById(checkboxId);

	checkbox.addEventListener('change', function () {
		if (
			checkbox.checked &&
			selectedDescription.indexOf(descriptionName) === -1
		) {
			// Füge die ausgewählte Beschreibung zum Array hinzu (nur wenn sie noch nicht vorhanden ist)
			selectedDescription.push(descriptionName);
		} else if (!checkbox.checked) {
			// Entferne die ausgewählte Beschreibung aus dem Array
			let index = selectedDescription.indexOf(descriptionName);
			if (index !== -1) {
				selectedDescription.splice(index, 1);
			}
		}

		// Gib das aktualisierte Array der ausgewählten Beschreibungen aus
		// console.log(
		// 	'Folgende Werte befinden sich im Array selectedDescription:',
		// 	selectedDescription
		// );
	});
}

// Funktion zum Hinzufügen von Event-Listenern für alle Checkboxen der Beschreibungen
function addEventListenersForDescriptions() {
	// Füge Event-Listener für jede Checkbox hinzu
	descriptionsInfo.forEach(function (description) {
		updateSelectedDescription(description.id, description.name);
	});

	// Beispiel: Event-Listener für 'Alle auswählen' und 'Alle abwählen' Buttons
	document
		.getElementById('btn-select-all-description')
		.addEventListener('click', function () {
			// Setze alle Checkboxen auf den nicht ausgewählten Zustand
			descriptionsInfo.forEach(function (description) {
				document.getElementById(description.id).checked = false;
			});

			// Leere das Array der ausgewählten Beschreibungen
			selectedDescription = [];

			// Setze alle Checkboxen auf den ausgewählten Zustand
			descriptionsInfo.forEach(function (description) {
				let checkbox = document.getElementById(description.id);
				checkbox.checked = true;
				// Füge die ausgewählte Beschreibung zum Array hinzu (nur wenn sie noch nicht vorhanden ist)
				if (selectedDescription.indexOf(description.name) === -1) {
					selectedDescription.push(description.name);
				}
			});

			// Gib das aktualisierte Array der ausgewählten Beschreibungen aus
			// console.log(
			// 	'Folgende Werte befinden sich im Array selectedDescription:',
			// 	selectedDescription
			// );
		});

	document
		.getElementById('btn-deselect-all-description')
		.addEventListener('click', function () {
			// Setze alle Checkboxen auf den nicht ausgewählten Zustand
			descriptionsInfo.forEach(function (description) {
				document.getElementById(description.id).checked = false;
			});

			// Leere das Array der ausgewählten Beschreibungen
			selectedDescription = [];

			// Gib das aktualisierte Array der ausgewählten Beschreibungen aus
			// console.log(
			// 	'Folgende Werte befinden sich im Array selectedDescription:',
			// 	selectedDescription
			// );
		});
}

// Funktion zum Abrufen der ausgewählten Beschreibungen
function getSelectedDescription() {
	return selectedDescription;
}

// Rufe die Funktion auf, um Event-Listener für alle Checkboxen der Beschreibungen hinzuzufügen
addEventListenersForDescriptions();