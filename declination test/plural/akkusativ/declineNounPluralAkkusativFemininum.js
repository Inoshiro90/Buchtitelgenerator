function declineNounPluralAkkusativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralAkkusativFemininumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralAkkusativFemininumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralAkkusativFemininumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'akkusativ',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralAkkusativFemininumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounPluralAkkusativFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralAkkusativFemininum:',
				declinationRule
			);
	}
}
