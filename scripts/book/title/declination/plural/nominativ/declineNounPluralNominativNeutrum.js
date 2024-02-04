function declineNounPluralNominativNeutrum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralNominativNeutrumStrong(
				noun,
				declinationPattern
			);
		case 'gemischteDeklination':
			return declineNounPluralNominativNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'nominativ',
				'positiv',
				attribute,
				'neutrum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralNominativNeutrumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounPluralNominativNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralNominativNeutrum:',
				declinationRule
			);
	}
}
