function declineNoun(
	numerus,
	kasus,
	attribute,
	nounSingular,
	nounPlural,
	adjective,
	prefix,
	suffix,
	genus,
	declinationRule,
	declinationPattern,
	campaignSetting,
	tags
) {
	let declinedNoun

	// console.log(
	// 	'\nConsole log für declineNoun:\n',
	// 	'\nnumerus',
	// 	numerus,
	// 	'\nkasus:',
	// 	kasus,
	// 	'\nattribute:',
	// 	attribute,
	// 	'\nnounSingular:',
	// 	nounSingular,
	// 	'\nnounPlural:',
	// 	nounPlural,
	// 	'\nadjective:',
	// 	adjective,
	// 	'\nprefix:',
	// 	prefix,
	// 	'\nsuffix:',
	// 	suffix,
	// 	'\ngenus:',
	// 	genus,
	// 	'\ndeclinationRule:',
	// 	declinationRule,
	// 	'\ndeclinationPattern',
	// 	declinationPattern,
	// 	'\ntags:',
	// 	tags
	// );

	switch (genus) {
		case 'maskulinum':
			switch (numerus) {
				case 'nominativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'ein';
							break;
						case 'der_die_das':
							declinedNoun = 'der';
							break;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'eines';
							break;
						case 'der_die_das':
							declinedNoun = 'des';
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'einem';
							break;
						case 'der_die_das':
							declinedNoun = 'dem';
							break;
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'einen';
							break;
						case 'der_die_das':
							declinedNoun = 'den';
					}
			}
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'die';
							break;
					}

				case 'genitiv':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'der';
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'den';
							break;
					}
				case 'akkusativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'die';
							break;
					}
			}
			break;

		case 'femininum':
			switch (numerus) {
				case 'nominativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'eine';
							break;
						case 'der_die_das':
							declinedNoun = 'die';
							break;
					}
				case 'genitiv':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'einer';
							break;
						case 'der_die_das':
							declinedNoun = 'der';
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'einer';
							break;
						case 'der_die_das':
							declinedNoun = 'der';
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'eine';
							break;
						case 'der_die_das':
							declinedNoun = 'die';
					}
			}
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'die';
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'der';
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'den';
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'die';
					}
					break;
			}
			break;

		case 'neutrum':
			switch (numerus) {
				case 'nominativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'nominativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'ein';
							break;
						case 'der_die_das':
							declinedNoun = 'das';
							break;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'genitiv',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'eines';
							break;
						case 'der_die_das':
							declinedNoun = 'des';
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'dativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'einem';
							break;
						case 'der_die_das':
							declinedNoun = 'dem';
							break;
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'stark',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'schwach',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'singular',
								'akkusativ',
								'nullartikel',
								nounSingular,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'ein_eine':
							declinedNoun = 'ein';
							break;
						case 'der_die_das':
							declinedNoun = 'das';
							break;
					}
					break;
			}
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'nominativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'die';
							break;
					}
					break;
				case 'genitiv':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'genitiv',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'der';
							break;
					}
					break;
				case 'dativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'dativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'den';
							break;
					}
					break;
				case 'akkusativ':
					switch (attribute) {
						case 'stark':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'stark',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'schwach':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'schwach',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'nullartikel':
							declinedNoun = declineNounCase(
								'plural',
								'akkusativ',
								'nullartikel',
								nounPlural,
								adjective,
								prefix,
								suffix,
								genus,
								declinationRule,
								declinationPattern,
								tags
							);
							break;
						case 'der_die_das':
							declinedNoun = 'die';
							break;
					}
					break;
			}
			break;

		default:
			console.error('Ungültiges Geschlecht bei genus:', genus);
			break;
	}

	return declinedNoun;
}
