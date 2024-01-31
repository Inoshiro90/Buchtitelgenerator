function generateRandomBookAge() {
	const randomNumber = d100();
	let bookAge;
	let bookTimeUnit;

	if (randomNumber <= 2) {
		bookAge = d4();
		bookTimeUnit = bookAge === 1 ? 'Woche' : 'Wochen';
	} else if (randomNumber <= 5) {
		bookAge = d4();
		bookTimeUnit = bookAge === 1 ? 'Monat' : 'Monate';
	} else if (randomNumber <= 9) {
		bookAge = d4(2);
		bookTimeUnit = 'Monate';
	} else if (randomNumber <= 30) {
		bookAge = d4(3);
		bookTimeUnit = 'Monate';
	} else if (randomNumber <= 45) {
		bookAge = d10(1);
		bookTimeUnit = bookAge === 1 ? 'Jahr' : 'Jahre';
	} else if (randomNumber <= 50) {
		bookAge = d10(2);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 57) {
		bookAge = d10(3);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 62) {
		bookAge = d10(4);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 68) {
		bookAge = d10(5);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 73) {
		bookAge = d10(6);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 77) {
		bookAge = d10(7);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 81) {
		bookAge = d10(8);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 85) {
		bookAge = d10(9);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 88) {
		bookAge = d10(10);
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 91) {
		bookAge = d20(1) + 100;
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 94) {
		bookAge = d20(2) + 100;
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 96) {
		bookAge = d20(3) + 100;
		bookTimeUnit = 'Jahre';
	} else if (randomNumber <= 98) {
		bookAge = d20(4) + 100;
		bookTimeUnit = 'Jahre';
	} else if (randomNumber === 99) {
		bookAge = d20(5) + 100;
		bookTimeUnit = 'Jahre';
	} else {
		bookAge = d100(2) + 200;
		bookTimeUnit = 'Jahre';
	}
	return `${bookAge} ${bookTimeUnit}`;
}
