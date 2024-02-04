function declineNounPluralDativFemininumStrong(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'S3':
			return noun + 'n';
		case 'S5':
			return noun + 'n';
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}