function generateRandomFirstNameHumanNonBinaryRomanesque() {
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
		const syllable1 = humanFirstNameMaleRomanesqueSyllable1.concat(humanFirstNameFemaleRomanesqueSyllable1)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleRomanesqueSyllable1.length + humanFirstNameFemaleRomanesqueSyllable1.length)
			)
		];
		const syllable2 =
		humanFirstNameMaleRomanesqueSyllable2.concat(humanFirstNameFemaleRomanesqueSyllable2)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleRomanesqueSyllable2.length + humanFirstNameFemaleRomanesqueSyllable2.length)
			)
		];
		const syllable3 =
		humanFirstNameMaleRomanesqueSyllable3.concat(humanFirstNameFemaleRomanesqueSyllable3)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleRomanesqueSyllable3.length + humanFirstNameFemaleRomanesqueSyllable3.length)
			)
		];
		const syllable4 =
		humanFirstNameMaleRomanesqueSyllable4.concat(humanFirstNameFemaleRomanesqueSyllable4)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleRomanesqueSyllable4.length + humanFirstNameFemaleRomanesqueSyllable4.length)
			)
		];
		const syllable5 =
		humanFirstNameMaleRomanesqueSyllable5.concat(humanFirstNameFemaleRomanesqueSyllable5)[
			Math.floor(
				Math.random() *
					(humanFirstNameMaleRomanesqueSyllable5.length + humanFirstNameFemaleRomanesqueSyllable5.length)
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