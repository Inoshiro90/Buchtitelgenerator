function declineNounSingularAkkusativMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularAkkusativMaskulinumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularAkkusativMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularAkkusativMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'akkusativ',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularAkkusativMaskulinumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounSingularAkkusativMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularAkkusativMaskulinum:',
				declinationRule
			);
	}
}
