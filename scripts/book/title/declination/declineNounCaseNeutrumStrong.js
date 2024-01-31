function declineNounCaseNeutrumStrong(
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
		case 'S1':
			declineNounCaseNeutrumStrongS1(
				numerus,
				noun,
				kasus,
				attribute,
				declinationPattern,
				adjective,
				prefix,
				suffix
			);
			break;
		case 'S2':
			declineNounCaseNeutrumStrongS2(
				numerus,
				noun,
				kasus,
				attribute,
				declinationPattern,
				adjective,
				prefix,
				suffix
			);
			break;
		case 'S4':
			declineNounCaseNeutrumStrongS4(
				numerus,
				noun,
				kasus,
				attribute,
				declinationPattern,
				adjective,
				prefix,
				suffix
			);
			break;
		case 'S5':
			declineNounCaseNeutrumStrongS5(
				numerus,
				noun,
				kasus,
				attribute,
				declinationPattern,
				adjective,
				prefix,
				suffix
			);
			break;
		case 'S6':
			declineNounCaseNeutrumStrongS6(
				numerus,
				noun,
				kasus,
				attribute,
				declinationPattern,
				adjective,
				prefix,
				suffix
			);
			break;
	}
	return declinedNoun;
}

function declineNounCaseNeutrumStrongS1(
	numerus,
	noun,
	kasus,
	attribute,
	declinationPattern,
	adjective,
	prefix,
	suffix
) {
	endsWithSxZ = '';
	function checkIfNounEndsWithSxZ(noun) {
		// Überprüfen, ob das Substantiv mit s, ß, z oder x endet
		const endsWithSxZ =
			noun.endsWith('s') || noun.endsWith('ß') || noun.endsWith('z') || noun.endsWith('x');
		// Rückgabe des Ergebnisses
		return endsWithSxZ;
	}
	switch (numerus) {
		case 'singular':
			endsWithSxZ = checkIfNounEndsWithSxZ(noun);
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
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'stark':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'nullartikel':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
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

function declineNounCaseNeutrumStrongS2(
	numerus,
	noun,
	kasus,
	attribute,
	declinationPattern,
	adjective,
	prefix,
	suffix
) {
	endsWithSxZ = '';
	function checkIfNounEndsWithSxZ(noun) {
		// Überprüfen, ob das Substantiv mit s, ß, z oder x endet
		const endsWithSxZ =
			noun.endsWith('s') || noun.endsWith('ß') || noun.endsWith('z') || noun.endsWith('x');
		// Rückgabe des Ergebnisses
		return endsWithSxZ;
	}
	switch (numerus) {
		case 'singular':
			endsWithSxZ = checkIfNounEndsWithSxZ(noun);
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
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'stark':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'nullartikel':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
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
	return declinedNoun;
}

function declineNounCaseNeutrumStrongS4(
	numerus,
	noun,
	kasus,
	attribute,
	declinationPattern,
	adjective,
	prefix,
	suffix
) {
	endsWithSxZ = '';
	function checkIfNounEndsWithSxZ(noun) {
		// Überprüfen, ob das Substantiv mit s, ß, z oder x endet
		const endsWithSxZ =
			noun.endsWith('s') || noun.endsWith('ß') || noun.endsWith('z') || noun.endsWith('x');
		// Rückgabe des Ergebnisses
		return endsWithSxZ;
	}
	switch (numerus) {
		case 'singular':
			endsWithSxZ = checkIfNounEndsWithSxZ(noun);
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
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'stark':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'nullartikel':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
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

function declineNounCaseNeutrumStrongS5(
	numerus,
	noun,
	kasus,
	attribute,
	declinationPattern,
	adjective,
	prefix,
	suffix
) {
	endsWithSxZ = '';
	function checkIfNounEndsWithSxZ(noun) {
		// Überprüfen, ob das Substantiv mit s, ß, z oder x endet
		const endsWithSxZ =
			noun.endsWith('s') || noun.endsWith('ß') || noun.endsWith('z') || noun.endsWith('x');
		// Rückgabe des Ergebnisses
		return endsWithSxZ;
	}
	switch (numerus) {
		case 'singular':
			endsWithSxZ = checkIfNounEndsWithSxZ(noun);
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
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'stark':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'nullartikel':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
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

function declineNounCaseNeutrumStrongS6(
	numerus,
	noun,
	kasus,
	attribute,
	declinationPattern,
	adjective,
	prefix,
	suffix
) {
	endsWithSxZ = '';
	function checkIfNounEndsWithSxZ(noun) {
		// Überprüfen, ob das Substantiv mit s, ß, z oder x endet
		const endsWithSxZ =
			noun.endsWith('s') || noun.endsWith('ß') || noun.endsWith('z') || noun.endsWith('x');
		// Rückgabe des Ergebnisses
		return endsWithSxZ;
	}
	switch (numerus) {
		case 'singular':
			endsWithSxZ = checkIfNounEndsWithSxZ(noun);
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
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'stark':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
								(suffix ? ' ' + suffix : '');
							break;
						case 'nullartikel':
							declinedNoun =
								(prefix ? prefix + ' ' : '') +
								(adjective ? adjective + 'n ' : '') +
								(endsWithSxZ ? noun + 'es' : noun + 's') +
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
