function getGenrePhilosophyArray(category) {
	return [
		{
			title:`Die Philosophie der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Philosophie',
			tags_secondary: 'Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
		
	];
}
