function declineNounSingularDativNeutrum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularDativNeutrumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'gemischteDeklination':
			return declineNounSingularDativNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'dativ',
				'positiv',
				attribute,
				'neutrum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularDativNeutrumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounSingularDativNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularDativNeutrum:',
				declinationRule
			);
	}
}
