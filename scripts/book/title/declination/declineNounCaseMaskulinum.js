function declineNounCaseMaskulinum(
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
		case 'starkeDeklination':
			return declineNounCaseMaskulinumStrong(
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

		case 'schwacheDeklination':
			return declineNounCaseMaskulinumWeak(
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
			return declineNounCaseMaskulinumMixed(
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
			return declineNounCaseMaskulinumNounifiedAdjective(
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
			return declineNounCaseMaskulinumName(
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
			return declineNounCaseMaskulinumForeign(
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
