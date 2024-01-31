function getGenreMedicineArray(category) {
	return [
		{
			title: `${category.Klasse.plural.nominativ.nullartikel} und ihre Heilmethoden`,
			tags_primary: 'Heilkunde',
			tags_secondary: 'Heilmethoden,Klassen',
			tags_tertiary: `${category.Klasse.tags}`,
		},
	];
}
