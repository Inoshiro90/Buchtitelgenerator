function generateBookWeight(bookHeight, bookLength, pageCount, pageMaterial) {
	bookLength = convertCommaToDot(bookLength);
	bookHeight = convertCommaToDot(bookHeight);

	let bookWeight;
	switch (pageMaterial) {
		case 'Papier':
			bookWeight = pageCount * 0.0125 * bookLength * bookHeight * 0.5;
			break;
		case 'Pergament':
			bookWeight = pageCount * 0.025 * bookLength * bookHeight * 0.75;
			break;
		case 'Holz':
			bookWeight = pageCount * 0.1 * bookLength * bookHeight * 1.5;
			break;
		case 'Metall':
			bookWeight = pageCount * 0.075 * bookLength * bookHeight * 8;
			break;
		default:
			console.error('Ungültiges Material:', pageMaterial);
	}
	return bookWeight.toFixed(0).toString().replace('.', ',');
}

function convertCommaToDot(value) {
	if (typeof value === 'string') {
		return parseFloat(value.replace(',', '.'));
	}
	return value;
}