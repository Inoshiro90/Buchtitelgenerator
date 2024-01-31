function generateRandomBookLanguage(authorRace) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	let bookLanguage;
	let firstLanguage;

	switch (authorRace) {
		case 'Mensch':
			firstLanguage = 'Gemeinsprache';
			break;
		case 'Zwerg':
			firstLanguage = 'Zwergisch';
			break;
		case 'Elf':
			firstLanguage = 'Elfisch';
			break;
		case 'Halbling':
			firstLanguage = 'Halblingisch';
			break;
		case 'Gnom':
			firstLanguage = 'Gnomisch';
			break;
		case 'Halbelf':
			firstLanguage = Math.random() < 0.5 ? 'Gemeinsprache' : 'Elfisch';
			break;
		case 'Halbork':
			firstLanguage = Math.random() < 0.5 ? 'Gemeinsprache' : 'Orkisch';
			break;
		case 'Drachenblütiger':
			firstLanguage = 'Drakonisch';
			break;
		case 'Tiefling':
			firstLanguage = 'Infernalisch';
			break;
		default:
			console.error('Ungültiges Volk:', authorRace);
			return null;
	}

	// Standardsprachen-Pool
	const standardLanguages = [
		'Gemeinsprache',
		'Zwergisch',
		'Elfisch',
		'Riesisch',
		'Gnomisch',
		'Goblinisch',
		'Halblingisch',
		'Orkisch',
	];

	// Exotische Sprachen-Pool
	const exoticLanguages = [
		'Abyssisch',
		'Celestisch',
		'Tiefensprache',
		'Drakonisch',
		'Infernalisch',
		'Urtümlich',
		'Sylvanisch',
		'Gemeinsprache der Unterreiche',
	];

	// Zufällig eine Zahl zwischen 1 und 100 generieren

	// Sprache basierend auf der Zufallszahl und der Verteilung auswählen
	if (randomNumber <= 60) {
		bookLanguage = 'Gemeinsprache';
	} else if (randomNumber <= 85) {
		bookLanguage = firstLanguage;
	} else if (randomNumber <= 95) {
		const filteredStandardLanguages = standardLanguages.filter(
			(randomLanguage) => randomLanguage !== firstLanguage
		);
		bookLanguage = getRandomElement(filteredStandardLanguages);
	} else {
		const filteredExoticLanguages = exoticLanguages.filter((randomLanguage) => randomLanguage !== firstLanguage);
		bookLanguage = getRandomElement(filteredExoticLanguages);
	}

	return bookLanguage;
}
