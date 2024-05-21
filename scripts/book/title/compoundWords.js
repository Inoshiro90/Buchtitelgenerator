function Komposition(determiner) {
	let compound;
	// n-Fugenlaut
	if (
		// determiner.singular.endsWith('e') &&
		(determiner.declinationRule === 'schwacheDeklination' ||
			// determiner.singular.endsWith('e') &&
			determiner.declinationRule === 'gemischteDeklination') &&
		!determiner.singular.endsWith('vent')
	) {
		compound = determiner.plural;
	} else if (determiner.declinationRule === 'substantiviertesAdjektiv') {
		compound = determiner.plural + 'n';
	} else if (
		// s-Fugenlaut
		(determiner.singular.endsWith('en') ||
			determiner.singular.endsWith('heit') ||
			determiner.singular.endsWith('ion') ||
			determiner.singular.endsWith('keit') ||
			determiner.singular.endsWith('schaft') ||
			determiner.singular.endsWith('sicht') ||
			determiner.singular.endsWith('tät') ||
			determiner.singular.endsWith('ung') ||
			(determiner.singular.endsWith('ar') && determiner.gender === 'maskulinum') || // (wenn das Vorderwort maskulinum ist)
			(determiner.singular.endsWith('ch') && determiner.gender === 'maskulinum') || // (wenn das Vorderwort maskulinum ist)
			determiner.singular.endsWith('vent') || // (seltene Worte wie Advent, Konvent)
			(determiner.singular.endsWith('at') && determiner.gender !== 'femininum') || // (wenn das Vorderwort maskulinum oder neutrum ist)
			(determiner.singular.endsWith('tum') && determiner.gender !== 'femininum') || // (wenn Vorderwort maskulinum oder neutrum ist)
			(determiner.singular.endsWith('ling') && determiner.gender !== 'femininum') || // (wenn Vorderwort maskulinum oder neutrum ist)
			determiner.singular.startsWith('Be') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.singular.startsWith('Ge') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.singular.startsWith('Ent') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.singular.startsWith('Er') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.singular.startsWith('Ver') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.singular.startsWith('Wider') || // (falls das Vorderwort aus einem Verbstamm gebildet wird)
			determiner.singular.startsWith('Zer')) && // (falls das Vorderwort aus einem Verbstamm gebildet wird)
		!determiner.singular.endsWith('s') &&
		!determiner.singular.endsWith('ß') &&
		!determiner.singular.endsWith('z') &&
		!determiner.singular.endsWith('er') &&
		!determiner.singular.endsWith('ir') &&
		!determiner.singular.endsWith('or') &&
		!determiner.singular.endsWith('ur') &&
		!determiner.declinationPattern === 'S1'
	) {
		// s-Fugenlaut
		compound = determiner.singular + 's';
	} else {
		// Nullfuge
		compound = determiner.singular;
	}

	// Ersetze Leerzeichen durch Bindestriche
	compound = compound.replace(/\s/g, '-');
	// compound = determiner.adjective ? determiner.adjective + '-' + compound : compound;
	compound = sentenceCase(compound);

	return compound;
}

//Beispiel: Komposition(noun.randomWeapon)
