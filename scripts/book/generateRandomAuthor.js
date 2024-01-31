function generateRandomAuthor() {
	const randomAuthor = {};
	randomAuthor.gender = generateRandomAuthorGender();
	// console.log('Geschlecht des Autors:', randomAuthor.gender);
	randomAuthor.race = generateRandomAuthorRace();
	// console.log('Volk des Autors:', randomAuthor.race);
	randomAuthor.first_name = generateRandomAuthorFirstName(randomAuthor.gender, randomAuthor.race);
	// console.log(
	// 	'Vorname des Autors basierend auf dem Geschlecht',
	// 	randomAuthor.gender,
	// 	'und dem Volk',
	// 	randomAuthor.race + ':',
	// 	randomAuthor.first_name
	// );
	randomAuthor.last_name = generateRandomAuthorLastName(randomAuthor.race);
	// console.log(
	// 	'Nachname des Autors basierend auf dem Volk',
	// 	randomAuthor.race + ':',
	// 	randomAuthor.last_name
	// );	
	return randomAuthor;
}
