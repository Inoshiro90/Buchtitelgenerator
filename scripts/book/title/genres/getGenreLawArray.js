function getGenreLawArray(category) {
	return [
		{
			title: `Das Rechtswesen der ${category.Volk.plural.genitiv.schwach}`,
			tags_primary: 'Recht',
			tags_secondary: 'Rechtswesen,Völker',
			tags_tertiary: `${category.Volk.tags}`,
		},
	];
}
