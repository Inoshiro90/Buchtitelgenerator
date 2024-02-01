function declineNounSingularAkkusativ(attribute, noun, genus, declinationRule, declinationPattern) {
	switch (genus) {
		case 'maskulinum':
			return declineNounSingularAkkusativMaskulinum(attribute, noun, declinationRule, declinationPattern);
		case 'femininum':
			return declineNounSingularAkkusativFemininum(attribute, noun, declinationRule, declinationPattern);
		case 'neutrum':
			return declineNounSingularAkkusativNeutrum(attribute, noun, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounSingularAkkusativ:', genus);
	}
}