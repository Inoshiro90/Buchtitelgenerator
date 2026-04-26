'use strict';

/**
 * description.js — Buchbeschreibungs-Generator (konsolidiert)
 *
 * FIX v2: Alle 174 Originalfarben aus color.js vollständig wiederhergestellt.
 * Ersetzt 26 einzelne JS-Dateien aus scripts/book/description/.
 */

import { d4, d6, d8, d10, d12, d20, d100 } from '../core/rand.js';

// ═══════════════════════════════════════════════════════════════════════════
// HILFSFUNKTIONEN
// ═══════════════════════════════════════════════════════════════════════════

function numToWords(n) {
	return ['null','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf','zwölf'][n] ?? String(n);
}

function colorSwatch(hex) {
	return `<span class="card-color-swatch" style="background-color:${hex}"></span>`;
}

// ═══════════════════════════════════════════════════════════════════════════
// FARBEN — alle 174 Originalfarben aus color.js
// ═══════════════════════════════════════════════════════════════════════════

const COLORS = [
	// Blauton (22)
	{name:'azurblau',hex:'#365875',hue:'Blauton'},
	{name:'brillantblau',hex:'#466589',hue:'Blauton'},
	{name:'capriblau',hex:'#265682',hue:'Blauton'},
	{name:'enzianblau',hex:'#0E457A',hue:'Blauton'},
	{name:'fernblau',hex:'#4D648A',hue:'Blauton'},
	{name:'graublau',hex:'#2F3A44',hue:'Blauton'},
	{name:'grünblau',hex:'#294763',hue:'Blauton'},
	{name:'himmelblau',hex:'#3172AD',hue:'Blauton'},
	{name:'kobaltblau',hex:'#212F51',hue:'Blauton'},
	{name:'lichtblau',hex:'#457FB3',hue:'Blauton'},
	{name:'nachtblau',hex:'#282C58',hue:'Blauton'},
	{name:'ozeanblau',hex:'#113E4D',hue:'Blauton'},
	{name:'pastellblau',hex:'#6C8DAA',hue:'Blauton'},
	{name:'perlnachtblau',hex:'#1B2B4D',hue:'Blauton'},
	{name:'saphirblau',hex:'#203151',hue:'Blauton'},
	{name:'schwarzblau',hex:'#1E222C',hue:'Blauton'},
	{name:'stahlblau',hex:'#222C3E',hue:'Blauton'},
	{name:'taubenblau',hex:'#667691',hue:'Blauton'},
	{name:'türkisblau',hex:'#47848D',hue:'Blauton'},
	{name:'ultramarinblau',hex:'#193278',hue:'Blauton'},
	{name:'violettblau',hex:'#35496B',hue:'Blauton'},
	{name:'wasserblau',hex:'#216D76',hue:'Blauton'},
	// Braunton (19)
	{name:'beigebraun',hex:'#6F543C',hue:'Braunton'},
	{name:'blassbraun',hex:'#6E5B4B',hue:'Braunton'},
	{name:'graubraun',hex:'#3B3736',hue:'Braunton'},
	{name:'grünbraun',hex:'#816D44',hue:'Braunton'},
	{name:'kastanienbraun',hex:'#57332B',hue:'Braunton'},
	{name:'kupferbraun',hex:'#814D37',hue:'Braunton'},
	{name:'lehmbraun',hex:'#74502F',hue:'Braunton'},
	{name:'mahagonibraun',hex:'#483026',hue:'Braunton'},
	{name:'nussbraun',hex:'#533A29',hue:'Braunton'},
	{name:'ockerbraun',hex:'#8F6833',hue:'Braunton'},
	{name:'olivbraun',hex:'#694F2B',hue:'Braunton'},
	{name:'orangebraun',hex:'#965D33',hue:'Braunton'},
	{name:'perlkupfer',hex:'#764537',hue:'Braunton'},
	{name:'rehbraun',hex:'#67492F',hue:'Braunton'},
	{name:'rotbraun',hex:'#5C3128',hue:'Braunton'},
	{name:'schokoladenbraun',hex:'#42332E',hue:'Braunton'},
	{name:'schwarzbraun',hex:'#201F20',hue:'Braunton'},
	{name:'sepiabraun',hex:'#453729',hue:'Braunton'},
	{name:'terrabraun',hex:'#4C3E30',hue:'Braunton'},
	// Gelbton (28)
	{name:'beige',hex:'#C6B286',hue:'Gelbton'},
	{name:'braunbeige',hex:'#A38454',hue:'Gelbton'},
	{name:'currygelb',hex:'#998420',hue:'Gelbton'},
	{name:'dahliengelb',hex:'#E4A02D',hue:'Gelbton'},
	{name:'elfenbein',hex:'#D4C79C',hue:'Gelbton'},
	{name:'ginstergelb',hex:'#CFA81E',hue:'Gelbton'},
	{name:'goldgelb',hex:'#D2A40E',hue:'Gelbton'},
	{name:'graubeige',hex:'#9C917B',hue:'Gelbton'},
	{name:'grünbeige',hex:'#C5BB8A',hue:'Gelbton'},
	{name:'hellelfenbein',hex:'#DED3B6',hue:'Gelbton'},
	{name:'honiggelb',hex:'#BC9611',hue:'Gelbton'},
	{name:'leuchtgelb',hex:'#FFFF00',hue:'Gelbton'},
	{name:'maisgelb',hex:'#CF9804',hue:'Gelbton'},
	{name:'melonengelb',hex:'#F2A500',hue:'Gelbton'},
	{name:'narzissengelb',hex:'#D49300',hue:'Gelbton'},
	{name:'ockergelb',hex:'#AD9451',hue:'Gelbton'},
	{name:'olivgelb',hex:'#999167',hue:'Gelbton'},
	{name:'pastellgelb',hex:'#D9A156',hue:'Gelbton'},
	{name:'perlbeige',hex:'#898271',hue:'Gelbton'},
	{name:'perlgold',hex:'#746341',hue:'Gelbton'},
	{name:'perlweiß',hex:'#DFDBC7',hue:'Gelbton'},
	{name:'rapsgelb',hex:'#E5C000',hue:'Gelbton'},
	{name:'safrangelb',hex:'#E4AF56',hue:'Gelbton'},
	{name:'sandgelb',hex:'#C7AE72',hue:'Gelbton'},
	{name:'schwefelgelb',hex:'#E8E253',hue:'Gelbton'},
	{name:'sonnengelb',hex:'#DB9A17',hue:'Gelbton'},
	{name:'zinkgelb',hex:'#EBD346',hue:'Gelbton'},
	{name:'zitronengelb',hex:'#CFB539',hue:'Gelbton'},
	// Grauton (28)
	{name:'achatgrau',hex:'#ADB0A9',hue:'Grauton'},
	{name:'anthrazitgrau',hex:'#3B4044',hue:'Grauton'},
	{name:'basaltgrau',hex:'#595E60',hue:'Grauton'},
	{name:'beigegrau',hex:'#716C60',hue:'Grauton'},
	{name:'blaugrau',hex:'#5D676D',hue:'Grauton'},
	{name:'braungrau',hex:'#545146',hue:'Grauton'},
	{name:'eisengrau',hex:'#535A5E',hue:'Grauton'},
	{name:'gelbgrau',hex:'#8C8870',hue:'Grauton'},
	{name:'granitgrau',hex:'#394345',hue:'Grauton'},
	{name:'graphitgrau',hex:'#45494E',hue:'Grauton'},
	{name:'khakigrau',hex:'#6C6040',hue:'Grauton'},
	{name:'kieselgrau',hex:'#B1B1A1',hue:'Grauton'},
	{name:'lichtgrau',hex:'#C2C6C3',hue:'Grauton'},
	{name:'mausgrau',hex:'#696D6B',hue:'Grauton'},
	{name:'moosgrau',hex:'#76776A',hue:'Grauton'},
	{name:'olivgrau',hex:'#7D7965',hue:'Grauton'},
	{name:'perldunkelgrau',hex:'#767779',hue:'Grauton'},
	{name:'perlhellgrau',hex:'#818382',hue:'Grauton'},
	{name:'perlmausgrau',hex:'#7A7871',hue:'Grauton'},
	{name:'platingrau',hex:'#949292',hue:'Grauton'},
	{name:'quarzgrau',hex:'#68675F',hue:'Grauton'},
	{name:'schiefergrau',hex:'#51535A',hue:'Grauton'},
	{name:'schwarzgrau',hex:'#323537',hue:'Grauton'},
	{name:'seidengrau',hex:'#B3B2A9',hue:'Grauton'},
	{name:'silbergrau',hex:'#8B949B',hue:'Grauton'},
	{name:'staubgrau',hex:'#797B7B',hue:'Grauton'},
	{name:'steingrau',hex:'#8C8C83',hue:'Grauton'},
	{name:'umbragrau',hex:'#4C4C47',hue:'Grauton'},
	// Grünton (33)
	{name:'blassgrün',hex:'#899B79',hue:'Grünton'},
	{name:'blaugrün',hex:'#214245',hue:'Grünton'},
	{name:'braungrün',hex:'#333327',hue:'Grünton'},
	{name:'braunoliv',hex:'#3B382E',hue:'Grünton'},
	{name:'farngrün',hex:'#5D703E',hue:'Grünton'},
	{name:'gelbgrün',hex:'#689A45',hue:'Grünton'},
	{name:'gelboliv',hex:'#454339',hue:'Grünton'},
	{name:'grasgrün',hex:'#4E6E39',hue:'Grünton'},
	{name:'grauoliv',hex:'#3C3D32',hue:'Grünton'},
	{name:'grüngrau',hex:'#5B6058',hue:'Grünton'},
	{name:'kieferngrün',hex:'#3D5547',hue:'Grünton'},
	{name:'laubgrün',hex:'#3B5B2F',hue:'Grünton'},
	{name:'leuchtgrün',hex:'#20A339',hue:'Grünton'},
	{name:'lichtgrün',hex:'#88B5B3',hue:'Grünton'},
	{name:'maigrün',hex:'#5C8144',hue:'Grünton'},
	{name:'minttürkis',hex:'#568480',hue:'Grünton'},
	{name:'minzgrün',hex:'#226C45',hue:'Grünton'},
	{name:'moosgrün',hex:'#234235',hue:'Grünton'},
	{name:'olivgrün',hex:'#4F553E',hue:'Grünton'},
	{name:'opalgrün',hex:'#0D5951',hue:'Grünton'},
	{name:'pastelltürkis',hex:'#86A9AD',hue:'Grünton'},
	{name:'patinagrün',hex:'#4A7363',hue:'Grünton'},
	{name:'perlgrün',hex:'#2E4F31',hue:'Grünton'},
	{name:'perlopalgrün',hex:'#27514A',hue:'Grünton'},
	{name:'reingrün',hex:'#3F8C3D',hue:'Grünton'},
	{name:'resedagrün',hex:'#6A7C5B',hue:'Grünton'},
	{name:'schilfgrün',hex:'#777659',hue:'Grünton'},
	{name:'schwarzgrün',hex:'#2F3B39',hue:'Grünton'},
	{name:'schwarzoliv',hex:'#3C3F38',hue:'Grünton'},
	{name:'smaragdgrün',hex:'#40693A',hue:'Grünton'},
	{name:'tannengrün',hex:'#2A372C',hue:'Grünton'},
	{name:'türkisgrün',hex:'#256753',hue:'Grünton'},
	{name:'weißgrün',hex:'#B8CFAD',hue:'Grünton'},
	// Orangeton (11)
	{name:'blutorange',hex:'#AC3721',hue:'Orangeton'},
	{name:'gelborange',hex:'#C7750F',hue:'Orangeton'},
	{name:'hellrotorange',hex:'#D66C21',hue:'Orangeton'},
	{name:'lachsorange',hex:'#C2674F',hue:'Orangeton'},
	{name:'leuchthellorange',hex:'#FFAD19',hue:'Orangeton'},
	{name:'leuchtorange',hex:'#FF4612',hue:'Orangeton'},
	{name:'pastellorange',hex:'#E17C30',hue:'Orangeton'},
	{name:'perlorange',hex:'#824128',hue:'Orangeton'},
	{name:'reinorange',hex:'#CC5608',hue:'Orangeton'},
	{name:'rotorange',hex:'#A74D23',hue:'Orangeton'},
	{name:'tieforange',hex:'#CF7421',hue:'Orangeton'},
	// Rotton (19)
	{name:'altrosa',hex:'#BC6F72',hue:'Rotton'},
	{name:'beigerot',hex:'#B7856E',hue:'Rotton'},
	{name:'braunrot',hex:'#6E2124',hue:'Rotton'},
	{name:'erdbeerrot',hex:'#B63C49',hue:'Rotton'},
	{name:'feuerrot',hex:'#962A27',hue:'Rotton'},
	{name:'hellrosa',hex:'#CC9EA4',hue:'Rotton'},
	{name:'himbeerrot',hex:'#9E1B3C',hue:'Rotton'},
	{name:'karminrot',hex:'#8D1F24',hue:'Rotton'},
	{name:'korallenrot',hex:'#963D2F',hue:'Rotton'},
	{name:'lachsrot',hex:'#BE6954',hue:'Rotton'},
	{name:'perlrosa',hex:'#94352D',hue:'Rotton'},
	{name:'perlrubinrot',hex:'#661925',hue:'Rotton'},
	{name:'purpurrot',hex:'#651927',hue:'Rotton'},
	{name:'reinrot',hex:'#B92726',hue:'Rotton'},
	{name:'rosé',hex:'#B9535B',hue:'Rotton'},
	{name:'rubinrot',hex:'#7C0D24',hue:'Rotton'},
	{name:'schwarzrot',hex:'#3D2326',hue:'Rotton'},
	{name:'tomatenrot',hex:'#8A2F28',hue:'Rotton'},
	{name:'weinrot',hex:'#561E27',hue:'Rotton'},
	// Violetton (8)
	{name:'amethystviolett',hex:'#614280',hue:'Violetton'},
	{name:'blaulila',hex:'#746395',hue:'Violetton'},
	{name:'bordeauxviolett',hex:'#5F1837',hue:'Violetton'},
	{name:'perlbrombeer',hex:'#67657A',hue:'Violetton'},
	{name:'perlviolett',hex:'#685C80',hue:'Violetton'},
	{name:'purpurviolett',hex:'#44263C',hue:'Violetton'},
	{name:'rotlila',hex:'#7C5B80',hue:'Violetton'},
	{name:'rotviolett',hex:'#823A4B',hue:'Violetton'},
	// Schwarzton (2)
	{name:'graphitschwarz',hex:'#25282A',hue:'Schwarzton'},
	{name:'tiefschwarz',hex:'#131516',hue:'Schwarzton'},
	// Weißton (4)
	{name:'cremeweiß',hex:'#E5E1D4',hue:'Weißton'},
	{name:'grauweiß',hex:'#D4D5CD',hue:'Weißton'},
	{name:'papyrusweiß',hex:'#C6CBC6',hue:'Weißton'},
	{name:'reinweiß',hex:'#EFEEE5',hue:'Weißton'},
];

function randomColor(excludeHues = []) {
	const pool = excludeHues.length > 0
		? COLORS.filter(c => !excludeHues.includes(c.hue))
		: COLORS;
	return pool[Math.floor(Math.random() * pool.length)];
}
function colorStr(c) { return `${c.name} (${c.hue})/${c.hex} ${colorSwatch(c.hex)}`; }

// ═══════════════════════════════════════════════════════════════════════════
// EINZELGENERATOREN
// ═══════════════════════════════════════════════════════════════════════════

export function generateRandomBookBinding() {
	const n = d20();
	if (n <= 1)  return 'gebunden mit Bolzen';
	if (n <= 2)  return 'gebunden mit Lederschlaufen';
	if (n <= 3)  return 'gebunden mit Metallschlaufen';
	if (n <= 7)  return 'geklebt';
	if (n <= 8)  return 'lose';
	if (n <= 9)  return 'lose in einem Behälter';
	if (n <= 10) return 'lose in Stoff eingewickelt';
	if (n <= 11) return 'lose in Leder eingewickelt';
	if (n <= 13) return 'aufgerollt';
	if (n <= 16) return 'zusammengenäht';
	if (n <= 17) return 'spiralgebunden';
	if (n <= 18) return 'geklammert';
	return 'umwickelt mit Schnüren';
}

export function generateRandomBookAge() {
	const n = d100();
	let age, unit;
	if      (n <= 2)  { age = d4();          unit = age === 1 ? 'Woche'  : 'Wochen'; }
	else if (n <= 5)  { age = d4();          unit = age === 1 ? 'Monat'  : 'Monate'; }
	else if (n <= 9)  { age = d4(2);         unit = 'Monate'; }
	else if (n <= 30) { age = d4(3);         unit = 'Monate'; }
	else if (n <= 45) { age = d10();         unit = age === 1 ? 'Jahr' : 'Jahre'; }
	else if (n <= 50) { age = d10(2);        unit = 'Jahre'; }
	else if (n <= 57) { age = d10(3);        unit = 'Jahre'; }
	else if (n <= 62) { age = d10(4);        unit = 'Jahre'; }
	else if (n <= 68) { age = d10(5);        unit = 'Jahre'; }
	else if (n <= 73) { age = d10(6);        unit = 'Jahre'; }
	else if (n <= 77) { age = d10(7);        unit = 'Jahre'; }
	else if (n <= 81) { age = d10(8);        unit = 'Jahre'; }
	else if (n <= 85) { age = d10(9);        unit = 'Jahre'; }
	else if (n <= 88) { age = d10(10);       unit = 'Jahre'; }
	else if (n <= 91) { age = d20()   + 100; unit = 'Jahre'; }
	else if (n <= 94) { age = d20(2)  + 100; unit = 'Jahre'; }
	else if (n <= 96) { age = d20(3)  + 100; unit = 'Jahre'; }
	else if (n <= 98) { age = d20(4)  + 100; unit = 'Jahre'; }
	else if (n === 99){ age = d20(5)  + 100; unit = 'Jahre'; }
	else              { age = d100(2) + 200; unit = 'Jahre'; }
	return `${age} ${unit}`;
}

export function generateRandomBookCondition() {
	const n = d100();
	if (n <= 5)  return 'zerfallend';
	if (n <= 10) return 'schrecklich';
	if (n <= 20) return 'mangelhaft';
	if (n <= 30) return 'unterdurchschnittlich';
	if (n <= 50) return 'durchschnittlich';
	if (n <= 70) return 'überdurchschnittlich';
	if (n <= 80) return 'sehr gut';
	if (n <= 90) return 'ausgezeichnet';
	if (n <= 95) return 'fast neuwertig';
	return 'neuwertig';
}

export function generateRandomBookEdition() {
	const n = d20();
	if (n <= 1)  return 'Entwurf';
	if (n <= 3)  return '1. Auflage';
	if (n <= 6)  return '2. Auflage';
	if (n <= 10) return '3. Auflage';
	if (n <= 13) return '4. Auflage';
	if (n <= 15) return '5. Auflage';
	if (n <= 17) return '6. Auflage';
	if (n <= 18) return d6(2) + '. Auflage';
	return 'Unbekannte Auflage';
}

export function generateRandomBookLanguage(authorRace) {
	const n = Math.floor(Math.random() * 100) + 1;
	const nativeMap = {
		'Mensch': 'Gemeinsprache', 'Zwerg': 'Zwergisch', 'Elf': 'Elfisch',
		'Halbling': 'Halblingisch', 'Gnom': 'Gnomisch',
		'Halbelf':  Math.random() < 0.5 ? 'Gemeinsprache' : 'Elfisch',
		'Halbork':  Math.random() < 0.5 ? 'Gemeinsprache' : 'Orkisch',
		'Drachenblütiger': 'Drakonisch', 'Tiefling': 'Infernalisch',
	};
	const firstLang = nativeMap[authorRace] ?? 'Gemeinsprache';
	const standard  = ['Gemeinsprache','Zwergisch','Elfisch','Riesisch','Gnomisch','Goblinisch','Halblingisch','Orkisch'];
	const exotic    = ['Abyssisch','Celestisch','Tiefensprache','Drakonisch','Infernalisch','Urtümlich','Sylvanisch','Gemeinsprache der Unterreiche'];
	if (n <= 60) return 'Gemeinsprache';
	if (n <= 85) return firstLang;
	if (n <= 95) return standard.filter(l => l !== firstLang)[Math.floor(Math.random() * (standard.length - 1))];
	return exotic.filter(l => l !== firstLang)[Math.floor(Math.random() * (exotic.length - 1))];
}

export function generateRandomBookLength() {
	const n = d20();
	let raw;
	if      (n <= 3)  raw = d4()    * 2.5;
	else if (n <= 8)  raw = d4(2)   * 2.5;
	else if (n <= 12) raw = d6(2)   * 2.5;
	else if (n <= 17) raw = d8(2)   * 2.5;
	else              raw = d10(2)  * 2.5;
	return raw % 1 === 0 ? String(raw) : raw.toFixed(1).replace('.', ',');
}

export function generateRandomBookHeight() { return generateRandomBookLength(); }

export function generateBookWidth(pageCount, pageMaterial) {
	const baseThick = pageMaterial === 'Metall' ? 0.03 : pageMaterial === 'Holz' ? 0.02 : 0.01;
	return Math.max(0.5, pageCount * baseThick).toFixed(1).replace('.', ',');
}

export function generateBookWeight(height, length, pageCount, pageMaterial) {
	const densities = {Papier:0.8, Pergament:1.0, Holz:3.0, Metall:8.0};
	const d = densities[pageMaterial] ?? 0.8;
	const h = parseFloat(String(height).replace(',', '.')) || 20;
	const l = parseFloat(String(length).replace(',', '.')) || 15;
	return Math.round(h * l * pageCount * d * 0.01);
}

export function generateRandomPageMaterial() {
	const n = d100();
	if (n <= 40) return 'Papier';
	if (n <= 70) return 'Pergament';
	if (n <= 90) return 'Holz';
	return 'Metall';
}

export function generateRandomPageCount() {
	const n = d20();
	if (n <= 1)  return d10(2) + 20;
	if (n <= 2)  return d10(2) + 40;
	if (n <= 4)  return d10(2) + 60;
	if (n <= 7)  return d100() + 80;
	if (n <= 13) return d100() + 100;
	if (n <= 16) return d100() + 200;
	if (n <= 18) return d100() + 300;
	if (n <= 19) return d100() + 400;
	return d100() + 500;
}

export function generateRandomCoverMaterial() {
	const n = d100();
	if (n <= 25) return 'Kartonpapier';
	if (n <= 50) return 'Hartpapier';
	if (n <= 65) return 'Leder';
	if (n <= 68) return 'unbehandelter Stoff';
	if (n <= 70) return 'behandelter Stoff';
	if (n <= 72) return 'Bambus';
	if (n <= 74) return 'glattes Metall';
	if (n <= 75) return 'glattes Edelmetall';
	if (n <= 77) return 'gepolstertes Metall';
	if (n <= 78) return 'gepolstertes Edelmetall';
	if (n <= 80) return 'glatter Schiefer';
	if (n <= 82) return 'rauer Schiefer';
	if (n <= 86) return 'gepolstertes Holz';
	if (n <= 90) return 'glattes Holz';
	if (n <= 92) return 'gepolstertes Edelholz';
	if (n <= 94) return 'glattes Edelholz';
	if (n <= 95) return 'Hülle einer Kreatur';
	if (n <= 97) return 'Tierfell';
	if (n <= 99) return 'Monsterfell';
	return 'Humanoidenhaut';
}

export function generateRandomCoverColor() { return randomColor(); }

export function generateRandomCoverDetails() {
	const DETAILS = ['geprägter Rand','abgeflachter Rand','Auflagennummer','Bild','hochgeprägtes Bild','Bild des Autors','Zitat aus dem Buch','Verlagssymbol','Signatur des Autors','geometrisches Symbol','Schlagwort','hochgeprägter Buchtitel','Titel des Werks','Autorenname'];
	const n = d100();
	if (n <= 7)  return 'geprägter Rand';
	if (n <= 14) return 'abgeflachter Rand';
	if (n <= 21) return 'Auflagennummer';
	if (n <= 28) return 'Bild';
	if (n <= 35) return 'hochgeprägtes Bild';
	if (n <= 42) return 'Bild des Autors';
	if (n <= 49) return 'Zitat aus dem Buch';
	if (n <= 56) return 'Verlagssymbol';
	if (n <= 63) return 'Signatur des Autors';
	if (n <= 70) return 'geometrisches Symbol';
	if (n <= 77) return 'Schlagwort';
	if (n <= 85) return 'hochgeprägter Buchtitel';
	if (n <= 91) return 'Titel des Werks';
	if (n <= 98) return 'Autorenname';
	const pool = [...DETAILS], count = Math.floor(Math.random() * 2) + 2, picked = [];
	for (let i = 0; i < count && pool.length; i++) picked.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
	return picked.join(', ');
}

export function generateRandomTextQuality() {
	const n = d20();
	if (n <= 1)  return 'wertlos';
	if (n <= 2)  return 'unbrauchbar';
	if (n <= 4)  return 'schlecht';
	if (n <= 6)  return 'mäßig';
	if (n <= 8)  return 'unterdurchschnittlich';
	if (n <= 12) return 'durchschnittlich';
	if (n <= 14) return 'überdurchschnittlich';
	if (n <= 16) return 'sehr gut';
	if (n <= 18) return 'ausgezeichnet';
	if (n <= 19) return 'unglaublich';
	return 'unübertrefflich';
}

export function generateRandomTextProduction(pageMaterial) {
	const n = d20();
	const inkColor = randomColor(['Weißton', 'Grauton']);
	const isHardMaterial = pageMaterial === 'Holz' || pageMaterial === 'Metall';
	if (isHardMaterial && n <= 1) return 'graviert/geschnitzt';
	if (n <= 9)  return `handgeschrieben mit gewöhnlicher Tinte, schwarz/#06080F ${colorSwatch('#06080F')}`;
	if (n <= 11) return `handgeschrieben mit gewöhnlicher Tinte, blau/#000F55 ${colorSwatch('#000F55')}`;
	if (n <= 12) return `handgeschrieben mit gewöhnlicher Tinte, ${colorStr(inkColor)}`;
	if (n <= 13) return 'handgeschrieben mit Humanoidenblut';
	if (n <= 15) return 'handgeschrieben mit Tierblut';
	if (n <= 16) return 'handgeschrieben mit Monsterblut';
	if (n <= 17) return `handgeschrieben mit magischer Tinte, ${colorStr(inkColor)}`;
	if (n <= 19) return `gemalt in ${colorStr(inkColor)}`;
	return `gedruckt in ${colorStr(inkColor)}`;
}

export function generateRandomImageQuality() { return generateRandomTextQuality(); }

export function generateRandomImageStyle() {
	const n = d100();
	if (n <= 5)  return 'dreidimensional';
	if (n <= 10) return 'abstrakt';
	if (n <= 15) return 'antik';
	if (n <= 20) return 'jugendstilistisch';
	if (n <= 25) return 'karikaturistisch';
	if (n <= 30) return 'konstruktivistisch';
	if (n <= 35) return 'kubistisch';
	if (n <= 40) return 'überzeichnet';
	if (n <= 45) return 'expressionistisch';
	if (n <= 50) return 'impressionistisch';
	if (n <= 55) return 'strichartig';
	if (n <= 60) return 'minimalistisch';
	if (n <= 65) return 'petroglyphisch';
	if (n <= 70) return 'punktartig';
	if (n <= 75) return 'urtümlich';
	if (n <= 80) return 'realistisch';
	if (n <= 85) return 'simplistisch';
	if (n <= 90) return 'surrealistisch';
	if (n <= 95) return 'symbolistisch';
	return 'traditionell';
}

export function generateRandomImageColor() {
	const n = d20();
	if (n <= 2) return 'schwarz-weiß';
	const c = randomColor();
	if (n <= 5) return `monochrom (${c.name})`;
	return 'mehrfarbig';
}

export function generateRandomImageSize() {
	const n = d20();
	if (n <= 5)  return 'klein (halbe Seite oder weniger)';
	if (n <= 15) return 'mittel (halbe bis ganze Seite)';
	return 'groß (eine ganze Seite oder mehr)';
}

export function generateRandomImageNumber() {
	const n = d20();
	if (n <= 1)  return 'keine Bilder';
	if (n <= 3)  return 'ein Bild, das sich auf dem Einband befindet';
	if (n <= 5)  return 'ein Bild, das sich auf der Titelseite befindet';
	if (n <= 9)  return 'ein Bild am Beginn jedes Kapitels';
	if (n <= 11) { const k = Math.floor(Math.random() * 2) + 1; return k === 1 ? 'ein Bild pro Kapitel' : `${numToWords(k)} Bilder pro Kapitel`; }
	if (n <= 13) { const k = Math.floor(Math.random() * 3) + 1; return k === 1 ? 'ein Bild pro Kapitel' : `${numToWords(k)} Bilder pro Kapitel`; }
	if (n <= 15) { const k = Math.floor(Math.random() * 6) + 1; return k === 1 ? 'ein Bild im gesamten Buch' : `${numToWords(k)} Bilder im gesamten Buch`; }
	return 'Bilder auf jeder Seite';
}

export function generateRandomBookmark(pageMaterial) {
	const n = d100();
	const c = randomColor();
	const cs = colorStr(c);
	const hard = pageMaterial === 'Metall' || pageMaterial === 'Holz';
	if (hard) {
		if (n <= 7)  return `ein Stück Schnur, ${cs}`;
		if (n <= 14) return 'eine Buchklammer';
		if (n <= 21) return `ein Ecklesezeichen, ${cs}`;
		if (n <= 28) return `eine farbige Banderole, ${cs}`;
		if (n <= 35) return `ein Stück Papier, ${cs}`;
		if (n <= 42) return `eine dehnbare Schnur, ${cs}`;
		if (n <= 49) return `ein Streifen aus Stoff, ${cs}`;
		if (n <= 56) return 'ein dünnes Stück Metall';
		if (n <= 91) return `ein Streifen aus lederähnlichem Material, ${cs}`;
		return `ein klebender Notizzettel, ${cs}`;
	}
	if (n <= 6)  return 'ein Eselsohr';
	if (n <= 12) return 'ein kleiner Riss in der Seite';
	if (n <= 18) return `ein Stück Schnur, ${cs}`;
	if (n <= 24) return 'eine Buchklammer';
	if (n <= 30) return `ein Ecklesezeichen, ${cs}`;
	if (n <= 36) return `eine farbige Banderole, ${cs}`;
	if (n <= 42) return `ein Stück Papier, ${cs}`;
	if (n <= 48) return `eine dehnbare Schnur, ${cs}`;
	if (n <= 54) return `ein Streifen aus Stoff, ${cs}`;
	if (n <= 60) return 'ein dünnes Stück Metall';
	if (n <= 95) return `ein Streifen aus lederähnlichem Material, ${cs}`;
	return `ein klebender Notizzettel, ${cs}`;
}

export function generateRandomQuirk() {
	if (d100() <= 99) return _descriptiveQuirk();
	return `Übernatürlich - ${_supernaturalQuirk()}`;
}

function _pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function _descriptiveQuirk() {
	const n = d100();
	const COVER = ['Einband hat einen Fleck - Feuchtigkeit/Schimmel','Einband hat eine Delle','Einband hat Brandspuren','Einband hat eine Klappe','Einband hat Metallecken','Einband ist lose','Der Einband ist ziemlich dünn','Einband ist dick'];
	const PAGE  = [`${d10()+1} Seiten sind zusammengeklebt`,`${d10()+1} Seiten fehlen`,`${d4()+1} Seiten sind doppelt`,`${d4()+1} Seiten stehen auf dem Kopf`,'Seiten sind sechseckig','Seiten können sich entfalten','Seiten haben einen glänzenden Schimmer','Vergoldeter Rand an allen Seiten'];
	const TEXT  = ['Text verläuft spiralförmig - von innen nach außen','Text erstreckt sich bis zum Rand der Seite','Text verläuft nach oben und dann nach unten'];
	const MISC  = [`${d10(2)} Wörter wurden eingekreist`,'Scheint nie benutzt worden zu sein','Unterschrift des Autors - echt','Hat ein Schloss - offen','Geheimfach - Enthält eine Notiz','Quietscht, wenn es geöffnet wird','Widmung - Warnung','Hat eine Widmung','Bibliotheksstempel/-anmerkungen im Inneren'];
	if (n <= 12) return _pick(COVER);
	if (n <= 15) return _pick(['Buchrücken trägt ein Symbol','Buchrücken ist rissig','Buchrücken ist hohl']);
	if (n <= 17) return _pick(['Wiegt das Doppelte dessen, was es sollte','Wiegt nur die Hälfte dessen, was es sollte']);
	if (n <= 21) return _pick(['Riecht nach Schimmel','Riecht nach etwas Angenehmem','Riecht nach Vanille']);
	if (n <= 53) return _pick(PAGE);
	if (n <= 59) return _pick(TEXT);
	return _pick(MISC);
}

function _supernaturalQuirk() {
	const n = d100();
	const IMM = ['Ist gegen Feuerschaden immun','Ist gegen Kälteschaden immun','Ist gegen nekrotischen Schaden immun','Ist gegen psychischen Schaden immun'];
	const CMD = ['Kann befohlen werden, dass es schwebt','Kann befohlen werden, dass es Licht erzeugt','Kann befohlen werden, dass Schrift laut vorgelesen wird','Kann befohlen werden, dass es sich schließt'];
	if (n <= 15) return _pick(['Kann nicht beschädigt werden','Schmutz perlt einfach ab','Ist feuerfest','Bilder bewegen sich unmerklich']);
	if (n <= 30) return _pick(IMM);
	if (n <= 40) return `Umgeben von einer Aura der ${_pick(['Kälte','Wärme','des Blitzes'])}`;
	if (n <= 60) return _pick(CMD);
	return `Wird ein Kennwort nicht ausgesprochen: ${_pick(['Text wird unsichtbar','Buch teleportiert sich','Seiten können nicht umgeblättert werden'])} für ${d10(2)} Stunden`;
}

export function generateRandomBookValue(pageMaterial, pageCount, bookBinding, bookEdition, bookCondition, imageQuality, textProduction, textQuality, bookLanguage) {
	const baseMult = {Papier: d4(), Pergament: d6(), Holz: d8(), Metall: d6(2)};
	const detailed = (baseMult[pageMaterial] ?? d4()) * pageCount;
	const loose    = new Set(['lose','lose in einem Behälter','lose in Stoff eingewickelt','lose in Leder eingewickelt']);
	const solid    = new Set(['gebunden mit Bolzen','gebunden mit Lederschlaufen','gebunden mit Metallschlaufen','geklebt','zusammengenäht','spiralgebunden']);
	const modBind  = solid.has(bookBinding) ? d4() : loose.has(bookBinding) ? -d6() : d6() - 4;
	const modEd    = (() => { if (bookEdition === 'Entwurf' || bookEdition === 'Unbekannte Auflage') return 0; const m = bookEdition.match(/^(\d+)\./); return m ? -parseInt(m[1],10) : 0; })();
	const condMap  = {zerfallend:10,schrecklich:20,mangelhaft:30,unterdurchschnittlich:40,durchschnittlich:50,überdurchschnittlich:60,'sehr gut':70,ausgezeichnet:80,'fast neuwertig':90,neuwertig:100};
	const condMod  = (condMap[bookCondition] ?? 50) + d10() - 5;
	const qRank    = q => ['wertlos','unbrauchbar','schlecht','mäßig','unterdurchschnittlich','durchschnittlich','überdurchschnittlich','sehr gut','ausgezeichnet','unglaublich','unübertrefflich'].indexOf(q) - 5;
	const modImgQ  = qRank(imageQuality);
	const modTextQ = Math.round(qRank(textQuality) / 2);
	const exotic   = new Set(['Abyssisch','Celestisch','Tiefensprache','Drakonisch','Infernalisch','Urtümlich','Sylvanisch','Gemeinsprache der Unterreiche']);
	const modLang  = bookLanguage === 'Gemeinsprache' ? 0 : exotic.has(bookLanguage) ? d10() - 10 : d8() - 8;
	const modSum   = modBind + modEd + modImgQ + modTextQ + modLang;
	let value;
	if (modSum > 0)      value = Math.round((detailed * modSum * condMod) / 100);
	else if (modSum < 0) value = Math.round(((detailed / Math.abs(modSum)) * condMod) / 100);
	else                 value = Math.round((detailed * condMod) / 100);
	return value > 0 ? value : parseFloat(Math.random().toFixed(2)).toLocaleString('de', {minimumFractionDigits: 2});
}

// ═══════════════════════════════════════════════════════════════════════════
// HAUPT-API
// ═══════════════════════════════════════════════════════════════════════════

export function generateRandomDescription(authorRace) {
	const pageCount     = generateRandomPageCount();
	const pageMaterial  = generateRandomPageMaterial();
	const bookHeight    = generateRandomBookHeight();
	const bookLength    = generateRandomBookLength();
	const bookCondition = generateRandomBookCondition();
	const bookLanguage  = generateRandomBookLanguage(authorRace);
	const bookBinding   = generateRandomBookBinding();
	const bookEdition   = generateRandomBookEdition();
	const textQuality   = generateRandomTextQuality();
	const textProduction = generateRandomTextProduction(pageMaterial);
	const imageQuality  = generateRandomImageQuality();
	const weightGram    = Math.ceil(generateBookWeight(bookHeight, bookLength, pageCount, pageMaterial) / 5) * 5;

	return {
		page_count:    pageCount,
		page_material: pageMaterial,
		book_edition:  bookEdition,
		book_age:      generateRandomBookAge(),
		book_height:   bookHeight,
		book_length:   bookLength,
		book_width:    generateBookWidth(pageCount, pageMaterial),
		book_condition: bookCondition,
		book_language:  bookLanguage,
		book_binding:   bookBinding,
		book_weight: {
			gram:     weightGram,
			kilogram: (weightGram / 1000).toFixed(2).replace('.', ','),
			pound:    (Math.ceil((weightGram / 500) / 0.05) * 0.05).toFixed(2).replace('.', ','),
		},
		cover: {
			material: generateRandomCoverMaterial(),
			color:    generateRandomCoverColor(),
			detail:   generateRandomCoverDetails(),
		},
		text_quality:    textQuality,
		text_production: textProduction,
		image: {
			number:  generateRandomImageNumber(),
			color:   generateRandomImageColor(),
			size:    generateRandomImageSize(),
			style:   generateRandomImageStyle(),
			quality: imageQuality,
		},
		bookmark: generateRandomBookmark(pageMaterial),
		quirk:    generateRandomQuirk(),
		book_value: generateRandomBookValue(pageMaterial, pageCount, bookBinding, bookEdition, bookCondition, imageQuality, textProduction, textQuality, bookLanguage),
	};
}
