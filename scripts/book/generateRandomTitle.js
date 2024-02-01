function generateRandomTitle(i, selectedSettings, selectedGenres) {
	// Klasse(numerus,kasus, attribute) = getRandomNounAndDecline(numerus, kasus, attribute, 'Klasse', classArray, selectedSettings);
	


	const randomRace = getRandomNoun(raceArray, selectedSettings)
	function Volk(numerus, kasus, attribute) {
		// Hier den Code einfügen, um die Flexion für das Volk je nach den übergebenen Argumenten zu bestimmen
		result = declineRandomNoun(numerus, kasus, attribute, 'Volk', randomRace);
		return result;
	}

	const randomMountainRange = getRandomNoun(mountainRangeArray, selectedSettings);
	function Gebirge(kasus, attribute) {
		numerus = randomMountainRange.nounNumber;
		result = declineRandomLocation(numerus, kasus, attribute, 'Gebirge', randomMountainRange);
		return result;
	}

	console.log(Gebirge('dativ', 'der_die_das').noun, Gebirge('dativ', 'schwach').noun)
	// console.log('randomMountainRange in generateRandomTitle:', 'noun:', randomMountainRange.nounSingular, 'genus:', randomMountainRange.nounGender, 'numerus:', Gebirge().numerus)

	// console.log('Gebirge() in generateRandomTitle:', 'genus:', randomMountainRange.nounGender, 'numerus:', Gebirge().numerus)
	// console.log('Deklinierter Ort in generateRandomTitle:', Gebirge(Gebirge().numerus, 'dativ', 'der_die_das').noun, Gebirge(Gebirge().numerus, 'dativ', 'schwach').noun)

// console.log('Deklinierter Ort in generateRandomTitle:', Gebirge('dativ', 'der_die_das').noun, Gebirge('dativ', 'schwach').noun)


// console.log('Gebirge dekliniert:',Gebirge('dativ', 'der_die_das').noun, Gebirge('dativ','stark').noun)

	// let Volk2;
	// do {
	// 	Volk2 = getRandomNounAndDecline('Volk2', raceArray, selectedSettings);
	// } while (Volk2 === Volk);

	// let Volk3;
	// do {
	// 	Volk3 = getRandomNounAndDecline('Volk3', raceArray, selectedSettings);
	// } while (Volk3 === Volk || Volk3 === Volk2);

	// const Beruf = getRandomNounAndDecline('Beruf', professionArray, selectedSettings);
	// const Kreaturtyp = getRandomNounAndDecline(
	// 	'Kreaturtyp',
	// 	creatureTypeArray,
	// 	selectedSettings
	// );

	// let Kreaturtyp2;
	// do {
	// 	Kreaturtyp2 = getRandomNounAndDecline(
	// 		'Kreaturtyp2',
	// 		creatureTypeArray,
	// 		selectedSettings
	// 	);
	// } while (Kreaturtyp2 === Kreaturtyp);

	// let Kreaturtyp3;
	// do {
	// 	Kreaturtyp3 = getRandomNounAndDecline(
	// 		'Kreaturtyp3',
	// 		creatureTypeArray,
	// 		selectedSettings
	// 	);
	// } while (Kreaturtyp3 === Kreaturtyp || Kreaturtyp3 === Kreaturtyp2);

	// const Abenteuerausrüstung = getRandomNounAndDecline(
	// 	'Abenteuerausrüstung',
	// 	adventuringGearArray,
	// 	selectedSettings
	// );

	// const Rüstung = getRandomNounAndDecline('Rüstung', armourArray, selectedSettings);
	// const Gebäude = getRandomNounAndDecline('Gebäude', buildingArray, selectedSettings);
	// const Tier = getRandomNounAndDecline('Tier', animalArray, selectedSettings);
	// const Ereignis = getRandomNounAndDecline('Ereignis', eventArray, selectedSettings);
	// const Metall = getRandomNounAndDecline('Metall', metalArray, selectedSettings);
	// const Terrain = getRandomNounAndDecline('Terrain', terrainArray, selectedSettings);
	// const Religiöses = getRandomNounAndDecline('Religion', religiousArray, selectedSettings);
	// const Waffe = getRandomNounAndDecline('Waffe', weaponArray, selectedSettings);

	//Adjektive
	const randomCardinalDirection = getRandomAdjective(adjectiveCardinalDirectionArray, selectedSettings)
	function adjektivHimmelsrichtung(numerus, kasus, comparison, attribute, genus) {
		// Hier den Code einfügen, um die Flexion für das Volk je nach den übergebenen Argumenten zu bestimmen
		result = declineRandomAdjective(numerus, kasus, comparison, attribute, genus, 'Himmelsrichtung', randomCardinalDirection);
		return result;
	}

	const randomPersonAppereance = getRandomAdjective(adjectivePersonAppearanceArray, selectedSettings)
	function adjektivPersonAussehen(numerus, kasus, comparison, attribute, genus) {
		// Hier den Code einfügen, um die Flexion für das Volk je nach den übergebenen Argumenten zu bestimmen
		result = declineRandomAdjective(numerus, kasus, comparison, attribute, genus, 'Himmelsrichtung', randomPersonAppereance);
		return result;
	}


	const category = {
		// Klasse,
		Volk,
		// Volk2,
		// Volk3,
		// Beruf,
		// Kreaturtyp,
		// Kreaturtyp2,
		// Kreaturtyp3,
		// Abenteuerausrüstung,
		// Tier,
		// Rüstung,
		// Gebäude,
		// Ereignis,
		// Metall,
		// Terrain,
		// Religiöses,
		// Waffe,
		Gebirge,
		adjektivHimmelsrichtung,
		adjektivPersonAussehen,
	};

	// const genreFictionArray = getGenreFictionArray(category);
	// const genreBiographyArray = getGenreBiographyArray(category);
	// const genreLeisureArray = getGenreLeisureArray(category);
	// const genreGeographyArray = getGenreGeographyArray(category);
	// const genreHistoryArray = getGenreHistoryArray(category);
	// const genreCraftArray = getGenreCraftArray(category);
	// const genreMedicineArray = getGenreMedicineArray(category);
	// const genreChildrensBookArray = getGenreChildrensBookArray(category);
	const genreCulinaryArtsArray = getGenreCulinaryArtsArray(category);
	// const genreFineArtsArray = getGenreFineArtsArray(category);
	// const genrePerformingArtsArray = getGenrePerformingArtsArray(category);
	// const genreMagicArray = getGenreMagicArray(category);
	// const genreNatureStudiesArray = getGenreNatureStudiesArray(category);
	// const genrePhilosophyArray = getGenrePhilosophyArray(category);
	// const genrePsychologyArray = getGenrePsychologyArray(category);
	// const genreLawArray = getGenreLawArray(category);
	// const genreReligionArray = getGenreReligionArray(category);
	// const genreSportArray = getGenreSportArray(category);
	// const genreLanguageArray = getGenreLanguageArray(category);
	// const genreEthnologyArray = getGenreEthnologyArray(category);

	const genreArrays = {
		// Belletristik: genreFictionArray,
		// Biographie: genreBiographyArray,
		// Freizeit: genreLeisureArray,
		// Geographie: genreGeographyArray,
		// Geschichte: genreHistoryArray,
		// Handwerk: genreCraftArray,
		// Heilkunde: genreMedicineArray,
		// Kinderbuch: genreChildrensBookArray.title,
		Kochkunst: genreCulinaryArtsArray,
		// 'Bildende Kunst': genreFineArtsArray,
		// 'Darstellende Kunst': genrePerformingArtsArray,
		// Magie: genreMagicArray,
		// Naturkunde: genreNatureStudiesArray,
		// Philosophie: genrePhilosophyArray,
		// Psychologie: genrePsychologyArray,
		// Recht: genreLawArray,
		// Religion: genreReligionArray,
		// Sport: genreSportArray,
		// Sprache: genreLanguageArray,
		// Völkerkunde: genreEthnologyArray,
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

	// console.log(`Der zufällig gewählte Titel für Buch ${i} lautet "${randomTitle.title}".`);
	// console.log(`Die primären Schlagwörter sind ${randomTitle.tags_primary}.`);
	// console.log(`Die sekundären Schlagwörter sind ${randomTitle.tags_secondary}.`);
	// console.log(`Die tertiären Schlagwörter sind ${randomTitle.tags_tertiary}.`);
	return randomTitle;
}