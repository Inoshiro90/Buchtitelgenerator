function getGenreCraftArray(noun, adjective, name, location) {
	//placeholder
	return [
		{
			title: `Die ${noun.Beruf('plural', 'nominativ', 'schwach')} der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}`,
			tags: `Handwerk, Berufe, Völker, ${noun.Beruf('tags')}, ${noun.Volk('tags')}`,
		},
		{
			title: `Das Handbuch des ${noun.Beruf(
				'singular',
				'genitiv',
				'schwach'
			)}: ${noun.Rüstung('plural', 'akkusativ', 'stark')} verbessern`,
			tags: `Handwerk, Berufe, Rüstungen, ${noun.Beruf('tags')}, ${noun.Rüstung('tags')}`,
		},
		{
			title: `Die Handwerksgeheimnisse der ${noun.Klasse(
				'plural',
				'genitiv',
				'schwach'
			)}: Mächtige ${noun.Abenteuerausrüstung('plural', 'nominativ', 'stark')}`,
			tags: `Handwerk, Klassen, Abenteuerausrüstung, ${noun.Klasse(
				'tags'
			)}, ${noun.Abenteuerausrüstung('tags')}`,
		},
		{
			title: `Häute von ${noun.Tier('plural', 'dativ', 'stark')} und deren Verarbeitung`,
			tags: `Handwerk, Fellverarbeitung, Tiere, ${noun.Tier('tags')}`,
		},
		{
			title: `${noun.Volk(
				'plural',
				'nominativ',
				'stark'
			)} und die Herstellung von ${noun.Waffe('plural', 'dativ', 'stark')}`,
			tags: `Handwerk, Herstellung, Völker, Waffen, ${noun.Volk('tags')}, ${noun.Waffe(
				'tags'
			)}`,
		},
	];
}
