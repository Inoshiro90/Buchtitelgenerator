function Komposition(determiner) {
	let compound;
	// n-Fugenlaut
	if (
		// determiner.nounSingular.endsWith('e') &&
		(determiner.declinationRule === 'schwacheDeklination' ||
			// determiner.nounSingular.endsWith('e') &&
			determiner.declinationRule === 'gemischteDeklination') &&
		!determiner.nounSingular.endsWith('vent')
	) {
		compound = determiner.nounPlural;
	} else if (determiner.declinationRule === 'substantiviertesAdjektiv') {
		compound = determiner.nounPlural + 'n';
	} else if (
		// s-Fugenlaut
		(determiner.nounSingular.endsWith('en') ||
			determiner.nounSingular.endsWith('heit') ||
			determiner.nounSingular.endsWith('ion') ||
			determiner.nounSingular.endsWith('keit') ||
			determiner.nounSingular.endsWith('schaft') ||
			determiner.nounSingular.endsWith('sicht') ||
			determiner.nounSingular.endsWith('tät') ||
			determiner.nounSingular.endsWith('ung') ||
			(determiner.nounSingular.endsWith('ar') && determiner.nounGender === 'maskulinum') || // (wenn das Vorderwort maskulinum ist)
			(determiner.nounSingular.endsWith('ch') && determiner.nounGender === 'maskulinum') || // (wenn das Vorderwort maskulinum ist)
			determiner.nounSingular.endsWith('vent') || // (seltene Worte wie Advent, Konvent)
			(determiner.nounSingular.endsWith('at') && determiner.nounGender !== 'femininum') || // (wenn das Vorderwort maskulinum oder neutrum ist)
			(determiner.nounSingular.endsWith('tum') && determiner.nounGender !== 'femininum') || // (wenn Vorderwort maskulinum oder neutrum ist)
			(determiner.nounSingular.endsWith('ling') && determiner.nounGender !== 'femininum') || // (wenn Vorderwort maskulinum oder neutrum ist)
			determiner.nounSingular.startsWith('Be') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.nounSingular.startsWith('Ge') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.nounSingular.startsWith('Ent') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.nounSingular.startsWith('Er') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.nounSingular.startsWith('Ver') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.nounSingular.startsWith('Wider') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.nounSingular.startsWith('Zer')) && // (falls das Vorderwort aus einem Verbstamm gebildet wird)
		!determiner.nounSingular.endsWith('s') &&
		!determiner.nounSingular.endsWith('ß') &&
		!determiner.nounSingular.endsWith('z') &&
		!determiner.nounSingular.endsWith('er') &&
		!determiner.nounSingular.endsWith('ir') &&
		!determiner.nounSingular.endsWith('or') &&
		!determiner.nounSingular.endsWith('ur') &&
		!determiner.declinationPattern === 'S1'
	) {
		// s-Fugenlaut
		compound = determiner.nounSingular + 's';
	} else {
		// Nullfuge
		compound = determiner.nounSingular;
	}

	// Ersetze Leerzeichen durch Bindestriche
	compound = compound.replace(/\s/g, '-');
	// compound = determiner.adjective ? determiner.adjective + '-' + compound : compound;
	compound = sentenceCase(compound);

	return compound;
}

//Beispiel: Komposition(noun.randomWeapon)
