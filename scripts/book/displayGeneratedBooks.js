export function displaySingleBook(book, selectedFields, container) {
	const card = document.createElement('div');
	card.className = 'ds-card';

	let metaRows = '';

	function row(key, value) {
		return `<div class="card-meta-row">
			<span class="card-meta-key">${key}</span>
			<span class="card-meta-value">${value}</span>
		</div>`;
	}

	const inc = (f) => selectedFields.includes(f);

	if (inc('Autor'))
		metaRows += row(
			'Autor',
			`${book.author.first_name} ${book.author.last_name}, ${book.author.gender}er ${book.author.race}`,
		);

	if (inc('Seitenanzahl'))
		metaRows += row('Seitenanzahl', `${book.description.page_count} Seiten`);

	if (inc('Auflage')) metaRows += row('Auflage', book.description.book_edition);
	if (inc('Alter')) metaRows += row('Alter', book.description.book_age);
	if (inc('Sprache')) metaRows += row('Sprache', book.description.book_language);
	if (inc('Schlagwörter')) metaRows += row('Schlagwörter', book.book_tags);
	if (inc('Buchgröße'))
		metaRows += row(
			'Buchgröße',
			`${book.description.book_size.height} × ${book.description.book_size.length} × ${book.description.book_size.width} cm`,
		);
	if (inc('Seitenmaterial')) metaRows += row('Seitenmaterial', book.description.page_material);
	if (inc('Gewicht'))
		metaRows += row(
			'Gewicht',
			`${book.description.book_weight.gram} g / ~${book.description.book_weight.pound} lb`,
		);
	if (inc('Buchzustand')) metaRows += row('Buchzustand', book.description.book_condition);
	if (inc('Buchbindung')) metaRows += row('Buchbindung', book.description.book_binding);
	if (inc('Buchwert')) metaRows += row('Buchwert', `${book.description.book_value} Goldmünzen`);
	if (inc('Material des Einbands')) metaRows += row('Einband', book.description.cover.material);
	if (inc('Farbe des Einbands'))
		metaRows += row(
			'Einbandfarbe',
			`${book.description.cover.color.name} <span class="card-color-swatch" style="background-color:${book.description.cover.color.hex}"></span>`,
		);
	if (inc('Detail des Einbands')) metaRows += row('Einbanddetail', book.description.cover.detail);
	if (inc('Textqualität')) metaRows += row('Textqualität', book.description.text_quality);
	if (inc('Produktionsart des Texts'))
		metaRows += row('Produktion', book.description.text_production);
	if (inc('Anzahl der Bilder')) metaRows += row('Bilder', book.description.image.number);
	if (inc('Qualität der Bilder')) metaRows += row('Bildqualität', book.description.image.quality);
	if (inc('Größe der Bilder')) metaRows += row('Bildgröße', book.description.image.size);
	if (inc('Farbe der Bilder')) metaRows += row('Bildfarbe', book.description.image.color);
	if (inc('Stil der Bilder')) metaRows += row('Bildstil', book.description.image.style);
	if (inc('Lesezeichen')) metaRows += row('Lesezeichen', book.description.bookmark);
	if (inc('Eigenart')) metaRows += row('Eigenart', book.description.quirk);

	card.innerHTML =
		'<div class="card-spine"></div>' +
		'<div class="card-body">' +
		`<div class="card-title">${book.title}</div>` +
		(metaRows ? `<div class="card-meta">${metaRows}</div>` : '') +
		'</div>';

	container.appendChild(card);
}
