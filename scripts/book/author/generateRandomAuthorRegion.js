function generateRandomAuthorRegion() {
	const randomNumber = Math.floor(Math.random() * 100) + 1;

	let region;

	// Region basierend auf dem definierten Zahlenbereich auswählen
	if (randomNumber <= 40) {
		region = 'germanisch';
	} else if (randomNumber <= 55) {
		region = 'slawisch';
	} else if (randomNumber <= 70) {
		region = 'romanisch';
	} else if (randomNumber <= 80) {
		region = 'skandinavisch';
	} else if (randomNumber <= 85) {
		region = 'keltisch';
	} else {
		region =  getRandomElement([
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
	return region;
	console.log(`Zufalls-Region: ${region} (Zahl: ${randomNumber})`);
}