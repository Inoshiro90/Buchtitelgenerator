function getGenreLeisureArray(category) {
	return [
		{
			title: `Die Spiele der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Freizeit',
			tags_secondary: 'Spiele,Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
	];
}
