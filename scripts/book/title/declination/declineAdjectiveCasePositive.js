function declineAdjectiveCasePositive(
	numerus,
	kasus,
	attribute,
	genus,
	adjective,
	campaignSetting,
	tags
) {
	let declinedAdjective;

	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'e';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'e';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'e';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'er';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'e';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'es';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'er';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'e';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'es';
									break;
							}
							break;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'en';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'en';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'en';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'en';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'er';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'en';
									break;
							}
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'en';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'en';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'en';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'en';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'em';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'er';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'em';
									break;
							}
							break;
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'e';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'e';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'e';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'es';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'en';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'en';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'en';
									break;
							}
							break;
					}
					break;
			}
			break;
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					switch (attribute) {
						case 'schwach':
							declinedAdjective = adjective + 'en';
							break;
						case 'stark':
							declinedAdjective = adjective + 'en';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + 'e';
							break;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'schwach':
							declinedAdjective = adjective + 'en';
							break;
						case 'stark':
							declinedAdjective = adjective + 'en';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + 'er';
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'schwach':
							declinedAdjective = adjective + 'en';
							break;
						case 'stark':
							declinedAdjective = adjective + 'en';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + 'en';
							break;
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'schwach':
							declinedAdjective = adjective + 'en';
							break;
						case 'stark':
							declinedAdjective = adjective + 'en';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + 'e';
							break;
					}
					break;
			}
			break;
	}
	// console.log('kasus in declineAdjectiveCasePositive ist', kasus);
	// console.log('declinedAdjective für', numerus, kasus, attribute, genus, ':', declinedAdjective);
	
	return declinedAdjective;
}
