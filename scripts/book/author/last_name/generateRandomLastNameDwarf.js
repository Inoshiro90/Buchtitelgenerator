function generateRandomLastNameDwarf() {
	let lastName;
	let consecutiveVowels = 0;
	let consecutiveConsonants;
	let consecutiveXZQ;
	let previousVowel = ''; // Definition der Variable hier

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
		let useSyllables = Math.random() < 0.5;

		if (useSyllables) {
			const syllable1 =
				dwarfLastNameSyllable1[Math.floor(Math.random() * dwarfLastNameSyllable1.length)];
			const syllable2 =
				dwarfLastNameSyllable2[Math.floor(Math.random() * dwarfLastNameSyllable2.length)];
			const syllable3 =
				dwarfLastNameSyllable3[Math.floor(Math.random() * dwarfLastNameSyllable3.length)];
			const syllable4 =
				dwarfLastNameSyllable4[Math.floor(Math.random() * dwarfLastNameSyllable4.length)];
			const syllable5 =
				dwarfLastNameSyllable5[Math.floor(Math.random() * dwarfLastNameSyllable5.length)];

			lastName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

			// Check for consecutive vowels
			const currentVowel = lastName.match(/[aeiou]/gi);
			if (currentVowel && currentVowel[0] === previousVowel) {
				consecutiveVowels++;
			} else {
				consecutiveVowels = 0;
			}

			// Check for consecutive consonants, considering digraphs
			const syllablesArray = lastName.split('');
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

			// Check for xz, xq, zx, zq, qz consecutive
			consecutiveXZQ = lastName.match(/xz|xq|zx|zq|qz/gi);

			// Aktualisiere previousVowel
			previousVowel = currentVowel ? currentVowel[0] : '';
		} else {
			let part1, part2;

			do {
				part1 = dwarfLastNamePart1[Math.floor(Math.random() * dwarfLastNamePart1.length)];
				part2 = dwarfLastNamePart2[Math.floor(Math.random() * dwarfLastNamePart2.length)];
			} while (part1 === part2);

			lastName = part1 + part2;
		}
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

// function generateRandomLastNameDwarf() {
// 	let lastName;
// 	let useSyllables = Math.random() < 0.5;

// 	if (useSyllables) {
// 		const syllable1 =
// 			dwarfLastNameSyllable1[Math.floor(Math.random() * dwarfLastNameSyllable1.length)];
// 		const syllable2 =
// 			dwarfLastNameSyllable2[Math.floor(Math.random() * dwarfLastNameSyllable2.length)];
// 		const syllable3 =
// 			dwarfLastNameSyllable3[Math.floor(Math.random() * dwarfLastNameSyllable3.length)];
// 		const syllable4 =
// 			dwarfLastNameSyllable4[Math.floor(Math.random() * dwarfLastNameSyllable4.length)];
// 		const syllable5 =
// 			dwarfLastNameSyllable5[Math.floor(Math.random() * dwarfLastNameSyllable5.length)];

// 		lastName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

// 	} else {
// 		let part1, part2;

// 		do {
// 			part1 = dwarfLastNamePart1[Math.floor(Math.random() * dwarfLastNamePart1.length)];
// 			part2 = dwarfLastNamePart2[Math.floor(Math.random() * dwarfLastNamePart2.length)];
// 		} while (part1 === part2);

// 		lastName = part1 + part2;
// 	}

// 	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
// }
