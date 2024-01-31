function generateRandomImageQuality() {
	const randomNumber = d20();
	let imageQuality;

	if (randomNumber <= 1) {
		imageQuality = 'wertlos';
	} else if (randomNumber <= 2) {
		imageQuality = 'unbrauchbar';
	} else if (randomNumber <= 4) {
		imageQuality = 'schlecht';
	} else if (randomNumber <= 6) {
		imageQuality = 'mäßig';
	} else if (randomNumber <= 8) {
		imageQuality = 'unterdurchschnittlich';
	} else if (randomNumber <= 12) {
		imageQuality = 'durchschnittlich';
	} else if (randomNumber <= 14) {
		imageQuality = 'überdurchschnittlich';
	} else if (randomNumber <= 16) {
		imageQuality = 'sehr gut';
	} else if (randomNumber <= 18) {
		imageQuality = 'ausgezeichnet';
	} else if (randomNumber <= 19) {
		imageQuality = 'unglaublich';
	} else {
		imageQuality = 'unübertrefflich';
	}
	return imageQuality;
}
