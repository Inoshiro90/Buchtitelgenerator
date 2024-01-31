function generateRandomPageMaterial() {
	const randomNumber = d100();
	let pageMaterial;

	if (randomNumber <= 40) {
		pageMaterial = 'Papier';
	} else if (randomNumber <= 70) {
		pageMaterial = 'Pergament';
	} else if (randomNumber <= 90) {
		pageMaterial = 'Holz';
	} else {
		pageMaterial = 'Metall';
	}
	return pageMaterial;
}
