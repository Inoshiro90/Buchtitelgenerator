import { generateRandomTitle }       from './generateRandomTitle.js';
import { generateRandomAuthor }      from './generateRandomAuthor.js';
import { generateRandomDescription } from './generateRandomDescription.js';

// /**
//  * Generates an array of random books.
//  * @param {number}   count           - Number of books to generate (1–100).
//  * @param {string[]} selectedSetting - Active campaign settings.
//  * @param {string[]} selectedGenre   - Active genres.
//  * @returns {Promise<Object[]>}
//  */

export async function* generateBooksStream(count, selectedSetting, selectedGenre) {
	if (selectedGenre.length === 0)   throw new Error('Kein Genre ausgewählt.');
	if (selectedSetting.length === 0) throw new Error('Kein Setting ausgewählt.');

	for (let i = 0; i < count; i++) {
		const randomTitle       = await generateRandomTitle(i, selectedSetting, selectedGenre);
		const randomAuthor      = generateRandomAuthor();
		const randomDescription = generateRandomDescription(randomAuthor.race);

		yield {
			title: randomTitle.title.charAt(0).toUpperCase() + randomTitle.title.slice(1),
			author: {
				gender:     randomAuthor.gender,
				race:       randomAuthor.race,
				first_name: randomAuthor.first_name,
				last_name:  randomAuthor.last_name,
			},
			description: {
				page_count:    randomDescription.page_count,
				page_material: randomDescription.page_material,
				book_edition:  randomDescription.book_edition,
				book_age:      randomDescription.book_age,
				book_size: {
					height: randomDescription.book_height,
					length: randomDescription.book_length,
					width:  randomDescription.book_width,
				},
				book_condition:  randomDescription.book_condition,
				book_language:   randomDescription.book_language,
				book_binding:    randomDescription.book_binding,
				book_weight:     randomDescription.book_weight,
				book_value:      randomDescription.book_value,
				cover:           randomDescription.cover,
				text_quality:    randomDescription.text_quality,
				text_production: randomDescription.text_production,
				image:           randomDescription.image,
				bookmark:        randomDescription.bookmark,
				quirk:           randomDescription.quirk,
			},
			book_tags: combineTags(randomTitle.tags),
		};
	}
}

/** Deduplicates and formats a comma-separated tag string. */
function combineTags(tags) {
	return [...new Set(
		tags.split(',').map(t => t.trim()).filter(Boolean)
	)].join(', ');
}