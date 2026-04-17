import { AppState } from '../state.js';

var settingsInfo = [
	{ id: 'checkbox-setting-dragonlance',      name: 'Drachenlanze' },
	{ id: 'checkbox-setting-eberron',          name: 'Eberron' },
	{ id: 'checkbox-setting-exandria',         name: 'Exandria' },
	{ id: 'checkbox-setting-greyhawk',         name: 'Greyhawk' },
	{ id: 'checkbox-setting-ravenloft',        name: 'Ravenloft' },
	{ id: 'checkbox-setting-ravnica',          name: 'Ravnica' },
	{ id: 'checkbox-setting-spelljammer',      name: 'Spelljammer' },
	{ id: 'checkbox-setting-strixhaven',       name: 'Strixhaven' },
	{ id: 'checkbox-setting-theros',           name: 'Theros' },
	{ id: 'checkbox-setting-forgotten-realms', name: 'Vergessene Reiche' },
];

settingsInfo.forEach(function (s) {
	var cb = document.getElementById(s.id);
	cb.addEventListener('change', function () { AppState.toggleSetting(s.name, cb.checked); });
});

document.getElementById('btn-select-all-setting').addEventListener('click', function () {
	settingsInfo.forEach(function (s) { document.getElementById(s.id).checked = true; });
	AppState.selectAllSettings();
});

document.getElementById('btn-deselect-all-setting').addEventListener('click', function () {
	settingsInfo.forEach(function (s) { document.getElementById(s.id).checked = false; });
	AppState.deselectAllSettings();
});
