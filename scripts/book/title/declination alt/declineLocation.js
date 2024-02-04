// function declineRandomLocation(numerus, kasus, attribute, type, randomNoun) {
// 	let declinedNoun

// 	console.log(
// 		'\nConsole log für declineNoun:\n',
// 		'\nnumerus',
// 		numerus,
// 		'\nkasus:',
// 		kasus,
// 		'\nattribute:',
// 		attribute,
// 		'\nnoun:',
// 		randomNoun.noun,
// 		'\nnoun:',
// 		randomNoun.noun,
// 		'\nadjective:',
// 		randomNoun.adjective,
// 		'\nprefix:',
// 		randomNoun.prefix,
// 		'\nsuffix:',
// 		randomNoun.suffix,
// 		'\ngenus:',
// 		randomNoun.nounGender,
// 		'\ndeclinationRule:',
// 		randomNoun.declinationRule,
// 		'\ndeclinationPattern',
// 		randomNoun.declinationPattern,
// 		'\ntags:',
// 		randomNoun.tags
// 	);

// 	switch (randomNoun.nounGender) {
// 		case 'maskulinum':
// 			switch (randomNoun.numerus) {
// 				case 'nominativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'ein';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'der';
// 							break;
// 					}
// 					break;
// 				case 'genitiv':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'eines';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'des';
// 							break;
// 					}
// 					break;
// 				case 'dativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'einem';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'dem';
// 							break;
// 					}
// 					break;
// 				case 'akkusativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'einen';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'den';
// 					}
// 			}
// 		case 'plural':
// 			switch (kasus) {
// 				case 'nominativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 							break;
// 					}

// 				case 'genitiv':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'der';
// 							break;
// 					}
// 					break;
// 				case 'dativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'den';
// 							break;
// 					}
// 				case 'akkusativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 							break;
// 					}
// 			}
// 			break;

// 		case 'femininum':
// 			switch (randomNoun.numerus) {
// 				case 'nominativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'eine';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 							break;
// 					}
// 				case 'genitiv':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'einer';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'der';
// 					}
// 					break;
// 				case 'dativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'einer';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'der';
// 					}
// 					break;
// 				case 'akkusativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'eine';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 					}
// 			}
// 		case 'plural':
// 			switch (kasus) {
// 				case 'nominativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 					}
// 					break;
// 				case 'genitiv':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'der';
// 					}
// 					break;
// 				case 'dativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'den';
// 					}
// 					break;
// 				case 'akkusativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 					}
// 					break;
// 			}
// 			break;

// 		case 'neutrum':
// 			switch (randomNoun.numerus) {
// 				case 'nominativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'nominativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'ein';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'das';
// 							break;
// 					}
// 					break;
// 				case 'genitiv':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'genitiv',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'eines';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'des';
// 							break;
// 					}
// 					break;
// 				case 'dativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'dativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'einem';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'dem';
// 							break;
// 					}
// 					break;
// 				case 'akkusativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'singular',
// 								'akkusativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'ein_eine':
// 							declinedNoun = 'ein';
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'das';
// 							break;
// 					}
// 					break;
// 			}
// 		case 'plural':
// 			switch (kasus) {
// 				case 'nominativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'nominativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 							break;
// 					}
// 					break;
// 				case 'genitiv':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'genitiv',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'der';
// 							break;
// 					}
// 					break;
// 				case 'dativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'dativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'den';
// 							break;
// 					}
// 					break;
// 				case 'akkusativ':
// 					switch (randomNoun.attribute) {
// 						case 'stark':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'stark',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'schwach':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'schwach',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'nullartikel':
// 							declinedNoun = declineNounCase(
// 								'plural',
// 								'akkusativ',
// 								'nullartikel',
// 								randomNoun.noun,
// 								randomNoun.adjective,
// 								randomNoun.prefix,
// 								randomNoun.suffix,
// 								randomNoun.nounGender,
// 								randomNoun.declinationRule,
// 								randomNoun.declinationPattern,
// 								randomNoun.tags
// 							);
// 							break;
// 						case 'der_die_das':
// 							declinedNoun = 'die';
// 							break;
// 					}
// 					break;
// 			}
// 			break;

// 		default:
// 			console.error('Ungültiges Geschlecht bei nounGender:', randomNoun.nounGender);
// 			break;
// 	}

// 	return declinedNoun;
// }

// function declineRandomLocation(numerus, kasus, attribute, type, randomNoun) {
  
//     let declinedNoun = {
//         noun: declineNoun(
// 			numerus,
// 			kasus,
// 			attribute,
// 			randomNoun.noun,
// 			randomNoun.noun,
// 			randomNoun.adjective,
// 			randomNoun.prefix,
// 			randomNoun.suffix,
// 			randomNoun.nounGender,
// 			randomNoun.declinationRule,
// 			randomNoun.declinationPattern,
// 			randomNoun.campaignSetting,
// 			randomNoun.tags
//         ),
//         genus: randomNoun.nounGender,
//         tags: randomNoun.tags,
//     };
// 	console.log('Deklinierter Ort in declineRandomLocation:', declinedNoun.noun)
//     return declinedNoun;
// }


// function declineLocation (){

// }

// randomVillage = getRandomNoun(villageArray, selectedSettings) 

// function Dorf()= 

// function declineLocation(
	// randomVillage.numerus,
	// kasus,
	// attribute,
	// randomNoun.noun,
	// randomNoun.noun,
	// randomNoun.adjective,
	// randomNoun.prefix,
	// randomNoun.suffix,
	// randomNoun.nounGender,
	// randomNoun.declinationRule,
	// randomNoun.declinationPattern,
	// campaignSetting,
	// tags) {
	// 	declinedLocation = declineNoun (numerus,
	// kasus,
	// attribute,
	// randomNoun.noun,
	// randomNoun.noun,
	// randomNoun.adjective,
	// randomNoun.prefix,
	// randomNoun.suffix,
	// randomNoun.nounGender,
	// randomNoun.declinationRule,
	// randomNoun.declinationPattern,
	// campaignSetting,
	// tags)
	// } 

// ${Dorf(nominativ, schwach).noun}