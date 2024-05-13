function getGenreGeographyArray(noun, adjective, name, location) {
	return [
		{
			title: `Die legendären Landschaften der ${noun.Terrain(
				'plural',
				'genitiv',
				'schwach'
			)}`,
			tags: `Geographie, Terrain ${noun.Terrain('tags')}`,
		},
		{
			title: `Von ${noun.Klasse('plural', 'dativ', 'nullartikel')} geschaffene ${noun.Terrain(
				'plural',
				'nominativ',
				'nullartikel'
			)}`,
			tags: `Geographie, Klassen, Terrain, ${noun.Klasse('tags')}, ${noun.Terrain('tags')}`,
		},
		{
			title: `Die Mysterien der ${noun.Terrain('plural', 'genitiv', 'schwach')}`,
			tags: `Geographie, Mysterien, Terrain, ${noun.Terrain('tags')}`,
		},
		{
			title: `Die Kartierung der ${noun.Metall('singular', 'nominativ', 'stark')}${lowerCase(
				noun.Terrain('plural', 'genitiv', 'schwach')
			)}`,
			tags: `Geographie, Kartierung, Metall, Terrain, ${noun.Metall('tags')}, ${noun.Terrain(
				'tags'
			)}`,
		},
		{
			title: `Die ${Komposition(noun.randomWeapon)}${lowerCase(
				noun.Terrain('plural', 'nominativ', 'schwach')
			)}: Eine geographische Studie`,
			tags: `Geographie, Studien, Terrain, ${noun.Terrain('tags')}`,
		},
	];
}
