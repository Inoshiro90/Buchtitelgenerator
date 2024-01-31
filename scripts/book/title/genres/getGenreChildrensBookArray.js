function getGenreChildrensBookArray(category) {
	return [
		{
			title: `Des ${category.Klasse.singular.genitiv.schwach} treuer Gefährte`,
			tags_primary: 'Kinderbücher',
			tags_secondary: 'Klassen',
			tags_tertiary: `${category.Klasse.tags}`,
		},
	];
}
