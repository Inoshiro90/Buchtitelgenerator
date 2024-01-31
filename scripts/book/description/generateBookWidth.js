function generateBookWidth(pageCount, pageMaterial) {
	let bookWidth;

	switch (pageMaterial) {
		case 'Papier':
			bookWidth = 0.0125 * pageCount;
			break;
		case 'Pergament':
			bookWidth = 0.025 * pageCount;
			break;
		case 'Holz':
			bookWidth = 0.1 * pageCount;
			break;
		case 'Metall':
			bookWidth = 0.075 * pageCount;
			break;
		default:
			console.log('Ungültiges Material:', pageMaterial);
			return;
	}

	// Runde das Ergebnis auf eine Nachkommastelle
	bookWidth = Math.round(bookWidth * 10) / 10;

	// Ersetze Punkt durch Komma
	bookWidth = bookWidth.toString().replace('.', ',');

	return bookWidth;
}
