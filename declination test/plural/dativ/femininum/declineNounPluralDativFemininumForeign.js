function declineNounPluralDativFemininumForeign(noun, declinationPattern) {
	switch (declinationPattern) {
		case 'fremdWort':
			return noun;
		default:
			console.error('Ungültiges Deklinationsmuster:', declinationPattern);
	}
}