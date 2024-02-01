function declineNounPluralGenitivFemininum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralGenitivFemininumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralGenitivFemininumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralGenitivFemininumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'genitiv',
				'positiv',
				attribute,
				'femininum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralGenitivFemininumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounPluralGenitivFemininumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralGenitivFemininum:',
				declinationRule
			);
	}
}
