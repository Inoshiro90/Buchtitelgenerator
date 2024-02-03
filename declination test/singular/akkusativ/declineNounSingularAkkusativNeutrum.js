function declineNounSingularAkkusativNeutrum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularAkkusativNeutrumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'gemischteDeklination':
			return declineNounSingularAkkusativNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'singular',
				'akkusativ',
				'positiv',
				attribute,
				'neutrum',
				noun
			);
		case 'fremdWort':
			return declineNounSingularAkkusativNeutrumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounSingularAkkusativNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounSingularAkkusativNeutrum:',
				declinationRule
			);
	}
}
