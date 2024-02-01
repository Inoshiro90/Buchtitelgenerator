function declineAdjectivePositive(numerus, kasus, attribute, genus, adjective) {
	adjective = ensureEndsWithE(adjective);

	function ensureEndsWithE(adjective) {
		if (!endsWithE(adjective)) {
			adjective += 'e';
		}
		return adjective;
	}

	function endsWithE(value) {
		return value.endsWith('e');
	}

	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									return adjective;
								case 'femininum':
									return adjective;
								case 'neutrum':
									return adjective;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'r';
								case 'femininum':
									return adjective;
								case 'neutrum':
									return adjective + 's';
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'r';
								case 'femininum':
									return adjective;
								case 'neutrum':
									return adjective + 's';
							}
							break;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective + 'n';
								case 'neutrum':
									return adjective + 'n';
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective + 'n';
								case 'neutrum':
									return adjective + 'n';
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective + 'r';
								case 'neutrum':
									return adjective + 'n';
							}
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective + 'n';
								case 'neutrum':
									return adjective + 'n';
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective + 'n';
								case 'neutrum':
									return adjective + 'n';
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'm';
								case 'femininum':
									return adjective + 'r';
								case 'neutrum':
									return adjective + 'm';
							}
							break;
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'schwach':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective;
								case 'neutrum':
									return adjective;
							}
							break;
						case 'stark':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective;
								case 'neutrum':
									return adjective + 's';
							}
							break;
						case 'nullartikel':
							switch (genus) {
								case 'maskulinum':
									return adjective + 'n';
								case 'femininum':
									return adjective + 'n';
								case 'neutrum':
									return adjective + 'n';
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
							return adjective + 'n';
						case 'stark':
							return adjective + 'n';
						case 'nullartikel':
							return adjective;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'schwach':
							return adjective + 'n';
						case 'stark':
							return adjective + 'n';
						case 'nullartikel':
							return adjective + 'r';
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'schwach':
							return adjective + 'n';
						case 'stark':
							return adjective + 'n';
						case 'nullartikel':
							return adjective + 'n';
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'schwach':
							return adjective + 'n';
						case 'stark':
							return adjective + 'n';
						case 'nullartikel':
							return adjective;
					}
					break;
			}
			break;
	}

	// console.log('kasus in declineAdjectiveCasePositive ist', kasus);
	// console.log('return für', numerus, kasus, attribute, genus, ':', return);
}

// function declineAdjectiveCasePositive(
// 	numerus,
// 	kasus,
// 	attribute,
// 	genus,
// 	adjective,
// 	campaignSetting,
// 	tags
// ) {
// 	let declinedAdjective;

// 	switch (numerus) {
// 		case 'singular':
// 			switch (kasus) {
// 				case 'nominativ':
// 					switch (attribute) {
// 						case 'schwach':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'e';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'e';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'e';
//
// 							}
// 							break;
// 						case 'stark':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'er';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'e';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'es';
//
// 							}
// 							break;
// 						case 'nullartikel':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'er';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'e';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'es';
//
// 							}
// 							break;
// 					}
// 					break;
// 				case 'genitiv':
// 					switch (attribute) {
// 						case 'schwach':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'en';
//
// 							}
// 							break;
// 						case 'stark':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'en';
//
// 							}
// 							break;
// 						case 'nullartikel':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'er';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'en';
//
// 							}
// 							break;
// 					}
// 					break;
// 				case 'dativ':
// 					switch (attribute) {
// 						case 'schwach':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'en';
//
// 							}
// 							break;
// 						case 'stark':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'en';
//
// 							}
// 							break;
// 						case 'nullartikel':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'em';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'er';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'em';
//
// 							}
// 							break;
// 					}
// 					break;
// 				case 'akkusativ':
// 					switch (attribute) {
// 						case 'schwach':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'e';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'e';
//
// 							}
// 							break;
// 						case 'stark':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'e';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'es';
//
// 							}
// 							break;
// 						case 'nullartikel':
// 							switch (genus) {
// 								case 'maskulinum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'femininum':
// 									declinedAdjective = adjective + 'en';
//
// 								case 'neutrum':
// 									declinedAdjective = adjective + 'en';
//
// 							}
// 							break;
// 					}
// 					break;
// 			}
// 			break;
// 		case 'plural':
// 			switch (kasus) {
// 				case 'nominativ':
// 					switch (attribute) {
// 						case 'schwach':
// 							declinedAdjective = adjective + 'en';
// 							break;
// 						case 'stark':
// 							declinedAdjective = adjective + 'en';
// 							break;

// 						case 'nullartikel':
// 							declinedAdjective = adjective + 'e';
// 							break;
// 					}
// 					break;
// 				case 'genitiv':
// 					switch (attribute) {
// 						case 'schwach':
// 							declinedAdjective = adjective + 'en';
// 							break;
// 						case 'stark':
// 							declinedAdjective = adjective + 'en';
// 							break;

// 						case 'nullartikel':
// 							declinedAdjective = adjective + 'er';
// 							break;
// 					}
// 					break;
// 				case 'dativ':
// 					switch (attribute) {
// 						case 'schwach':
// 							declinedAdjective = adjective + 'en';
// 							break;
// 						case 'stark':
// 							declinedAdjective = adjective + 'en';
// 							break;

// 						case 'nullartikel':
// 							declinedAdjective = adjective + 'en';
// 							break;
// 					}
// 					break;
// 				case 'akkusativ':
// 					switch (attribute) {
// 						case 'schwach':
// 							declinedAdjective = adjective + 'en';
// 							break;
// 						case 'stark':
// 							declinedAdjective = adjective + 'en';
// 							break;

// 						case 'nullartikel':
// 							declinedAdjective = adjective + 'e';
// 							break;
// 					}
// 					break;
// 			}
// 			break;
// 	}
// 	// console.log('kasus in declineAdjectiveCasePositive ist', kasus);
// 	// console.log('declinedAdjective für', numerus, kasus, attribute, genus, ':', declinedAdjective);

// 	return declinedAdjective;
// }
