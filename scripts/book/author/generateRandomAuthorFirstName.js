function generateRandomAuthorFirstName(gender, race) {
	let firstName;

	switch (gender) {
		case 'männlich':
			switch (race) {
				case 'Mensch':
					firstName = generateRandomFirstNameHumanMale();
					break;
				case 'Zwerg':
					firstName = generateRandomFirstNameDwarfMale();
					break;
				case 'Elf':
					firstName = generateRandomFirstNameElfMale();
					break;
				case 'Halbling':
					firstName = generateRandomFirstNameHalflingMale();
					break;
				case 'Gnom':
					firstName = generateRandomFirstNameGnomeMale();
					break;
				case 'Halbelf':
					let humanSociety = Math.random() < 0.5;
					if (humanSociety) {
						firstName = generateRandomFirstNameHumanMale();
					} else {
						firstName = generateRandomFirstNameElfMale();
					}
					break;
				case 'Halbork':
					firstName = generateRandomFirstNameHalfOrcMale();
					break;
				case 'Drachenblütiger':
					firstName = generateRandomFirstNameDragonbornMale();
					break;
				case 'Tiefling':
					firstName = generateRandomFirstNameTieflingMale();
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
			}
			break;
		case 'weiblich':
			switch (race) {
				case 'Mensch':
					firstName = generateRandomFirstNameHumanFemale();
					break;
				case 'Zwerg':
					firstName = generateRandomFirstNameDwarfFemale();
					break;
				case 'Elf':
					firstName = generateRandomFirstNameElfFemale();
					break;
				case 'Halbling':
					firstName = generateRandomFirstNameHalflingFemale();
					break;
				case 'Gnom':
					firstName = generateRandomFirstNameGnomeFemale();
					break;
				case 'Halbelf':
					let humanSociety = Math.random() < 0.5;
					if (humanSociety) {
						firstName = generateRandomFirstNameHumanFemale();
					} else {
						firstName = generateRandomFirstNameElfFemale();
					}
					break;
				case 'Halbork':
					firstName = generateRandomFirstNameHalfOrcFemale();
					break;
				case 'Drachenblütiger':
					firstName = generateRandomFirstNameDragonbornFemale();
					break;
				case 'Tiefling':
					firstName = generateRandomFirstNameTieflingFemale();
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
			}
			break;
		case 'nicht-binär':
			switch (race) {
				case 'Mensch':
					firstName = generateRandomFirstNameHumanNonBinary();
					break;
				case 'Zwerg':
					firstName = generateRandomFirstNameDwarfNonBinary();
					break;
				case 'Elf':
					firstName = generateRandomFirstNameElfNonBinary();
					break;
				case 'Halbling':
					firstName = generateRandomFirstNameHalflingNonBinary();
					break;
				case 'Gnom':
					firstName = generateRandomFirstNameGnomeNonBinary();
					break;
				case 'Halbelf':
					let humanSociety = Math.random() < 0.5;
					if (humanSociety) {
						firstName = generateRandomFirstNameHumanNonBinary();
					} else {
						firstName = generateRandomFirstNameElfNonBinary();
					}
					break;
				case 'Halbork':
					firstName = generateRandomFirstNameHalfOrcNonBinary();
					break;
				case 'Drachenblütiger':
					firstName = generateRandomFirstNameDragonbornNonBinary();
					break;
				case 'Tiefling':
					firstName = generateRandomFirstNameTieflingNonBinary();
					break;
				default:
					console.error('Ungültiges Volk des Autors:', race);
			}
			break;

		default:
			console.error('Ungültiges Geschlecht des Autors:', gender);
	}
	return firstName;
}
