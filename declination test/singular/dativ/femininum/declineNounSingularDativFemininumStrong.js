function declineNounSingularDativFemininumStrong(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'S1':
			return noun;
		case 'S2':
			return noun;
		case 'S3':
			return noun;
		case 'S4':
			return noun;
		case 'S5':
			return noun;
		case 'S6':
			return noun;
			default:
				console.error('Ungültiges Deklinationsmuster:', declinationPattern)
	}
}