function generateRandomLastNameDragonborn() {
	let lastName;
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
		const syllable1 =
			dragonbornLastNameSyllable1[
				Math.floor(Math.random() * dragonbornLastNameSyllable1.length)
			];
		const syllable2 =
			dragonbornLastNameSyllable2[
				Math.floor(Math.random() * dragonbornLastNameSyllable2.length)
			];
		const syllable3 =
			dragonbornLastNameSyllable3[
				Math.floor(Math.random() * dragonbornLastNameSyllable3.length)
			];
		const syllable4 =
			dragonbornLastNameSyllable4[
				Math.floor(Math.random() * dragonbornLastNameSyllable4.length)
			];
		const syllable5 =
			dragonbornLastNameSyllable5[
				Math.floor(Math.random() * dragonbornLastNameSyllable5.length)
			];
		const syllable6 =
			dragonbornLastNameSyllable6[
				Math.floor(Math.random() * dragonbornLastNameSyllable6.length)
			];
		lastName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5 + syllable6;

		// Check for consecutive vowels
		const currentVowel = lastName.match(/[aeiou]/gi);
		if (currentVowel && currentVowel[0] === previousVowel) {
			consecutiveVowels++;
		} else {
			consecutiveVowels = 0;
		}

		// Check for consecutive consonants, considering digraphs
		const syllablesArray = [syllable1, syllable2, syllable3, syllable4, syllable5, syllable6];
		consecutiveConsonants = syllablesArray.some((syllable, index) => {
			if (index < syllablesArray.length - 1) {
				const combinedSyllables = syllable + syllablesArray[index + 1];
				return (
					!isDigraph(combinedSyllables) &&
					combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{4,}/gi)
				);
			}
			return false;
		});

		// Check for x, z, q consecutive
		consecutiveXZQ = lastName.match(/xz|xq|zx|zq|qz/gi);
	} while (
		consecutiveVowels > 1 ||
		lastName.match(/[aeiou]{4,}/gi) ||
		lastName.length < 3 ||
		lastName.length > 15 ||
		consecutiveConsonants ||
		consecutiveXZQ
	);

	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
