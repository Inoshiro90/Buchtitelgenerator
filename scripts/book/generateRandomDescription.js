//Definitiv noch überarbeitungswürdig. Keine einheitliche Systematik für X_Y und X.Y
function generateRandomDescription(authorRace) {
	let randomDescription = {};

	randomDescription.page_count = generateRandomPageCount();
	randomDescription.page_material = generateRandomPageMaterial();

	randomDescription.book_edition = generateRandomBookEdition();
	randomDescription.book_age = generateRandomBookAge();

	randomDescription.book_height = generateRandomBookHeight();
	randomDescription.book_length = generateRandomBookLength();
	randomDescription.book_width = generateBookWidth(
		randomDescription.page_count,
		randomDescription.page_material
	);
	
	randomDescription.book_weight = {};
	randomDescription.book_weight.gram = Math.ceil(generateBookWeight(
		randomDescription.book_height,
		randomDescription.book_length,
		randomDescription.page_count,
		randomDescription.page_material
	) / 5)*5;
	randomDescription.book_weight.kilogram = (randomDescription.book_weight.gram / 1000).toFixed(2).replace('.', ',');
	randomDescription.book_weight.pound = (Math.ceil((randomDescription.book_weight.gram / 500) / 0.05) * 0.05).toFixed(2).replace('.', ',');

	randomDescription.book_condition = generateRandomBookCondition();
	randomDescription.book_language = generateRandomBookLanguage(authorRace);
	randomDescription.book_binding = generateRandomBookBinding();

	randomDescription.cover = {};
	randomDescription.cover.material = generateRandomCoverMaterial();
	randomDescription.cover.color = generateRandomCoverColor();
	randomDescription.cover.detail = generateRandomCoverDetails();

	randomDescription.text_quality = generateRandomTextQuality();
	randomDescription.text_production = generateRandomTextProduction(
		randomDescription.page_material
	);

	randomDescription.image = {};
	randomDescription.image.number = generateRandomImageNumber();
	randomDescription.image.color = generateRandomImageColor();
	randomDescription.image.size = generateRandomImageSize();
	randomDescription.image.style = generateRandomImageStyle();
	randomDescription.image.quality = generateRandomImageQuality();

	randomDescription.bookmark = generateRandomBookmark(randomDescription.page_material);
	randomDescription.quirk = generateRandomQuirk();

	randomDescription.book_value = generateRandomBookValue(
		randomDescription.page_material,
		randomDescription.page_count,
		randomDescription.book_binding,
		randomDescription.book_edition,
		randomDescription.book_condition,
		randomDescription.image.quality,
		randomDescription.text_production,
		randomDescription.text_quality,
		randomDescription.book_language
	);

	//Console.logs zum Testen der Werte (kann später entfernt/kommentiert werden)
	// console.log('Das Buch hat bei der Auflage den Wert  "' + randomDescription.book_edition + '".');
	// console.log('Das Buch ist ' + randomDescription.book_age + ' alt.');
	// console.log('Der Zustand des Buchs ist', randomDescription.book_condition + '.');
	// console.log('Das Buch wurde in der Sprache', randomDescription.book_language, 'verfasst.');
	// console.log('Die Seitenanzahl beträgt', randomDescription.page_count + '.');
	// console.log('Die Seiten bestehen aus', randomDescription.page_material + '.');
	// console.log('Das Buch ist ' + randomDescription.book_height + ' cm hoch.');
	// console.log('Das Buch ist ' + randomDescription.book_length + ' cm lang.');
	// console.log('Das Buch ist ' + randomDescription.book_width + ' cm breit.');
	// console.log(
	// 	'Das Buch ist ' +
	// 		randomDescription.book_weight +
	// 		' g/~' +
	// 		(randomDescription.book_weight / 1000).toFixed(2).replace('.', ',') +
	// 		' kg/~' +
	// 		(randomDescription.book_weight / 447).toFixed(2).replace('.', ',') +
	// 		' Pfund schwer.'
	// );
	// console.log ('Das Gewicht in Gramm beträgt', randomDescription.book_weight.gram)
	// console.log('Das Buch hat bei der Bindung den Wert "' + randomDescription.book_binding + '".');
	// console.log('Das Einbandmaterial des Buchs ist', randomDescription.cover.material + '.');
	// console.log(
	// 	'Die Farbe des Einbands ist',
	// 	randomDescription.cover.color.name + '/' + randomDescription.cover.color.hex + '.'
	// );
	// console.log('Der Einband des Buchs hat folgende Details:', randomDescription.cover.detail);
	// console.log('Der Zustand des Textes ist', randomDescription.text_quality + '.');
	// console.log(
	// 	'Der Text des Buchs wurde wie folgt produziert:',
	// 	randomDescription.text_production
	// );
	// console.log('Anzahl der Bilder:', randomDescription.image.number);
	// console.log('Größe der Bilder:', randomDescription.image.size);
	// console.log('Farbe der Bilder:', randomDescription.image.color);
	// console.log('Stil der Bilder:', randomDescription.image.style);
	// console.log('Qualität der Bilder:', randomDescription.image.quality);
	// console.log('Lesezeichen:', randomDescription.bookmark);
	// console.log('Eigenart:', randomDescription.quirk);

	//Ende der Console.logs

	return randomDescription;
}
