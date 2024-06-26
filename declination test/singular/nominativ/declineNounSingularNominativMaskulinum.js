function declineNounSingularNominativMaskulinum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularNominativMaskulinumStrong(
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounSingularNominativMaskulinumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularNominativMaskulinumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'nominativ',
				'positiv',
				attribute,
				'maskulinum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularNominativMaskulinumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounSingularNominativMaskulinumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel:',declinationRule);
	}
}
