function declineNounPluralGenitivMaskulinumMixed(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'W3':
			return noun;
		case 'W4':
			return noun;
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}