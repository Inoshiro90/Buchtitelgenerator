function getRandomNounFromArray(array, selectedSettings, usedNouns) {
	let randomNoun;
	do {
		randomNoun = getRandomNoun(array, selectedSettings);
	} while (usedNouns.some((noun) => noun.nounSingular === randomNoun.nounSingular));
	// console.log(randomNoun.nounSingular)
	return randomNoun;
}

function createNounFunction(array) {
	return function (numerus, kasus, attribute) {
		return declineRandomNoun(numerus, kasus, attribute, array);
	};
}

function getNouns(selectedSettings, nounMapping) {
	const noun = {};
	nounMapping.forEach((mapping) => {
		const randomNoun = getRandomNounFromArray(
			eval(mapping.array),
			selectedSettings,
			Object.values(noun)
		);
		noun[mapping.english] = randomNoun;
		noun[mapping.german] = createNounFunction(randomNoun);
	});
	return noun;
}

// function getRandomNounFromArray(array, selectedSettings, lastRandomNoun) {
// 	let randomNoun;
// 	do {
// 		randomNoun = getRandomNoun(array, selectedSettings);
// 	} while (randomNoun === lastRandomNoun);
// 	return randomNoun;
// }

// function createNounFunction(array) {
// 	return function (numerus, kasus, attribute) {
// 		return declineRandomNoun(numerus, kasus, attribute, array);
// 	};
// }

// function getNouns(selectedSettings, nounMapping) {
// 	const noun = {};
// 	nounMapping.forEach((mapping) => {
// 		const randomNoun = getRandomNounFromArray(
// 			eval(mapping.array),
// 			selectedSettings,
// 			noun[mapping.english]
// 		);
// 		noun[mapping.english] = randomNoun;
// 		noun[mapping.german] = createNounFunction(randomNoun);
// 	});
// 	return noun;
// }
