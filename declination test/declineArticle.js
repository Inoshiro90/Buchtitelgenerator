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
							return 'der';
						case 'femininum':
							return 'die';
						case 'neutrum':
							return 'das';
					}
					break;
				case 'dativ':
					switch (genus) {
						case 'maskulinum':
							return 'der';
						case 'femininum':
							return 'die';
						case 'neutrum':
							return 'das';
					}
					break;
				case 'akkusativ':
					switch (genus) {
						case 'maskulinum':
							return 'der';
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
							return 'der';
						case 'femininum':
							return 'die';
						case 'neutrum':
							return 'das';
					}
					break;
				case 'dativ':
					switch (genus) {
						case 'maskulinum':
							return 'der';
						case 'femininum':
							return 'die';
						case 'neutrum':
							return 'das';
					}
					break;
				case 'akkusativ':
					switch (genus) {
						case 'maskulinum':
							return 'der';
						case 'femininum':
							return 'die';
						case 'neutrum':
							return 'das';
					}
					break;
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
					return 'ein';
				case 'femininum':
					return 'eine';
				case 'neutrum':
					return 'ein';
			}
			break;
		case 'dativ':
			switch (genus) {
				case 'maskulinum':
					return 'ein';
				case 'femininum':
					return 'eine';
				case 'neutrum':
					return 'ein';
			}
			break;
		case 'akkusativ':
			switch (genus) {
				case 'maskulinum':
					return 'ein';
				case 'femininum':
					return 'eine';
				case 'neutrum':
					return 'ein';
			}
			break;
	}
}