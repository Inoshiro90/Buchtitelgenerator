function getGenreCulinaryArtsArray(category) {
	
	return [
		{
			title: `${possessivArtikel(
				'plural',
				'nominativ',
				'ich',
				'neutrum'
			)} 
			${d20(5)}	
			${category.adjektivPersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'neutrum')} 
			Rezepte 
			${category.Volk('plural', 'genitiv', 'der_die_das')} 
			${
				category.adjektivHimmelsrichtung(
					'singular',
					'genitiv',
					'positiv',
					'schwach',
					category.Volk('genus'
					)
				)
			} 
			${category.Volk('plural', 'genitiv', 'schwach')} aus ${category.Gebirge('dativ', 'der_die_das')} ${category.Gebirge('dativ', 'schwach')} gehören ${personalpronomen('dativ', 'er_sie_es', category.Volk('genus'))}`,
			tags: 
			`Rezepte,Völker,
			${category.Volk('tags')},
			${category.adjektivHimmelsrichtung('tags')},
			${category.adjektivPersonAussehen('tags')}`,
		},
	];
}

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
// 			${category.adjektivPersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'neutrum').adjective} 
// 			Rezepte 
// 			${category.Volk('plural', 'genitiv', 'der_die_das').noun} 
// 			${
// 				category.adjektivHimmelsrichtung(
// 					'singular',
// 					'genitiv',
// 					'positiv',
// 					'schwach',
// 					category.Volk('plural', 'genitiv', 'schwach'
// 					).genus
// 				).adjective
// 			} 
// 			${category.Volk('plural', 'genitiv', 'schwach').noun} aus ${category.Gebirge('dativ', 'der_die_das').noun} ${category.Gebirge('dativ', 'schwach').noun} gehören ${personalpronomen('dativ', 'er_sie_es', category.Volk('plural', 'genitiv', 'schwach').genus)}`,
// 			tags: 
// 			`Rezepte,Völker,
// 			${category.Volk('plural', 'genitiv', 'schwach').tags},
// 			${category.adjektivHimmelsrichtung('plural', 'genitiv', 'schwach').tags},
// 			${category.adjektivPersonAussehen('plural', 'genitiv', 'schwach').tags}`,
// 		},
// 	];
// }
