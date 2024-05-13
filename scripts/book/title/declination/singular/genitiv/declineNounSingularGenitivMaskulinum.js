function declineNounSingularGenitivMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	const sonorantSounds = ['s', 'ß', 'z', 'x', 'ch', 'sch', 'f', 'v', 'd'];
	const lastChar = noun.charAt(noun.length - 1);

	switch (declinationRule) {
		case 'starkeDeklination':
			if (sonorantSounds.includes(lastChar)) {
				noun += 'e';
			}
			return declineNounSingularGenitivMaskulinumStrong(noun, declinationPattern);
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
		case 'eigenname':
			return declineNounSingularGenitivMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularGenitivMaskulinum:',
				declinationRule
			);
	}
}
