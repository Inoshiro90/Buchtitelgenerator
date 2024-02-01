function declineNounPluralNominativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralNominativFemininumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralNominativFemininumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralNominativFemininumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'nominativ',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralNominativFemininumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounPluralNominativFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralNominativFemininum:',
				declinationRule
			);
	}
}
