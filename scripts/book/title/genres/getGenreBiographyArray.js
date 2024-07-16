function getGenreBiographyArray(noun, adjective, name, location) {
	//Placeholder titles
	return [
		{
			title: `Die Tagebücher eines ${noun.Klasse(
				'singular',
				'genitiv',
				'schwach'
			)} der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Biographien, Klassen, Völker, ${noun.Klasse('tags')}, ${noun.Volk('tags')}`,
		},
		{
			title: `${name.Vorname('zufällig', 'zufällig', 'nominativ').name} ${name.Nachname('zufällig', 'nominativ').name}: Die Lebensreise eines ${noun.Klasse('singular', 'genitiv', 'schwach')}`,
			tags: `Biographie, Klassen, ${noun.Klasse('tags')}`,
		},
		{
			title: `Im Schatten eines ${noun.Klasse(
				'singular',
				'genitiv',
				'schwach'
			)}: Die wahre Geschichte von ${
				name.Vorname('zufällig', 'zufällig', 'nominativ').name
			} ${name.Nachname('zufällig', 'nominativ').name}
			`,
			tags: `Biographie, Klassen, ${noun.Klasse('tags')}`,
		},
		{
			title: `Meine Jahre mit ${noun.Klasse('singular', 'nominativ', 'stark')} ${
				name.Vorname('zufällig', 'zufällig', 'nominativ').name
			}: Eine persönliche Erinnerung`,
			tags: `Biographie`,
		},
		{
			title: `Durch Höhen und Tiefen: Die Geschichte von ${
				name.Vorname('zufällig', 'zufällig', 'nominativ').name
			} ${name.Nachname('zufällig', 'nominativ').name}`,
			tags: `Biographie`,
		},
	];
}
