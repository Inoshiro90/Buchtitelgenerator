function getGenreMedicineArray(noun, adjective, name, location) {
	return [
		{
			title: `${noun.Klasse('plural', 'nominativ', 'nullartikel')} und ihre Heilmethoden`,
			tags: `Heilkunde, Klassen, ${noun.Klasse('tags')}`,
		},
		{
			title: `Die Heilkunst der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Heilkunde, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Weisheit der ${noun.Beruf(
				'plural',
				'genitiv',
				'schwach'
			)}: Traditionelle Heilmethoden aus ${Komposition(noun.randomProfession)}kulturen`,
			tags: `Heilkunde, Weisheiten, Heilmethoden, Traditionen, ${noun.Beruf('tags')}`,
		},
		{
			title: `${Komposition(noun.randomRace)}hexerei und ${Komposition(
				noun.randomClass
			)}kunst in der Pflanzenheilkunde`,
			tags: `Heilkunde, Völker, Klassen, ${noun.Volk('tags')}, ${noun.Klasse('tags')}`,
		},
		{
			title: `${Komposition(noun.randomClass)}heilkunst: Die Harmonie von Körper und Geist`,
			tags: `Heilkunde, Klassen, Harmonie, Körper, Geist, ${noun.Klasse('tags')}`,
		},
	];
}
