function declineNounSingularDativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularDativFemininumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularDativFemininumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularDativFemininumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'dativ',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularDativFemininumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounSingularDativFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularDativFemininum:',
				declinationRule
			);
	}
}