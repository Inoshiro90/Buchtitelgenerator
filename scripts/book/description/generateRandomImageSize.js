//Bestimmt die Größe der Bilder
function generateRandomImageSize() {
	const randomNumber = d20();
	let imageSize;

	if (randomNumber <= 1) {
		imageSize = 'gesamte Seite bis zum Rand';
	} else if (randomNumber <= 4) {
		imageSize = 'fast die gesamte Seite';
	} else if (randomNumber <= 8) {
		imageSize = 'ein Viertel der Seite';
	} else if (randomNumber <= 12) {
		imageSize = 'die Hälfte der Seite';
	} else if (randomNumber <= 16) {
		imageSize = 'zwei Drittel der Seite';
	} else {
		imageSize = 'weniger als ein Viertel der Seite';
	}
	return imageSize;
}