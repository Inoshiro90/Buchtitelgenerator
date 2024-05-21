function declineRandomLocation(numerus, kasus, attribute, randomNoun) {

	// // Dekliniere und logge das Element
	// let declinedLocation = {
	// 	noun: declineNoun(
	// 		numerus,
	// 		kasus,
	// 		attribute,
	// 		randomNoun.singular,
	// 		randomNoun.plural,
	// 		randomNoun.adjective,
	// 		randomNoun.prefix,
	// 		randomNoun.suffix,
	// 		randomNoun.gender,
	// 		randomNoun.declinationRule,
	// 		randomNoun.declinationPattern
	// 	),
    //     genus: randomNoun.gender,
    //     tags: randomNoun.tags,
    //     numerus: randomNoun.number
	// };

	// // console.log(
	// // 	'---\n' + '\nConsole log für getRandomNounAndDeclined:\n',
	// // 	'numerus',
	// // 	numerus,
	// // 	'kasus:',
	// // 	kasus,
	// // 	'attribute:',
	// // 	attribute,
	// // 	randomNoun.singular,
	// // 	randomNoun.plural,
	// // 	randomNoun.adjective,
	// // 	randomNoun.prefix,
	// // 	randomNoun.suffix,
	// // 	randomNoun.gender,
	// // 	randomNoun.declinationRule,
	// // 	randomNoun.declinationPattern,
	// // 	randomNoun.campaignSetting,
	// // 	randomNoun.tags
	// // );

	// // console.log(`\t\t ${randomNoun.singular} wurde dekliniert.`);

	// // console.log('declinedNoun in getRandomNounandDecline', declinedNoun);
	// // console.log('declinedNoun.tags in getRandomNounandDecline', declinedNoun.tags);

	// return declinedLocation;

	return declineNoun(
		numerus,
		kasus,
		attribute,
		randomNoun.singular,
		randomNoun.plural,
		randomNoun.adjective,
		randomNoun.prefix,
		randomNoun.suffix,
		randomNoun.gender,
		randomNoun.declinationRule,
		randomNoun.declinationPattern,
		randomNoun.tags,
		'Ort'
	)
}