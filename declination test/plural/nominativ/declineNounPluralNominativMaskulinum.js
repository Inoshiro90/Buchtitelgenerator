function declineNounPluralNominativMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralNominativMaskulinumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralNominativMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralNominativMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'nominativ',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralNominativMaskulinumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounPluralNominativMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralNominativMaskulinum:',
				declinationRule
			);
	}
}
