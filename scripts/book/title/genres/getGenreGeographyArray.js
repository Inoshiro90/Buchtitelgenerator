function getGenreGeographyArray(category) {
	return [
		{
			title: `Von ${category.Klasse.plural.dativ.nullartikel} geschaffene Orte`,
			tags_primary: 'Geographie',
			tags_secondary: 'Orte,Klassen',
			tags_tertiary: `${category.Klasse.tags}`,
		},
	];
}
