function generateRandomTextProduction(pageMaterial) {
	const randomNumber = d20(1);
	let textProduction;
	let randomInkColor = color[Math.floor(Math.random() * color.length)];

	// Überprüfen, ob die Farbe den Wert 'Weißton' oder 'Grauton' für color.hue hat
	while (randomInkColor.hue === 'Weißton' || randomInkColor.hue === 'Grauton') {
		randomInkColor = color[Math.floor(Math.random() * color.length)];
	}

	//Hier können Sie den Code für die weiteren Aktionen mit randomInkColor hinzufügen

	if (pageMaterial === 'Holz' || pageMaterial === 'Metall') {
		if (randomNumber <= 1) {
			textProduction = 'graviert/geschnitzt';
		} else if (randomNumber <= 9) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, schwarz/#06080F <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #06080F;"></span>`;
		} else if (randomNumber <= 11) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, blau/#000F55 <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #000F55;"></span>`;
		} else if (randomNumber <= 12) {
			textProduction = `handgeschrieben mit gewöhnlicher Tinte, ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else if (randomNumber <= 13) {
			textProduction = 'handgeschrieben mit Humanoidenblut';
		} else if (randomNumber <= 15) {
			textProduction = 'handgeschrieben mit Tierblut';
		} else if (randomNumber <= 16) {
			textProduction = 'handgeschrieben mit Monsterblut';
		} else if (randomNumber <= 17) {
			textProduction = `handgeschrieben mit magischer Tinte, ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else if (randomNumber <= 19) {
			textProduction = `gemalt in ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else {
			textProduction = `gedruckt in ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		}
	} else {
		if (randomNumber <= 1) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, schwarz/#06080F <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #06080F;"></span>`;
		} else if (randomNumber <= 9) {
			textProduction = `hangeschrieben mit gewöhnlicher Tinte, blau/#000F55 <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: #000F55;"></span>`;
		} else if (randomNumber <= 11) {
			textProduction = `handgeschrieben mit gewöhnlicher Tinte, ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else if (randomNumber <= 12) {
			textProduction = 'handgeschrieben mit Humanoidenblut';
		} else if (randomNumber <= 13) {
			textProduction = 'handgeschrieben mit Tierblut';
		} else if (randomNumber <= 15) {
			textProduction = 'handgeschrieben mit Monsterblut';
		} else if (randomNumber <= 17) {
			textProduction = `handgeschrieben mit magischer Tinte, ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else if (randomNumber <= 19) {
			textProduction = `gemalt in ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		} else {
			textProduction = `gedruckt in ${randomInkColor.name} (${randomInkColor.hue})/${randomInkColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomInkColor.hex};"></span>`;
		}
	}

	return textProduction;
}
