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