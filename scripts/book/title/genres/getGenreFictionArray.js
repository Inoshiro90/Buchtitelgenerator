function getGenreFictionArray(noun, adjective, name, location) {
	return [
		{
			title: `Der ${noun.Klasse('singular', 'nominativ', 'schwach')} und ${noun.Volk(
				'singular',
				'nominativ',
				'der_die_das'
			)} ${noun.Volk('singular', 'nominativ', 'schwach')}`,
			tags: `Belletristik, Klassen, Völker, ${noun.Klasse('tags')}, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Chroniken ${noun.Terrain(
				'singular',
				'genitiv',
				'der_die_das'
			)} ${noun.Terrain('singular', 'genitiv', 'schwach')}: Ein Epos`,
			tags: `Belletristik, Terrain, ${noun.Terrain('tags')}`,
		},
		{
			title: `Die Träume ${name.Vorname('zufällig', 'zufällig', 'genitiv').der_die_das} ${
				name.Vorname('zufällig', 'zufällig', 'nominativ').name
			}: Ein Roman über Mut und Selbstfindung`,
			tags: `Belletristik, Mut, Selbstfindung`,
		},
		{
			title: `${
				name.Vorname('zufällig', 'zufällig', 'genitiv').name
			} Pfad des Schicksals: Eine Geschichte über Freundschaft in ${noun.Terrain(
				'plural',
				'dativ',
				'der_die_das'
			)} ${noun.Terrain('plural', 'dativ', 'schwach')}`,
			tags: `Belletristik, Terrain, ${noun.Terrain('tags')}`,
		},
		{
			title: `${noun.Beruf('singular', 'nominativ', 'der_die_das')} ${noun.Beruf(
				'singular',
				'nominativ',
				'schwach'
			)}: Die Suche nach Hoffnung in ${noun.Terrain(
				'plural',
				'dativ',
				'der_die_das'
			)} ${noun.Terrain('plural', 'dativ', 'schwach')}
			`,
			tags: `Belletristik, Beruf, Terrain, ${noun.Beruf('tags')}, ${noun.Terrain('tags')}`,
		},
	];
}

// function getGenreFictionArray(category) {
// 	return [
// 		{
// 			title: `Der ${noun.adjektiveFarbe.positiv.singular.nominativ.schwach(noun.Klasse)} ${noun.Klasse.singular.nominativ.schwach} und ${noun.Volk.singular.nominativ.der} ${noun.Volk.singular.nominativ.schwach}`,
// 			tags_primary: 'Belletristik',
// 			tags_secondary: 'Klassen,Völker',
// 			tags_tertiary: `${noun.Klasse.tags},${noun.Volk.tags}`,
// 		},
// 	];
// }
