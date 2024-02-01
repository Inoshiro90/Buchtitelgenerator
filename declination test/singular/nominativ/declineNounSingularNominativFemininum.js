function declineNounSingularNominativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularNominativFemininumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularNominativFemininumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularNominativFemininumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'nominativ',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularNominativFemininumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounSingularNominativFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularNominativFemininum:',
				declinationRule
			);
	}
}
