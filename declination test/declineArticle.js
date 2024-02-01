function declineDefiniteArticle(numerus, kasus, genus) {
	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					switch (genus) {
						case 'maskulinum':
							return 'der';
						case 'femininum':
							return 'die';
						case 'neutrum':
							return 'das';
					}
					break;
				case 'genitiv':
					switch (genus) {
						case 'maskulinum':
							return 'des';
						case 'femininum':
							return 'der';
						case 'neutrum':
							return 'des';
					}
					break;
				case 'dativ':
					switch (genus) {
						case 'maskulinum':
							return 'dem';
						case 'femininum':
							return 'der';
						case 'neutrum':
							return 'dem';
					}
					break;
				case 'akkusativ':
					switch (genus) {
						case 'maskulinum':
							return 'den';
						case 'femininum':
							return 'die';
						case 'neutrum':
							return 'das';
					}
					break;
				default:
					console.error('Ungültiger Kasus in declineDefiniteArticle:', kasus);
			}
			break;
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					return 'die';
				case 'genitiv':
					return 'der';
				case 'dativ':
					return 'den';
				case 'akkusativ':
					return 'die';
				default:
					console.error('Ungültiger Kasus in declineDefiniteArticle:', kasus);
			}
			break;
		default:
			console.error('Ungültiger Numerus in declineDefiniteArticle:', numerus);
	}
}

function declineIndefiniteArticle(kasus, genus) {
	switch (kasus) {
		case 'nominativ':
			switch (genus) {
				case 'maskulinum':
					return 'ein';
				case 'femininum':
					return 'eine';
				case 'neutrum':
					return 'ein';
			}
			break;
		case 'genitiv':
			switch (genus) {
				case 'maskulinum':
					return 'eines';
				case 'femininum':
					return 'einer';
				case 'neutrum':
					return 'eines';
			}
			break;
		case 'dativ':
			switch (genus) {
				case 'maskulinum':
					return 'einem';
				case 'femininum':
					return 'einer';
				case 'neutrum':
					return 'eines';
			}
			break;
		case 'akkusativ':
			switch (genus) {
				case 'maskulinum':
					return 'einen';
				case 'femininum':
					return 'eine';
				case 'neutrum':
					return 'ein';
			}
			break;
		default:
			console.error('Ungültiger Kasus in declineIndefiniteArticle:', kasus);
	}
}

function declineNegativeArticle(numerus, kasus, genus) {
	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					switch (genus) {
						case 'maskulinum':
							return 'kein';
						case 'femininum':
							return 'keine';
						case 'neutrum':
							return 'kein';
					}
					break;
				case 'genitiv':
					switch (genus) {
						case 'maskulinum':
							return 'keines';
						case 'femininum':
							return 'keiner';
						case 'neutrum':
							return 'keines';
					}
					break;
				case 'dativ':
					switch (genus) {
						case 'maskulinum':
							return 'keinem';
						case 'femininum':
							return 'keiner';
						case 'neutrum':
							return 'keines';
					}
					break;
				case 'akkusativ':
					switch (genus) {
						case 'maskulinum':
							return 'keinen';
						case 'femininum':
							return 'keine';
						case 'neutrum':
							return 'kein';
					}
					break;
				default:
					console.error('Ungültiger Kasus in declineIndefiniteArticle:', kasus);
			}
			break;
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					return 'keine';
				case 'genitiv':
					return 'keiner';
				case 'dativ':
					return 'keinen';
				case 'akkusativ':
					return 'keine';
				default:
					console.error('Ungültiger Kasus in declineIndefiniteArticle:', kasus);
			}
			break;
		default:
			console.error('Ungültiger Numerus in declineNegativeArticle:', numerus);
	}
}