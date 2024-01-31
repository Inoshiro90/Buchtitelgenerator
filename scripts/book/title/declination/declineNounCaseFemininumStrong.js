function declineNounCaseFemininumStrong(
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
		case 'S3':
			declineNounCaseFemininumStrongS3(
				numerus,
				noun,
				kasus,
				attribute,
				declinationRule,
				declinationPattern,
				adjective,
				prefix,
				suffix
			);
			break;
		case 'S5':
			declineNounCaseFemininumStrongS5(
				numerus,
				noun,
				kasus,
				attribute,
				declinationRule,
				declinationPattern,
				adjective,
				prefix,
				suffix
			);
			break;
	}
	return declinedNoun;
}

function declineNounCaseFemininumStrongS3(
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
								(adjective ? adjective + 'n ' : '') +
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
								(adjective ? adjective + 'r ' : '') +
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
								(adjective ? adjective + ' ' : '') +
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
								(noun + 's') +
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
								(prefix ? prefix + 'n ' : '') +
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
								(adjective ? adjective + ' ' : '') +
								(noun + '') +
								(suffix ? ' ' + suffix : '');
							break;
					}
					break;
			}
			break;
	}
}

function declineNounCaseFemininumStrongS5(
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
								(adjective ? adjective + 'n ' : '') +
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
								(adjective ? adjective + 'r ' : '') +
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
								(adjective ? adjective + ' ' : '') +
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
	return declinedNoun;
}
