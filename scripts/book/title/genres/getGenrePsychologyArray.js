function getGenrePsychologyArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Psyche der ${noun.Klasse(
				'plural',
				'genitiv',
				'schwach'
			)}: Eine psychologische Analyse`,
			tags: `Psychologie, Psyche, Klassen, Analysen, ${noun.Klasse('tags')}`,
		},
		{
			title: `Die Traumwelten der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Traumdeutung und psychologische Aspekte`,
			tags: `Psychologie, Träume, Traumdeutung, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Tränen der ${noun.Beruf(
				'plural',
				'genitiv',
				'schwach'
			)}: Emotionen und psychische Zustände`,
			tags: `Psychologie, Emotionen, Berufe, ${noun.Beruf('tags')}`,
		},
		{
			title: `Die Geheimnisse der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}: Identität und Persönlichkeit `,
			tags: `Psychologie, Geheimnisse, Völker, Identitäten, Persönlichkeiten, ${noun.Volk(
				'tags'
			)}`,
		},
		{
			title: `Die Einsamkeit der ${noun.Kreaturtyp(
				'plural',
				'genitiv',
				'schwach'
			)}: Gefühle und Isolation`,
			tags: `Psychologie, Einsamkeit, Kreaturen, Gefühle, Isolation, ${noun.Kreaturtyp(
				'tags'
			)}`,
		},
	];
}
