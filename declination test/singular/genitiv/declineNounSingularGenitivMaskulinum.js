function declineNounSingularGenitivMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
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
