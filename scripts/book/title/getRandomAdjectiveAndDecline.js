function getRandomAdjective(array, campaignSetting) {
	const filteredArray = array.filter(function (element) {
		return selectedSetting.includes(element.campaignSetting);
	});

	if (filteredArray.length === 0) {
		// Wenn keine übereinstimmenden Elemente gefunden wurden, gibt null zurück oder handle es entsprechend
		return null;
	}

	const randomAdjective = getRandomElement(filteredArray);
	return randomAdjective;
}

function declineRandomAdjective(
	numerus,
	kasus,
	comparison,
	attribute,
	genus,
	type,
	randomAdjective
) {
	let declinedAdjective = {
		adjective: declineAdjective(
			numerus,
			kasus,
			comparison,
			attribute,
			genus,
			randomAdjective.positive,
			randomAdjective.comparative,
			randomAdjective.superlative,
			randomAdjective.campaignSetting,
			randomAdjective.tags
		),
		positiv: randomAdjective.positive,
		komparativ: randomAdjective.comparative,
		superlativ: `am ${randomAdjective.superlative}n `,
		tags: randomAdjective.tags,
	};
	// console.log('kasus in getRandomAdjectiveAndDecline ist', kasus);
	return declinedAdjective;
}
