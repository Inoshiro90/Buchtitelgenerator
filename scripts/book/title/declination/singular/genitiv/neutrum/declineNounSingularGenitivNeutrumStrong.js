function declineNounSingularGenitivNeutrumStrong(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'S1':
			return noun + 's';
		case 'S2':
			return noun + 's';
		case 'S4':
			return noun + 's';
		case 'S5':
			return noun + 's';
		case 'S6':
			return noun + 's';
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}