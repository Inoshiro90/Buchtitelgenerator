function getGenreEthnologyArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Gebete der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Völkerkunde, Religion, Gebete, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die nomadischen Stämme der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine Betrachtung der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)} und ihrer Lebensweise auf der Wanderung`,
			tags: `Völkerkunde, Nomadentum, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Kultur der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)} und ihre Reise durch ${noun.Terrain('plural', 'akkusativ', 'stark')}`,
			tags: `Völkerkunde, Kultur, Völker, Reisen, Terrain, ${noun.Volk(
				'tags'
			)}, ${noun.Terrain('tags')}`,
		},
		{
			title: `Das Volk der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine Studie über deren ${noun.Beruf(
				'plural',
				'akkusativ',
				'stark'
			)} und ${noun.Klasse('plural', 'akkusativ', 'stark')}`,
			tags: `Völkerkunde, Völker, Berufe, Klassen, ${noun.Volk('tags')}, ${noun.Beruf(
				'tags'
			)}, ${noun.Klasse('tags')}`,
		},
		{
			title: `Die ${noun.Volk('plural', 'nominativ', 'schwach')} der ${noun.Terrain(
				'plural',
				'genitiv',
				'schwach'
			)}: Einblicke in das Leben eines verborgenen Volkes`,
			tags: `Völkerkunde, Völker, Terrain, ${noun.Volk('tags')}, ${noun.Terrain('tags')}`,
		},
	];
}
