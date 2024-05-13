// Funktion für einen d3-Würfel
function d3(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 3) + 1;
	}
	return result;
}

// Funktion für einen d4-Würfel
function d4(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 4) + 1;
	}
	return result;
}

// Funktion für einen d5-Würfel
function d5(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 5) + 1;
	}
	return result;
}

// Funktion für einen d6-Würfel
function d6(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 6) + 1;
	}
	return result;
}

// Funktion für einen d8-Würfel
function d8(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 8) + 1;
	}
	return result;
}

// Funktion für einen d10-Würfel
function d10(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 10) + 1;
	}
	return result;
}

// Funktion für einen d12-Würfel
function d12(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 12) + 1;
	}
	return result;
}

// Funktion für einen d20-Würfel
function d20(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 20) + 1;
	}
	return result;
}

// Funktion für einen d100-Würfel
function d100(quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) {
		result += Math.floor(Math.random() * 100) + 1;
	}
	return result;
}