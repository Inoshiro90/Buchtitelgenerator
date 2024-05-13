function getRandomAdjectiveFromArray(array, selectedSettings, usedAdjectives) {
	let randomAdjective;
	do {
		randomAdjective = getRandomAdjective(array, selectedSettings);
	} while (usedAdjectives.some(adjective => adjective.positive === randomAdjective.positive));
	// console.log(randomAdjective.positive);
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

// function createAdjectiveFunction(adjectiveArray, selectedSettings) {
// 	let usedAdjectives = [];

// 	return function (numerus, kasus, comparison, attribute, genus) {
// 		let randomAdjective;
// 		do {
// 			randomAdjective = getRandomAdjective(adjectiveArray, selectedSettings);
// 		} while (usedAdjectives.includes(randomAdjective));
// 		usedAdjectives.push(randomAdjective);
// 		console.log(randomAdjective);
// 		return declineRandomAdjective(
// 			numerus,
// 			kasus,
// 			comparison,
// 			attribute,
// 			genus,
// 			randomAdjective
// 		);
// 	};
// }

// function getAdjectives(selectedSettings, adjectiveMapping) {
// 	const adjectives = {};

// 	adjectiveMapping.forEach((mapping) => {
// 		const randomAdjective = getRandomAdjective(mapping.array, selectedSettings);
// 		adjectives[mapping.english] = randomAdjective;
// 		adjectives[mapping.german] = createAdjectiveFunction(mapping.array, selectedSettings);
// 	});

// 	return adjectives;
// }
