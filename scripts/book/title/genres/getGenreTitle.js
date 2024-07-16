// // async function getGenreTitle(noun, adjective, name, location, genre) {
// //     // Lade die CSV-Datei
// //     const response = await fetch('./files/csv/genre/genre.csv');
// //     const csvText = await response.text();

// //     // Parse die CSV-Datei
// //     const rows = csvText.split('\n').map(row => row.split(';'));

// //     // Extrahiere die Header und Daten
// //     const headers = rows[0];
// //     const data = rows.slice(1);

// //     // Filter die Daten nach dem gewünschten Genre
// //     const filteredData = data.filter(row => row[headers.indexOf('genre')] === genre);

// //     // Mappe die gefilterten Daten in das gewünschte Format
// //     const result = filteredData.map(row => {
// //         const titleTemplate = row[headers.indexOf('title')];
// //         const tagsTemplate = row[headers.indexOf('tags')];

// //         return {
// //             title: evalTemplate(titleTemplate, { noun, adjective, name, location }),
// //             tags: evalTemplate(tagsTemplate, { noun, adjective, name, location }),
// //         };
// //     });

// //     return result;
// // }

// // // Hilfsfunktion zum Evaluieren der Template-Strings
// // function evalTemplate(template, context) {
// //     return new Function(...Object.keys(context), `return \`${template}\`;`)(...Object.values(context));
// // }

// async function getGenreTitle(noun, adjective, name, location, genre) {
//     // Lade die CSV-Datei
//     const response = await fetch('./files/csv/genre/genre.csv');
//     const csvText = await response.text();

//     // Parse die CSV-Datei
//     const rows = csvText.split('\n').map(row => row.split(';').map(cell => cell.trim()));

//     // Extrahiere die Header und Daten
//     const headers = rows[0];
//     const data = rows.slice(1).filter(row => row.length === headers.length);

//     // Indizes der relevanten Spalten
//     const titleIndex = headers.indexOf('title');
//     const tagsIndex = headers.indexOf('tags');
//     const genreIndex = headers.indexOf('genre');

//     // Überprüfe, ob alle benötigten Spalten vorhanden sind
//     if (titleIndex === -1 || tagsIndex === -1 || genreIndex === -1) {
//         throw new Error('CSV file is missing required columns');
//     }

//     // Filter die Daten nach dem gewünschten Genre
//     const filteredData = data.filter(row => row[genreIndex] === genre);

//     // Mappe die gefilterten Daten in das gewünschte Format
//     const result = filteredData.map(row => {
//         const titleTemplate = row[titleIndex];
//         const tagsTemplate = row[tagsIndex];

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

// let cachedCsvData = null;

// async function loadCsvData() {
//     if (cachedCsvData) {
//         return cachedCsvData;
//     }

//     const response = await fetch('./files/csv/genre/genre.csv');
//     const csvText = await response.text();
//     const rows = csvText.split('\n').map(row => row.split(';').map(cell => cell.trim()));

//     const headers = rows[0];
//     const data = rows.slice(1).filter(row => row.length === headers.length);

//     cachedCsvData = { headers, data };
//     return cachedCsvData;
// }

// async function getGenreTitle(noun, adjective, name, location, genre) {
//     const { headers, data } = await loadCsvData();

//     const titleIndex = headers.indexOf('title');
//     const tagsIndex = headers.indexOf('tags');
//     const genreIndex = headers.indexOf('genre');

//     if (titleIndex === -1 || tagsIndex === -1 || genreIndex === -1) {
//         throw new Error('CSV file is missing required columns');
//     }

//     const filteredData = data.filter(row => row[genreIndex] === genre);

//     const result = filteredData.map(row => {
//         const titleTemplate = row[titleIndex];
//         const tagsTemplate = row[tagsIndex];

//         return {
//             title: evalTemplate(titleTemplate, { noun, adjective, name, location }),
//             tags: evalTemplate(tagsTemplate, { noun, adjective, name, location }),
//         };
//     });

//     return result;
// }

// function evalTemplate(template, context) {
//     return new Function(...Object.keys(context), `return \`${template}\`;`)(...Object.values(context));
// }

let cachedGenreData = null;

async function loadAndGroupCsvData() {
    if (cachedGenreData) {
        return cachedGenreData;
    }

    const response = await fetch('./files/csv/genre/genre.csv');
    const csvText = await response.text();
    const rows = csvText.split('\n').map(row => row.split(';').map(cell => cell.trim()));

    const headers = rows[0];
    const data = rows.slice(1).filter(row => row.length === headers.length);

    const titleIndex = headers.indexOf('title');
    const tagsIndex = headers.indexOf('tags');
    const genreIndex = headers.indexOf('genre');

    if (titleIndex === -1 || tagsIndex === -1 || genreIndex === -1) {
        throw new Error('CSV file is missing required columns');
    }

    const genreDataMap = new Map();

    data.forEach(row => {
        const genre = row[genreIndex];
        const titleTemplate = row[titleIndex];
        const tagsTemplate = row[tagsIndex];

        const entry = {
            title: titleTemplate,
            tags: tagsTemplate
        };

        if (!genreDataMap.has(genre)) {
            genreDataMap.set(genre, []);
        }
        genreDataMap.get(genre).push(entry);
    });

    cachedGenreData = genreDataMap;
    return cachedGenreData;
}

async function getGenreTitle(noun, adjective, name, location, genre) {
    const genreDataMap = await loadAndGroupCsvData();

    if (!genreDataMap.has(genre)) {
        return [];
    }

    const filteredData = genreDataMap.get(genre);

    return filteredData.map(entry => ({
        title: evalTemplate(entry.title, { noun, adjective, name, location }),
        tags: evalTemplate(entry.tags, { noun, adjective, name, location })
    }));
}

function evalTemplate(template, context) {
    return new Function(...Object.keys(context), `return \`${template}\`;`)(...Object.values(context));
}