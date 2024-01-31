function generateRandomLastNameHalfling() {
	let lastName;
	let part1, part2;
  
	do {
	  part1 = halflingLastNamePart1[Math.floor(Math.random() * halflingLastNamePart1.length)];
	  part2 = halflingLastNamePart2[Math.floor(Math.random() * halflingLastNamePart2.length)];
	} while (part1 === part2);

	lastName = part1 + part2;
	return lastName.charAt(0).toUpperCase() + lastName.slice(1);
}
