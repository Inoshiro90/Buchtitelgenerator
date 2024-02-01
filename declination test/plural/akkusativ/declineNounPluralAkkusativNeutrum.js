function declineNounPluralAkkusativNeutrum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralAkkusativNeutrumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralAkkusativNeutrumWeak(noun, declinationPattern);
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
		case 'eigenName':
			return declineNounPluralAkkusativNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralAkkusativNeutrum:',
				declinationRule
			);
	}
}
