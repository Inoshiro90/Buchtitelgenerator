export function generateRandomDescription(authorRace) {
	const page_count    = generateRandomPageCount();
	const page_material = generateRandomPageMaterial();
	const book_height   = generateRandomBookHeight();
	const book_length   = generateRandomBookLength();
	const book_condition = generateRandomBookCondition();
	const book_language  = generateRandomBookLanguage(authorRace);
	const book_binding   = generateRandomBookBinding();
	const text_quality    = generateRandomTextQuality();
	const text_production = generateRandomTextProduction(page_material);
	const image_quality   = generateRandomImageQuality();

	const weightGram = Math.ceil(
		generateBookWeight(book_height, book_length, page_count, page_material) / 5
	) * 5;

	return {
		page_count,
		page_material,
		book_edition:   generateRandomBookEdition(),
		book_age:       generateRandomBookAge(),
		book_height,
		book_length,
		book_width:     generateBookWidth(page_count, page_material),
		book_condition,
		book_language,
		book_binding,
		book_weight: {
			gram:     weightGram,
			kilogram: (weightGram / 1000).toFixed(2).replace('.', ','),
			pound:    (Math.ceil((weightGram / 500) / 0.05) * 0.05).toFixed(2).replace('.', ','),
		},
		cover: {
			material: generateRandomCoverMaterial(),
			color:    generateRandomCoverColor(),
			detail:   generateRandomCoverDetails(),
		},
		text_quality,
		text_production,
		image: {
			number:  generateRandomImageNumber(),
			color:   generateRandomImageColor(),
			size:    generateRandomImageSize(),
			style:   generateRandomImageStyle(),
			quality: image_quality,
		},
		bookmark: generateRandomBookmark(page_material),
		quirk:    generateRandomQuirk(),
		book_value: generateRandomBookValue(
			page_material, page_count, book_binding, generateRandomBookEdition(),
			book_condition, image_quality, text_production, text_quality, book_language
		),
	};
}
