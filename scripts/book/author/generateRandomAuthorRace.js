function generateRandomAuthorRace() {
	// Zufallszahl zwischen 1 und 100 generieren
	const randomNumber = Math.floor(Math.random() * 100) + 1;
  
	// Volk basierend auf dem definierten Zahlenbereich auswählen
	if (randomNumber <= 49) {
	  return 'Mensch';
	} else if (randomNumber <= 59) {
	  return 'Zwerg';
	} else if (randomNumber <= 69) {
	  return 'Elf';
	} else if (randomNumber <= 74) {
	  return 'Halbling';
	} else if (randomNumber <= 79) {
	  return 'Gnom';
	} else if (randomNumber <= 84) {
	  return 'Halbelf';
	} else if (randomNumber <= 89) {
	  return 'Halbork';
	} else if (randomNumber <= 94) {
	  return 'Drachenblütiger';
	} else {
	  return 'Tiefling';
	}
  }