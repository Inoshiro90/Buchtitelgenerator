function getGenrePerformingArtsArray(noun, adjective, name, location) {
	return [
		{
			title: `Tanz und Theater mit ${noun.Volk(
				'plural',
				'dativ',
				'schwach'
			)} und ${noun.Volk2('plural', 'dativ', 'schwach')}`,
			tags: `Darstellende Künste, Tanz, Theater, Völker, ${noun.Volk('tags')}, ${noun.Volk2(
				'tags'
			)}`,
		},
		{
			title: `Tanz der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine Studie über den Ausdruckstanz in ${Komposition(
				noun.randomRace
			)}gesellschaften`,
			tags: `Darstellende Künste, Tanz, Völker, Studien, Ausdruckstanz, Gesellschaften, ${noun.Volk(
				'tags'
			)}`,
		},
		{
			title: `${Komposition(
				noun.randomCreatureType
			)}choreographie: Eine Darstellung mit mythischen Wesen`,
			tags: `Darstellende Künste, Choreographien, Darstellungen, Kreaturen, ${noun.Kreaturtyp(
				'tags'
			)}`,
		},
		{
			title: `Die ${noun.Klasse(
				'plural',
				'nominativ',
				'schwach'
			)} der Bühne: Eine Geschichte des Theaters`,
			tags: `Darstellende Künste, Klassen, Bühnen, Geschichten, Theater, ${noun.Klasse(
				'tags'
			)}`,
		},
		{
			title: `Die Lieder der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine musikalische Darstellung`,
			tags: `Darstellende Künste, Musik, Lieder, Völker, ${noun.Volk('tags')}`,
		},
	];
}
