function getGenreSportArray(noun, adjective, name, location) {
	return [
		{
			title: `Das Turnier der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Sport, Turniere, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Rennen der ${Komposition(noun.randomCreatureType)}reiter`,
			tags: `Sport, Rennen, Kreaturen, ${noun.Kreaturtyp('tags')}`,
		},
		{
			title: `Wettkampf der ${noun.Beruf('plural', 'genitiv', 'schwach')}`,
			tags: `Sport, Wettkämpfe, Berufe, ${noun.Beruf('tags')}`,
		},
		{
			title: `Die Duelle der ${noun.Klasse('plural', 'genitiv', 'schwach')}`,
			tags: `Sport, Duelle, Klassen, ${noun.Klasse('tags')}`,
		},
		{
			title: `Die ${Komposition(noun.randomRace)}champions der Arena`,
			tags: `Sport, Champions, Völker, Arenen, ${noun.Volk('tags')}`,
		},
	];
}
