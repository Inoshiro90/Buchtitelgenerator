function getRandomAdjectiveFromArray(array, selectedSettings, usedAdjectives) {
	var MAX_ATTEMPTS = 50;
	var attempts = 0;
	var randomAdjective;

	do {
		if (attempts >= MAX_ATTEMPTS) {
			console.warn(
				'[getRandomAdjectiveFromArray] Kein eindeutiges Adjektiv nach ' + MAX_ATTEMPTS + ' Versuchen.' +
				' Duplikat wird akzeptiert.'
			);
			break;
		}
		randomAdjective = getRandomAdjective(array, selectedSettings);
		attempts++;
	} while (randomAdjective === null || usedAdjectives.some(function (adj) { return adj.positive === randomAdjective.positive; }));

	return randomAdjective;
}

function createAdjectiveFunction(adjectiveArray) {
	return function (numerus, kasus, comparison, attribute, genus) {
		return declineRandomAdjective(
			numerus,
			kasus,
			comparison,
			attribute,
			genus,
			adjectiveArray
		);
	};
}

function getAdjectives(selectedSettings, adjectiveMapping) {
	const adjectives = {};

	adjectiveMapping.forEach((mapping) => {
		const randomAdjective = getRandomAdjectiveFromArray(
			mapping.array,
			selectedSettings,
			Object.values(adjectives)
		);
		adjectives[mapping.english] = randomAdjective;
		adjectives[mapping.german] = createAdjectiveFunction(randomAdjective);
	});

	return adjectives;
}
