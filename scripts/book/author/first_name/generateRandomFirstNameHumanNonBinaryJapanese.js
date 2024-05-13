function generateRandomFirstNameHumanNonBinaryJapanese() {
	let firstName;
	let previousVowel = '';
	let consecutiveVowels = 0;
	let consecutiveConsonants;
	let consecutiveXZQ;

	function isDigraph(string) {
		return [
			'ch',
			'chs',
			'ck',
			'dh',
			'dsch',
			'dt',
			'gh',
			'ng',
			'ph',
			'sch',
			'sp',
			'ss',
			'st',
			'sz',
			'th',
			'tz',
			'tzsch',
			'zsch',
		].includes(string);
	}

	do {
		const syllable1 = humanFirstNameMaleJapaneseSyllable1.concat(humanFirstNameFemaleJapaneseSyllable1)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleJapaneseSyllable1.length + humanFirstNameFemaleJapaneseSyllable1.length)
			)
		];
		const syllable2 =
		humanFirstNameMaleJapaneseSyllable2.concat(humanFirstNameFemaleJapaneseSyllable2)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleJapaneseSyllable2.length + humanFirstNameFemaleJapaneseSyllable2.length)
			)
		];
		const syllable3 =
		humanFirstNameMaleJapaneseSyllable3.concat(humanFirstNameFemaleJapaneseSyllable3)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleJapaneseSyllable3.length + humanFirstNameFemaleJapaneseSyllable3.length)
			)
		];
		const syllable4 =
		humanFirstNameMaleJapaneseSyllable4.concat(humanFirstNameFemaleJapaneseSyllable4)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleJapaneseSyllable4.length + humanFirstNameFemaleJapaneseSyllable4.length)
			)
		];
		const syllable5 =
		humanFirstNameMaleJapaneseSyllable5.concat(humanFirstNameFemaleJapaneseSyllable5)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleJapaneseSyllable5.length + humanFirstNameFemaleJapaneseSyllable5.length)
			)
		];

		firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

		// Check for consecutive vowels
		const currentVowel = firstName.match(/[aeiou]/gi);
		if (currentVowel && currentVowel[0] === previousVowel) {
			consecutiveVowels++;
		} else {
			consecutiveVowels = 0;
		}

		// Check for consecutive consonants, considering digraphs
		const syllablesArray = [syllable1, syllable2, syllable3, syllable4, syllable5];
		consecutiveConsonants = syllablesArray.some((syllable, index) => {
			if (index < syllablesArray.length - 1) {
				const combinedSyllables = syllable + syllablesArray[index + 1];
				return (
					!isDigraph(combinedSyllables) &&
					combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{3,}/gi)
				);
			}
			return false;
		});

		// Check for x, z, q consecutive
		consecutiveXZQ = firstName.match(/xz|xq|zx|zq|qz/gi);
	} while (
		consecutiveVowels > 1 ||
		firstName.match(/[aeiou]{4,}/gi) ||
		firstName.length < 3 ||
		firstName.length > 10 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);

	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
}