function getRandomLocationFromArray(array, selectedSettings, usedLocations) {
	var MAX_ATTEMPTS = 50;
	var attempts = 0;
	var randomLocation;

	do {
		if (attempts >= MAX_ATTEMPTS) {
			console.warn(
				'[getRandomLocationFromArray] Kein eindeutiger Ort nach ' + MAX_ATTEMPTS + ' Versuchen.' +
				' Duplikat wird akzeptiert.'
			);
			break;
		}
		randomLocation = getRandomNoun(array, selectedSettings);
		attempts++;
	} while (randomLocation === null || usedLocations.includes(randomLocation));

	return randomLocation;
}

function createLocationFunction(array) {
	return function (kasus, attribute) {
		return declineRandomNoun(array.number, kasus, attribute, array);
	};
}

function getLocations(selectedSettings, locationMapping) {
	const locations = {};
	locationMapping.forEach(function (mapping) {
		// mapping.array is now a direct array reference — no eval() needed
		const randomLocation = getRandomLocationFromArray(
			mapping.array,
			selectedSettings,
			Object.values(locations)
		);
		locations[mapping.english] = randomLocation;
		locations[mapping.german]  = createLocationFunction(randomLocation);
	});
	return locations;
}
