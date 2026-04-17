export function generateRandomAuthor() {
	const gender     = generateRandomAuthorGender();
	const race       = generateRandomAuthorRace();
	const region     = generateRandomAuthorRegion();
	const first_name = generateRandomAuthorFirstName(gender, race, region);
	const last_name  = generateRandomAuthorLastName(race, region);
	return { gender, race, region, first_name, last_name };
}
