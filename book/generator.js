'use strict';

/**
 * generator.js — Buchgenerierung und Anzeige
 *
 * Ersetzt scripts/book/generateBooks.js + scripts/book/displayGeneratedBooks.js.
 */

import { generateRandomTitle }       from './title.js';
import { generateRandomAuthor }      from './author.js';
import { generateRandomDescription } from './description.js';

// ─── Stream-Generator ────────────────────────────────────────────────────

/**
 * Generiert Bücher als async-Generator — jedes Buch wird sofort geliefert.
 *
 * @param {number}   count
 * @param {string[]} selectedSettings
 * @param {string[]} selectedGenres
 * @yields {{title, author, description, book_tags}}
 */
export async function* generateBooksStream(count, selectedSettings, selectedGenres) {
	if (selectedGenres.length === 0)   throw new Error('Kein Genre ausgewählt.');
	if (selectedSettings.length === 0) throw new Error('Kein Setting ausgewählt.');

	for (let i = 0; i < count; i++) {
		const [titleResult, author] = await Promise.all([
			generateRandomTitle(selectedSettings, selectedGenres),
			generateRandomAuthor(),
		]);
		const description = generateRandomDescription(author.race);

		yield {
			title:       titleResult.title.charAt(0).toUpperCase() + titleResult.title.slice(1),
			author:      { gender: author.gender, race: author.race, first_name: author.first_name, last_name: author.last_name },
			description: {
				page_count:      description.page_count,
				page_material:   description.page_material,
				book_edition:    description.book_edition,
				book_age:        description.book_age,
				book_size:       { height: description.book_height, length: description.book_length, width: description.book_width },
				book_condition:  description.book_condition,
				book_language:   description.book_language,
				book_binding:    description.book_binding,
				book_weight:     description.book_weight,
				book_value:      description.book_value,
				cover:           description.cover,
				text_quality:    description.text_quality,
				text_production: description.text_production,
				image:           description.image,
				bookmark:        description.bookmark,
				quirk:           description.quirk,
			},
			book_tags: _combineTags(titleResult.tags),
		};
	}
}

function _combineTags(tags) {
	return [...new Set(tags.split(',').map(t => t.trim()).filter(Boolean))].join(', ');
}

// ─── Anzeige ─────────────────────────────────────────────────────────────

/**
 * Rendert ein Buch-Objekt als Karte und hängt sie an den Container.
 *
 * @param {object}   book
 * @param {string[]} selectedFields
 * @param {Element}  container
 */
export function displaySingleBook(book, selectedFields, container) {
	const inc = (f) => selectedFields.includes(f);
	const row = (key, value) =>
		`<div class="card-meta-row">
			<span class="card-meta-key">${key}</span>
			<span class="card-meta-value">${value}</span>
		</div>`;

	let metaRows = '';
	if (inc('Autor'))              metaRows += row('Autor',         `${book.author.first_name} ${book.author.last_name}, ${book.author.gender}er ${book.author.race}`);
	if (inc('Seitenanzahl'))       metaRows += row('Seitenanzahl',  `${book.description.page_count} Seiten`);
	if (inc('Auflage'))            metaRows += row('Auflage',       book.description.book_edition);
	if (inc('Alter'))              metaRows += row('Alter',         book.description.book_age);
	if (inc('Sprache'))            metaRows += row('Sprache',       book.description.book_language);
	if (inc('Schlagwörter'))       metaRows += row('Schlagwörter',  book.book_tags);
	if (inc('Buchgröße'))          metaRows += row('Buchgröße',     `${book.description.book_size.height} × ${book.description.book_size.length} × ${book.description.book_size.width} cm`);
	if (inc('Seitenmaterial'))     metaRows += row('Seitenmaterial', book.description.page_material);
	if (inc('Gewicht'))            metaRows += row('Gewicht',       `${book.description.book_weight.gram} g / ~${book.description.book_weight.pound} lb`);
	if (inc('Buchzustand'))        metaRows += row('Buchzustand',   book.description.book_condition);
	if (inc('Buchbindung'))        metaRows += row('Buchbindung',   book.description.book_binding);
	if (inc('Buchwert'))           metaRows += row('Buchwert',      `${book.description.book_value} Goldmünzen`);
	if (inc('Material des Einbands')) metaRows += row('Einband',    book.description.cover.material);
	if (inc('Farbe des Einbands'))
		metaRows += row('Einbandfarbe', `${book.description.cover.color.name} <span class="card-color-swatch" style="background-color:${book.description.cover.color.hex}"></span>`);
	if (inc('Detail des Einbands'))   metaRows += row('Einbanddetail',  book.description.cover.detail);
	if (inc('Textqualität'))           metaRows += row('Textqualität',   book.description.text_quality);
	if (inc('Produktionsart des Texts')) metaRows += row('Produktion',  book.description.text_production);
	if (inc('Anzahl der Bilder'))      metaRows += row('Bilder',         book.description.image.number);
	if (inc('Qualität der Bilder'))    metaRows += row('Bildqualität',   book.description.image.quality);
	if (inc('Größe der Bilder'))       metaRows += row('Bildgröße',      book.description.image.size);
	if (inc('Farbe der Bilder'))       metaRows += row('Bildfarbe',      book.description.image.color);
	if (inc('Stil der Bilder'))        metaRows += row('Bildstil',       book.description.image.style);
	if (inc('Lesezeichen'))            metaRows += row('Lesezeichen',    book.description.bookmark);
	if (inc('Eigenart'))               metaRows += row('Eigenart',       book.description.quirk);

	const card = document.createElement('div');
	card.className = 'ds-card';
	card.innerHTML =
		'<div class="card-spine"></div>' +
		'<div class="card-body">' +
		`<div class="card-title">${book.title}</div>` +
		(metaRows ? `<div class="card-meta">${metaRows}</div>` : '') +
		'</div>';

	container.appendChild(card);
}
