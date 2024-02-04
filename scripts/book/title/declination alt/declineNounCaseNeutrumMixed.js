function declineNounCaseNeutrumMixed(
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
	
		endsWithE = '';
		function checkIfNounEndsWithE(noun) {
			// Überprüfen, ob das Substantiv mit "e" endet
			const endsWithE = noun.endsWith('e');
		  
			// Rückgabe des Ergebnisses
			return endsWithE;
		  }
		
	switch (declinationPattern) {
		case 'W3':
			switch (numerus) {
				case 'singular':
					endsWithE = checkIfNounEndsWithE(noun)
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
										(noun + 's') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 's') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 's') +
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
										(adjective ? adjective + ' ' : '') +
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
		case 'W4':
			switch (numerus) {
				case 'singular':
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
										(noun + 'ens') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'ens') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'ens') +
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
