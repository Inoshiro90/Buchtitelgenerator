function declineNounSingularAkkusativMaskulinumWeak(noun, declinationPattern) {
	function endsWithE(noun) {
		return noun.endsWith('e');
	}
	
	switch (declinationPattern) {
		case 'W1':
			return endsWithE(noun) ? noun + 'n' : noun + 'en';
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}