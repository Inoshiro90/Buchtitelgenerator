function getGenreReligionArray(category) {
	return [
		{
			title: `Die religiösen Rituale der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Religion',
			tags_secondary: 'Rituale,Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
		
	];
}
