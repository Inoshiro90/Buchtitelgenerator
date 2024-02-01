function declineAdjectiveCase(
	numerus,
	kasus,
	comparison,
	attribute,
	genus,
	adjectivePositive,
	adjectiveComparative,
	adjectiveSuperlative,
) {
	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'singular',
								'nominativ',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'nominativ',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'nominativ',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
				case 'genitiv':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'singular',
								'genitiv',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'genitiv',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'genitiv',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
				case 'dativ':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'singular',
								'dativ',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'dativ',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'dativ',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
				case 'akkusativ':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'singular',
								'akkusativ',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'akkusativ',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'akkusativ',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
			}
			break;
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'plural',
								'nominativ',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'nominativ',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'nominativ',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
				case 'genitiv':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'plural',
								'genitiv',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'genitiv',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'genitiv',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
				case 'dativ':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'plural',
								'dativ',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'dativ',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'dativ',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
				case 'akkusativ':
					switch (comparison) {
						case 'positiv':
							return declineAdjectivePositive(
								'plural',
								'akkusativ',
								attribute,
								genus,
								adjectivePositive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'akkusativ',
								attribute,
								genus,
								adjectiveComparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'akkusativ',
								attribute,
								genus,
								adjectiveSuperlative,
							);
					}
					break;
			}
			break;
	}
	// console.log('kasus in declineAdjectiveCase ist', kasus);
}
