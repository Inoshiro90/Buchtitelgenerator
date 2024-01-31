function getGenreEthnologyArray(category) {
	return [
		{
			title: `Die Gebete der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Völkerkunde',
			tags_secondary: 'Rituale,Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
	];
}
