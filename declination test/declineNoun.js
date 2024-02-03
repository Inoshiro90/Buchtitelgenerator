function declineNoun(
	numerus,
	kasus,
	attribute,
	nounSingular,
	nounPlural,
	adjective,
	prefix,
	suffix,
	genus,
	declinationRule,
	declinationPattern
) {
	let declinedNoun;
	let declinedAdjective;

	if (attribute === der_die_das) {
		return declineDefiniteArticle(numerus, kasus, genus);
	} else if (attribute === ein_eine) {
		return declineIndefiniteArticle(kasus, genus);
	} else if (attribute === kein_keine) {
		return declineNegativeArticle(numerus, kasus, genus);
	} else {
		switch (numerus) {
			case 'singular':
				declinedNoun = declineNounSingular(
					kasus,
					attribute,
					nounSingular,
					genus,
					declinationRule,
					declinationPattern
				);
				declinedAdjective = declineAdjective('singular', kasus, attribute, adjective);
			case 'plural':
				declinedNoun = declineNounPlural(
					kasus,
					attribute,
					nounPlural,
					genus,
					declinationRule,
					declinationPattern
				);
				declinedAdjective = declineAdjective('plural', kasus, attribute, adjective);
			default:
				console.error('Ungültiger Numerus:', numerus);
		}
		return prefix ? prefix : '', declinedAdjective, declinedNoun, suffix ? suffix : '';
	}
}
