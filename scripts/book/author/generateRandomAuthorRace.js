function generateRandomAuthorRace() {
	// Zufallszahl zwischen 1 und 100 generieren
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	let race;

	// Volk basierend auf dem definierten Zahlenbereich auswählen
	if (randomNumber <= 49) {
		race = 'Mensch';
	} else if (randomNumber <= 59) {
		race = 'Zwerg';
	} else if (randomNumber <= 69) {
		race = 'Elf';
	} else if (randomNumber <= 74) {
		race = 'Halbling';
	} else if (randomNumber <= 79) {
		race = 'Gnom';
	} else if (randomNumber <= 84) {
		race = 'Halbelf';
	} else if (randomNumber <= 89) {
		race = 'Halbork';
	} else if (randomNumber <= 94) {
		race = 'Drachenblütiger';
	} else {
		race = 'Tiefling';
	}
	return race;
}
