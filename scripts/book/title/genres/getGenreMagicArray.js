function getGenreMagicArray(category) {
	return [
		{
			title: `Die Magie der ${category.Klasse.plural.genitiv.schwach}`,
			tags_primary: 'Magie',
			tags_secondary: 'Klassen',
			tags_tertiary: `${category.Klasse.tags}`,
		},
		
	];
}
