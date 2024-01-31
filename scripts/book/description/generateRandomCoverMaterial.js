function generateRandomCoverMaterial() {
	const randomNumber = d100();
	let coverMaterial;

	if (randomNumber <= 25) {
		coverMaterial = 'Kartonpapier';
	} else if (randomNumber <= 50) {
		coverMaterial = 'Hartpapier';
	} else if (randomNumber <= 65) {
		coverMaterial = 'Leder';
	} else if (randomNumber <= 68) {
		coverMaterial = 'unbehandelter Stoff';
	} else if (randomNumber <= 70) {
		coverMaterial = 'behandelter Stoff';
	} else if (randomNumber <= 72) {
		coverMaterial = 'Bambus';
	} else if (randomNumber <= 74) {
		coverMaterial = 'glattes Metall';
	} else if (randomNumber <= 75) {
		coverMaterial = 'glattes Edelmetall';
	} else if (randomNumber <= 77) {
		coverMaterial = 'gepolstertes Metall';
	} else if (randomNumber <= 78) {
		coverMaterial = 'gepolstertes Edelmetall';
	} else if (randomNumber <= 80) {
		coverMaterial = 'glatter Schiefer';
	} else if (randomNumber <= 82) {
		coverMaterial = 'rauer Schiefer';
	} else if (randomNumber <= 86) {
		coverMaterial = 'gepolstertes Holz';
	} else if (randomNumber <= 90) {
		coverMaterial = 'glattes Holz';
	} else if (randomNumber <= 92) {
		coverMaterial = 'gepolstertes Edelholz';
	} else if (randomNumber <= 94) {
		coverMaterial = 'glattes Edelholz';
	} else if (randomNumber <= 95) {
		coverMaterial = 'Hülle einer Kreatur';
	} else if (randomNumber <= 97) {
		coverMaterial = 'Tierfell';
	} else if (randomNumber <= 99) {
		coverMaterial = 'Monsterfell';
	} else {
		coverMaterial = 'Humanoidenhaut';
	}
	
	return coverMaterial;
}
