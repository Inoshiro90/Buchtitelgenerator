function generateRandomBookBinding() {
	const randomNumber = d20();
	let bookBinding;

	if (randomNumber <= 1) {
		bookBinding = 'gebunden mit Bolzen';
	} else if (randomNumber <= 2) {
		bookBinding = 'gebunden mit Lederschlaufen';
	} else if (randomNumber <= 3) {
		bookBinding = 'gebunden mit Metallschlaufen';
	} else if (randomNumber <= 7) {
		bookBinding = 'geklebt';
	} else if (randomNumber <= 8) {
		bookBinding = 'lose';
	} else if (randomNumber <= 9) {
		bookBinding = 'lose in einem Behälter';
	} else if (randomNumber <= 10) {
		bookBinding = 'lose in Stoff eingewickelt';
	} else if (randomNumber <= 11) {
		bookBinding = 'lose in Leder eingewickelt';
	} else if (randomNumber <= 13) {
		bookBinding = 'aufgerollt';
	} else if (randomNumber <= 16) {
		bookBinding = 'zusammengenäht';
	} else if (randomNumber <= 17) {
		bookBinding = 'spiralgebunden';
	} else if (randomNumber <= 18) {
		bookBinding = 'geklammert';
	} else {
		bookBinding = 'umwickelt mit Schnüren';
	}
	return bookBinding;
}
