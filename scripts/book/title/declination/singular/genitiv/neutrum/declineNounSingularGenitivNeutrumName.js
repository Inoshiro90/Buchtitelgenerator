function declineNounSingularGenitivNeutrumName(noun, declinationPattern) {
	function endsWithSXZ(noun) {
		const sibilantSounds = ['s', 'x', 'z']; // Liste der relevanten Konsonanten

		// Überprüfen, ob das letzte Zeichen in der Liste der relevanten Konsonanten enthalten ist
		return sibilantSounds.includes(noun.charAt(noun.length - 1));
	}

	switch (declinationPattern) {
		case 'eigenname':
			return endsWithSXZ ? noun + '\'' : noun +'s';
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}