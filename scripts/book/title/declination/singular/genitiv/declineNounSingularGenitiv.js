function declineNounSingularGenitiv(attribute, noun, genus, declinationRule, declinationPattern) {
	// console.log('noun:', noun)
	switch (genus) {
		case 'maskulinum':
			return declineNounSingularGenitivMaskulinum(
				attribute,
				noun,
				declinationRule,
				declinationPattern
			);
		case 'femininum':
			return declineNounSingularGenitivFemininum(
				attribute,
				noun,
				declinationRule,
				declinationPattern
			);
		case 'neutrum':
			return declineNounSingularGenitivNeutrum(
				attribute,
				noun,
				declinationRule,
				declinationPattern
			);
		default:
			console.error('Ungültiger Genus in declineNounSingularGenitiv:', genus);
			return;
	}
}