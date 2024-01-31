function generateRandomImageNumber() {
	const randomNumber = d20();
	let imageNumber;

	if (randomNumber <= 1) {
		imageNumber = 'keine Bilder';
	} else if (randomNumber <= 3) {
		imageNumber = 'ein Bild, das sich auf dem Einband befindet';
	} else if (randomNumber <= 5) {
		imageNumber = 'ein Bild, das sich auf der Titelseite befindet';
	} else if (randomNumber <= 9) {
		imageNumber = 'ein Bild am Beginn jedes Kapitels';
	} else if (randomNumber <= 11) {
		const imgnmb = Math.floor(Math.random() * 2) + 1;
		imageNumber = `${
			imgnmb <= 12
				? imgnmb === 1
					? 'ein Bild'
					: numToWords(imgnmb) + ' Bilder'
				: imgnmb + ' Bilder'
		} pro Kapitel`;
	} else if (randomNumber <= 13) {
		const imgnmb = Math.floor(Math.random() * 3) + 1;
		imageNumber = `${
			imgnmb <= 12
				? imgnmb === 1
					? 'ein Bild'
					: numToWords(imgnmb) + ' Bilder'
				: imgnmb + ' Bilder'
		} pro Kapitel`;
	} else if (randomNumber <= 15) {
		const imgnmb = Math.floor(Math.random() * 6) + 1;
		imageNumber = `${
			imgnmb <= 12
				? imgnmb === 1
					? 'ein Bild'
					: numToWords(imgnmb) + ' Bilder'
				: imgnmb + ' Bilder'
		} im gesamten Buch`;
	} else if (randomNumber <= 17) {
		const imgnmb = Math.floor(Math.random() * 11) + 2;
		imageNumber = `${
			imgnmb <= 12
				? imgnmb === 1
					? 'ein Bild'
					: numToWords(imgnmb) + ' Bilder'
				: imgnmb + ' Bilder'
		} im gesamten Buch`;
	} else if (randomNumber <= 19) {
		const imgnmb = Math.floor(Math.random() * 16) + 3;
		imageNumber = `${
			imgnmb <= 12 ? numToWords(imgnmb) + ' Bilder' : imgnmb + ' Bilder'
		} im gesamten Buch`;
	} else {
		imageNumber = 'Bilder auf jeder Seite';
	}
	return imageNumber;
}
