function declineNounSingularGenitivNeutrum(attribute, noun, declinationRule, declinationPattern) {

	const sonorantSounds = ['s', 'ß', 'z', 'x', 'ch', 'sch', 'f', 'v', 'd'];
	const lastChar = noun.charAt(noun.length - 1);

	if (sonorantSounds.includes(lastChar)) {
		noun += 'e';
	}

	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularGenitivNeutrumStrong(attribute, noun, declinationPattern);
		case 'schwacheDeklination':
			return declineNounSingularGenitivNeutrumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularGenitivNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective('singular', 'genitiv', 'positiv', attribute, 'neutrum', noun);
		case 'fremdWort':
			return declineNounSingularGenitivNeutrumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounSingularGenitivNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularGenitivNeutrum:',
				declinationRule
			);
	}
}