function generateRandomImageColor() {
	const randomNumber = d20();
	let imageColor;
	if (randomNumber <= 12) {
		imageColor = 'einfarbig in schwarz und weiß';
	} else if (randomNumber <= 17) {
		const randomImageColor = color[Math.floor(Math.random() * color.length)];
		imageColor = `einfarbig in ${randomImageColor.name}/${randomImageColor.hex}  <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomImageColor.hex};"></span>`;
	} else if (randomNumber <= 18) {
		const randomColor1 = color[Math.floor(Math.random() * color.length)];
		let randomColor2 = color[Math.floor(Math.random() * color.length)];
		while (randomColor2 === randomColor1) {
			randomColor2 = color[Math.floor(Math.random() * color.length)];
		}
		imageColor = `zweifarbig in ${randomColor1.name}/${randomColor1.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor1.hex};"></span> und ${randomColor2.name}/${randomColor2.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${randomColor2.hex};"></span>`;
	} else if (randomNumber <= 19) {
		imageColor = 'Halbton';
	} else {
		imageColor = 'Volltonfarbe';
	}
	return imageColor;
}