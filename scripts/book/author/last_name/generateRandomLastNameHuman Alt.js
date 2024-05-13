function generateRandomLastNameHuman() {
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

    // Zufällig entscheiden, ob Silben oder Teile verwendet werden sollen
    const useParts = Math.random() < 0.5;

    if (useParts) {
        let part1, part2;

        do {
            part1 = humanLastNamePart1[Math.floor(Math.random() * humanLastNamePart1.length)];
            part2 = humanLastNamePart2[Math.floor(Math.random() * humanLastNamePart2.length)];
        } while (part1 === part2);

        lastName = part1 + part2;
    } else {
        do {
            const syllable1 =
                humanLastNameSyllable1[Math.floor(Math.random() * humanLastNameSyllable1.length)];
            const syllable2 =
                humanLastNameSyllable2[Math.floor(Math.random() * humanLastNameSyllable2.length)];
            const syllable3 =
                humanLastNameSyllable3[Math.floor(Math.random() * humanLastNameSyllable3.length)];
            const syllable4 =
                humanLastNameSyllable4[Math.floor(Math.random() * humanLastNameSyllable4.length)];
            const syllable5 =
                humanLastNameSyllable5[Math.floor(Math.random() * humanLastNameSyllable5.length)];

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

            // Update previousVowel
            previousVowel = currentVowel ? currentVowel[0] : '';
        } while (
            consecutiveVowels > 1 ||
            lastName.match(/[aeiou]{4,}/gi) ||
            lastName.length < 3 ||
            lastName.length > 10 ||
            consecutiveConsonants ||
            consecutiveXZQ
        );
    }

    return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}


// function generateRandomLastNameHuman() {
// 	let lastName;
// 	let consecutiveVowels = 0;
// 	let consecutiveConsonants;
// 	let consecutiveXZQ;
// 	let previousVowel = ''; // Definition der Variable hier

// 	function isDigraph(string) {
// 		return [
// 			'ch',
// 			'chs',
// 			'ck',
// 			'dh',
// 			'dsch',
// 			'dt',
// 			'gh',
// 			'ng',
// 			'ph',
// 			'sch',
// 			'sp',
// 			'ss',
// 			'st',
// 			'sz',
// 			'th',
// 			'tz',
// 			'tzsch',
// 			'zsch',
// 		].includes(string);
// 	}

// 	do {
// 		let useSyllables = Math.random() < 0.5;

// 		if (useSyllables) {
// 			const syllable1 =
// 				humanLastNameSyllable1[Math.floor(Math.random() * humanLastNameSyllable1.length)];
// 			const syllable2 =
// 				humanLastNameSyllable2[Math.floor(Math.random() * humanLastNameSyllable2.length)];
// 			const syllable3 =
// 				humanLastNameSyllable3[Math.floor(Math.random() * humanLastNameSyllable3.length)];
// 			const syllable4 =
// 				humanLastNameSyllable4[Math.floor(Math.random() * humanLastNameSyllable4.length)];
// 			const syllable5 =
// 				humanLastNameSyllable5[Math.floor(Math.random() * humanLastNameSyllable5.length)];

// 			lastName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

// 			// Check for consecutive vowels
// 			const currentVowel = lastName.match(/[aeiou]/gi);
// 			if (currentVowel && currentVowel[0] === previousVowel) {
// 				consecutiveVowels++;
// 			} else {
// 				consecutiveVowels = 0;
// 			}

// 			// Check for consecutive consonants, considering digraphs
// 			const syllablesArray = lastName.split('');
// 			consecutiveConsonants = syllablesArray.some((syllable, index) => {
// 				if (index < syllablesArray.length - 1) {
// 					const combinedSyllables = syllable + syllablesArray[index + 1];
// 					return (
// 						!isDigraph(combinedSyllables) &&
// 						combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{3,}/gi)
// 					);
// 				}
// 				return false;
// 			});

// 			// Check for xz, xq, zx, zq, qz consecutive
// 			consecutiveXZQ = lastName.match(/xz|xq|zx|zq|qz/gi);

// 			// Aktualisiere previousVowel
// 			previousVowel = currentVowel ? currentVowel[0] : '';
// 		} else {
// 			let part1, part2;

// 			do {
// 				part1 = humanLastNamePart1[Math.floor(Math.random() * humanLastNamePart1.length)];
// 				part2 = humanLastNamePart2[Math.floor(Math.random() * humanLastNamePart2.length)];
// 			} while (part1 === part2);

// 			lastName = part1 + part2;
// 		}
// 	} while (
// 		consecutiveVowels > 1 ||
// 		lastName.match(/[aeiou]{4,}/gi) ||
// 		lastName.length < 3 ||
// 		lastName.length > 15 ||
// 		consecutiveConsonants ||
// 		consecutiveXZQ
// 	);

// 	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
// }