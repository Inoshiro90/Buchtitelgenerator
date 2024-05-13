// function generateRandomFirstNameHumanFemale(region) {
//     let firstName;
//     let previousVowel = '';
//     let consecutiveVowels = 0;
//     let consecutiveConsonants;
//     let consecutiveXZQ;

//     function isDigraph(string) {
//         return [
//             'ch', 'chs', 'ck', 'dh', 'dsch', 'dt', 'gh', 'ng',
//             'ph', 'sch', 'sp', 'ss', 'st', 'sz', 'th', 'tz', 'tzsch', 'zsch'
//         ].includes(string);
//     }

//     do {
//         let syllable1, syllable2, syllable3, syllable4, syllable5;

//         switch (region) {
//             case 'Reu':
//                 syllable1 = humanFirstNameFemaleSyllableReu1[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu1.length)];
//                 syllable2 = humanFirstNameFemaleSyllableReu2[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu2.length)];
//                 syllable3 = humanFirstNameFemaleSyllableReu3[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu3.length)];
//                 syllable4 = humanFirstNameFemaleSyllableReu4[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu4.length)];
//                 syllable5 = humanFirstNameFemaleSyllableReu5[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu5.length)];
//                 break;
//             case 'Mes':
//                 syllable1 = humanFirstNameFemaleSyllableMes1[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes1.length)];
//                 syllable2 = humanFirstNameFemaleSyllableMes2[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes2.length)];
//                 syllable3 = humanFirstNameFemaleSyllableMes3[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes3.length)];
//                 syllable4 = humanFirstNameFemaleSyllableMes4[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes4.length)];
//                 syllable5 = humanFirstNameFemaleSyllableMes5[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes5.length)];
//                 break;
//             default:
//                 console.error('Unknown region:', region);
//                 break;
//         }

//         firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

//         // Check for consecutive vowels
//         const currentVowel = firstName.match(/[aeiou]/gi);
//         if (currentVowel && currentVowel[0] === previousVowel) {
//             consecutiveVowels++;
//         } else {
//             consecutiveVowels = 0;
//         }

//         // Check for consecutive consonants, considering digraphs
//         const syllablesArray = [syllable1, syllable2, syllable3, syllable4, syllable5];
//         consecutiveConsonants = syllablesArray.some((syllable, index) => {
//             if (index < syllablesArray.length - 1) {
//                 const combinedSyllables = syllable + syllablesArray[index + 1];
//                 return (
//                     typeof combinedSyllables === 'string' && // Check if it's a string
//                     !isDigraph(combinedSyllables) &&
//                     combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{5,}/gi)
//                 );
//             }
//             return false;
//         });

//         // Check for x, z, q consecutive
//         consecutiveXZQ = firstName.match(/xz|xq|zx|zq|qz/gi);
//     } while (
//         consecutiveVowels > 1 ||
//         firstName.match(/[aeiou]{4,}/gi) ||
//         firstName.length < 3 ||
//         firstName.length > 10 ||
//         consecutiveConsonants ||
//         consecutiveXZQ
//     );

//     return firstName.charAt(0).toUpperCase() + firstName.slice(1);
// }


// function generateRandomFirstNameHumanFemale(region) {
// 	let firstName;
// 	let previousVowel = '';
// 	let consecutiveVowels = 0;
// 	let consecutiveConsonants;
// 	let consecutiveXZQ;
// 	console.log('Die Region in generateRandomFirstNameHumanFemale ist',region)

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
// 		let syllable1, syllable2, syllable3, syllable4, syllable5;

// 		switch (region) {
// 			case 'Reu':
// 				syllable1 = humanFirstNameFemaleSyllableReu1[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu1.length)];
// 				syllable2 = humanFirstNameFemaleSyllableReu2[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu2.length)];
// 				syllable3 = humanFirstNameFemaleSyllableReu3[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu3.length)];
// 				syllable4 = humanFirstNameFemaleSyllableReu4[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu4.length)];
// 				syllable5 = humanFirstNameFemaleSyllableReu5[Math.floor(Math.random() * humanFirstNameFemaleSyllableReu5.length)];
// 				break;
// 			case 'Mes':
// 				syllable1 = humanFirstNameFemaleSyllableMes1[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes1.length)];
// 				syllable2 = humanFirstNameFemaleSyllableMes2[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes2.length)];
// 				syllable3 = humanFirstNameFemaleSyllableMes3[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes3.length)];
// 				syllable4 = humanFirstNameFemaleSyllableMes4[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes4.length)];
// 				syllable5 = humanFirstNameFemaleSyllableMes5[Math.floor(Math.random() * humanFirstNameFemaleSyllableMes5.length)];
// 				break;
// 			default:
// 				console.error('Unknown region:',region);
// 				break;
// 		}

// 		firstName = syllable1 + syllable2 + syllable3 + syllable4 + syllable5;

// 		// Check for consecutive vowels
// 		const currentVowel = firstName.match(/[aeiou]/gi);
// 		if (currentVowel && currentVowel[0] === previousVowel) {
// 			consecutiveVowels++;
// 		} else {
// 			consecutiveVowels = 0;
// 		}
// // Check for consecutive consonants, considering digraphs
// // Check for consecutive consonants, considering digraphs
// const syllablesArray = [syllable1, syllable2, syllable3, syllable4, syllable5];
// consecutiveConsonants = syllablesArray.some((syllable, index) => {
//     if (index < syllablesArray.length - 1) {
//         const combinedSyllables = syllable + syllablesArray[index + 1];
//         return (
//             typeof combinedSyllables === 'string' &&  // Check if it's a string
//             !isDigraph(combinedSyllables) &&
//             combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{3,}/gi)
//         );
//     }
//     return false;
// });
// 		// // Check for consecutive consonants, considering digraphs
// 		// const syllablesArray = [syllable1, syllable2, syllable3, syllable4, syllable5];
// 		// consecutiveConsonants = syllablesArray.some((syllable, index) => {
// 		// 	if (index < syllablesArray.length - 1) {
// 		// 		const combinedSyllables = syllable + syllablesArray[index + 1];
// 		// 		return (
// 		// 			!isDigraph(combinedSyllables) &&
// 		// 			combinedSyllables.match(/[bcdfghjklmnpqrstvwxyz]{3,}/gi)
// 		// 		);
// 		// 	}
// 		// 	return false;
// 		// });

// 		// Check for x, z, q consecutive
// 		consecutiveXZQ = firstName.match(/xz|xq|zx|zq|qz/gi);
// 	} while (
// 		consecutiveVowels > 1 ||
// 		firstName.match(/[aeiou]{4,}/gi) ||
// 		firstName.length < 3 ||
// 		firstName.length > 10 ||
// 		consecutiveConsonants ||
// 		consecutiveXZQ
// 	);

// 	return firstName.charAt(0).toUpperCase() + firstName.slice(1);
// }


function generateRandomFirstNameHumanFemale() {
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
	// 	switch (region) {
	// 		case 'Reu':
				
	// 		break;
	// 		case 'Mes':

		
	const syllable1 = humanFirstNameFemaleSyllable1[Math.floor(Math.random() * humanFirstNameFemaleSyllable1.length)];
	const syllable2 = humanFirstNameFemaleSyllable2[Math.floor(Math.random() * humanFirstNameFemaleSyllable2.length)];
	const syllable3 = humanFirstNameFemaleSyllable3[Math.floor(Math.random() * humanFirstNameFemaleSyllable3.length)];
	const syllable4 = humanFirstNameFemaleSyllable4[Math.floor(Math.random() * humanFirstNameFemaleSyllable4.length)];
	const syllable5 = humanFirstNameFemaleSyllable5[Math.floor(Math.random() * humanFirstNameFemaleSyllable5.length)];
  
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
