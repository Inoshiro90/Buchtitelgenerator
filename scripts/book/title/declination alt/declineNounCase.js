function declineNounCase(
	numerus,
	kasus,
	attribute,
	noun,
	adjective,
	prefix,
	suffix,
	genus,
	declinationRule,
	declinationPattern
) {
		// console.log (	
	// 	'\nConsole log für declineNounCase:\n',	
	// 	'\nnumerus', numerus,
	// 	'\nkasus:', kasus,
	// 	'\nattribute:', attribute,
	// 	'\nnoun:', noun,
	// 	'\nadjective:',adjective,
	// 	'\nprefix:',prefix,
	// 	'\nsuffix:',suffix,
	// 	'\ngenus:',genus,
	// 	'\ndeclinationRule:',declinationRule,
	// 	'\ndeclinationPattern:',declinationPattern)

	let declinedNoun;

	switch (genus) {
		case 'maskulinum':
			declinedNoun =  declineNounCaseMaskulinum(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);
				break;
		case 'femininum':
			declinedNoun =  declineNounCaseFemininum(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);
break;
		case 'neutrum':
			declinedNoun =  declineNounCaseNeutrum(
				numerus,
				kasus,
				attribute,
				noun,
				adjective,
				prefix,
				suffix,
				genus,
				declinationRule,
				declinationPattern
			);
break;
		default:
			console.error('Ungültiges Geschlecht:', genus);
	}
	// console.log('\n\n declinedNoun in declineNounCase:', declinedNoun)
	
	// Rückgabe des deklinierten Substantivs für den angegebenen Fall
	return declinedNoun;
}
