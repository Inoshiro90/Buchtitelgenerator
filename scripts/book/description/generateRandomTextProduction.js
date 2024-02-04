function generateRandomTextProduction(pageMaterial) {
	const randomNumber = d20(1);
	let textProduction;

	if (pageMaterial === 'Holz' || pageMaterial === 'Metall') {
		if (randomNumber <= 1) {
			textProduction = 'graviert/geschnitzt';
		} else if (randomNumber <= 9) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, tintenschwarz/#252626 <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #252626;"></span>`;
		} else if (randomNumber <= 11) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, tintenblau/#176189 <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #176189;"></span>`;
		} else if (randomNumber <= 12) {
			const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `handgeschrieben mit gewöhnlicher Tinte, ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else if (randomNumber <= 13) {
			textProduction = 'handgeschrieben mit Humanoidenblut';
		} else if (randomNumber <= 15) {
			textProduction = 'handgeschrieben mit Tierblut';
		} else if (randomNumber <= 16) {
			textProduction = 'handgeschrieben mit Monsterblut';
		} else if (randomNumber <= 17) {
			const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `handgeschrieben mit magischer Tinte, ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else if (randomNumber <= 19) {
			const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `gemalt in ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else {
            const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `gedruckt in ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		}
	} else {
		if (randomNumber <= 1) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, tintenschwarz/#252626 <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #252626;"></span>`;
		} else if (randomNumber <= 9) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, tintenblau/#176189 <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #176189;"></span>`;
		} else if (randomNumber <= 11) {
			const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `handgeschrieben mit gewöhnlicher Tinte, ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else if (randomNumber <= 12) {
			textProduction = 'handgeschrieben mit Humanoidenblut';
		} else if (randomNumber <= 13) {
			textProduction = 'handgeschrieben mit Tierblut';
		} else if (randomNumber <= 15) {
			textProduction = 'handgeschrieben mit Monsterblut';
		} else if (randomNumber <= 17) {
            const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `handgeschrieben mit magischer Tinte, ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;;
		} else if (randomNumber <= 19) {
			const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `gemalt in ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else {
            const randomInkColor = color[Math.floor(Math.random() * color.length)];
			textProduction = `gedruckt in ${randomInkColor.name}/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		}
	}

	return textProduction;
}
