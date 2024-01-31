//Bestimmt den Qualität des Textes
function generateRandomTextQuality() {
	const randomNumber = d20();
	let textQuality;

	if (randomNumber <= 1) {
		textQuality = 'wertlos';
	} else if (randomNumber <= 2) {
		textQuality = 'unbrauchbar';
	} else if (randomNumber <= 4) {
		textQuality = 'schlecht';
	} else if (randomNumber <= 6) {
		textQuality = 'mäßig';
	} else if (randomNumber <= 8) {
		textQuality = 'unterdurchschnittlich';
	} else if (randomNumber <= 12) {
		textQuality = 'durchschnittlich';
	} else if (randomNumber <= 14) {
		textQuality = 'überdurchschnittlich';
	} else if (randomNumber <= 16) {
		textQuality = 'sehr gut';
	} else if (randomNumber <= 18) {
		textQuality = 'ausgezeichnet';
	} else if (randomNumber <= 19) {
		textQuality = 'unglaublich';
	} else {
		textQuality = 'unübertrefflich';
	}
	return textQuality;
}
