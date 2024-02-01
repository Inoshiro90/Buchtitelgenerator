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
			}
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
	}
}