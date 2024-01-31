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
			${category.adjektivPersonAussehen('plural', 'nominativ', 'positiv', 'stark', 'neutrum').adjective} 
			Rezepte 
			${category.Volk('singular', 'genitiv', 'der_die_das').noun} 
			${
				category.adjektivHimmelsrichtung(
					'singular',
					'genitiv',
					'positiv',
					'schwach',
					category.Volk().genus
				).adjective
			} 
			${category.Volk('singular', 'genitiv', 'schwach').noun} gehören ${personalpronomen('dativ', 'er_sie_es', category.Volk().genus)}`,
			tags: 
			`Rezepte,Völker,
			${category.Volk().tags},
			${category.adjektivHimmelsrichtung().tags},
			${category.adjektivPersonAussehen().tags}`,
		},
	];
}
