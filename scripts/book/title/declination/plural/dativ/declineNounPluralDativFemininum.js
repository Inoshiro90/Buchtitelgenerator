function declineNounPluralDativFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralDativFemininumStrong(
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralDativFemininumWeak(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'dativ',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralDativFemininumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounPluralDativFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralDativFemininum:',
				declinationRule
			);
	}
}
