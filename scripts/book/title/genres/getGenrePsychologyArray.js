function getGenrePsychologyArray(category) {
	return [
		{
			title: `Die Psychologie der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Psychologie',
			tags_secondary: 'Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
		
	];
}
