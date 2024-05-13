function getRandomLastName(race, kasus, lastNames) {
	let lastName = {};

	const races = [
		'Mensch',
		'Zwerg',
		'Elf',
		'Halbling',
		'Gnom',
		'Halbelf',
		'Halbork',
		'Drachenblütiger',
		'Tiefling',
	];

	if (race === 'zufällig') {
		const randomRaceIndex = Math.floor(Math.random() * races.length);
		race = races[randomRaceIndex];
		lastName.Volk = race;
	} else if (races.includes(race)) {
		// Prüfe, ob das angegebene Volk in der Liste der definierten Völker enthalten ist
		lastName.Volk = race;
	} else {
		// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
		console.error('Ungültiges Volk:', race);
	}

	switch (race) {
		case 'Mensch':
			lastName.name = lastNames[0];
			break;
		case 'Zwerg':
			lastName.name = lastNames[1];
			break;
		case 'Elf':
			lastName.name = lastNames[2];
			break;
		case 'Halbling':
			lastName.name = lastNames[3];
			break;
		case 'Gnom':
			lastName.name = lastNames[4];
			break;
		case 'Halbelf':
				lastName.name = lastNames[5];
			break;
		case 'Halbork':
			lastName.name = lastNames[6];
			break;
		case 'Drachenblütiger':
			lastName.name = lastNames[7];
			break;
		case 'Tiefling':
			lastName.name = lastNames[8];
			break;
		default:
			console.error('Ungültiges Volk des Autors:', race);
	}
	
	// Überprüfe den Kasus
	if (kasus === 'genitiv') {
		if (
			lastName.name.endsWith('s') ||
			lastName.name.endsWith('x') ||
			lastName.name.endsWith('z') ||
			lastName.name.endsWith('ß')
		) {
			lastName.name += "'";
		} else {
			lastName.name += 's';
		}
	}
	// console.log(race, lastName.name);
	return lastName;
}
