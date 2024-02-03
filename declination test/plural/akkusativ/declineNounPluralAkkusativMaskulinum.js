function declineNounPluralAkkusativMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralAkkusativMaskulinumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralAkkusativMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralAkkusativMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'akkusativ',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralAkkusativMaskulinumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounPluralAkkusativMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralAkkusativMaskulinum:',
				declinationRule
			);
	}
}
