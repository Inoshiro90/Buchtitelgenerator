'use strict';

/**
 * buttons.js — Alle Button-Handler (konsolidiert)
 *
 * Ersetzt scripts/interface/buttonGenerate.js, buttonCopy.js, buttonClear.js
 * sowie scripts/copyGeneratedBooks.js und clearGeneratedBooks.js.
 */

import { AppState }             from './state.js';
import { generateBooksStream }  from '../book/generator.js';
import { displaySingleBook }    from '../book/generator.js';

// ─── Fehleranzeige ────────────────────────────────────────────────────────

function showError(message) {
	document.getElementById('app-error-banner')?.remove();
	const banner = Object.assign(document.createElement('div'), { id: 'app-error-banner' });
	const text   = Object.assign(document.createElement('span'), { textContent: message });
	const close  = Object.assign(document.createElement('button'), {
		textContent: '×',
		onclick: () => banner.remove(),
	});
	close.setAttribute('aria-label', 'Fehler schließen');
	banner.append(text, close);
	const btn = document.getElementById('btn-generate');
	btn.parentNode.insertBefore(banner, btn);
}

function clearError() {
	document.getElementById('app-error-banner')?.remove();
}

// ─── Generierung ──────────────────────────────────────────────────────────

async function runGeneration() {
	clearError();

	const countInput = document.getElementById('input-field-book-count');
	const count = Math.max(1, Math.min(1000, parseInt(countInput.value, 10) || 1));

	const btn      = document.getElementById('btn-generate');
	const origText = btn.textContent.trim();
	btn.disabled   = true;
	btn.textContent = 'Generiere\u2026';

	const container = document.getElementById('container-generated-books');
	container.innerHTML = '';

	try {
		for await (const book of generateBooksStream(count, AppState.getSettings(), AppState.getGenres())) {
			displaySingleBook(book, AppState.getFields(), container);
			await new Promise(requestAnimationFrame);
		}
	} catch (err) {
		console.error('[Generierung fehlgeschlagen]', err);
		showError(err.message || 'Unbekannter Fehler bei der Generierung.');
	} finally {
		btn.disabled    = false;
		btn.textContent = origText;
	}
}

// ─── Kopieren ─────────────────────────────────────────────────────────────

function copyGeneratedBooks() {
	const container = document.getElementById('container-generated-books');
	if (!container || container.children.length === 0) return;

	const lines = [];
	for (const card of container.children) {
		const title = card.querySelector('.card-title')?.textContent?.trim() ?? '';
		lines.push(title);
		card.querySelectorAll('.card-meta-row').forEach(row => {
			const key = row.querySelector('.card-meta-key')?.textContent?.trim() ?? '';
			const val = row.querySelector('.card-meta-value')?.textContent?.trim() ?? '';
			if (key && val) lines.push(`  ${key}: ${val}`);
		});
		lines.push('');
	}

	navigator.clipboard.writeText(lines.join('\n').trim()).catch(() => {
		// Fallback für ältere Browser
		const ta = Object.assign(document.createElement('textarea'), { value: lines.join('\n').trim() });
		document.body.appendChild(ta);
		ta.select();
		document.execCommand('copy');
		ta.remove();
	});
}

// ─── Leeren ───────────────────────────────────────────────────────────────

function clearGeneratedBooks() {
	const container = document.getElementById('container-generated-books');
	if (container) container.innerHTML = '';
}

// ─── Checkbox-Listener ───────────────────────────────────────────────────

function wireCheckboxes(selector, toggleFn, selectAllId, deselectAllId) {
	document.querySelectorAll(selector).forEach(cb => {
		cb.addEventListener('change', () => toggleFn(cb.dataset.value ?? cb.value, cb.checked));
	});
	document.getElementById(selectAllId)?.addEventListener('click', () => {
		document.querySelectorAll(selector).forEach(cb => { cb.checked = true; });
		AppState[selectAllId.includes('setting') ? 'selectAllSettings'
			: selectAllId.includes('genre') ? 'selectAllGenres' : 'selectAllFields']();
	});
	document.getElementById(deselectAllId)?.addEventListener('click', () => {
		document.querySelectorAll(selector).forEach(cb => { cb.checked = false; });
		AppState[deselectAllId.includes('setting') ? 'deselectAllSettings'
			: deselectAllId.includes('genre') ? 'deselectAllGenres' : 'deselectAllFields']();
	});
}

// ─── Initialisierung ──────────────────────────────────────────────────────

export function initButtons() {
	document.getElementById('btn-generate')?.addEventListener('click', runGeneration);
	document.getElementById('input-field-book-count')?.addEventListener('keydown', e => {
		if (e.key === 'Enter') runGeneration();
	});
	document.getElementById('btn-copy')?.addEventListener('click', copyGeneratedBooks);
	document.getElementById('btn-clear')?.addEventListener('click', clearGeneratedBooks);

	wireCheckboxes('.checkbox-setting', AppState.toggleSetting.bind(AppState), 'btn-select-all-setting', 'btn-deselect-all-setting');
	wireCheckboxes('.checkbox-genre',   AppState.toggleGenre.bind(AppState),   'btn-select-all-genre',   'btn-deselect-all-genre');
	wireCheckboxes('.checkbox-field',   AppState.toggleField.bind(AppState),   'btn-select-all-field',   'btn-deselect-all-field');
}
