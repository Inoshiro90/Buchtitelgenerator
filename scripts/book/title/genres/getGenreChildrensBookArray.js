function getGenreChildrensBookArray(noun, adjective, name, location) {
	//placeholer titles
	return [
		{
			title: `Die Abenteuer von ${
				name.Vorname('zufällig', 'zufällig', 'nominativ').name
			} und Freunden: Eine magische Reise`,
			tags: `Kinderbuch, Reisen`,
		},
		{
			title: `Des ${noun.Klasse('singular', 'genitiv', 'schwach')} treuer Gefährte`,
			tags: `Kinderbuch, Klassen, ${noun.Klasse('tags')}`,
		},
		{
			title: `Die Suche nach den ${noun.Volk(
				'plural',
				'dativ',
				'schwach'
			)}: Ein Buch voller Magie und Spannung`,
			tags: `Kinderbuch, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die fantastische Welt von ${noun.Volk(
				'plural',
				'dativ',
				'stark'
			)}: Gute-Nacht-Geschichten`,
			tags: `Kinderbuch, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die mutigen ${noun.Klasse(
				'plural',
				'nominativ',
				'schwach'
			)}-Helden der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Geschichten über Freundschaft und Abenteuer`,
			tags: `Kinderbuch, Klassen, Völker, ${noun.Klasse('tags')}, ${noun.Volk('tags')}`,
		},
	];
}
