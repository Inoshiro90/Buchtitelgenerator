function displayGeneratedBooks(generatedBooks, selectedDescription) {
	// Überprüfe, ob das Array selectedGenre mindestens einen Eintrag hat, falls nicht stoppe den Prozess
	if (selectedGenre.length === 0) {
		// Wenn das Array leer ist, Fehlermeldung anzeigen
		return;
	}

	// Container-Element abrufen
	const container = document.getElementById('container-generated-books');

	// Den Container leeren, bevor neue Bücher hinzugefügt werden
	container.innerHTML = '';

	generatedBooks.forEach(function (book) {
		// HTML-Inhalt erstellen mit den Details des Buches
		const htmlContent =
			`<p>` +
			`<b style="font-size: 1.25rem">${book.title}</b> <br>` +
			(selectedDescription.includes('Autor')
				? `<b>Autor:</b> ${book.author.first_name} ${book.author.last_name}, ${book.author.gender}er ${book.author.race}<br>`
				: '') +
			(selectedDescription.includes('Seitenanzahl')
				? `<b>Seitenanzahl:</b> ${book.description.page_count} Seiten<br>`
				: '') +
			(selectedDescription.includes('Auflage')
				? `<b>Auflage:</b> ${book.description.book_edition}<br>`
				: '') +
			(selectedDescription.includes('Alter')
				? `<b>Alter:</b> ${book.description.book_age}<br>`
				: '') +
			(selectedDescription.includes('Sprache')
				? `<b>Sprache:</b> ${book.description.book_language}<br>`
				: '') +
			(selectedDescription.includes('Schlagwörter')
				? `<b>Schlagwörter:</b> ${book.book_tags}<br>`
				: '') +
			(selectedDescription.includes('Buchgröße')
				? `<b>Buchgröße:</b> ${book.description.book_size.height} x ${book.description.book_size.length} x ${book.description.book_size.width} cm<br>`
				: '') +
			(selectedDescription.includes('Seitenmaterial')
				? `<b>Seitenmaterial:</b> ${book.description.page_material}<br>`
				: '') +
			(selectedDescription.includes('Gewicht')
				? `<b>Gewicht:</b> ${book.description.book_weight.gram} g / ~ ${book.description.book_weight.kilogram} kg / ~ ${book.description.book_weight.pound} lb<br>`
				: '') +
			(selectedDescription.includes('Buchzustand')
				? `<b>Buchzustand:</b> ${book.description.book_condition}<br>`
				: '') +
			(selectedDescription.includes('Buchpreis')
				? `<b>Buchpreis:</b> ${book.description.book_value}<br>`
				: '') +
			(selectedDescription.includes('Buchbindung')
				? `<b>Buchbindung:</b> ${book.description.book_binding}<br>`
				: '') +
			(selectedDescription.includes('Buchwert')
				? `<b>Buchwert:</b> ${book.description.book_value} Goldmünzen<br>`
				: '') +
			(selectedDescription.includes('Material des Einbands')
				? `<b>Material des Einbands:</b> ${book.description.cover.material}<br>`
				: '') +
			(selectedDescription.includes('Farbe des Einbands')
				? `<b>Farbe des Einbands:</b> ${book.description.cover.color.name}/${book.description.cover.color.hex} <span style="margin-bottom: 3pt; vertical-align: middle; display: inline-block; width: 12pt; height: 12pt; border-radius: 50%; background-color: ${book.description.cover.color.hex};"></span><br>`
				: '') +
			(selectedDescription.includes('Detail des Einbands')
				? `<b>Detail des Einbands:</b> ${book.description.cover.detail}<br>`
				: '') +
			(selectedDescription.includes('Textqualität')
				? `<b>Textqualität:</b> ${book.description.text_quality}<br>`
				: '') +
			(selectedDescription.includes('Produktionsart des Texts')
				? `<b>Produktionsart des Texts:</b> ${book.description.text_production}<br>`
				: '') +
			(selectedDescription.includes('Anzahl der Bilder')
				? `<b>Anzahl der Bilder:</b > ${book.description.image.number}<br>`
				: '') +
			(selectedDescription.includes('Qualität der Bilder')
				? `<b>Qualität der Bilder:</b > ${book.description.image.quality}<br>`
				: '') +
			(selectedDescription.includes('Größe der Bilder')
				? `<b>Größe der Bilder:</b> ${book.description.image.size}<br>`
				: '') +
			(selectedDescription.includes('Farbe der Bilder')
				? `<b>Farbe der Bilder:</b> ${book.description.image.color}<br>`
				: '') +
			(selectedDescription.includes('Stil der Bilder')
				? `<b>Stil der Bilder:</b> ${book.description.image.style}<br>`
				: '') +
			(selectedDescription.includes('Lesezeichen')
				? `<b>Lesezeichen:</b> ${book.description.bookmark}<br>`
				: '') +
			(selectedDescription.includes('Eigenart')
				? `<b>Eigenart:</b> ${book.description.quirk}<br>`
				: '') +
			`</p>`;

		// HTML-Inhalt zum Container hinzufügen
		container.innerHTML += htmlContent;
	});
}
