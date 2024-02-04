function getRandomNoun(array, campaignSetting)
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

	// console.log(`\t Für ${type} wurde ${randomNoun.nounSingular} gewählt.`);
	// console.log(
	// 	`\t\t ${randomNoun.nounSingular} hat das Geschlecht ${randomNoun.nounGender}, die Deklinationsregel ${randomNoun.declinationRule} und das Deklinationsmuster ${randomNoun.declinationPattern}.`
	// );
	// console.log('randomNoun.tags in getRandomNounandDecline', randomNoun.tags);
	// console.log(`\t\t ${randomNoun.nounSingular} hat die Schlagwörter ${randomNoun.tags}.`);

	// console.log('randomNoun:', randomNoun)
	return randomNoun
}