// Module-scoped cache — not global, not resettable from outside
let cachedGenreData = null;

async function loadAndGroupCsvData() {
	if (cachedGenreData) return cachedGenreData;

	let response;
	try {
		response = await fetch('./files/csv/genre/genre.csv');
	} catch (networkError) {
		throw new Error('genre.csv konnte nicht geladen werden: ' + networkError.message);
	}

	if (!response.ok) {
		throw new Error('genre.csv konnte nicht geladen werden: HTTP ' + response.status);
	}

	const csvText = await response.text();
	const rows    = csvText.split('\n').map(row => row.split(';').map(cell => cell.trim()));
	const headers = rows[0];
	const data    = rows.slice(1).filter(row => row.length === headers.length);

	const titleIndex = headers.indexOf('title');
	const tagsIndex  = headers.indexOf('tags');
	const genreIndex = headers.indexOf('genre');

	if (titleIndex === -1 || tagsIndex === -1 || genreIndex === -1) {
		throw new Error('genre.csv: Pflicht-Spalten fehlen (erwartet: title, tags, genre)');
	}

	const map = new Map();
	data.forEach(row => {
		const genre = row[genreIndex];
		const title = row[titleIndex];
		if (!genre || !title) return;
		if (!map.has(genre)) map.set(genre, []);
		map.get(genre).push({ title, tags: row[tagsIndex] });
	});

	cachedGenreData = map;
	return map;
}

export async function getGenreTitle(noun, adjective, name, location, genre) {
	const map = await loadAndGroupCsvData();
	if (!map.has(genre)) return [];
	return map.get(genre).map(entry => ({
		title: evalTemplate(entry.title, { noun, adjective, name, location }),
		tags:  evalTemplate(entry.tags,  { noun, adjective, name, location })
	}));
}

export function evalTemplate(template, context) {
	return new Function(...Object.keys(context), `return \`${template}\`;`)(...Object.values(context));
}
