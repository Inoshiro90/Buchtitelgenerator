'use strict';

/**
 * loader.js — Zentraler Einstiegspunkt der Anwendung
 *
 * Ersetzt:
 *   - scripts/main.js  (100+ <script>-Tag-Ladelogik)
 *   - scripts/book/getSelectedSetting.js, getSelectedGenre.js, getSelectedDescription.js
 *   - scripts/interface/buttonGenerate.js, buttonCopy.js, buttonClear.js
 *
 * Einziges <script type="module"> im HTML.
 * Lädt alle Module und initialisiert die Anwendung.
 */

// ─── 1. Daten laden (parallel) ───────────────────────────────────────────

import { initDataRegistry }      from './dataRegistry.js';
import { registerAuthorFunctions } from './engine.js';
import { generateRandomAuthorFirstName, generateRandomAuthorLastName, generateRandomAuthorGender, generateRandomAuthorRace, generateRandomAuthorRegion } from '../book/author.js';

// ─── 2. UI-Infrastruktur (läuft sofort als Side-Effect) ──────────────────

import '../ui/setup.js';

// ─── 3. UI-State + Buttons ───────────────────────────────────────────────

import { initButtons } from '../ui/buttons.js';

// ─── 4. Bootstrap ────────────────────────────────────────────────────────

async function bootstrap() {
	// Author-Funktionen in Engine registrieren (verhindert zirkuläre Importe)
	registerAuthorFunctions({
		generateRandomAuthorFirstName,
		generateRandomAuthorLastName,
		generateRandomAuthorGender,
		generateRandomAuthorRace,
		generateRandomAuthorRegion,
	});

	// Alle CSV-Wortlisten parallel laden
	try {
		await initDataRegistry();
	} catch (err) {
		console.error('[loader] Datenladen fehlgeschlagen:', err);
		const container = document.getElementById('container-generated-books');
		if (container) {
			container.innerHTML = `<p class="error-message">Fehler beim Laden der Datenbasis: ${err.message}</p>`;
		}
		return;
	}

	// Buttons verdrahten (erst nach Datenladen)
	initButtons();

	// Lade-Indikator ausblenden, falls vorhanden
	document.getElementById('app-loading')?.remove();
	document.getElementById('btn-generate')?.removeAttribute('disabled');
}

// Startet nach DOM-Ready
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', bootstrap);
} else {
	bootstrap();
}
