function declineNounSingularDativMaskulinumName(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'eigenname':
			return noun;
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}