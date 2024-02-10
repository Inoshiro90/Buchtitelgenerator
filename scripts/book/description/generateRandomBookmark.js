function generateRandomBookmark(pageMaterial) {
	const randomNumber = d100();
	const randomColor = color[Math.floor(Math.random() * color.length)];
	let bookmark;

	if (pageMaterial === 'Metall' || pageMaterial === 'Holz') {
		if (randomNumber <= 7) {
			bookmark = `ein Stück Schnur, ${randomColor.name} (${randomColor.hue})/${randomColor.hex}`;
		} else if (randomNumber <= 14) {
			bookmark = 'eine Buchklammer';
		} else if (randomNumber <= 21) {
			bookmark = `ein Ecklesezeichen, ${randomColor.name} (${randomColor.hue})/${randomColor.hex}`;
		} else if (randomNumber <= 28) {
			bookmark = `eine farbige Banderole, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 35) {
			bookmark = `ein Stück Papier, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 42) {
			bookmark = `eine dehnbare Schnur, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 49) {
			bookmark = `ein Streifen aus Stoff, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 56) {
			bookmark = 'ein dünnes Stück Metall';
		} else if (randomNumber <= 91) {
			bookmark = `ein Streifen aus lederähnlichem Material, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else {
			bookmark = `ein klebender Notizzettel, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		}
	} else {
		if (randomNumber <= 6) {
			bookmark = 'ein Eselsohr';
		} else if (randomNumber <= 12) {
			bookmark = 'ein kleiner Riss in der Seite';
		} else if (randomNumber <= 18) {
			bookmark = `ein Stück Schnur, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 24) {
			bookmark = 'eine Buchklammer';
		} else if (randomNumber <= 30) {
			bookmark = `ein Ecklesezeichen, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 36) {
			bookmark = `eine farbige Banderole, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 42) {
			bookmark = `ein Stück Papier, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 48) {
			bookmark = `eine dehnbare Schnur, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 54) {
			bookmark = `ein Streifen aus Stoff, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else if (randomNumber <= 60) {
			bookmark = 'ein dünnes Stück Metall';
		} else if (randomNumber <= 95) {
			bookmark = `ein Streifen aus lederähnlichem Material, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		} else {
			bookmark = `ein klebender Notizzettel, ${randomColor.name} (${randomColor.hue})/${randomColor.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor.hex};"></span>`;
		}
	}
	return bookmark;
}
