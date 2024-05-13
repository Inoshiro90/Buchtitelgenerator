function generateRandomFirstNameHumanFemale(region) {
	switch (region) {
		case 'germanisch':
			return generateRandomFirstNameHumanFemaleGermanic();
		case 'slawisch':
			return generateRandomFirstNameHumanFemaleSlavic();
		case 'romanisch':
			return generateRandomFirstNameHumanFemaleRomanesque();
		case 'skandinavisch':
			return generateRandomFirstNameHumanFemaleScandinavian();
		case 'keltisch':
			return generateRandomFirstNameHumanFemaleCeltic();
		case 'griechisch':
			return generateRandomFirstNameHumanFemaleGreek();
		case 'arabisch':
			return generateRandomFirstNameHumanFemaleArabic();
		case 'persisch':
			return generateRandomFirstNameHumanFemalePersian();
		case 'bantuisch':
			return generateRandomFirstNameHumanFemaleBantu();
		case 'ägyptisch':
			return generateRandomFirstNameHumanFemaleEgyptian();
		case 'meso-amerikanisch':
			return generateRandomFirstNameHumanFemaleMesoAmerican();
		case 'polynesisch':
			return generateRandomFirstNameHumanFemalePolynesian();
		case 'indisch':
			return generateRandomFirstNameHumanFemaleIndian();
		case 'chinesisch':
			return generateRandomFirstNameHumanFemaleChinese();
		case 'japanisch':
			return generateRandomFirstNameHumanFemaleJapanese();
		default:
			console.error('Ungültige Region:', region);
	}
}