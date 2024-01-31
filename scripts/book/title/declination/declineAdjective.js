function declineAdjective(
	numerus,
	kasus,
	comparison,
	attribute,
	genus,
	positive,
	comparative,
	superlative,
	campaignSetting,
	tags
) {
	let declinedAdjective;
	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					declinedAdjective = declineAdjectiveCase(
						'singular',
						'nominativ',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
					break;
				case 'genitiv':
					declinedAdjective = declineAdjectiveCase(
						'singular',
						'genitiv',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
				case 'dativ':
					declinedAdjective = declineAdjectiveCase(
						'singular',
						'dativ',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
					break;
				case 'akkusativ':
					declinedAdjective = declineAdjectiveCase(
						'singular',
						'akkusativ',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
					break;
				default:
					console.error('Ungültiger Fall bei kasus:', kasus);
					break;
			}
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					declinedAdjective = declineAdjectiveCase(
						'plural',
						'nominativ',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
					break;
				case 'genitiv':
					declinedAdjective = declineAdjectiveCase(
						'plural',
						'genitiv',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
					break;
				case 'dativ':
					declinedAdjective = declineAdjectiveCase(
						'plural',
						'dativ',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
					break;
				case 'akkusativ':
					declinedAdjective = declineAdjectiveCase(
						'plural',
						'akkusativ',
						comparison,
						attribute,
						genus,
						positive,
						comparative,
						superlative,
						campaignSetting,
						tags
					);
					break;
				default:
					console.error('Ungültiger Fall bei bei kasus:', kasus);
					break;
			}
			break;
		default:
			// console.error('Ungültige Anzahl bei bei numerus:', numerus, positive);
			break;
	}
	// console.log('kasus in declineAdjective ist', kasus);
	return declinedAdjective;
}
