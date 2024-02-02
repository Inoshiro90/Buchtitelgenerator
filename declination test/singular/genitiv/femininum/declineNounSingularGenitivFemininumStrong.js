function declineNounSingularGenitivFemininumStrong(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'S3':
			return noun;
		case 'S5':
			return noun + 's';
			default:
				console.error('Ungültiges Deklinationsmuster:', declinationPattern)
	}
}