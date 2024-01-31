function getGenreCraftArray(category) {
	return [
		{
			title: `Die ${category.Beruf.plural.nominativ.schwach} der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Handwerk',
			tags_secondary: 'Berufe,Völker',
			tags_tertiary: `${category.Beruf.tags},${category.Volk.tags}`,
		},
	];
}
