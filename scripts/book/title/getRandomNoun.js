function getRandomNoun(array, campaignSetting) {
	const filteredArray = array.filter(function (element) {
		return selectedSetting.includes(element.campaignSetting);
	});

	if (filteredArray.length === 0) {
		// Wenn keine übereinstimmenden Elemente gefunden wurden, gibt null zurück oder handle es entsprechend
		return null;
	}

	// Wähle ein zufälliges Element aus den gefilterten Elementen aus
	const randomNoun = getRandomElement(filteredArray);
	return randomNoun;
}
