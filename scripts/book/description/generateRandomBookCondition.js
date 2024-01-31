function generateRandomBookCondition() {
	const randomNumber = d100();
	let bookCondition;

	if (randomNumber <= 5) {
		bookCondition = 'zerfallend';
	} else if (randomNumber <= 10) {
		bookCondition = 'schrecklich';
	} else if (randomNumber <= 20) {
		bookCondition = 'mangelhaft';
	} else if (randomNumber <= 30) {
		bookCondition = 'unterdurchschnittlich';
	} else if (randomNumber <= 50) {
		bookCondition = 'durchschnittlich';
	} else if (randomNumber <= 70) {
		bookCondition = 'überdurchschnittlich';
	} else if (randomNumber <= 80) {
		bookCondition = 'sehr gut';
	} else if (randomNumber <= 90) {
		bookCondition = 'ausgezeichnet';
	} else if (randomNumber <= 95) {
		bookCondition = 'fast neuwertig';
	} else {
		bookCondition = 'neuwertig';
	}
	return bookCondition;
}
