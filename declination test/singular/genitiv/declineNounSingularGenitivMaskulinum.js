function declineNounSingularGenitivMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {

	const sonorantSounds = ['s', 'ß', 'z', 'x', 'ch', 'sch', 'f', 'v', 'd'];
	const lastChar = noun.charAt(noun.length - 1);

	if (sonorantSounds.includes(lastChar)) {
		noun += 'e';
	}

	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularGenitivMaskulinumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularGenitivMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularGenitivMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'genitiv',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularGenitivMaskulinumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounSingularGenitivMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularGenitivMaskulinum:',
				declinationRule
			);
	}
}
