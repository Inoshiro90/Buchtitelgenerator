function declineNounCaseFemininum(
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
		case 'schwacheDeklination':
			return declineNounCaseFemininumWeak(
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

		case 'starkeDeklination':
			return declineNounCaseFemininumStrong(
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
			return declineNounCaseFemininumNounifiedAdjective(
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
			return declineNounCaseFemininumName(
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
			return declineNounCaseFemininumForeign(
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
			return noun;
	}
}
