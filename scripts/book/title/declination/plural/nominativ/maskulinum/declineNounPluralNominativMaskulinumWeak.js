function declineNounPluralNominativMaskulinumWeak(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'W1':
			return noun;
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}