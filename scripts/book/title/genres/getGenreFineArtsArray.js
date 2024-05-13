function getGenreFineArtsArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Gemälde der ${noun.Klasse('plural', 'genitiv', 'schwach')}`,
			tags: `Bildende Kunst, Gemälde, Klassen, ${noun.Klasse('tags')}`,
		},
		{
			title: `${noun.Volk(
				'plural',
				'nominativ',
				'stark'
			)} und das Kunsthandwerk: ${sentenceCase(
				adjective.PersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'neutrum')
			)} Objekte aus ${noun.Metall('singular', 'nominativ', 'stark')}`,
			tags: `Bildende Kunst, Völker, Kunsthandwerk, Objekte, Metalle, ${noun.Volk(
				'tags'
			)}, ${adjective.PersonAussehen('tags')}, ${noun.Metall('tags')}`,
		},
		{
			title: `Die Architektur der ${noun.Klasse(
				'plural',
				'genitiv',
				'schwach'
			)}: ${sentenceCase(
				adjective.PersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'neutrum')
			)} Bauwerke im Reich der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Bildende Kunst, Architektur, Klassen, Bauwerke, Völker, ${noun.Klasse(
				'tags'
			)}, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Kunst der ${noun.Beruf(
				'plural',
				'genitiv',
				'schwach'
			)}: Grobe Skizzen von ${noun.Volk('plural', 'dativ', 'stark')}`,
			tags: `Bildende Kunst, Berufe, Völker, Skizzen, ${noun.Beruf('tags')}, ${noun.Volk(
				'tags'
			)}`,
		},
		{
			title: `${noun.Volk(
				'plural',
				'nominativ',
				'stark'
			)} und die Malerei: Die Einflüsse von ${noun.Waffe(
				'plural',
				'dativ',
				'stark'
			)} und ${noun.Abenteuerausrüstung('plural', 'dativ', 'stark')}`,
			tags: `Bildende Kunst, Malerei, Völker, Waffen, Abenteuerausrüstung, ${noun.Waffe(
				'tags'
			)}, ${noun.Abenteuerausrüstung('tags')}`,
		},
	];
}
