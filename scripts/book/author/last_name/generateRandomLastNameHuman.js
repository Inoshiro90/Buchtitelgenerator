function generateRandomLastNameHuman(region) {
	// console.log('Region des Autors in RandomLastNameHuman:', region)
	switch (region) {
		case 'germanisch':
			return generateRandomLastNameHumanGermanic();
		case 'slawisch':
			return generateRandomLastNameHumanSlavic();
		case 'romanisch':
			return generateRandomLastNameHumanRomanesque();
		case 'skandinavisch':
			return generateRandomLastNameHumanScandinavian();
		case 'keltisch':
			return generateRandomLastNameHumanCeltic();
		case 'griechisch':
			return generateRandomLastNameHumanGreek();
		case 'arabisch':
			return generateRandomLastNameHumanArabic();
		case 'persisch':
			return generateRandomLastNameHumanPersian();
		case 'bantuisch':
			return generateRandomLastNameHumanBantu();
		case 'ägyptisch':
			return generateRandomLastNameHumanEgyptian();
		case 'meso-amerikanisch':
			return generateRandomLastNameHumanMesoAmerican();
		case 'polynesisch':
			return generateRandomLastNameHumanPolynesian();
		case 'indisch':
			return generateRandomLastNameHumanIndian();
		case 'chinesisch':
			return generateRandomLastNameHumanChinese();
		case 'japanisch':
			return generateRandomLastNameHumanJapanese();
		default:
			console.error('Ungültige Region:', region);
	}
}