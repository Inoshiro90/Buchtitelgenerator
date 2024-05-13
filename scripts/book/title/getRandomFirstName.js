function getRandomFirstName(gender, race, kasus, firstNames) {
	let firstName = {}; // firstName als leere Zeichenkette initialisieren

	switch (gender) {
		case 'maskulinum':
			firstName.genus = 'maskulinum';
			switch (race) {
				case 'Mensch':
					firstName.name = firstNames[0];
					firstName.Volk = 'Mensch';
					break;
				case 'Zwerg':
					firstName.name = firstNames[2];
					firstName.Volk = 'Zwerg';
					break;
				case 'Elf':
					firstName.name = firstNames[4];
					firstName.Volk = 'Elf';
					break;
				case 'Halbling':
					firstName.name = firstNames[6];
					firstName.Volk = 'Halbling';
					break;
				case 'Gnom':
					firstName.name = firstNames[8];
					firstName.Volk = 'Gnom';
					break;
				case 'Halbelf':
					firstName.name = firstNames[10];
					firstName.Volk = 'Halbelf';
					break;
				case 'Halbork':
					firstName.name = firstNames[12];
					firstName.Volk = 'Halbork';
					break;
				case 'Drachenblütiger':
					firstName.name = firstNames[14];
					firstName.Volk = 'Drachenblütiger';
					break;
				case 'Tiefling':
					firstName.name = firstNames[16];
					firstName.Volk = 'Tiefling';
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
					return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
			}
			break;
		case 'femininum':
			firstName.genus = 'femininum';
			switch (race) {
				case 'Mensch':
					firstName.name = firstNames[1];
					firstName.Volk = 'Mensch';
					break;
				case 'Zwerg':
					firstName.name = firstNames[3];
					firstName.Volk = 'Zwerg';
					break;
				case 'Elf':
					firstName.name = firstNames[5];
					firstName.Volk = 'Elf';
					break;
				case 'Halbling':
					firstName.name = firstNames[7];
					firstName.Volk = 'Halbling';
					break;
				case 'Gnom':
					firstName.name = firstNames[9];
					firstName.Volk = 'Gnom';
					break;
				case 'Halbelf':
					firstName.name = firstNames[11];
					firstName.Volk = 'Halbelf';
					break;
				case 'Halbork':
					firstName.name = firstNames[13];
					firstName.Volk = 'Halbork';
					break;
				case 'Drachenblütiger':
					firstName.name = firstNames[15];
					firstName.Volk = 'Drachenblütiger';
					break;
				case 'Tiefling':
					firstName.name = firstNames[17];
					firstName.Volk = 'Tiefling';
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
					return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
			}
			break;
		default:
			console.error('Ungültiges Geschlecht:', gender);
			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
	}

	// Füge den Artikel entsprechend dem Kasus hinzu
	switch (kasus) {
		case 'nominativ':
			firstName.der_die_das = declineDefiniteArticle('singular', 'nominativ', firstName.genus);
			break;
		case 'genitiv':
			firstName.der_die_das = declineDefiniteArticle('singular', 'genitiv', firstName.genus);
			break;
		case 'dativ':
			firstName.der_die_das = declineDefiniteArticle('singular', 'dativ', firstName.genus);
			break;
		case 'akkusativ':
			firstName.der_die_das = declineDefiniteArticle('singular', 'akkusativ', firstName.genus);
			break;
		default:
			console.error('Ungültiger Kasus:', kasus);
	}

	// Überprüfe den Kasus
	if (kasus === 'genitiv') {
		if (
			firstName.name.endsWith('s') ||
			firstName.name.endsWith('x') ||
			firstName.name.endsWith('z') ||
			firstName.name.endsWith('ß')
		) {
			firstName.name += "'";
		} else {
			firstName.name += 's';
		}
	}
	// console.log(gender, race, firstName.name);

	return firstName;
}

// function getRandomFirstName(gender, race, kasus, Vornamen) {
// 	let firstName = ''; // firstName als leere Zeichenkette initialisieren

// 	const races = [
// 		'Mensch',
// 		'Zwerg',
// 		'Elf',
// 		'Halbling',
// 		'Gnom',
// 		'Halbelf',
// 		'Halbork',
// 		'Drachenblütiger',
// 		'Tiefling',
// 	];

// 	if (gender === 'zufällig') {
// 		const randomGenderIndex = Math.floor(Math.random() * 2);
// 		gender = randomGenderIndex === 0 ? 'männlich' : 'weiblich';
// 		firstName.genus = gender === 'männlich' ? 'maskulinum' : 'femininum';
// 	} else if (gender === 'weiblich') {
// 		firstName.genus = 'femininum';
// 	} else if (gender === 'männlich') {
// 		firstName.genus = 'maskulinum';
// 	} else {
// 		// Behandle den Fall, wenn gender weder 'männlich' noch 'weiblich' ist
// 		console.error('Ungültiges Geschlecht:', gender);
// 	}

// 	if (race === 'zufällig') {
// 		const randomRaceIndex = Math.floor(Math.random() * races.length);
// 		race = races[randomRaceIndex];
// 		firstName.Volk = race;
// 	} else if (races.includes(race)) {
// 		// Prüfe, ob das angegebene Volk in der Liste der definierten Völker enthalten ist
// 		firstName.Volk = race;
// 	} else {
// 		// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
// 		console.error('Ungültiges Volk:', race);
// 	}

// 	switch (gender) {
// 		case 'männlich':
// 			switch (race) {
// 				case 'Mensch':
// 					firstName = Vornamen.VornameMenschMännlich;
// 					break;
// 				case 'Zwerg':
// 					firstName = Vornamen.VornameZwergMännlich;
// 					break;
// 				case 'Elf':
// 					firstName = Vornamen.VornameElfMännlich;
// 					break;
// 				case 'Halbling':
// 					firstName = Vornamen.VornameHalblingMännlich;
// 					break;
// 				case 'Gnom':
// 					firstName = Vornamen.VornameGnomMännlich;
// 					break;
// 				case 'Halbelf':
// 					firstName = Vornamen.VornameHalbelfMännlich;
// 					break;
// 				case 'Halbork':
// 					firstName = Vornamen.VornameHalborkMännlich;
// 					break;
// 				case 'Drachenblütiger':
// 					firstName = Vornamen.VornameDrachenblütigerMännlich;
// 					break;
// 				case 'Tiefling':
// 					firstName = Vornamen.VornameTieflingMännlich;
// 					break;
// 				default:
// 					console.error('Ungültiges Volk des Autors:', race);
// 					return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
// 			}
// 			break;
// 		case 'weiblich':
// 			switch (race) {
// 				case 'Mensch':
// 					firstName = Vornamen.VornameMenschWeiblich;
// 					break;
// 				case 'Zwerg':
// 					firstName = Vornamen.VornameZwergWeiblich;
// 					break;
// 				case 'Elf':
// 					firstName = Vornamen.VornameElfWeiblich;
// 					break;
// 				case 'Halbling':
// 					firstName = Vornamen.VornameHalblingWeiblich;
// 					break;
// 				case 'Gnom':
// 					firstName = Vornamen.VornameGnomWeiblich;
// 					break;
// 				case 'Halbelf':
// 					firstName = Vornamen.VornameHalbelfWeiblich;
// 					break;
// 				case 'Halbork':
// 					firstName = Vornamen.VornameHalborkWeiblich;
// 					break;
// 				case 'Drachenblütiger':
// 					firstName = Vornamen.VornameDrachenblütigerWeiblich;
// 					break;
// 				case 'Tiefling':
// 					firstName = Vornamen.VornameTieflingWeiblich;
// 					break;
// 				default:
// 					console.error('Ungültiges Volk des Autors:', race);
// 					return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
// 			}
// 			break;
// 		default:
// 			console.error('Ungültiges Geschlecht:', gender);
// 			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
// 	}

// 	// Überprüfe den Kasus
// 	if (kasus === 'genitiv') {
// 		if (
// 			firstName.endsWith('s') ||
// 			firstName.endsWith('x') ||
// 			firstName.endsWith('z') ||
// 			firstName.endsWith('ß')
// 		) {
// 			firstName += "'";
// 		} else {
// 			firstName += 's';
// 		}
// 	}
// 	console.log(gender, race, firstName);

// 	return firstName;
// }
