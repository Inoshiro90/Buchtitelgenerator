function getGenreCulinaryArtsArray(noun, adjective, name, location) {
	//Placeholder titles until adding proper titles
	return [
		{
			title: `Verhext und verzaubert: Die ${d20(5)} magischen Rezepte der ${noun.Volk(
				'plural',
				'genitiv',
				'schwach'
			)}`,
			tags: `Kochkunst, Rezepte, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Küchengeheimnisse der ${noun.Volk('plural', 'genitiv', 'schwach')}: ${d20(
				3
			)} kulinarische Leckereien`,
			tags: `Kochkunst, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Kochen wie die ${noun.Volk('plural', 'genitiv', 'schwach')}: ${d20(
				5
			)} Rezepte für deine Küche`,
			tags: `Kochkunst, Rezepte, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Küche der ${noun.Klasse(
				'plural',
				'genitiv',
				'schwach'
			)}: Würzige Köstlichkeiten aus endlosen ${noun.Gebäude('plural', 'dativ', 'schwach')}`,
			tags: `Kochkunst, Klassen, Gebäude, ${noun.Klasse('tags')}, ${noun.Gebäude('tags')}`,
		},

		{
			title: `Die legendären Gerichte der ${noun.Beruf('plural', 'genitiv', 'schwach')}`,
			tags: `Kochkunst, Berufe, ${noun.Beruf('tags')}`,
		},
		// {
		// 	title: ``,
		// 	tags: ``,
		// },
	];
}

// {
// 	title: `${possessivArtikel('plural', 'nominativ', 'ich', 'neutrum')}
// 	${d20(5)}
// 	${adjective.PersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'neutrum')}
// 	Rezepte
// 	${noun.Volk('plural', 'genitiv', 'der_die_das')}
// 	${noun.adjektivHimmelsrichtung(
// 		'singular',
// 		'genitiv',
// 		'positiv',
// 		'schwach',
// 		noun.Volk('genus')
// 	)}
// 	${noun.Volk('plural', 'genitiv', 'schwach')} aus ${noun.Gebirge(
// 		'dativ',
// 		'der_die_das'
// 	)} ${noun.Gebirge('dativ', 'schwach')} gehören ${personalpronomen(
// 		'dativ',
// 		'er_sie_es',
// 		'maskulinum'
// 	)}, ${name.Vorname('zufällig', 'zufällig', 'nominativ').name} ${
// 		name.Nachname('zufällig', 'nominativ').name
// 	}/${name.Vorname2('zufällig', 'zufällig', 'nominativ').name} ${
// 		name.Nachname2('zufällig', 'nominativ').name
// 	}`,
// 	tags: `Rezepte,Völker,
// 	${noun.Volk('tags')},
// 	${noun.adjektivHimmelsrichtung('tags')},
// 	${adjective.PersonAussehen('tags')}`,
// }
// function getGenreCulinaryArtsArray(category) {

// 	return [
// 		{
// 			title: `${possessivArtikel(
// 				'plural',
// 				'nominativ',
// 				'ich',
// 				'neutrum'
// 			)}
// 			${d20(5)}
// 			${adjective.PersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'neutrum').adjective}
// 			Rezepte
// 			${noun.Volk('plural', 'genitiv', 'der_die_das').noun}
// 			${
// 				noun.adjektivHimmelsrichtung(
// 					'singular',
// 					'genitiv',
// 					'positiv',
// 					'schwach',
// 					noun.Volk('plural', 'genitiv', 'schwach'
// 					).genus
// 				).adjective
// 			}
// 			${noun.Volk('plural', 'genitiv', 'schwach').noun} aus ${noun.Gebirge('dativ', 'der_die_das').noun} ${noun.Gebirge('dativ', 'schwach').noun} gehören ${personalpronomen('dativ', 'er_sie_es', noun.Volk('plural', 'genitiv', 'schwach').genus)}`,
// 			tags:
// 			`Rezepte,Völker,
// 			${noun.Volk('plural', 'genitiv', 'schwach').tags},
// 			${noun.adjektivHimmelsrichtung('plural', 'genitiv', 'schwach').tags},
// 			${adjective.PersonAussehen('plural', 'genitiv', 'schwach').tags}`,
// 		},
// 	];
// }
