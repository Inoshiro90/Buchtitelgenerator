function getGenreSportArray(category) {
	return [
		{
			title: `Die Sportarten der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Sport',
			tags_secondary: 'Sportarten,Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
	];
}
