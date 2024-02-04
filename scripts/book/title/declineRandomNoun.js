function declineRandomNoun(numerus, kasus, attribute, randomNoun) {
	// Dekliniere und logge das Element
	return declineNoun(
		numerus,
		kasus,
		attribute,
		randomNoun.nounSingular,
		randomNoun.nounPlural,
		randomNoun.adjective,
		randomNoun.prefix,
		randomNoun.suffix,
		randomNoun.nounGender,
		randomNoun.declinationRule,
		randomNoun.declinationPattern,
		randomNoun.tags,
		randomNoun.nounNumber
	);
	// return declineNoun(
	// 	numerus,
	// 	kasus,
	// 	attribute,
	// 	randomNoun.nounSingular,
	// 	randomNoun.nounPlural,
	// 	randomNoun.adjective,
	// 	randomNoun.prefix,
	// 	randomNoun.suffix,
	// 	randomNoun.nounGender,
	// 	randomNoun.declinationRule,
	// 	randomNoun.declinationPattern
	//	randomNoun.tags,
	// );
}
