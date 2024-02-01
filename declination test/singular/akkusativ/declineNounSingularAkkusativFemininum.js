function declineNounSingularAkkusativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularAkkusativFemininumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularAkkusativFemininumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularAkkusativFemininumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'akkusativ',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularAkkusativFemininumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounSingularAkkusativFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularAkkusativFemininum:',
				declinationRule
			);
	}
}
