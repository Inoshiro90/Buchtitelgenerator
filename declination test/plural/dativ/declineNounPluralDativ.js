function declineNounPluralDativ(attribute, noun, genus, declinationRule, declinationPattern) {
	switch (genus) {
		case 'maskulinum':
			return declineNounPluralDativMaskulinum(attribute, noun, declinationRule, declinationPattern);
		case 'femininum':
			return declineNounPluralDativFemininum(attribute, noun, declinationRule, declinationPattern);
		case 'neutrum':
			return declineNounPluralDativNeutrum(attribute, noun, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounPluralDativ:', genus);
	}
}