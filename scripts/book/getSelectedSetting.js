// Array mit den Checkbox-IDs und den entsprechenden Einstellungen
let settingsInfo = [
	{ id: 'checkbox-setting-dragonlance', name: 'Drachenlanze' },
	{ id: 'checkbox-setting-eberron', name: 'Eberron' },
	{ id: 'checkbox-setting-exandria', name: 'Exandria' },
	{ id: 'checkbox-setting-greyhawk', name: 'Greyhawk' },
	{ id: 'checkbox-setting-ravenloft', name: 'Ravenloft' },
	{ id: 'checkbox-setting-ravnica', name: 'Ravnica' },
	{ id: 'checkbox-setting-spelljammer', name: 'Spelljammer' },
	{ id: 'checkbox-setting-strixhaven', name: 'Strixhaven' },
	{ id: 'checkbox-setting-theros', name: 'Theros' },
	{ id: 'checkbox-setting-forgotten-realms', name: 'Vergessene Reiche' },
];

// Initialisiere die Variable mit allen Einstellungen
let selectedSetting = settingsInfo.map(function (setting) {
	return setting.name;
});

// Funktion zur Überprüfung und Aktualisierung der ausgewählten Einstellungen für eine Checkbox
function updateSelectedSetting(checkboxId, settingName) {
	let checkbox = document.getElementById(checkboxId);

	checkbox.addEventListener('change', function () {
		if (checkbox.checked && selectedSetting.indexOf(settingName) === -1) {
			// Füge die ausgewählte Einstellung zum Array hinzu (nur wenn sie noch nicht vorhanden ist)
			selectedSetting.push(settingName);
		} else if (!checkbox.checked) {
			// Entferne die ausgewählte Einstellung aus dem Array
			let index = selectedSetting.indexOf(settingName);
			if (index !== -1) {
				selectedSetting.splice(index, 1);
			}
		}

		// Sortiere das Array alphabetisch
		selectedSetting.sort();

		// Gib das aktualisierte Array der ausgewählten Einstellungen aus
		// console.log(
		// 	'Folgende Werte befinden sich im Array selectedSetting:',
		// 	selectedSetting
		// );
	});
}

// Funktion zum Hinzufügen von Event-Listenern für alle Checkboxen
function addEventListenersForSettings() {
	// Füge Event-Listener für jede Checkbox hinzu
	settingsInfo.forEach(function (setting) {
		updateSelectedSetting(setting.id, setting.name);
	});

	// Beispiel: Event-Listener für "Alle auswählen" und "Alle abwählen" Buttons
	document
		.getElementById('btn-select-all-setting')
		.addEventListener('click', function () {
			// Setze alle Checkboxen auf den nicht ausgewählten Zustand
			settingsInfo.forEach(function (setting) {
				document.getElementById(setting.id).checked = false;
			});

			// Leere das Array der ausgewählten Einstellungen
			selectedSetting = [];

			// Setze alle Checkboxen auf den ausgewählten Zustand
			settingsInfo.forEach(function (setting) {
				let checkbox = document.getElementById(setting.id);
				checkbox.checked = true;
				// Füge die ausgewählte Einstellung zum Array hinzu (nur wenn sie noch nicht vorhanden ist)
				if (selectedSetting.indexOf(setting.name) === -1) {
					selectedSetting.push(setting.name);
				}
			});

			// Sortiere das Array alphabetisch
			selectedSetting.sort();

			// Gib das aktualisierte Array der ausgewählten Einstellungen aus
			// console.log(
			// 	'Folgende Werte befinden sich im Array selectedSetting:',
			// 	selectedSetting
			// );
		});

	document
		.getElementById('btn-deselect-all-setting')
		.addEventListener('click', function () {
			// Setze alle Checkboxen auf den nicht ausgewählten Zustand
			settingsInfo.forEach(function (setting) {
				document.getElementById(setting.id).checked = false;
			});

			// Leere das Array der ausgewählten Einstellungen
			selectedSetting = [];

			// Gib das aktualisierte Array der ausgewählten Einstellungen aus
			// console.log(
			// 	'Folgende Werte befinden sich im Array selectedSetting:',
			// 	selectedSetting
			// );
		});
}

// Funktion zum Abrufen der ausgewählten Einstellungen und überprüfe, ob 'Universal' enthalten ist, füge es hinzu, falls nicht
function getSelectedSetting() {
	if (!selectedSetting.includes('Universal')) {
		selectedSetting.push('Universal');
	  }
	return selectedSetting;
}

// Rufe die Funktion auf, um Event-Listener für alle Checkboxen hinzuzufügen
addEventListenersForSettings();
