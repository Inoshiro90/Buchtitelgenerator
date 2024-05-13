function getGenreLeisureArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Spiele der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Freizeit, Spiele, Völker ${noun.Volk('tags')}`,
		},
		{
			title: `Denkspiele der ${Komposition(
				noun.randomClass
			)}akademie: Herausforderungen für ehemalige ${noun.Beruf(
				'plural',
				'akkusativ',
				'stark'
			)} und ${noun.Beruf2('plural', 'akkusativ', 'stark')}`,
			tags: `Freizeit, Denkspiele, Klassen, Herausforderungen, Berufe, ${noun.Klasse(
				'tags'
			)}, ${noun.Beruf('tags')}, ${noun.Beruf2('tags')}`,
		},
		{
			title: `Basteln mit ${noun.Metall(
				'singular',
				'akkusativ',
				'schwach'
			)} und ${noun.Metall2('singular', 'akkusativ', 'schwach')}`,
			tags: `Freizeit, Basteln, Metalle, ${noun.Metall('tags')}, ${noun.Metall2('tags')}`,
		},
		{
			title: `${Komposition(noun.randomRace)}schnitzerein: ${sentenceCase(
				adjective.PersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'femininum')
			)} Figuren und Skulpturen`,
			tags: `Freizeit, Schnitzereien, Figuren, Skulpturen, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Kartenspielen mit ${noun.Volk(
				'plural',
				'dativ',
				'schwach'
			)}: Mit Tipps und Tricks zum Sieg`,
			tags: `Freizeit, Kartenspiele, Tipps, Tricks, Völker, ${noun.Volk('tags')}`,
		},
	];
}
