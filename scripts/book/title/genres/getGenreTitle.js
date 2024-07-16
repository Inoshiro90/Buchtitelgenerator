// async function getGenreTitle(noun, adjective, name, location, genre) {
//     // Lade die CSV-Datei
//     const response = await fetch('./files/csv/genre/genre.csv');
//     const csvText = await response.text();

//     // Parse die CSV-Datei
//     const rows = csvText.split('\n').map(row => row.split(';'));

//     // Extrahiere die Header und Daten
//     const headers = rows[0];
//     const data = rows.slice(1);

//     // Filter die Daten nach dem gewünschten Genre
//     const filteredData = data.filter(row => row[headers.indexOf('genre')] === genre);

//     // Mappe die gefilterten Daten in das gewünschte Format
//     const result = filteredData.map(row => {
//         const titleTemplate = row[headers.indexOf('title')];
//         const tagsTemplate = row[headers.indexOf('tags')];

//         return {
//             title: evalTemplate(titleTemplate, { noun, adjective, name, location }),
//             tags: evalTemplate(tagsTemplate, { noun, adjective, name, location }),
//         };
//     });

//     return result;
// }

// // Hilfsfunktion zum Evaluieren der Template-Strings
// function evalTemplate(template, context) {
//     return new Function(...Object.keys(context), `return \`${template}\`;`)(...Object.values(context));
// }

async function getGenreTitle(noun, adjective, name, location, genre) {
    // Lade die CSV-Datei
    const response = await fetch('./files/csv/genre/genre.csv');
    const csvText = await response.text();

    // Parse die CSV-Datei
    const rows = csvText.split('\n').map(row => row.split(';').map(cell => cell.trim()));

    // Extrahiere die Header und Daten
    const headers = rows[0];
    const data = rows.slice(1).filter(row => row.length === headers.length);

    // Indizes der relevanten Spalten
    const titleIndex = headers.indexOf('title');
    const tagsIndex = headers.indexOf('tags');
    const genreIndex = headers.indexOf('genre');

    // Überprüfe, ob alle benötigten Spalten vorhanden sind
    if (titleIndex === -1 || tagsIndex === -1 || genreIndex === -1) {
        throw new Error('CSV file is missing required columns');
    }

    // Filter die Daten nach dem gewünschten Genre
    const filteredData = data.filter(row => row[genreIndex] === genre);

    // Mappe die gefilterten Daten in das gewünschte Format
    const result = filteredData.map(row => {
        const titleTemplate = row[titleIndex];
        const tagsTemplate = row[tagsIndex];

        return {
            title: evalTemplate(titleTemplate, { noun, adjective, name, location }),
            tags: evalTemplate(tagsTemplate, { noun, adjective, name, location }),
        };
    });

    return result;
}

// Hilfsfunktion zum Evaluieren der Template-Strings
function evalTemplate(template, context) {
    return new Function(...Object.keys(context), `return \`${template}\`;`)(...Object.values(context));
}
