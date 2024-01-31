function generateRandomCoverDetails() {
	const randomNumber = d100();
	let coverDetail;

	const details = [
		'geprägter Rand',
		'abgeflachter Rand',
		'Auflagennummer',
		'Bild',
		'hochgeprägtes Bild',
		'Bild des Autors',
		'Zitat aus dem Buch',
		'Verlagssymbol',
		'Signatur des Autors',
		'geometrisches Symbol',
		'Schlagwort',
		'hochgeprägter Buchtitel',
		'Titel des Werks',
		'Autorenname',
	];

	if (randomNumber <= 7) {
		coverDetail = 'geprägter Rand';
	} else if (randomNumber <= 14) {
		coverDetail = 'abgeflachter Rand';
	} else if (randomNumber <= 21) {
		coverDetail = 'Auflagennummer';
	} else if (randomNumber <= 28) {
		coverDetail = 'Bild';
	} else if (randomNumber <= 35) {
		coverDetail = 'hochgeprägtes Bild';
	} else if (randomNumber <= 42) {
		coverDetail = 'Bild des Autors';
	} else if (randomNumber <= 49) {
		coverDetail = 'Zitat aus dem Buch';
	} else if (randomNumber <= 56) {
		coverDetail = 'Verlagssymbol';
	} else if (randomNumber <= 63) {
		coverDetail = 'Signatur des Autors';
	} else if (randomNumber <= 70) {
		coverDetail = 'geometrisches Symbol';
	} else if (randomNumber <= 77) {
		coverDetail = 'Schlagwort';
	} else if (randomNumber <= 85) {
		coverDetail = 'hochgeprägter Buchtitel';
	} else if (randomNumber <= 91) {
		coverDetail = 'Titel des Werks';
	} else if (randomNumber <= 98) {
		coverDetail = 'Autorenname';
	} else {
		const numDetails = Math.floor(Math.random() * 2) + 2;
		const selectedDetails = [];

		for (let i = 0; i < numDetails; i++) {
			const randomIndex = Math.floor(Math.random() * details.length);
			const selectedDetail = details.splice(randomIndex, 1)[0];
			selectedDetails.push(selectedDetail);
		}

		coverDetail = selectedDetails.join(', ');
	}
	return coverDetail;
}