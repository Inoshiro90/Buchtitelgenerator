function getGenreLanguageArray(category) {
	return [
		{
			title: `Gespräche zwischen ${category.Volk.plural.dativ.schwach} und ${category.Volk2.plural.dativ.schwach}`,
			tags_primary: 'Sprache',
			tags_secondary: 'Kommunikation,Völker',
			tags_tertiary: `${category.Volk.tags},${category.Volk2.tags}`,
		},
	];
}
