function declineRandomNoun(numerus, kasus, attribute, randomNoun) {
	// Dekliniere und logge das Element
	return declineNoun(
		numerus,
		kasus,
		attribute,
		randomNoun.singular,
		randomNoun.plural,
		randomNoun.adjective,
		randomNoun.prefix,
		randomNoun.suffix,
		randomNoun.gender,
		randomNoun.declinationRule,
		randomNoun.declinationPattern,
		randomNoun.tags,
		randomNoun.number
	);
	// return declineNoun(
	// 	numerus,
	// 	kasus,
	// 	attribute,
	// 	randomNoun.singular,
	// 	randomNoun.plural,
	// 	randomNoun.adjective,
	// 	randomNoun.prefix,
	// 	randomNoun.suffix,
	// 	randomNoun.gender,
	// 	randomNoun.declinationRule,
	// 	randomNoun.declinationPattern
	//	randomNoun.tags,
	// );
}
