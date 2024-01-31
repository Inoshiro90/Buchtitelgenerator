function getGenreFineArtsArray(category) {
	return [
		{
			title: `Die Gemälde der ${category.Klasse.plural.genitiv.schwach}`,
			tags_primary: 'Kunst',
			tags_secondary: 'Gemälde,Klassen',
			tags_tertiary: `${category.Klasse.tags}`,
		},
	];
}
