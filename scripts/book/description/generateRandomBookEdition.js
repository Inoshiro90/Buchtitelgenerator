function generateRandomBookEdition() {
	const randomNumber = d20();
	let book_edition;

	if (randomNumber <= 1) {
		book_edition = 'Entwurf';
	} else if (randomNumber <= 3) {
		book_edition = '1. Auflage';
	} else if (randomNumber <= 6) {
		book_edition = '2. Auflage';
	} else if (randomNumber <= 10) {
		book_edition = '3. Auflage';
	} else if (randomNumber <= 13) {
		book_edition = '4. Auflage';
	} else if (randomNumber <= 15) {
		book_edition = '5. Auflage';
	} else if (randomNumber <= 17) {
		book_edition = '6. Auflage';
	} else if (randomNumber <= 18) {
		book_edition = d6(2)+'. Auflage';
	} else {
		book_edition = 'Unbekannte Auflage';
	}
	return book_edition;
}
