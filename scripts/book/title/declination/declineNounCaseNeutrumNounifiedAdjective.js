function declineNounCaseNeutrumNounifiedAdjective(
	numerus,
	noun,
	kasus,
	attribute,
	attribute,
	declinationPattern,
	adjective,
	prefix,
	suffix,
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										noun +
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										noun +
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'm ' : '') +
										noun +
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 's ' : '') +
										noun +
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										noun +
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'r ' : '') +
										noun +
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + 'n ' : '') +
										noun +
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
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'stark':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										noun +
										(suffix ? ' ' + suffix : '');
									break;
								case 'nullartikel':
									declinedNoun =
										(prefix ? prefix + ' ' : '') +
										(adjective ? adjective + ' ' : '') +
										noun +
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
