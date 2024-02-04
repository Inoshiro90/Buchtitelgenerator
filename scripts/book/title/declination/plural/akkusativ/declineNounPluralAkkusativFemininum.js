function declineNounPluralAkkusativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralAkkusativFemininumStrong(
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralAkkusativFemininumWeak(noun, declinationPattern);
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
		case 'eigenname':
			return declineNounPluralAkkusativFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralAkkusativFemininum:',
				declinationRule
			);
	}
}
