document.getElementById('btn-generate').addEventListener('click', function () {
	getSelectedSetting();
	getSelectedGenre();
	getSelectedDescription();
	generateEmptyArrayForGeneratedBook();
	let generatedBook = generateBooks(selectedSetting, selectedGenre);
	displayGeneratedBooks(generatedBook, selectedDescription);
});

document.getElementById('input-field-book-count').addEventListener('keydown', function (event) {
	if (event.key === 'Enter') {
		getSelectedSetting();
		getSelectedGenre();
		getSelectedDescription();
		generateEmptyArrayForGeneratedBook();
		let generatedBook = generateBooks(selectedSetting, selectedGenre);
		displayGeneratedBooks(generatedBook, selectedDescription);
	}
});
