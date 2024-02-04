function declineNounSingularNominativNeutrum(attribute, noun, declinationRule, declinationPattern) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounSingularNominativNeutrumStrong(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounSingularNominativNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective('singular', 'nominativ', 'positiv', attribute, 'neutrum', noun);
		case 'fremdWort':
			return declineNounSingularNominativNeutrumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounSingularNominativNeutrumName(noun, declinationPattern);
		default:
			console.error('Ungültige Deklinationsregel:', declinationRule);
	}
}
