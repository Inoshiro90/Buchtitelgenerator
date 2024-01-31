function getGenrePerformingArtsArray(category) {
	return [
		{
			title: `Tanz und Theater mit ${category.Volk.plural.genitiv.schwach} und ${category.Volk2.plural.genitiv.schwach}`,
			tags_primary: 'Darstellende Künste',
			tags_secondary: 'Tanz,Theater,Völker',
			tags_tertiary: `${category.Volk.tags},${category.Volk2.tags}`,
		},
		
	];
}
