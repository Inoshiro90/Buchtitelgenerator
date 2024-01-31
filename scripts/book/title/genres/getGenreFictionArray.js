function getGenreFictionArray(category) {
	return [
		{
			title: `Der ${category.Klasse.singular.nominativ.schwach} und ${category.Volk.singular.nominativ.der} ${category.Volk.singular.nominativ.schwach}`,
			tags_primary: 'Belletristik',
			tags_secondary: 'Klassen,Völker',
			tags_tertiary: `${category.Klasse.tags},${category.Volk.tags}`,
		},
	];
}

// function getGenreFictionArray(category) {
// 	return [
// 		{
// 			title: `Der ${category.adjektiveFarbe.positiv.singular.nominativ.schwach(category.Klasse)} ${category.Klasse.singular.nominativ.schwach} und ${category.Volk.singular.nominativ.der} ${category.Volk.singular.nominativ.schwach}`,
// 			tags_primary: 'Belletristik',
// 			tags_secondary: 'Klassen,Völker',
// 			tags_tertiary: `${category.Klasse.tags},${category.Volk.tags}`,
// 		},
// 	];
// }