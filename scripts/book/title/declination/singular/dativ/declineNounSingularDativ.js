function declineNounSingularDativ(attribute, noun, genus, declinationRule, declinationPattern) {
	switch (genus) {
		case 'maskulinum':
			return declineNounSingularDativMaskulinum(attribute, noun, declinationRule, declinationPattern);
		case 'femininum':
			return declineNounSingularDativFemininum(attribute, noun, declinationRule, declinationPattern);
		case 'neutrum':
			return declineNounSingularDativNeutrum(attribute, noun, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounSingularDativ:', genus);
	}
}