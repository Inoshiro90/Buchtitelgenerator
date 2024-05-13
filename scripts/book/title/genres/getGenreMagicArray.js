function getGenreMagicArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Magie der ${noun.Klasse('plural', 'genitiv', 'schwach')}`,
			tags: `Magie, Klassen, ${noun.Klasse('tags')}`,
		},
		{
			title: `Die geheimen Künste der ${Komposition(noun.randomCreatureType)}magie`,
			tags: `Magie, Kreaurentypen, ${noun.Kreaturtyp('tags')}`,
		},
		{
			title: `Die Weisheit der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Magische Rituale und Beschwörungen`,
			tags: `Magie, Völker, Rituale, Beschwörungen, ${noun.Volk('tags')}`,
		},
		{
			title: `Arkane Geheimnisse: Einblicke in die Welt der ${noun.Klasse(
				'plural',
				'genitiv',
				'schwach'
			)} und ${noun.Klasse2('plural', 'genitiv', 'schwach')}
			`,
			tags: `Magie, Arkanes, Geheimnisse, Klassen, ${noun.Klasse('tags')}, ${noun.Klasse2(
				'tags'
			)}`,
		},
		{
			title: `${Komposition(noun.randomTerrain)}magie: Die Kraft des Terrains und ihre Anwendung`,
			tags: `Magie, Terrain, ${noun.Terrain('tags')}`,
		},
	];
}
