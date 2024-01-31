function generateRandomImageStyle() {
	const randomNumber = d100();
	let imageStyle;

	if (randomNumber <= 5) {
		imageStyle = 'dreidimensional';
	} else if (randomNumber <= 10) {
		imageStyle = 'abstrakt';
	} else if (randomNumber <= 15) {
		imageStyle = 'antik';
	} else if (randomNumber <= 20) {
		imageStyle = 'jugendstilistisch';
	} else if (randomNumber <= 25) {
		imageStyle = 'karikaturistisch';
	} else if (randomNumber <= 30) {
		imageStyle = 'konstruktivistisch';
	} else if (randomNumber <= 35) {
		imageStyle = 'kubistisch';
	} else if (randomNumber <= 40) {
		imageStyle = 'überzeichnet';
	} else if (randomNumber <= 45) {
		imageStyle = 'expressionistisch';
	} else if (randomNumber <= 50) {
		imageStyle = 'impressionistisch';
	} else if (randomNumber <= 55) {
		imageStyle = 'strichartig';
	} else if (randomNumber <= 60) {
		imageStyle = 'minimalistisch';
	} else if (randomNumber <= 65) {
		imageStyle = 'petroglyphisch';
	} else if (randomNumber <= 70) {
		imageStyle = 'punktartig';
	} else if (randomNumber <= 75) {
		imageStyle = 'urtümlich';
	} else if (randomNumber <= 80) {
		imageStyle = 'realistisch';
	} else if (randomNumber <= 85) {
		imageStyle = 'simplistisch';
	} else if (randomNumber <= 90) {
		imageStyle = 'surrealistisch';
	} else if (randomNumber <= 95) {
		imageStyle = 'symbolistisch';
	} else {
		const randomStyles = generateUniqueRandomStyles(2);
		imageStyle = `${randomStyles[0]} und ${randomStyles[1]}`;
	}
	return imageStyle;
}

function generateUniqueRandomStyles(count) {
	const availableStyles = [
		'dreidimensional',
		'abstrakt',
		'antik',
		'jugendstilistisch',
		'karikaturistisch',
		'konstruktivistisch',
		'kubistisch',
		'überzeichnet',
		'expressionistisch',
		'impressionistisch',
		'strichartig',
		'minimalistisch',
		'petroglyphisch',
		'punktartig',
		'urtümlich',
		'realistisch',
		'simplistisch',
		'surrealistisch',
		'symbolistisch',
	];

	const selectedStyles = [];
	while (selectedStyles.length < count) {
		const randomIndex = Math.floor(Math.random() * availableStyles.length);
		const selectedStyle = availableStyles.splice(randomIndex, 1)[0];
		selectedStyles.push(selectedStyle);
	}
	return selectedStyles;
}
