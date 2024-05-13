function getGenreHistoryArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Geschichte der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Geschichte, Völker ${noun.Volk('tags')}`,
		},
		{
			title: `Die historische Odyssee der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Geschichte, Völker ${noun.Volk('tags')}`,
		},
		{
			title: `Die Umwälzungen der ${noun.Ereignis(
				'plural',
				'genitiv',
				'schwach'
			)}: Ein Blick in die Vergangenheit`,
			tags: `Geschichte, Ereignisse, ${noun.Ereignis('tags')}`,
		},
		{
			title: `Waffenkunst: Ein historischer Überblick über die Evolution ${noun.Waffe(
				'singular',
				'genitiv',
				'der_die_das'
			)} ${noun.Waffe('singular', 'genitiv', 'schwach')}`,
			tags: `Geschichte, Evolution, Waffen, ${noun.Waffe('tags')}`,
		},
		{
			title: `Aufstieg und Niedergang: Die Schicksale der ${Komposition(
				noun.randomClass
			)}gesellschaften`,
			tags: `Geschichte, Aufstiege, Niedergänge, Schicksale, Klassen, Gesellschaften, ${noun.Klasse(
				'tags'
			)}`,
		},
	];
}
