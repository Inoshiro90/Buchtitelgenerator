function declineNounSingularGenitivFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularGenitivFemininumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularGenitivFemininumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularGenitivFemininumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'genitiv',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularGenitivFemininumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounSingularGenitivFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularGenitivFemininum:',
				declinationRule
			);
	}
}
