function declineNounPluralDativMaskulinumStrong(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'S1':
			return noun + 'n';
		case 'S2':
			return noun + 'n';
		case 'S4':
			return noun + 'n';
		case 'S5':
			return noun;
		case 'S6':
			return noun + 'n';
			default:
				console.error('Ungültiges Deklinationsmuster:', declinationPattern)
	}
}