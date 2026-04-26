'use strict';

/**
 * rand.js — Zufallshilfsfunktionen und Würfelmechanik
 */

export function getRandomElement(array) {
	if (!Array.isArray(array) || array.length === 0) return undefined;
	return array[Math.floor(Math.random() * array.length)];
}

function roll(sides, quantity = 1) {
	let result = 0;
	for (let i = 0; i < quantity; i++) result += Math.floor(Math.random() * sides) + 1;
	return result;
}

export const d3   = (q) => roll(3, q);
export const d4   = (q) => roll(4, q);
export const d5   = (q) => roll(5, q);
export const d6   = (q) => roll(6, q);
export const d8   = (q) => roll(8, q);
export const d10  = (q) => roll(10, q);
export const d12  = (q) => roll(12, q);
export const d20  = (q) => roll(20, q);
export const d100 = (q) => roll(100, q);
