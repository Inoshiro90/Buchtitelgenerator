function declineNounPluralDativMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralDativMaskulinumStrong(
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralDativMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralDativMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'dativ',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralDativMaskulinumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounPluralDativMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralDativMaskulinum:',
				declinationRule
			);
	}
}
