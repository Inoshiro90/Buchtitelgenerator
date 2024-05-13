function getGenreNatureStudiesArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Anatomie der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Naturkunde, Anatomie, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Bestiarium der Kreaturen: Eine Enzyklopädie der ${noun.Kreaturtyp(
				'plural',
				'genitiv',
				'schwach'
			)}`,
			tags: `Naturkunde, Bestiarium, Kreaturen, Enzyklopädien, ${noun.Kreaturtyp('tags')}`,
		},
		{
			title: `Flora und Fauna ${noun.Terrain(
				'singular',
				'genitiv',
				'der_die_das'
			)} ${noun.Terrain(
				'singular',
				'genitiv',
				'schwach'
			)}: Eine botanische und zoologische Studie
			`,
			tags: `Naturkunde, Flora, Fauna, Terrain, Botanik, Zoologie, Studien, ${noun.Terrain(
				'tags'
			)}`,
		},
		{
			title: `Das Reich der ${noun.Kreaturtyp(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine Untersuchung über die Lebensweise und Lebensräume von ${noun.Kreaturtyp(
				'plural',
				'dativ',
				'stark'
			)}`,
			tags: `Naturkunde, Kreaturen, Lebensweisen, Lebensräume, ${noun.Kreaturtyp('tags')}`,
		},
		{
			title: `Die Wunder der Natur: Entdeckungsreisen durch fantastische ${noun.Terrain(
				'plural',
				'akkusativ',
				'schwach'
			)}`,
			tags: `Naturkunde, Wunder, Natur, Reisen, Entdeckungen, Terrain, ${noun.Terrain(
				'tags'
			)}`,
		},
	];
}
