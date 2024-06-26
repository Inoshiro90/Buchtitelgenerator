function getNames() {
	let name = {};

	const region1 = generateRandomAuthorRegion();
	const region2 = generateRandomAuthorRegion();
	const region3 = generateRandomAuthorRegion();

	const VornameMenschMännlich = generateRandomFirstNameHumanMale(region1);
	const VornameMenschWeiblich = generateRandomFirstNameHumanFemale(region1);
	const VornameZwergMännlich = generateRandomFirstNameDwarfMale();
	const VornameZwergWeiblich = generateRandomFirstNameDwarfFemale();
	const VornameElfMännlich = generateRandomFirstNameElfMale();
	const VornameElfWeiblich = generateRandomFirstNameElfFemale();
	const VornameHalblingMännlich = generateRandomFirstNameHalflingMale();
	const VornameHalblingWeiblich = generateRandomFirstNameHalflingFemale();
	const VornameGnomMännlich = generateRandomFirstNameGnomeMale();
	const VornameGnomWeiblich = generateRandomFirstNameGnomeFemale();
	const VornameHalbelfMännlich = generateRandomFirstNameHalfelfMale(region1);
	const VornameHalbelfWeiblich = generateRandomFirstNameHalfelfFemale(region1);

	function generateRandomFirstNameHalfelfMale(region1) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomFirstNameHumanMale(region1);
		} else {
			return generateRandomFirstNameElfMale();
		}
	}

	function generateRandomFirstNameHalfelfFemale(region1) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomFirstNameHumanFemale(region1);
		} else {
			return generateRandomFirstNameElfFemale();
		}
	}

	const VornameHalborkMännlich = generateRandomFirstNameHalfOrcMale();
	const VornameHalborkWeiblich = generateRandomFirstNameHalfOrcFemale();
	const VornameDrachenblütigerMännlich = generateRandomFirstNameDragonbornMale();
	const VornameDrachenblütigerWeiblich = generateRandomFirstNameDragonbornFemale();
	const VornameTieflingMännlich = generateRandomFirstNameTieflingMale(region1);
	const VornameTieflingWeiblich = generateRandomFirstNameTieflingFemale(region1);

	const firstNames = [
		VornameMenschMännlich,
		VornameMenschWeiblich,
		VornameZwergMännlich,
		VornameZwergWeiblich,
		VornameElfMännlich,
		VornameElfWeiblich,
		VornameHalblingMännlich,
		VornameHalblingWeiblich,
		VornameGnomMännlich,
		VornameGnomWeiblich,
		VornameHalbelfMännlich,
		VornameHalbelfWeiblich,
		VornameHalborkMännlich,
		VornameHalborkWeiblich,
		VornameDrachenblütigerMännlich,
		VornameDrachenblütigerWeiblich,
		VornameTieflingMännlich,
		VornameTieflingWeiblich,
	];

	const VornameMenschMännlich2 = generateRandomFirstNameHumanMale(region2);
	const VornameMenschWeiblich2 = generateRandomFirstNameHumanFemale(region2);
	const VornameZwergMännlich2 = generateRandomFirstNameDwarfMale();
	const VornameZwergWeiblich2 = generateRandomFirstNameDwarfFemale();
	const VornameElfMännlich2 = generateRandomFirstNameElfMale();
	const VornameElfWeiblich2 = generateRandomFirstNameElfFemale();
	const VornameHalblingMännlich2 = generateRandomFirstNameHalflingMale();
	const VornameHalblingWeiblich2 = generateRandomFirstNameHalflingFemale();
	const VornameGnomMännlich2 = generateRandomFirstNameGnomeMale();
	const VornameGnomWeiblich2 = generateRandomFirstNameGnomeFemale();
	const VornameHalbelfMännlich2 = generateRandomFirstNameHalfelfMale(region2);
	const VornameHalbelfWeiblich2 = generateRandomFirstNameHalfelfFemale(region2);

	function generateRandomFirstNameHalfelfMale(region2) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomFirstNameHumanMale(region2);
		} else {
			return generateRandomFirstNameElfMale();
		}
	}

	function generateRandomFirstNameHalfelfFemale(region2) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomFirstNameHumanFemale(region2);
		} else {
			return generateRandomFirstNameElfFemale();
		}
	}

	const VornameHalborkMännlich2 = generateRandomFirstNameHalfOrcMale();
	const VornameHalborkWeiblich2 = generateRandomFirstNameHalfOrcFemale();
	const VornameDrachenblütigerMännlich2 = generateRandomFirstNameDragonbornMale();
	const VornameDrachenblütigerWeiblich2 = generateRandomFirstNameDragonbornFemale();
	const VornameTieflingMännlich2 = generateRandomFirstNameTieflingMale(region2);
	const VornameTieflingWeiblich2 = generateRandomFirstNameTieflingFemale(region2);

	const firstNames2 = [
		VornameMenschMännlich2,
		VornameMenschWeiblich2,
		VornameZwergMännlich2,
		VornameZwergWeiblich2,
		VornameElfMännlich2,
		VornameElfWeiblich2,
		VornameHalblingMännlich2,
		VornameHalblingWeiblich2,
		VornameGnomMännlich2,
		VornameGnomWeiblich2,
		VornameHalbelfMännlich2,
		VornameHalbelfWeiblich2,
		VornameHalborkMännlich2,
		VornameHalborkWeiblich2,
		VornameDrachenblütigerMännlich2,
		VornameDrachenblütigerWeiblich2,
		VornameTieflingMännlich2,
		VornameTieflingWeiblich2,
	];

	const VornameMenschMännlich3 = generateRandomFirstNameHumanMale(region3);
	const VornameMenschWeiblich3 = generateRandomFirstNameHumanFemale(region3);
	const VornameZwergMännlich3 = generateRandomFirstNameDwarfMale();
	const VornameZwergWeiblich3 = generateRandomFirstNameDwarfFemale();
	const VornameElfMännlich3 = generateRandomFirstNameElfMale();
	const VornameElfWeiblich3 = generateRandomFirstNameElfFemale();
	const VornameHalblingMännlich3 = generateRandomFirstNameHalflingMale();
	const VornameHalblingWeiblich3 = generateRandomFirstNameHalflingFemale();
	const VornameGnomMännlich3 = generateRandomFirstNameGnomeMale();
	const VornameGnomWeiblich3 = generateRandomFirstNameGnomeFemale();
	const VornameHalbelfMännlich3 = generateRandomFirstNameHalfelfMale(region3);
	const VornameHalbelfWeiblich3 = generateRandomFirstNameHalfelfFemale(region3);

	function generateRandomFirstNameHalfelfMale(region3) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomFirstNameHumanMale(region3);
		} else {
			return generateRandomFirstNameElfMale();
		}
	}

	function generateRandomFirstNameHalfelfFemale(region3) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomFirstNameHumanFemale(region3);
		} else {
			return generateRandomFirstNameElfFemale();
		}
	}

	const VornameHalborkMännlich3 = generateRandomFirstNameHalfOrcMale();
	const VornameHalborkWeiblich3 = generateRandomFirstNameHalfOrcFemale();
	const VornameDrachenblütigerMännlich3 = generateRandomFirstNameDragonbornMale();
	const VornameDrachenblütigerWeiblich3 = generateRandomFirstNameDragonbornFemale();
	const VornameTieflingMännlich3 = generateRandomFirstNameTieflingMale(region3);
	const VornameTieflingWeiblich3 = generateRandomFirstNameTieflingFemale(region3);

	const firstNames3 = [
		VornameMenschMännlich3,
		VornameMenschWeiblich3,
		VornameZwergMännlich3,
		VornameZwergWeiblich3,
		VornameElfMännlich3,
		VornameElfWeiblich3,
		VornameHalblingMännlich3,
		VornameHalblingWeiblich3,
		VornameGnomMännlich3,
		VornameGnomWeiblich3,
		VornameHalbelfMännlich3,
		VornameHalbelfWeiblich3,
		VornameHalborkMännlich3,
		VornameHalborkWeiblich3,
		VornameDrachenblütigerMännlich3,
		VornameDrachenblütigerWeiblich3,
		VornameTieflingMännlich3,
		VornameTieflingWeiblich3,
	];

	//Nachnamen
	const NachnameMensch = generateRandomLastNameHuman(region1);
	const NachnameZwerg = generateRandomLastNameDwarf();
	const NachnameElf = generateRandomLastNameElf();
	const NachnameHalbling = generateRandomLastNameHalfling();
	const NachnameGnom = generateRandomLastNameGnome();
	const NachnameHalbelf = generateRandomLastNameHalfelf(region1);

	function generateRandomLastNameHalfelf(region1) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomLastNameHuman(region1);
		} else {
			return generateRandomLastNameElf();
		}
	}

	const NachnameHalbork = generateRandomLastNameHalfOrc();
	const NachnameDrachenblütiger = generateRandomLastNameDragonborn();
	const NachnameTiefling = generateRandomLastNameHuman(region1);

	const lastNames = [
		NachnameMensch,
		NachnameZwerg,
		NachnameElf,
		NachnameGnom,
		NachnameHalbling,
		NachnameHalbelf,
		NachnameHalbork,
		NachnameDrachenblütiger,
		NachnameTiefling,
	];

	const NachnameMensch2 = generateRandomLastNameHuman(region2);
	const NachnameZwerg2 = generateRandomLastNameDwarf();
	const NachnameElf2 = generateRandomLastNameElf();
	const NachnameHalbling2 = generateRandomLastNameHalfling();
	const NachnameGnom2 = generateRandomLastNameGnome();
	const NachnameHalbelf2 = generateRandomLastNameHalfelf(region2);

	function generateRandomLastNameHalfelf(region2) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomLastNameHuman(region2);
		} else {
			return generateRandomLastNameElf();
		}
	}

	const NachnameHalbork2 = generateRandomLastNameHalfOrc();
	const NachnameDrachenblütiger2 = generateRandomLastNameDragonborn();
	const NachnameTiefling2 = generateRandomLastNameHuman(region2);

	const lastNames2 = [
		NachnameMensch2,
		NachnameZwerg2,
		NachnameElf2,
		NachnameGnom2,
		NachnameHalbling2,
		NachnameHalbelf2,
		NachnameHalbork2,
		NachnameDrachenblütiger2,
		NachnameTiefling2,
	];

	const NachnameMensch3 = generateRandomLastNameHuman(region3);
	const NachnameZwerg3 = generateRandomLastNameDwarf();
	const NachnameElf3 = generateRandomLastNameElf();
	const NachnameHalbling3 = generateRandomLastNameHalfling();
	const NachnameGnom3 = generateRandomLastNameGnome();
	const NachnameHalbelf3 = generateRandomLastNameHalfelf(region3);

	function generateRandomLastNameHalfelf(region3) {
		let humanSociety = Math.random() < 0.5;
		if (humanSociety) {
			return generateRandomLastNameHuman(region3);
		} else {
			return generateRandomLastNameElf();
		}
	}

	const NachnameHalbork3 = generateRandomLastNameHalfOrc();
	const NachnameDrachenblütiger3 = generateRandomLastNameDragonborn();
	const NachnameTiefling3 = generateRandomLastNameHuman(region3);

	const lastNames3 = [
		NachnameMensch3,
		NachnameZwerg3,
		NachnameElf3,
		NachnameGnom3,
		NachnameHalbling3,
		NachnameHalbelf3,
		NachnameHalbork3,
		NachnameDrachenblütiger3,
		NachnameTiefling3,
	];

	let previousGenus = null;
	let previousRace = null;

	function Vorname(genus, race, kasus) {
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

		// Wenn genus und race zufällig gewählt werden sollen
		if (genus === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für genus gibt, verwende ihn
			if (previousGenus !== null) {
				genus = previousGenus;
			} else {
				const randomGenderIndex = Math.floor(Math.random() * 2);
				genus = randomGenderIndex === 0 ? 'männlich' : 'weiblich';
				genus = genus === 'männlich' ? 'maskulinum' : 'femininum';
				previousGenus = genus; // Speichere den aktuellen Wert von genus
			}
		} else if (genus === 'weiblich') {
			genus = 'femininum';
		} else if (genus === 'männlich') {
			genus = 'maskulinum';
		} else {
			// Behandle den Fall, wenn genus weder 'männlich' noch 'weiblich' ist
			console.error('Ungültiges Geschlecht:', genus);
		}

		if (race === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für race gibt, verwende ihn
			if (previousRace !== null) {
				race = previousRace;
			} else {
				const randomRaceIndex = Math.floor(Math.random() * races.length);
				race = races[randomRaceIndex];
				previousRace = race; // Speichere den aktuellen Wert von race
			}
		} else if (!races.includes(race)) {
			// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
			console.error('Ungültiges Volk:', race);
			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
		}

		return getRandomFirstName(genus, race, kasus, firstNames);
	}

	function Nachname(race, kasus) {
		if (race === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für race gibt, verwende ihn
			if (previousRace !== null) {
				race = previousRace;
			} else {
				const randomRaceIndex = Math.floor(Math.random() * races.length);
				race = races[randomRaceIndex];
				previousRace = race; // Speichere den aktuellen Wert von race
			}
		} else if (!races.includes(race)) {
			// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
			console.error('Ungültiges Volk:', race);
			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
		}
		return getRandomLastName(race, kasus, lastNames);
	}

	let previousGenus2 = null;
	let previousRace2 = null;

	function Vorname2(genus, race, kasus) {
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

		// Wenn genus und race zufällig gewählt werden sollen
		if (genus === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für genus gibt, verwende ihn
			if (previousGenus2 !== null) {
				genus = previousGenus2;
			} else {
				const randomGenderIndex = Math.floor(Math.random() * 2);
				genus = randomGenderIndex === 0 ? 'männlich' : 'weiblich';
				genus = genus === 'männlich' ? 'maskulinum' : 'femininum';
				previousGenus2 = genus; // Speichere den aktuellen Wert von genus
			}
		} else if (genus === 'weiblich') {
			genus = 'femininum';
		} else if (genus === 'männlich') {
			genus = 'maskulinum';
		} else {
			// Behandle den Fall, wenn genus weder 'männlich' noch 'weiblich' ist
			console.error('Ungültiges Geschlecht:', genus);
		}

		if (race === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für race gibt, verwende ihn
			if (previousRace2 !== null) {
				race = previousRace2;
			} else {
				const randomRaceIndex = Math.floor(Math.random() * races.length);
				race = races[randomRaceIndex];
				previousRace2 = race; // Speichere den aktuellen Wert von race
			}
		} else if (!races.includes(race)) {
			// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
			console.error('Ungültiges Volk:', race);
			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
		}

		return getRandomFirstName(genus, race, kasus, firstNames2);
	}

	function Nachname2(race, kasus) {
		if (race === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für race gibt, verwende ihn
			if (previousRace2 !== null) {
				race = previousRace2;
			} else {
				const randomRaceIndex = Math.floor(Math.random() * races.length);
				race = races[randomRaceIndex];
				previousRace2 = race; // Speichere den aktuellen Wert von race
			}
		} else if (!races.includes(race)) {
			// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
			console.error('Ungültiges Volk:', race);
			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
		}

		return getRandomLastName(race, kasus, lastNames2);
	}
	let previousGenus3 = null;
	let previousRace3 = null;

	function Vorname3(genus, race, kasus) {
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

		// Wenn genus und race zufällig gewählt werden sollen
		if (genus === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für genus gibt, verwende ihn
			if (previousGenus3 !== null) {
				genus = previousGenus3;
			} else {
				const randomGenderIndex = Math.floor(Math.random() * 2);
				genus = randomGenderIndex === 0 ? 'männlich' : 'weiblich';
				genus = genus === 'männlich' ? 'maskulinum' : 'femininum';
				previousGenus3 = genus; // Speichere den aktuellen Wert von genus
			}
		} else if (genus === 'weiblich') {
			genus = 'femininum';
		} else if (genus === 'männlich') {
			genus = 'maskulinum';
		} else {
			// Behandle den Fall, wenn genus weder 'männlich' noch 'weiblich' ist
			console.error('Ungültiges Geschlecht:', genus);
		}

		if (race === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für race gibt, verwende ihn
			if (previousRace3 !== null) {
				race = previousRace3;
			} else {
				const randomRaceIndex = Math.floor(Math.random() * races.length);
				race = races[randomRaceIndex];
				previousRace3 = race; // Speichere den aktuellen Wert von race
			}
		} else if (!races.includes(race)) {
			// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
			console.error('Ungültiges Volk:', race);
			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
		}

		return getRandomFirstName(genus, race, kasus, firstNames);
	}

	function Nachname3(race, kasus) {
		if (race === 'zufällig') {
			// Wenn es bereits einen vorherigen Wert für race gibt, verwende ihn
			if (previousRace3 !== null) {
				race = previousRace3;
			} else {
				const randomRaceIndex = Math.floor(Math.random() * races.length);
				race = races[randomRaceIndex];
				previousRace3 = race; // Speichere den aktuellen Wert von race
			}
		} else if (!races.includes(race)) {
			// Behandle den Fall, wenn race weder 'zufällig' noch eines der definierten Völker ist
			console.error('Ungültiges Volk:', race);
			return ''; // Rückgabeanweisung, um einen leeren Vornamen zurückzugeben
		}

		return getRandomLastName(race, kasus, lastNames3);
	}

	name = {
		Vorname,
		Vorname2,
		Vorname3,
		Nachname,
		Nachname2,
		Nachname3,
	};

	return name;
}
