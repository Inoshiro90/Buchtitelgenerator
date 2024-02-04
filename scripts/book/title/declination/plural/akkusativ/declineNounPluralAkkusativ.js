function declineNounPluralAkkusativ(attribute, noun, genus, declinationRule, declinationPattern) {
	switch (genus) {
		case 'maskulinum':
			return declineNounPluralAkkusativMaskulinum(attribute, noun, declinationRule, declinationPattern);
		case 'femininum':
			return declineNounPluralAkkusativFemininum(attribute, noun, declinationRule, declinationPattern);
		case 'neutrum':
			return declineNounPluralAkkusativNeutrum(attribute, noun, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounPluralAkkusativ:', genus);
	}
}