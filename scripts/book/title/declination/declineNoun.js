function declineNoun(
	numerus,
	kasus,
	attribute,
	singular,
	plural,
	adjective,
	prefix,
	suffix,
	genus,
	declinationRule,
	declinationPattern,
	tags,
	type
) {
	let declinedNoun;
	let declinedAdjective;

	if (numerus === 'tags') {
        return tags;
    } else if (numerus === 'numerus') {
        return numerus;
    } else if (numerus === 'genus') {
        return genus;
	} else if (numerus === 'eigenname' && declinationRule === 'eigenname') {
		//Überprüfen ob das so stimmt und ob nicht noch "&& type === 'Ort'" hinzugefügt werden muss
		return true;
    } else if (attribute === 'der_die_das') {
		return declineDefiniteArticle(numerus, kasus, genus);
	} else if (attribute === 'ein_eine') {
		return declineIndefiniteArticle(kasus, genus);
	} else if (attribute === 'kein_keine') {
		return declineNegativeArticle(numerus, kasus, genus);
	} else {
		switch (numerus) {
			case 'singular':
				declinedNoun = declineNounSingular(
					kasus,
					attribute,
					singular,
					genus,
					declinationRule,
					declinationPattern
				);
				adjective
					? (declinedAdjective = declineAdjective(
							'singular',
							kasus,
							'positiv',
							attribute,
							genus,
							adjective,
							adjective,
							adjective
					  ))
					: (declinedAdjective = '');
				return (
					(prefix ? prefix + ' ' : '') +
					(adjective ? declinedAdjective + ' ' : '') +
					declinedNoun +
					(suffix ? ' ' + suffix : '')
				);
			case 'plural':
				declinedNoun = declineNounPlural(
					kasus,
					attribute,
					plural,
					genus,
					declinationRule,
					declinationPattern
				);
				adjective
					? (declinedAdjective = declineAdjective(
							'plural',
							kasus,
							'positiv',
							attribute,
							genus,
							adjective,
							adjective,
							adjective
					  ))
					: (declinedAdjective = '');
				// console.log('return aus declineNoun mit case plural:', (prefix ? prefix + ' ': '') + (adjective ? declinedAdjective + ' ': '') + declinedNoun + (suffix ? suffix : ''))
				return (
					(prefix ? prefix + ' ' : '') +
					(adjective ? declinedAdjective + ' ' : '') +
					declinedNoun +
					(suffix ? ' ' + suffix : '')
				);
			default:
				console.error('Ungültiger Numerus für', singular, ' :', numerus);
		}
	}
}


// function declineNoun(
// 	numerus,
// 	kasus,
// 	attribute,
// 	singular,
// 	plural,
// 	adjective,
// 	prefix,
// 	suffix,
// 	genus,
// 	declinationRule,
// 	declinationPattern,

// ) {
// 	let declinedNoun;
// 	let declinedAdjective;

// 	if (attribute === 'der_die_das') {
// 		return declineDefiniteArticle(numerus, kasus, genus);
// 	} else if (attribute === 'ein_eine') {
// 		return declineIndefiniteArticle(kasus, genus);
// 	} else if (attribute === 'kein_keine') {
// 		return declineNegativeArticle(numerus, kasus, genus);
// 	} else {
// 		switch (numerus) {
// 			case 'singular':
// 				declinedNoun = declineNounSingular(
// 					kasus,
// 					attribute,
// 					singular,
// 					genus,
// 					declinationRule,
// 					declinationPattern
// 				);
// 				adjective
// 					? (declinedAdjective = declineAdjective(
// 							'singular',
// 							kasus,
// 							'positiv',
// 							attribute,
// 							genus,
// 							adjective,
// 							adjective,
// 							adjective
// 					  ))
// 					: (declinedAdjective = '');
// 				return (
// 					(prefix ? prefix + ' ' : '') +
// 					(adjective ? declinedAdjective + ' ' : '') +
// 					declinedNoun +
// 					(suffix ? ' ' + suffix : '')
// 				);
// 			case 'plural':
// 				declinedNoun = declineNounPlural(
// 					kasus,
// 					attribute,
// 					plural,
// 					genus,
// 					declinationRule,
// 					declinationPattern
// 				);
// 				adjective
// 					? (declinedAdjective = declineAdjective(
// 							'plural',
// 							kasus,
// 							'positiv',
// 							attribute,
// 							genus,
// 							adjective,
// 							adjective,
// 							adjective
// 					  ))
// 					: (declinedAdjective = '');
// 				// console.log('return aus declineNoun mit case plural:', (prefix ? prefix + ' ': '') + (adjective ? declinedAdjective + ' ': '') + declinedNoun + (suffix ? suffix : ''))
// 				return (
// 					(prefix ? prefix + ' ' : '') +
// 					(adjective ? declinedAdjective + ' ' : '') +
// 					declinedNoun +
// 					(suffix ? ' ' + suffix : '')
// 				);
// 			default:
// 				console.error('Ungültiger Numerus für', nounSingular, ' :', numerus);
// 		}
// 	}
// }
