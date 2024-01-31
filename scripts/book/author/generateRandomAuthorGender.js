function generateRandomAuthorGender() {
	// Zufallszahl zwischen 1 und 100 generieren
	const randomNumber = Math.floor(Math.random() * 100) + 1;

	// Geschlecht basierend auf dem definierten Zahlenbereich auswählen
	if (randomNumber <= 49) {
		return 'männlich';
	} else if (randomNumber <= 98) {
		return 'weiblich';
	} else {
		return 'nicht-binär';
	}
}
