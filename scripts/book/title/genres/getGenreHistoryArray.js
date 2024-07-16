// const fs = require('fs');
// const path = require('path');
// const csv = require('csv-parser');

// function loadCSV(filePath) {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         fs.createReadStream(filePath)
//             .pipe(csv())
//             .on('data', (data) => results.push(data))
//             .on('end', () => {
//                 resolve(results);
//             })
//             .on('error', (error) => {
//                 reject(error);
//             });
//     });
// }

// async function getGenreHistoryArray(noun, adjective, name, location) {
//     const filePath = path.join(__dirname, '/files/csv/genre/genreHistory.csv');
//     const csvData = await loadCSV(filePath);
    
//     return csvData.map(row => ({
//         title: eval('`' + row.title + '`'), // Use template literals to inject variables
//         tags: eval('`' + row.tags + '`')
//     }));
// }

// // Beispielaufruf
// getGenreHistoryArray(noun, adjective, name, location)
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

// // Beispiel der Verwendung:


function getGenreHistoryArray(noun, adjective, name, location) {
	return [
		{
			title: `Die Geschichte der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Geschichte, Völker ${noun.Volk('tags')}`,
		},
		{
			title: `Die historische Odyssee der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Geschichte, Völker ${noun.Volk('tags')}`,
		},
		{
			title: `Die Umwälzungen der ${noun.Ereignis(
				'plural',
				'genitiv',
				'schwach'
			)}: Ein Blick in die Vergangenheit`,
			tags: `Geschichte, Ereignisse, ${noun.Ereignis('tags')}`,
		},
		{
			title: `Waffenkunst: Ein historischer Überblick über die Evolution ${noun.Waffe(
				'singular',
				'genitiv',
				'der_die_das'
			)} ${noun.Waffe('singular', 'genitiv', 'schwach')}`,
			tags: `Geschichte, Evolution, Waffen, ${noun.Waffe('tags')}`,
		},
		{
			title: `Aufstieg und Niedergang: Die Schicksale der ${Komposition(
				noun.randomClass
			)}gesellschaften`,
			tags: `Geschichte, Aufstiege, Niedergänge, Schicksale, Klassen, Gesellschaften, ${noun.Klasse(
				'tags'
			)}`,
		},
	];
}
