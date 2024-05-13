function getGenreReligionArray(noun, adjective, name, location) {
	return [
		{
			title: `Die ${Komposition(noun.randomTerrain)}rituale der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}`,
			tags: `Religion, Rituale, Terrain, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Gottheiten ${noun.Terrain(
				'singular',
				'genitiv',
				'der_die_das'
			)} ${noun.Terrain('singular', 'genitiv', 'schwach')}: Pantheons und Leben`,
			tags: `Religion, Gottheiten, Terrain, Pantheons, Leben ${noun.Terrain('tags')}`,
		},
		{
			title: `Die Prophezeiungen ${noun.Beruf(
				'singular',
				'genitiv',
				'der_die_das'
			)} ${noun.Beruf('singular', 'genitiv', 'schwach')}: Mysterien und Eingebungen`,
			tags: `Religion, Prophezeiungen, Berufe, Mysterien, Eingebungen, ${noun.Beruf('tags')}`,
		},
		{
			title: `Die Weisheit der ${noun.Klasse(
				'plural',
				'genitiv',
				'schwach'
			)}: Überlieferungen und Bedeutungen`,
			tags: `Religion, Weisheiten, Klassen, Überlieferungen, Bedeutungen, ${noun.Klasse(
				'tags'
			)}`,
		},
		{
			title: `Die Prüfungen der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Herausforderungen und Suche nach göttlicher Führung`,
			tags: `Religion, Prüfungen, Völker, Herausforderungen, Suchen, Göttliche Führung, ${noun.Volk(
				'tags'
			)}`,
		},
	];
}
