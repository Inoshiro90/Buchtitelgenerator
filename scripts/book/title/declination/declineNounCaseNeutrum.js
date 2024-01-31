function declineNounCaseNeutrum(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
) {

	switch (declinationRule) {
		// case 'schwacheDeklination':
		// 	return declineNounCaseNeutrumWeak(
		// 		numerus,
		// 		noun,
		// 		kasus,
		// 		attribute,
		// 		declinationRule,
		// 		declinationPattern,
		// 		adjective,
		// 		prefix,
		// 		suffix,
		// 	);
		case 'starkeDeklination':
			return declineNounCaseNeutrumStrong(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);

		case 'gemischteDeklination':
			return declineNounCaseNeutrumMixed(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);

		case 'substantiviertesAdjektiv':
			return declineNounCaseNeutrumNounifiedAdjective(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);

		case 'eigenName':
			return declineNounCaseNeutrumName(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);

		case 'fremdWort':
			return declineNounCaseNeutrumForeign(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);
		default:
			console.error('Ungültiges Deklinationsschema:', declinationRule);
			return declinedNoun;
	}
}
