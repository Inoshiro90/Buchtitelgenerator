function getRandomLocationFromArray(array, selectedSettings, usedLocations) {
	let randomLocation;
	do {
		randomLocation = getRandomNoun(array, selectedSettings);
	} while (usedLocations.includes(randomLocation));
	// console.log(randomLocation);
	return randomLocation;
}

function createLocationFunction(array) {
	return function (kasus, attribute) {
		return declineRandomNoun(array.nounNumber, kasus, attribute, array);
	};
}

function getLocations(selectedSettings, locationMapping) {
	const locations = {};
	locationMapping.forEach((mapping) => {
		const randomLocation = getRandomLocationFromArray(
			eval(mapping.array),
			selectedSettings,
			Object.values(locations)
		);
		locations[mapping.english] = randomLocation;
		locations[mapping.german] = createLocationFunction(randomLocation);
	});

	return locations;
}