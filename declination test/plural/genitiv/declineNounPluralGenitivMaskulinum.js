function declineNounPluralGenitivMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralGenitivMaskulinumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralGenitivMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralGenitivMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'genitiv',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralGenitivMaskulinumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounPluralGenitivMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralGenitivMaskulinum:',
				declinationRule
			);
	}
}
