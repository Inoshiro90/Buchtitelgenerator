function generateRandomBookValue(
	page_material,
	page_count,
	book_binding,
	book_edition,
	book_condition,
	image_quality,
	text_production,
	text_quality,
	book_language
) {
	let bookValue;
	let detailedValue;
	let valueModifierSum;
	let valueModifier_binding;
	let valueModifier_edition;
	let conditionModifier;
	let valueModifier_image_quality;
	let valueModifier_text_production;
	let valueModifier_text_quality;
	let valueModifier_book_language;

	switch (page_material) {
		case 'Papier':
			detailedValue = d4(1) * page_count;
			break;
		case 'Pergament':
			detailedValue = d6(1) * page_count;
			break;
		case 'Holz':
			detailedValue = d8(1) * page_count;
			break;
		case 'Metall':
			detailedValue = d6(2) * page_count;
			break;
		default:
			console.log('Ungültiges Material:', page_material);
			return;
	}

	switch (book_binding) {
		case 'gebunden mit Bolzen':
		case 'gebunden mit Lederschlaufen':
		case 'gebunden mit Metallschlaufen':
		case 'geklebt':
		case 'zusammengenäht':
		case 'spiralgebunden':
			valueModifier_binding = d4(1);
			break;
		case 'lose':
		case 'lose in einem Behälter':
		case 'lose in Stoff eingewickelt':
		case 'lose in Leder eingewickelt':
			valueModifier_binding = -d6(1);
			break;
		default:
			valueModifier_binding = d6(1) - 4;
			break;
	}

	switch (book_edition) {
		case 'Entwurf':
			valueModifier_edition = 0;
			break;
		case 'Unbekannte Auflage':
			valueModifier_edition = 0;
			break;
		case '1. Auflage':
			valueModifier_edition = -1;
			break;
		case '2. Auflage':
			valueModifier_edition = -2;
			break;
		case '3. Auflage':
			valueModifier_edition = -3;
			break;
		case '4. Auflage':
			valueModifier_edition = -4;
			break;
		case '5. Auflage':
			valueModifier_edition = -5;
			break;
		case '6. Auflage':
			valueModifier_edition = -6;
			break;
		case '7. Auflage':
			valueModifier_edition = -7;
			break;
		case '8. Auflage':
			valueModifier_edition = -8;
			break;
		case '9. Auflage':
			valueModifier_edition = -9;
			break;
		case '10. Auflage':
			valueModifier_edition = -10;
			break;
		case '11. Auflage':
			valueModifier_edition = -11;
			break;
		case '12. Auflage':
			valueModifier_edition = -12;
			break;
		case '13. Auflage':
			valueModifier_edition = -13;
			break;
	}

	switch (book_condition) {
		case 'zerfallend':
			conditionModifier = d10(1);
			break;
		case 'schrecklich':
			conditionModifier = d10(1) + 10;
			break;
		case 'mangelhaft':
			conditionModifier = d10(1) + 20;
			break;
		case 'unterdurchschnittlich':
			conditionModifier = d10(1) + 30;
			break;
		case 'durchschnittlich':
			conditionModifier = d10(1) + 40;
			break;
		case 'überdurchschnittlich':
			conditionModifier = d10(1) + 50;
			break;
		case 'sehr gut':
			conditionModifier = d10(1) + 60;
			break;
		case 'ausgezeichnet':
			conditionModifier = d10(1) + 70;
			break;
		case 'fast neuwertig':
			conditionModifier = d10(1) + 80;
			break;
		case 'neuwertig':
			conditionModifier = d10(1) + 90;
			break;
		default:
			console.error('Ungültiger Buchzustand:', book_condition);
	}

	switch (image_quality) {
		case 'wertlos':
			valueModifier_image_quality = -5;
			break;
		case 'unbrauchbar':
			valueModifier_image_quality = -4;
			break;
		case 'schlecht':
			valueModifier_image_quality = -3;
			break;
		case 'mäßig':
			valueModifier_image_quality = -2;
			break;
		case 'unterdurchschnittlich':
			valueModifier_image_quality = -1;
			break;
		case 'durchschnittlich':
			valueModifier_image_quality = 0;
			break;
		case 'überdurchschnittlich':
			valueModifier_image_quality = 1;
			break;
		case 'sehr gut':
			valueModifier_image_quality = 2;
			break;
		case 'ausgezeichnet':
			valueModifier_image_quality = 3;
			break;
		case 'unglaublich':
			valueModifier_image_quality = 4;
			break;
		case 'unübertrefflich':
			valueModifier_image_quality = 5;
			break;
		default:
			console.error('Ungültige Bildqualität:', image_quality);
	}

	switch (text_production) {
		case text_production.includes('hangeschrieben mit gewöhnlicher Tinte'):
			valueModifier_text_production = 0;
			break;
		case 'handgeschrieben mit Humanoidenblut':
		case 'handgeschrieben mit Tierblut':
		case 'handgeschrieben mit Monsterblut':
			valueModifier_text_production = -4;
			break;
		case 'handgeschrieben mit magischer Tinte':
			valueModifier_text_production = -2;
			break;
		default:
			valueModifier_text_production = -2;
	}

	switch (text_quality) {
		case 'wertlos':
			valueModifier_text_quality = Math.round(-9 / 2);
			break;
		case 'unbrauchbar':
			valueModifier_text_quality = Math.round(-8 / 2);
			break;
		case 'schlecht':
			valueModifier_text_quality = Math.round(-6 / 2);
			break;
		case 'mäßig':
			valueModifier_text_quality = Math.round(-3 / 2);
			break;
		case 'unterdurchschnittlich':
			valueModifier_text_quality = Math.round(-2 / 2);
			break;
		case 'durchschnittlich':
			valueModifier_text_quality = 0;
			break;
		case 'überdurchschnittlich':
			valueModifier_text_quality = Math.round(4 / 2);
			break;
		case 'sehr gut':
			valueModifier_text_quality = Math.round(6 / 2);
			break;
		case 'ausgezeichnet':
			valueModifier_text_quality = Math.round(8 / 2);
			break;
		case 'unglaublich':
			valueModifier_text_quality = Math.round(9 / 2);
			break;
		case 'unübertrefflich':
			valueModifier_text_quality = Math.round(10 / 2);
			break;
		default:
			console.error('Ungültige Textqualität:', text_quality);
	}

	switch (book_language) {
		case 'Gemeinsprache':
			valueModifier_book_language = 0;
			break;
		case 'Zwergisch':
		case 'Elfisch':
		case 'Riesisch':
		case 'Gnomisch':
		case 'Goblinisch':
		case 'Halblingisch':
		case 'Orkisch':
			valueModifier_book_language = d8(1) - 8;
			break;
		case 'Abyssisch':
		case 'Celestisch':
		case 'Tiefensprache':
		case 'Drakonisch':
		case 'Infernalisch':
		case 'Urtümlich':
		case 'Sylvanisch':
		case 'Gemeinsprache der Unterreiche':
			valueModifier_book_language = d10(1) - 10;
			break;
		default:
			console.error('Ungültige Sprache:', book_language);
			return;
	}

	valueModifierSum =
		valueModifier_binding +
		valueModifier_edition +
		valueModifier_image_quality +
		valueModifier_text_production +
		valueModifier_text_quality +
		valueModifier_book_language;

	// Buchwert berechnen
	bookValue = calculateBookValue(detailedValue, valueModifierSum, conditionModifier);

	// Wenn der Buchwert 0 ist, generiere einen zufälligen Wert zwischen 0 und 1 mit maximal zwei Dezimalstellen
	if (bookValue === 0) {
		bookValue = Math.random().toFixed(2); // Zufälliger Wert zwischen 0 und 1 mit maximal zwei Dezimalstellen
		bookValue = parseFloat(bookValue).toLocaleString(undefined, {minimumFractionDigits: 2}); // Ändere Punkt zu Komma und formatiere auf zwei Dezimalstellen
	}
	
	// console.log('Der Grundwert liegt bei', detailedValue);
	// console.log('Der Modifikationswert für die Bindung liegt bei', valueModifier_binding);
	// console.log('Der Modifikationswert für die Buchausgabe liegt bei', valueModifier_edition);
	// console.log(
	// 	'Der Modifikationswert für die Bilderqualität liegt bei',
	// 	valueModifier_image_quality
	// );
	// console.log(
	// 	'Der Modifikationswert für die Textproduktion liegt bei',
	// 	valueModifier_text_production
	// );
	// console.log('Der Modifikationswert für die Textqualität liegt bei', valueModifier_text_quality);
	// console.log('Der Modifikationswert für die Buchsprache liegt bei', valueModifier_book_language);
	// console.log('Der zusammengerechnete Modifikationswert liegt bei', valueModifierSum);
	// console.log('Der Zustandsmodifikator liegt bei', conditionModifier,'%.');
	// console.log('Der Wert des Buches beträgt', bookValue, 'Goldmünzen\n');

	return bookValue;
}

function calculateBookValue(detailedValue, valueModifierSum, conditionModifier) {
	if (valueModifierSum > 0) {
		return Math.round((detailedValue * valueModifierSum * conditionModifier) / 100);
	} else if (valueModifierSum === 0) {
		return Math.round((detailedValue * conditionModifier) / 100);
	} else if (valueModifierSum < 0) {
		return Math.round(((detailedValue / (valueModifierSum * -1)) * conditionModifier) / 100);
	}
}
