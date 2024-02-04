function declineRandomAdjective(
	numerus,
	kasus,
	comparison,
	attribute,
	genus,
	randomAdjective
) {
		return declineAdjective(
			numerus,
			kasus,
			comparison,
			attribute,
			genus,
			randomAdjective.positive,
			randomAdjective.comparative,
			randomAdjective.superlative,
			randomAdjective.tags
		)	
}


// function declineRandomAdjective(
// 	numerus,
// 	kasus,
// 	comparison,
// 	attribute,
// 	genus,
// 	type,
// 	randomAdjective
// ) {
// 	let declinedAdjective = {
// 		adjective: declineAdjective(
// 			numerus,
// 			kasus,
// 			comparison,
// 			attribute,
// 			genus,
// 			randomAdjective.positive,
// 			randomAdjective.comparative,
// 			randomAdjective.superlative,
// 			randomAdjective.campaignSetting,
// 			randomAdjective.tags
// 		),
// 		positiv: randomAdjective.positive,
// 		komparativ: randomAdjective.comparative,
// 		superlativ: `am ${randomAdjective.superlative}n `,
// 		tags: randomAdjective.tags,
// 	};
// 	// console.log('kasus in getRandomAdjectiveAndDecline ist', kasus);
// 	return declinedAdjective;
// }
