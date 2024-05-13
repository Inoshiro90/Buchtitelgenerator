function generateRandomAuthorRegion() {
	const randomNumber = Math.floor(Math.random() * 100) + 1;

	// Region basierend auf dem definierten Zahlenbereich auswählen
	if (randomNumber <= 40) {
		return 'germanisch';
	} else if (randomNumber <= 55) {
		return 'slawisch';
	} else if (randomNumber <= 70) {
		return 'romanisch';
	} else if (randomNumber <= 80) {
		return 'skandinavisch';
	} else if (randomNumber <= 85) {
		return 'keltisch';
	} else {
		return getRandomElement([
			'griechisch',
			'arabisch',
			'persisch',
			'bantuisch',
			'ägyptisch',
			'meso-amerikanisch',
			'polynesisch',
			'indisch',
			'chinesisch',
			'japanisch',
		]);
	}
}