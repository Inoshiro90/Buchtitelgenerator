function generateRandomBookHeight() {
	const randomNumber = d20();
	let bookHeight;

	if (randomNumber <= 3) {
		const height = d4(1) * 2.5;
		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
	} else if (randomNumber <= 8) {
		const height = d4(2) * 2.5;
		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
	} else if (randomNumber <= 12) {
		const height = d6(2) * 2.5;
		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
	} else if (randomNumber <= 17) {
		const height = d8(2) * 2.5;
		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
	} else {
		const height = d10(2) * 2.5;
		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
	}
	return bookHeight;
}

// function generateRandomBookHeight() {
// 	const randomNumber = d100();
// 	let bookHeight;

// 	if (randomNumber <= 15) {
// 		bookHeight = `2,5`;
// 	} else if (randomNumber <= 40) {
// 		const randomMultiplier = Math.floor(Math.random() * (8 - 2 + 1)) + 2;
// 		const height = randomMultiplier * 2.5;
// 		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
// 	} else if (randomNumber <= 60) {
// 		const randomMultiplier = Math.floor(Math.random() * (12 - 2 + 1)) + 2;
// 		const height = randomMultiplier * 2.5;
// 		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
// 	} else if (randomNumber <= 80) {
// 		const randomMultiplier = Math.floor(Math.random() * (16 - 2 + 1)) + 2;
// 		const height = randomMultiplier * 2.5;
// 		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
// 	} else {
// 		const randomMultiplier = Math.floor(Math.random() * (20 - 2 + 1)) + 2;
// 		const height = randomMultiplier * 2.5;
// 		bookHeight = height % 1 === 0 ? height.toString() : height.toFixed(1).replace('.', ',');
// 	}
// 	return bookHeight;
// }