function declineNounSingularNominativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularNominativFemininumStrong(noun, declinationPattern);
		case 'schwacheDeklination':
			return declineNounSingularNominativFemininumWeak(noun, declinationPattern);
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
		case 'eigenname':
			return declineNounSingularNominativFemininumName(noun, declinationPattern);
		default:
			console.error('Ungültige Deklinationsregel:', declinationRule);
	}
}
