function declineNounPluralDativNeutrum(
	attribute,
	noun,
	declinationRule,
	declinationPattern
) {
	switch (declinationRule) {
		case 'starkeDeklination':
			return declineNounPluralDativNeutrumStrong(
				attribute,
				noun,
				declinationPattern
			);
		case 'schwacheDeklination':
			return declineNounPluralDativNeutrumWeak(noun, declinationPattern);
		case 'gemischteDeklination':
			return declineNounPluralDativNeutrumMixed(noun, declinationPattern);
		case 'substantiviertesAdjektiv':
			return declineAdjective(
				'plural',
				'dativ',
				'positiv',
				attribute,
				'neutrum',
				noun
			);
		case 'fremdWort':
			return declineNounPluralDativNeutrumForeign(noun, declinationPattern);
		case 'eigenName':
			return declineNounPluralDativNeutrumName(noun, declinationPattern);
		default:
			console.error(
				'Ungültige Deklinationsregel in declineNounPluralDativNeutrum:',
				declinationRule
			);
	}
}
