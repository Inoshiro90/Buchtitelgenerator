function declineNounPluralGenitivMaskulinumWeak(noun, declinationPattern) {
	console.log ('noun:', noun)
	switch (declinationPattern) {
		case 'W1':
			return noun;
		case 'W2':
			return noun;
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}