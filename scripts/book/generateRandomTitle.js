import { getGenreTitle } from './title/genres/getGenreTitle.js';

export async function generateRandomTitle(i, selectedSettings, selectedGenres) {
	const name      = getNames(selectedSettings);
	const noun      = getNouns(selectedSettings, nounMapping);
	const adjective = getAdjectives(selectedSettings, adjectiveMapping);
	const location  = getLocations(selectedSettings, locationMapping);

	const genreArrays = await Promise.all(
		selectedGenres.map(genre => getGenreTitle(noun, adjective, name, location, genre))
	);

	const bookTitleIdeas = [];
	selectedGenres.forEach((genre, idx) => {
		const arr = genreArrays[idx];
		if (arr && arr.length > 0) {
			const t = getRandomElement(arr);
			if (t) bookTitleIdeas.push(t);
		}
	});

	if (bookTitleIdeas.length === 0) {
		console.error('[generateRandomTitle] Keine Titelvorlagen.', { selectedGenres, selectedSettings });
		return { title: 'Unbekanntes Werk', tags: selectedGenres[0] || 'Unbekannt' };
	}

	return getRandomElement(bookTitleIdeas);
}
