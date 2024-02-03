function declineNounSingularGenitivNeutrumMixed(noun, declinationPattern) {
	function endsWithE(noun) {
		return noun.endsWith('e');
	}

	function endsWithN(noun) {
		return noun.endsWith('n');
	}

	switch (declinationPattern) {
		case 'W3':
			return endsWithE(noun) ? noun + 's' : noun + 'es';
		case 'W4':
			return endsWithE(noun) ? noun + 'ns' : endsWithN(noun) ? noun + 's' : noun + 'ens';
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}