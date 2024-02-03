function declineNounSingularDativMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularDativMaskulinumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularDativMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularDativMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'dativ',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularDativMaskulinumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounSingularDativMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularDativMaskulinum:',
				declinationRule
			);
	}
}
