function getRandomNounFromArray(array, selectedSettings, usedNouns) {
	var MAX_ATTEMPTS = 50;
	var attempts = 0;
	var randomNoun;

	do {
		if (attempts >= MAX_ATTEMPTS) {
			console.warn(
				'[getRandomNounFromArray] Kein eindeutiges Substantiv nach ' + MAX_ATTEMPTS + ' Versuchen.' +
				' Array-Größe: ' + array.length + ', Benutzte Einträge: ' + usedNouns.length + '.' +
				' Duplikat wird akzeptiert.'
			);
			break;
		}
		randomNoun = getRandomNoun(array, selectedSettings);
		attempts++;
	} while (randomNoun === null || usedNouns.some(function (noun) {
		return noun.singular === randomNoun.singular;
	}));

	return randomNoun;
}

function createNounFunction(array) {
	return function (numerus, kasus, attribute) {
		return declineRandomNoun(numerus, kasus, attribute, array);
	};
}

function getNouns(selectedSettings, nounMapping) {
	const noun = {};
	nounMapping.forEach(function (mapping) {
		// mapping.array is now a direct array reference — no eval() needed
		const randomNoun = getRandomNounFromArray(
			mapping.array,
			selectedSettings,
			Object.values(noun)
		);
		noun[mapping.english] = randomNoun;
		noun[mapping.german]  = createNounFunction(randomNoun);
	});
	return noun;
}
