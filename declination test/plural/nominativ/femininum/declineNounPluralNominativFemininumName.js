function declineNounPluralNominativMaskulinumName(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'eigenName':
			return noun;
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}