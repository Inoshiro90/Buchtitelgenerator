function declineAdjective(
	numerus,
	kasus,
	comparison,
	attribute,
	genus,
	positive,
	comparative,
	superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'nominativ',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'nominativ',
								attribute,
								genus,
								superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'genitiv',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'genitiv',
								attribute,
								genus,
								superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'dativ',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'dativ',
								attribute,
								genus,
								superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'singular',
								'akkusativ',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'singular',
								'akkusativ',
								attribute,
								genus,
								superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'nominativ',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'nominativ',
								attribute,
								genus,
								superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'genitiv',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'genitiv',
								attribute,
								genus,
								superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'dativ',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'dativ',
								attribute,
								genus,
								superlative,
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
								positive,
							);
						case 'komparativ':
							return declineAdjectiveComparative(
								'plural',
								'akkusativ',
								attribute,
								genus,
								comparative,
							);
						case 'superlativ':
							return declineAdjectiveSuperlative(
								'plural',
								'akkusativ',
								attribute,
								genus,
								superlative,
							);
					}
					break;
			}
			default:
				console.error('Ungültiger Numerus in declineAdjective:', numerus)
	}
}