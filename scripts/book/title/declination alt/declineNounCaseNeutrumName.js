function declineNounCaseNeutrumName(
	numerus,
	noun,
	kasus,
	attribute,
	attribute,
	declinationPattern,
	adjective,
	prefix,
	suffix
) {
	let declinedNoun;
	endsWithSxZ = '';
	function checkIfNounEndsWithSxZ(noun) {
		// Überprüfen, ob das Substantiv mit s, ß, z oder x endet
		const endsWithSxZ =
			noun.endsWith('s') || noun.endsWith('ß') || noun.endsWith('z') || noun.endsWith('x');
		// Rückgabe des Ergebnisses
		return endsWithSxZ;
	}
	switch (declinationPattern) {
		case 'eigenname':
			switch (numerus) {
				case 'singular':
					endsWithE = checkIfNounEndsWithSxZ(noun);
					switch (kasus) {
						case 'nominativ':
							switch (attribute) {
								case 'schwach':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
							}
							break;
						case 'genitiv':
							switch (attribute) {
								case 'schwach':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(endsWithSxZ ? noun + "'" : noun + 's') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(endsWithSxZ ? noun + "'" : noun + 's') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(endsWithSxZ ? noun + "'" : noun + 's') +
										(suffix ? ' ' + suffix : '');
									break;
							}
							break;
						case 'dativ':
							switch (attribute) {
								case 'schwach':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'm ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
							}
							break;
						case 'akkusativ':
							switch (attribute) {
								case 'schwach':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
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
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
							}
							break;
						case 'genitiv':
							switch (attribute) {
								case 'schwach':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
							}
							break;
						case 'dativ':
							switch (attribute) {
								case 'schwach':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
							}
							break;
						case 'akkusativ':
							switch (attribute) {
								case 'schwach':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										(noun + '') +
										(suffix ? ' ' + suffix : '');
									break;
							}
							break;
					}
					break;
			}
			break;
	}

	return declinedNoun;
}
