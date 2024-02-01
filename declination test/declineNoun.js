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
				declinedAdjective = declinedAdjective('singular', kasus, attribute, adjective);
			case 'plural':
				declinedNoun = declineNounPlural(
					kasus,
					attribute,
					nounPlural,
					genus,
					declinationRule,
					declinationPattern
				);
				declinedAdjective = declinedAdjective('plural', kasus, attribute, adjective);
			default:
				console.error('Ungültiger Numerus in declineNoun:', numerus);
		}
		return prefix ? prefix : '', declinedAdjective, declinedNoun, suffix ? suffix : '';
	}
}