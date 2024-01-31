function generateRandomAuthorLastName(race) {
	let lastName;
	switch (race) {
		case 'Mensch':
			lastName = generateRandomLastNameHuman();
			break;
		case 'Zwerg':
			lastName = generateRandomLastNameDwarf();
			break;
		case 'Elf':
			lastName = generateRandomLastNameElf();
			break;
		case 'Halbling':
			lastName = generateRandomLastNameHalfling();
			break;
		case 'Gnom':
			lastName = generateRandomLastNameGnome();
			break;
		case 'Halbelf':
			let humanSociety = Math.random() < 0.5;
			if (humanSociety) {
				lastName = generateRandomLastNameHuman();
			} else {
				lastName = generateRandomLastNameElf();
			}
			break;
		case 'Halbork':
			lastName = generateRandomLastNameHalfOrc();
			break;
		case 'Drachenblütiger':
			lastName = generateRandomLastNameDragonborn();
			break;
		case 'Tiefling':
			lastName = generateRandomLastNameHuman();
			break;
		default:
			console.error('Ungültiges Volk des Autors:', race);
	}
	return lastName;
}
