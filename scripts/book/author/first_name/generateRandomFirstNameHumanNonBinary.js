function generateRandomFirstNameHumanNonBinary(region) {
	switch (region) {
		case 'germanisch':
			return generateRandomFirstNameHumanNonBinaryGermanic();
		case 'slawisch':
			return generateRandomFirstNameHumanNonBinarySlavic();
		case 'romanisch':
			return generateRandomFirstNameHumanNonBinaryRomanesque();
		case 'skandinavisch':
			return generateRandomFirstNameHumanNonBinaryScandinavian();
		case 'keltisch':
			return generateRandomFirstNameHumanNonBinaryCeltic();
		case 'griechisch':
			return generateRandomFirstNameHumanNonBinaryGreek();
		case 'arabisch':
			return generateRandomFirstNameHumanNonBinaryArabic();
		case 'persisch':
			return generateRandomFirstNameHumanNonBinaryPersian();
		case 'bantuisch':
			return generateRandomFirstNameHumanNonBinaryBantu();
		case 'ägyptisch':
			return generateRandomFirstNameHumanNonBinaryEgyptian();
		case 'meso-amerikanisch':
			return generateRandomFirstNameHumanNonBinaryMesoAmerican();
		case 'polynesisch':
			return generateRandomFirstNameHumanNonBinaryPolynesian();
		case 'indisch':
			return generateRandomFirstNameHumanNonBinaryIndian();
		case 'chinesisch':
			return generateRandomFirstNameHumanNonBinaryChinese();
		case 'japanisch':
			return generateRandomFirstNameHumanNonBinaryJapanese();
		default:
			console.error('Ungültige Region:', region);
	}
}

