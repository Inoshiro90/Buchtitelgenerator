function getGenreBiographyArray(category) {
	return [
		{
			title: `Die Tagebücher eines ${category.Klasse.singular.genitiv.stark} der ${category.Volk.plural.nominativ.schwach}`,
			tags_primary: 'Biographien',
			tags_secondary: 'Klassen,Völker',
			tags_tertiary: `${category.Klasse.tags},${category.Volk.tags}`,
		},
	];
}
