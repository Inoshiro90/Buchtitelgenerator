function declineAdjectiveCaseSuperlative(
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
									declinedAdjective = adjective + '';
									break;
								case 'femininum':
									declinedAdjective = adjective + '';
									break;
								case 'neutrum':
									declinedAdjective = adjective + '';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'r';
									break;
								case 'femininum':
									declinedAdjective = adjective + '';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 's';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'r';
									break;
								case 'femininum':
									declinedAdjective = adjective + '';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 's';
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
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'n';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'n';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'n';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'n';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'r';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'n';
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
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'n';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'n';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'n';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'n';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'm';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'r';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'm';
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
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + '';
									break;
								case 'neutrum':
									declinedAdjective = adjective + '';
									break;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + '';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 's';
									break;
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									declinedAdjective = adjective + 'n';
									break;
								case 'femininum':
									declinedAdjective = adjective + 'n';
									break;
								case 'neutrum':
									declinedAdjective = adjective + 'n';
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
							declinedAdjective = adjective + 'n';
							break;
						case 'stark':
							declinedAdjective = adjective + 'n';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + '';
							break;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'schwach':
							declinedAdjective = adjective + 'n';
							break;
						case 'stark':
							declinedAdjective = adjective + 'n';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + 'r';
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'schwach':
							declinedAdjective = adjective + 'n';
							break;
						case 'stark':
							declinedAdjective = adjective + 'n';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + 'n';
							break;
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'schwach':
							declinedAdjective = adjective + 'n';
							break;
						case 'stark':
							declinedAdjective = adjective + 'n';
							break;

						case 'nullartikel':
							declinedAdjective = adjective + '';
							break;
					}
					break;
			}
			break;
	}
	return declinedAdjective;
}