/**
 * data.js  — LEMMA_MAP-Registrierung
 *
 * Registriert alle Kategorien-Arrays in der LEMMA_MAP der DSL-Engine.
 * Muss nach engine.js und nach allen Kategorien-Arrays geladen sein.
 *
 * Keine Grammatiklogik — ausschließlich Datenzuordnung.
 *
 * KORREKTUR gegenüber Erstversion:
 *   mountainRangeArray → Lemma 'Ort' (Sprint-7-Konvention für Locations).
 *   Die Einträge tragen number:'plural'/'singular'; resolveNOM() wertet dies
 *   als fixedNumerus aus und ignoriert den Token-Numerus entsprechend.
 */

(function registerLemmaMap() {
	// ── Substantive ───────────────────────────────────────────────────────
	LEMMA_MAP['Volk'] = {type: 'noun', arrays: raceArray};
	LEMMA_MAP['Klasse'] = {type: 'noun', arrays: classArray};
	LEMMA_MAP['Terrain'] = {type: 'noun', arrays: terrainArray};
	LEMMA_MAP['Waffe'] = {type: 'noun', arrays: weaponArray};
	LEMMA_MAP['Kreaturtyp'] = {type: 'noun', arrays: creatureTypeArray};
	LEMMA_MAP['Abenteuerausrüstung'] = {type: 'noun', arrays: adventuringGearArray};
	LEMMA_MAP['Beruf'] = {type: 'noun', arrays: professionArray};
	LEMMA_MAP['Gebäude'] = {type: 'noun', arrays: buildingArray};
	LEMMA_MAP['Tier'] = {type: 'noun', arrays: animalArray};
	LEMMA_MAP['Metall'] = {type: 'noun', arrays: metalArray};
	LEMMA_MAP['Ereignis'] = {type: 'noun', arrays: eventArray};
	LEMMA_MAP['Rüstung'] = {type: 'noun', arrays: armourArray};

	// Locations: Einträge mit number:'plural'/'singular' (fixedNumerus)
	LEMMA_MAP['Ort'] = {type: 'noun', arrays: mountainRangeArray};

	// ── Adjektive ─────────────────────────────────────────────────────────
	LEMMA_MAP['PersonAussehen'] = {type: 'adj', arrays: adjectivePersonAppearanceArray};
	LEMMA_MAP['Himmelsrichtung'] = {type: 'adj', arrays: adjectiveCardinalDirectionArray};

	// Namen
	LEMMA_MAP['Vorname'] = {type: 'name'};
	LEMMA_MAP['Nachname'] = {type: 'name'};
})();
