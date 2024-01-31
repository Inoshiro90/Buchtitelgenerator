function generateRandomBookLength() {
	const randomNumber = d20();
	let bookLength;

	if (randomNumber <= 3) {
		const length = d4(1) * 2.5;
		bookLength = length % 1 === 0 ? length.toString() : length.toFixed(1).replace('.', ',');
	} else if (randomNumber <= 8) {
		const length = d4(2) * 2.5;
		bookLength = length % 1 === 0 ? length.toString() : length.toFixed(1).replace('.', ',');
	} else if (randomNumber <= 12) {
		const length = d6(2) * 2.5;
		bookLength = length % 1 === 0 ? length.toString() : length.toFixed(1).replace('.', ',');
	} else if (randomNumber <= 17) {
		const length = d8(2) * 2.5;
		bookLength = length % 1 === 0 ? length.toString() : length.toFixed(1).replace('.', ',');
	} else {
		const length = d10(2) * 2.5;
		bookLength = length % 1 === 0 ? length.toString() : length.toFixed(1).replace('.', ',');
	}
	return bookLength;
}