function declineNounPluralGenitiv(attribute, noun, genus, declinationRule, declinationPattern) {
	switch (genus) {
		case 'neutrum':
			return declineNounPluralGenitivMaskulinum(attribute, noun, declinationRule, declinationPattern);
		case 'femininum':
			return declineNounPluralGenitivFemininum(attribute, noun, declinationRule, declinationPattern);
		case 'neutrum':
			return declineNounPluralGenitivNeutrum(attribute, noun, declinationRule, declinationPattern);
		default:
			console.error('Ungültiger Genus in declineNounPluralGenitiv:', genus);
	}
}