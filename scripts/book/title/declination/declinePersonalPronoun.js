function declinePersonalPronoun(kasus, person, genus) {
	let personalPronoun;
	switch (kasus) {
		case 'nominativ':
			switch (person) {
				case 'ich':
					personalPronoun = 'ich';
					break;
				case 'du':
					personalPronoun = 'du';
					break;
				case 'er_sie_es':
					switch (genus) {
						case 'maskulinum':
							personalPronoun = 'er';
							break;
						case 'femininum':
							personalPronoun = 'sie';
							break;
						case 'neutrum':
							personalPronoun = 'es';
							break;
					}
					break;
				case 'wir':
					personalPronoun = 'wir';
					break;
				case 'ihr':
					personalPronoun = 'ihr';
					break;
				case 'sie':
					personalPronoun = 'sie';
					break;
			}
			break;
		case 'genitiv':
			switch (person) {
				case 'ich':
					personalPronoun = 'meiner';
					break;
				case 'du':
					personalPronoun = 'deiner';
					break;
				case 'er_sie_es':
					switch (genus) {
						case 'maskulinum':
							personalPronoun = 'seiner';
							break;
						case 'femininum':
							personalPronoun = 'ihrer';
							break;
						case 'neutrum':
							personalPronoun = 'seiner';
							break;
					}
					break;
				case 'wir':
					personalPronoun = 'unser';
					break;
				case 'ihr':
					personalPronoun = 'euer';
					break;
				case 'sie':
					personalPronoun = 'ihrer';
					break;
			}
			break;
		case 'dativ':
			switch (person) {
				case 'ich':
					personalPronoun = 'mir';
					break;
				case 'du':
					personalPronoun = 'dir';
					break;
				case 'er_sie_es':
					switch (genus) {
						case 'maskulinum':
							personalPronoun = 'ihm';
							break;
						case 'femininum':
							personalPronoun = 'ihr';
							break;
						case 'neutrum':
							personalPronoun = 'ihm';
							break;
					}
					break;
				case 'wir':
					personalPronoun = 'uns';
					break;
				case 'ihr':
					personalPronoun = 'euer';
					break;
				case 'sie':
					personalPronoun = 'ihnen';
					break;
			}
			break;
		case 'akkusativ':
			switch (person) {
				case 'ich':
					personalPronoun = 'mich';
					break;
				case 'du':
					personalPronoun = 'dich';
					break;
				case 'er_sie_es':
					switch (genus) {
						case 'maskulinum':
							personalPronoun = 'ihn';
							break;
						case 'femininum':
							personalPronoun = 'sie';
							break;
						case 'neutrum':
							personalPronoun = 'es';
							break;
					}
					break;
				case 'wir':
					personalPronoun = 'uns';
					break;
				case 'ihr':
					personalPronoun = 'euch';
					break;
				case 'sie':
					personalPronoun = 'sie';
					break;
			}
			break;
	}
	return personalPronoun;
}

const personalpronomen = declinePersonalPronoun;
