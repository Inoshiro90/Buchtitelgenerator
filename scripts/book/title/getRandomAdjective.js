function getRandomAdjective(array, campaignSetting) {
	var activeSetting = window.getActiveSettings();
	var filteredArray = array.filter(function (element) {
		return activeSetting.includes(element.campaignSetting);
	});
	if (filteredArray.length === 0) return null;
	return getRandomElement(filteredArray);
}
