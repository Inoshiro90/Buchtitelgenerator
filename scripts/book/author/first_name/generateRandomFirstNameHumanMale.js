function generateRandomFirstNameHumanMale(region) {
	switch (region) {
		case 'germanisch':
			return generateRandomFirstNameHumanMaleGermanic();
		case 'slawisch':
			return generateRandomFirstNameHumanMaleSlavic();
		case 'romanisch':
			return generateRandomFirstNameHumanMaleRomanesque();
		case 'skandinavisch':
			return generateRandomFirstNameHumanMaleScandinavian();
		case 'keltisch':
			return generateRandomFirstNameHumanMaleCeltic();
		case 'griechisch':
			return generateRandomFirstNameHumanMaleGreek();
		case 'arabisch':
			return generateRandomFirstNameHumanMaleArabic();
		case 'persisch':
			return generateRandomFirstNameHumanMalePersian();
		case 'bantuisch':
			return generateRandomFirstNameHumanMaleBantu();
		case 'ägyptisch':
			return generateRandomFirstNameHumanMaleEgyptian();
		case 'meso-amerikanisch':
			return generateRandomFirstNameHumanMaleMesoAmerican();
		case 'polynesisch':
			return generateRandomFirstNameHumanMalePolynesian();
		case 'indisch':
			return generateRandomFirstNameHumanMaleIndian();
		case 'chinesisch':
			return generateRandomFirstNameHumanMaleChinese();
		case 'japanisch':
			return generateRandomFirstNameHumanMaleJapanese();
		default:
			console.error('Ungültige Region:', region);
	}
}
