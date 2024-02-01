function declineNounSingularNominativ(attribute, noun, genus, declinationRule, declinationPattern) {
	switch (genus) {
		case 'maskulinum':
			return declineNounSingularNominativMaskulinum(attribute, noun, declinationRule, declinationPattern);
		case 'femininum':
			return declineNounSingularNominativFemininum(attribute, noun, declinationRule, declinationPattern);
		case 'neutrum':
			return declineNounSingularNominativNeutrum(attribute, noun, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounSingularNominativ:', genus);
	}
}