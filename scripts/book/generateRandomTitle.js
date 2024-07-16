async function generateRandomTitle(i, selectedSettings, selectedGenres) {
	const name = getNames(selectedSettings);
	const noun = getNouns(selectedSettings, nounMapping);
	const adjective = getAdjectives(selectedSettings, adjectiveMapping);
	const location = getLocations(selectedSettings, locationMapping);

	const genreFictionArray = await getGenreTitle(noun, adjective, name, location, 'Belletristik')
	const genreBiographyArray = await getGenreTitle(noun, adjective, name, location, 'Biographie')
	const genreLeisureArray = await getGenreTitle(noun, adjective, name, location, 'Freizeit')
	const genreGeographyArray = await getGenreTitle(noun, adjective, name, location, 'Geographie')
	// const genreHistoryArray = getGenreHistoryArray(noun, adjective, name, location);
	const genreHistoryArray = await getGenreTitle(noun, adjective, name, location, 'Geschichte')
	const genreCraftArray = await getGenreTitle(noun, adjective, name, location, 'Handwerk')
	const genreMedicineArray = await getGenreTitle(noun, adjective, name, location, 'Heilkunst')
	const genreChildrensBookArray = await getGenreTitle(noun, adjective, name, location, 'Kinderbuch')
	const genreCulinaryArtsArray = await getGenreTitle(noun, adjective, name, location, 'Kochkunst')
	const genreFineArtsArray = await getGenreTitle(noun, adjective, name, location, 'Bildende Kunst')
	const genrePerformingArtsArray = await getGenreTitle(noun, adjective, name, location, 'Darstellende Kunst')
	const genreMagicArray = await getGenreTitle(noun, adjective, name, location, 'Magie')
	const genreNatureStudiesArray = await getGenreTitle(noun, adjective, name, location, 'Naturkunde')
	const genrePhilosophyArray = await getGenreTitle(noun, adjective, name, location, 'Philosophie')
	const genrePsychologyArray = await getGenreTitle(noun, adjective, name, location, 'Psychologie')
	const genreLawArray = await getGenreTitle(noun, adjective, name, location, 'Recht')
	const genreReligionArray = await getGenreTitle(noun, adjective, name, location, 'Religion')
	const genreSportArray = await getGenreTitle(noun, adjective, name, location, 'Sport')
	const genreLanguageArray = await getGenreTitle(noun, adjective, name, location, 'Sprache')
	const genreEthnologyArray = await getGenreTitle(noun, adjective, name, location, 'Völkerkunde')

	// const genreFictionArray = getGenreFictionArray(noun, adjective, name, location);
	// const genreBiographyArray = getGenreBiographyArray(noun, adjective, name, location);
	// const genreLeisureArray = getGenreLeisureArray(noun, adjective, name, location);
	// const genreGeographyArray = getGenreGeographyArray(noun, adjective, name, location);
	// // const genreHistoryArray = getGenreHistoryArray(noun, adjective, name, location);
	// const genreHistoryArray = await getGenreArray('history', noun, adjective, name, location); 
	// const genreCraftArray = getGenreCraftArray(noun, adjective, name, location);
	// const genreMedicineArray = getGenreMedicineArray(noun, adjective, name, location);
	// const genreChildrensBookArray = getGenreChildrensBookArray(noun, adjective, name, location);
	// const genreCulinaryArtsArray = getGenreCulinaryArtsArray(noun, adjective, name, location);
	// const genreFineArtsArray = getGenreFineArtsArray(noun, adjective, name, location);
	// const genrePerformingArtsArray = getGenrePerformingArtsArray(noun, adjective, name, location);
	// const genreMagicArray = getGenreMagicArray(noun, adjective, name, location);
	// const genreNatureStudiesArray = getGenreNatureStudiesArray(noun, adjective, name, location);
	// const genrePhilosophyArray = getGenrePhilosophyArray(noun, adjective, name, location);
	// const genrePsychologyArray = getGenrePsychologyArray(noun, adjective, name, location);
	// const genreLawArray = getGenreLawArray(noun, adjective, name, location);
	// const genreReligionArray = getGenreReligionArray(noun, adjective, name, location);
	// const genreSportArray = getGenreSportArray(noun, adjective, name, location);
	// const genreLanguageArray = getGenreLanguageArray(noun, adjective, name, location);
	// const genreEthnologyArray = getGenreEthnologyArray(noun, adjective, name, location);

	const genreArrays = {
		Belletristik: genreFictionArray,
		Biographie: genreBiographyArray,
		Freizeit: genreLeisureArray,
		Geographie: genreGeographyArray,
		Geschichte: genreHistoryArray,
		Handwerk: genreCraftArray,
		Heilkunde: genreMedicineArray,
		Kinderbuch: genreChildrensBookArray,
		Kochkunst: genreCulinaryArtsArray,
		'Bildende Kunst': genreFineArtsArray,
		'Darstellende Kunst': genrePerformingArtsArray,
		Magie: genreMagicArray,
		Naturkunde: genreNatureStudiesArray,
		Philosophie: genrePhilosophyArray,
		Psychologie: genrePsychologyArray,
		Recht: genreLawArray,
		Religion: genreReligionArray,
		Sport: genreSportArray,
		Sprache: genreLanguageArray,
		Völkerkunde: genreEthnologyArray,
	};

	const bookTitleIdeas = [];

	for (const genre of selectedGenres) {
		const genreArray = genreArrays[genre];
		if (genreArray) {
			const randomTitle = getRandomElement(genreArray);
			if (randomTitle) {
				bookTitleIdeas.push(randomTitle);
			}
		}
	}

	const randomTitle = getRandomElement(bookTitleIdeas);
	return randomTitle;
}
