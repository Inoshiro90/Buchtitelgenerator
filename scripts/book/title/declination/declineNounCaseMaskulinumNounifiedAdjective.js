function declineNounCaseMaskulinumNounifiedAdjective(
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
	switch (declinationPattern) {
		case 'substantiviertesAdjektiv':
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
										(adjective ? adjective + 'r ' : '') +
										(noun + 'r') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										(noun + 'r') +
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
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'n') +
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
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'm ' : '') +
										(noun + 'n') +
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
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'n') +
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
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										(noun + 'n') +
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
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										(noun + 'n') +
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
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'n') +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										(noun + 'n') +
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
										(noun + 'n') +
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