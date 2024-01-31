function getGenreNatureStudiesArray(category) {
	return [
		{
			title: `Die Anatomie der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Naturkunde',
			tags_secondary: 'Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
	];
}
