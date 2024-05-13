function getGenrePhilosophyArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Philosophie der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Philosophie, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Weisheit der ${noun.Kreaturtyp(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine philosophische Abhandlung über die Natur der Weisheit und die Lehren der ${noun.Kreaturtyp(
				'plural',
				'genitiv',
				'schwach'
			)}`,
			tags: `Philosophie, Kreaturen, Weisheiten, Abhandlungen, Lehren, ${noun.Kreaturtyp(
				'tags'
			)}`,
		},
		{
			title: `Die Ethik der ${noun.Beruf(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine Studie über die moralischen Prinzipien der ${Komposition(
				noun.randomProfession
			)}kultur und ihre Bedeutung`,
			tags: `Philosophie, Berufe, Ethik, Studien, Moral, Prinzipien, Kulturen, ${noun.Beruf(
				'tags'
			)}`,
		},
		{
			title: `Die Weisheit der ${noun.Terrain(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine philosophische Reise durch ${noun.Terrain(
				'plural',
				'akkusativ',
				'schwach'
			)} und die Lehren für die ${Komposition(noun.randomRace)}seele`,
			tags: `Philosophie, Weisheiten, Reisen, Lehren, Terrain, Völker, Seelen, ${noun.Terrain(
				'tags'
			)}, ${noun.Volk('tags')}`,
		},
		{
			title: `Der Weg des ${noun.Klasse(
				'singular',
				'genitiv',
				'schwach'
			)}: Die philosophische Betrachtung eines ${noun.Klasse(
				'singular',
				'genitiv',
				'stark'
			)}`,
			tags: `Philosophie, Wege, Betrachungen, Klassen, ${noun.Klasse('tags')}`,
		},
	];
}
