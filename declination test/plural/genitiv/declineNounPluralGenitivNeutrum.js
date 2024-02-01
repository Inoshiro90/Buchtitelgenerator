function declineNounPluralGenitivNeutrum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralGenitivNeutrumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralGenitivNeutrumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralGenitivNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'genitiv',
				'positiv',
				attribute,
				'neutrum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralGenitivNeutrumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounPluralGenitivNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralGenitivNeutrum:',
				declinationRule
			);
	}
}
