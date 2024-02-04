function declineNounPluralAkkusativNeutrum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralAkkusativNeutrumStrong(
				noun,
				declinationPattern
			);
		case 'gemischteDeklination':
			return declineNounPluralAkkusativNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'akkusativ',
				'positiv',
				attribute,
				'neutrum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralAkkusativNeutrumForeign(noun, declinationPattern);
		case 'eigenname':
			return declineNounPluralAkkusativNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralAkkusativNeutrum:',
				declinationRule
			);
	}
}
