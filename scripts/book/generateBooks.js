let generatedBook;

function generateBooks(selectedSetting, selectedGenre) {
	function getBookCount() {
		let inputField = document.getElementById('input-field-book-count');

		let bookCount = parseInt(inputField.value);
		return bookCount;
	}

	let bookCount = getBookCount();
	// console.log(`Die Anzahl der zu generierenden Bücher beträgt ${bookCount}.`);

	let generatedBook = [];
	for (let i = 0; i < bookCount; i++) {
		generatedBook[i] = {
			title: null,
			author: {
				gender: null,
				race: null,
				first_name: null,
				last_name: null,
			},
			description: {
				page_count: null,
				page_material: null,
				book_edition: null,
				book_age: null,
				book_size: {
					height: null,
					length: null,
					width: null,
				},
				book_condition: null,
				book_language: null,
				book_binding: null,
				book_weight: {
					gram: null,
					kilogram: null,
					pound: null,
				},
				book_value: null,
				cover: {
					material: null,
					color: null,
					detail: null,
				},
				text: {
					production: null,
					quality: null,
				},
				image: {
					number: null,
					size: null,
					color: null,
					style: null,
					quality: null,
				},
				bookmark: null,
			},
			book_tags: {
				primary: [],
				secondary: [],
				tertiary: [],
				all: [],
			},
		};

		// console.log(`Ein leeres JSON-Array für Buch ${i} wurde erstellt.`);

		// Überprüfe, ob das Array selectedGenre mindestens einen Eintrag hat, falls nicht stoppe den Prozess
		if (selectedGenre.length === 0) {
			// Wenn das Array leer ist, Fehlermeldung anzeigen
			alert('Fehler: Das Genre-Array ist leer. Bitte füge Genres hinzu.');
			return;
			// Oder du könntest die Fehlermeldung in der Konsole ausgeben
			// console.error("Fehler: Das Genre-Array ist leer. Bitte füge Genres hinzu.");
		}

		let randomTitle = generateRandomTitle(i, selectedSetting, selectedGenre);
		let randomAuthor = generateRandomAuthor();
		let randomDescription = generateRandomDescription(randomAuthor.race);
		
		generatedBook[i].title = randomTitle.title.charAt(0).toUpperCase() + randomTitle.title.slice(1);

		generatedBook[i].author.gender = randomAuthor.gender;
		generatedBook[i].author.race = randomAuthor.race;
		generatedBook[i].author.first_name = randomAuthor.first_name;
		generatedBook[i].author.last_name = randomAuthor.last_name;

		generatedBook[i].description.page_count = randomDescription.page_count;
		generatedBook[i].description.page_material = randomDescription.page_material;

		generatedBook[i].description.book_edition = randomDescription.book_edition;
		generatedBook[i].description.book_age = randomDescription.book_age;
		generatedBook[i].description.book_size.height = randomDescription.book_height;
		generatedBook[i].description.book_size.length = randomDescription.book_length;
		generatedBook[i].description.book_size.width = randomDescription.book_width;
		generatedBook[i].description.book_condition = randomDescription.book_condition;
		generatedBook[i].description.book_language = randomDescription.book_language;
		generatedBook[i].description.book_binding = randomDescription.book_binding;

		generatedBook[i].description.book_weight.gram = randomDescription.book_weight.gram;
		generatedBook[i].description.book_weight.kilogram = randomDescription.book_weight.kilogram;
		generatedBook[i].description.book_weight.pound = randomDescription.book_weight.pound;

		generatedBook[i].description.book_value = randomDescription.book_value;
		
		generatedBook[i].description.cover.material = randomDescription.cover.material;
		generatedBook[i].description.cover.color = randomDescription.cover.color;
		generatedBook[i].description.cover.detail = randomDescription.cover.detail;

		generatedBook[i].description.text_quality = randomDescription.text_quality;
		generatedBook[i].description.text_production = randomDescription.text_production;

		generatedBook[i].description.image.number = randomDescription.image.number;
		generatedBook[i].description.image.size = randomDescription.image.size;
		generatedBook[i].description.image.color = randomDescription.image.color;
		generatedBook[i].description.image.style = randomDescription.image.style;
		generatedBook[i].description.image.quality = randomDescription.image.quality;

		generatedBook[i].description.bookmark = randomDescription.bookmark;
		generatedBook[i].description.quirk = randomDescription.quirk;


		function combineTags(tags) {
			const uniqueTags = Array.from(new Set(tags.split(','))); // Doppelte Werte entfernen

			// Schlagwörter mit Komma und Leerzeichen trennen
			const tagsString = uniqueTags.join(', ');

			return tagsString;
		}
		
		generatedBook[i].book_tags = combineTags(
			randomTitle.tags
		);

		// console.log(
		// 	'Die zusammengefügten Schlagwörter für Buch',
		// 	i,
		// 	'lauten:',
		// 	generatedBook[i].book_tags.all
		// );
		// console.log(`Buch ${i} wurde generiert.\n`);
	}

	// console.log(
	// 	'In dem Array generatedBook befinden sich folgende Werte: ' + JSON.stringify(generatedBook)
	// );
	return generatedBook;
}
