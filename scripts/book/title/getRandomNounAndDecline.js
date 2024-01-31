function getRandomNoun (array, campaignSetting)
{
	const filteredArray = array.filter(function (element) {
		return selectedSetting.includes(element.campaignSetting);
	});

	if (filteredArray.length === 0) {
		// Wenn keine übereinstimmenden Elemente gefunden wurden, gibt null zurück oder handle es entsprechend
		return null;
	}

	// Wähle ein zufälliges Element aus den gefilterten Elementen aus
	const randomNoun = getRandomElement(filteredArray);

		// // Filtere die Elemente, die ein übereinstimmendes campaignSetting haben
	// const filteredArray = array.filter(function (element) {
	// 	return selectedSetting.includes(element.campaignSetting);
	// });

	// if (filteredArray.length === 0) {
	// 	// Wenn keine übereinstimmenden Elemente gefunden wurden, gibt null zurück oder handle es entsprechend
	// 	return null;
	// }

	// // Wähle ein zufälliges Element aus den gefilterten Elementen aus
	// const randomNoun = getRandomElement(filteredArray);

	// console.log(`\t Für ${type} wurde ${randomNoun.nounSingular} gewählt.`);
	// console.log(
	// 	`\t\t ${randomNoun.nounSingular} hat das Geschlecht ${randomNoun.nounGender}, die Deklinationsregel ${randomNoun.declinationRule} und das Deklinationsmuster ${randomNoun.declinationPattern}.`
	// );
	// console.log('randomNoun.tags in getRandomNounandDecline', randomNoun.tags);
	// console.log(`\t\t ${randomNoun.nounSingular} hat die Schlagwörter ${randomNoun.tags}.`);

	return randomNoun
	
}

function declineRandomNoun(numerus, kasus, attribute, type, randomNoun) {

	// Dekliniere und logge das Element
	let declinedNoun = {
		noun: declineNoun(
			numerus,
			kasus,
			attribute,
			randomNoun.nounSingular,
			randomNoun.nounPlural,
			randomNoun.adjective,
			randomNoun.prefix,
			randomNoun.suffix,
			randomNoun.nounGender,
			randomNoun.declinationRule,
			randomNoun.declinationPattern,
			randomNoun.campaignSetting,
			randomNoun.tags
		),
		genus: randomNoun.nounGender,
		tags: randomNoun.tags,
		numerus: randomNoun.nounNumber
	};

	// console.log(
	// 	'---\n' + '\nConsole log für getRandomNounAndDeclined:\n',
	// 	'numerus',
	// 	numerus,
	// 	'kasus:',
	// 	kasus,
	// 	'attribute:',
	// 	attribute,
	// 	randomNoun.nounSingular,
	// 	randomNoun.nounPlural,
	// 	randomNoun.adjective,
	// 	randomNoun.prefix,
	// 	randomNoun.suffix,
	// 	randomNoun.nounGender,
	// 	randomNoun.declinationRule,
	// 	randomNoun.declinationPattern,
	// 	randomNoun.campaignSetting,
	// 	randomNoun.tags
	// );

	// console.log(`\t\t ${randomNoun.nounSingular} wurde dekliniert.`);

	// console.log('declinedNoun in getRandomNounandDecline', declinedNoun);
	// console.log('declinedNoun.tags in getRandomNounandDecline', declinedNoun.tags);

	return declinedNoun;
}

function declineRandomLocation(numerus, kasus, attribute, type, randomNoun) {

	// Dekliniere und logge das Element
	let declinedNoun = {
		noun: declineNoun(
			numerus,
			kasus,
			attribute,
			randomNoun.noun,
			randomNoun.noun,
			randomNoun.adjective,
			randomNoun.prefix,
			randomNoun.suffix,
			randomNoun.nounGender,
			randomNoun.declinationRule,
			randomNoun.declinationPattern,
			randomNoun.campaignSetting,
			randomNoun.tags
		),
		genus: randomNoun.nounGender,
		tags: randomNoun.tags,
	};

	console.log(
		'---\n' + '\nConsole log für getRandomNounAndDeclined:\n',
		'numerus',
		numerus,
		'kasus:',
		kasus,
		'attribute:',
		attribute,
		randomNoun.nounSingular,
		randomNoun.nounPlural,
		randomNoun.adjective,
		randomNoun.prefix,
		randomNoun.suffix,
		randomNoun.nounGender,
		randomNoun.declinationRule,
		randomNoun.declinationPattern,
		randomNoun.campaignSetting,
		randomNoun.tags
	);

	// console.log(`\t\t ${randomNoun.nounSingular} wurde dekliniert.`);

	// console.log('declinedNoun in getRandomNounandDecline', declinedNoun);
	// console.log('declinedNoun.tags in getRandomNounandDecline', declinedNoun.tags);

	return declinedNoun;
}