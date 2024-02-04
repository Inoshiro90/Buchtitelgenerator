function declineNounSingularDativNeutrumMixed(noun, declinationPattern) {
	function endsWithE(noun) {
		return noun.endsWith('e');
	}

	function endsWithN(noun) {
		return noun.endsWith('n');
	}

	switch (declinationPattern) {
		case 'W3':
			return noun;
		case 'W4':
			return endsWithE(noun) ? noun + 'n' : endsWithN(noun) ? noun : noun + 'en';
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}