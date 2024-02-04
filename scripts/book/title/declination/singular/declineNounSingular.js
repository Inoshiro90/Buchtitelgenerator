function declineNounSingular(kasus, attribute, noun, genus, declinationRule, declinationPattern) {
	// console.log('Noun:', noun)
	switch (kasus) {
		case 'nominativ':
			return declineNounSingularNominativ(attribute, noun, genus, declinationRule, declinationPattern);
		case 'genitiv':
			return declineNounSingularGenitiv(attribute, noun, genus, declinationRule, declinationPattern);
		case 'dativ':
			return declineNounSingularDativ(attribute, noun, genus, declinationRule, declinationPattern);
		case 'akkusativ':
			return declineNounSingularAkkusativ(attribute, noun, genus, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounSingular:', genus);
			return
	}
}