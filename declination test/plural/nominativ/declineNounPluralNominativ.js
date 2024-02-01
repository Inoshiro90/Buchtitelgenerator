function declineNounPluralNominativ(attribute, noun, genus, declinationRule, declinationPattern) {
	switch (genus) {
		case 'maskulinum':
			return declineNounPluralNominativMaskulinum(attribute, noun, declinationRule, declinationPattern);
		case 'femininum':
			return declineNounPluralNominativFemininum(attribute, noun, declinationRule, declinationPattern);
		case 'neutrum':
			return declineNounPluralNominativNeutrum(attribute, noun, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounPluralNominativ:', genus);
	}
}