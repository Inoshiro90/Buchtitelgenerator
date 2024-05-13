function getGenreLanguageArray(noun, adjective, name, location) {
	return [
		{
			title: `Gespräche zwischen ${noun.Volk('plural', 'dativ', 'schwach')} und ${noun.Volk2(
				'plural',
				'dativ',
				'schwach'
			)}`,
			tags: `Sprache, Kommuniation, Völker, ${noun.Volk('tags')}, ${noun.Volk2('tags')}`,
		},
		{
			title: `Die Dialekte ${noun.Terrain(
				'singular',
				'genitiv',
				'der_die_das'
			)} ${noun.Terrain('singular', 'genitiv', 'schwach')}: Eine sprachliche Vielfalt`,
			tags: `Sprache, Dialekte, Terrain, ${noun.Terrain('tags')}`,
		},
		{
			title: `Die Grammatik der ${noun.Beruf(
				'plural',
				'genitiv',
				'schwach'
			)}: Ein Lehrbuch für angehende Sprachwissenschaftler`,
			tags: `Sprache, Grammatik, Berufe, Lehrbuch, ${noun.Beruf('tags')}`,
		},
		{
			title: `Die Namen und Bezeichnungen der ${noun.Beruf(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine lexikalische Sammlung`,
			tags: `Sprache, Namen, Bezeichnungen, Gebäude, Sammlungen, ${noun.Beruf('tags')}`,
		},
		{
			title: `Die Mundarten der ${noun.Klasse(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine linguistische Studie`,
			tags: `Sprache, Mundarten, Klassen, Linguistik, Studien, ${noun.Klasse('tags')}`,
		},
	];
}
