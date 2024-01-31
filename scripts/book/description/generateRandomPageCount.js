function generateRandomPageCount() {
	const randomNumber = d20();
	let pageCount;
	if (randomNumber <= 1) {
		pageCount = d10(2) + 20;
	} else if (randomNumber <= 2) {
		pageCount = d10(2) + 40;
	} else if (randomNumber <= 4) {
		pageCount = d10(2) + 60;
	} else if (randomNumber <= 7) {
		pageCount = d100() + 80;
	} else if (randomNumber <= 13) {
		pageCount = d100() + 100;
	} else if (randomNumber <= 16) {
		pageCount = d100() + 200;
	} else if (randomNumber <= 18) {
		pageCount = d100() + 300;
	} else if (randomNumber <= 19) {
		pageCount = d100() + 400;
	} else {
		pageCount = d100() + 500;
	}
	return pageCount;
}
