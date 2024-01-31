function declineAdjectiveCase(
	numerus,
	kasus,
	comparison,
	attribute,
	genus,
	adjectivePositive,
	adjectiveComparative,
	adjectiveSuperlative,
	campaignSetting,
	tags
) {
	let declinedAdjective;

	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'singular',
								'nominativ',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'singular',
								'nominativ',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'singular',
								'nominativ',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
				case 'genitiv':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'singular',
								'genitiv',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'singular',
								'genitiv',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'singular',
								'genitiv',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
				case 'dativ':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'singular',
								'dativ',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'singular',
								'dativ',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'singular',
								'dativ',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
				case 'akkusativ':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'singular',
								'akkusativ',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'singular',
								'akkusativ',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'singular',
								'akkusativ',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
			}
			break;
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'plural',
								'nominativ',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'plural',
								'nominativ',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'plural',
								'nominativ',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
				case 'genitiv':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'plural',
								'genitiv',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'plural',
								'genitiv',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'plural',
								'genitiv',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
				case 'dativ':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'plural',
								'dativ',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'plural',
								'dativ',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'plural',
								'dativ',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
				case 'akkusativ':
					switch (comparison) {
						case 'positiv':
							declinedAdjective = declineAdjectiveCasePositive(
								'plural',
								'akkusativ',
								attribute,
								genus,
								adjectivePositive,
								campaignSetting,
								tags
							);
							break;
						case 'komparativ':
							declinedAdjective = declineAdjectiveCaseComparative(
								'plural',
								'akkusativ',
								attribute,
								genus,
								adjectiveComparative,
								campaignSetting,
								tags
							);
							break;
						case 'superlativ':
							declinedAdjective = declineAdjectiveCaseSuperlative(
								'plural',
								'akkusativ',
								attribute,
								genus,
								adjectiveSuperlative,
								campaignSetting,
								tags
							);
							break;
					}
					break;
			}
			break;
	}
	// console.log('kasus in declineAdjectiveCase ist', kasus);
	return declinedAdjective;
}
