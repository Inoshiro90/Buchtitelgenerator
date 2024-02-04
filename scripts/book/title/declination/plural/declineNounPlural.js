function declineNounPlural(kasus, attribute, noun, genus, declinationRule, declinationPattern) {
	// console.log('noun', noun)
	switch (kasus) {
		case 'nominativ':
			return declineNounPluralNominativ(attribute, noun, genus, declinationRule, declinationPattern);
		case 'genitiv':
			return declineNounPluralGenitiv(attribute, noun, genus, declinationRule, declinationPattern);
		case 'dativ':
			return declineNounPluralDativ(attribute, noun, genus, declinationRule, declinationPattern);
		case 'akkusativ':
			return declineNounPluralAkkusativ(attribute, noun, genus, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounPlural:', genus);
			return
	}
}