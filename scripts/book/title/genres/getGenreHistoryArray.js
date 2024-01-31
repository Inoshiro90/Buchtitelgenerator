function getGenreHistoryArray(category) {
	return [
		{
			title: `Die Geschichte der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Geschichte',
			tags_secondary: 'Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
	];
}
