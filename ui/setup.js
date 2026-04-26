'use strict';

/**
 * setup.js — UI-Infrastruktur
 * Ersetzt scripts/ui/uiSetup.js.
 * Läuft als reiner Side-Effect beim Import.
 */

// ─── Theme-Toggle (Dark/Light) ───────────────────────────────────────────

(function initTheme() {
	const toggle = document.getElementById('theme-toggle');
	const html   = document.documentElement;
	const saved  = localStorage.getItem('theme');
	if (saved) html.setAttribute('data-theme', saved);

	toggle?.addEventListener('click', () => {
		const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		html.setAttribute('data-theme', next);
		localStorage.setItem('theme', next);
	});
})();

// ─── Filter-Panel-Accordion ───────────────────────────────────────────────

document.querySelectorAll('.filter-panel-header').forEach(header => {
	header.addEventListener('click', () => {
		const panel = document.getElementById(header.dataset.panel);
		panel?.classList.toggle('is-open');
	});
});

// ─── Back-to-top ──────────────────────────────────────────────────────────

(function initBackToTop() {
	const btn = document.getElementById('btn-back-to-top');
	if (!btn) return;

	window.addEventListener('scroll', () => {
		btn.classList.toggle('visible', window.scrollY > 300);
	}, { passive: true });

	btn.addEventListener('click', () => {
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	});
})();

// ─── Ergebnis-Zähler + Leer-Zustand ─────────────────────────────────────

(function initResultsObserver() {
	const container = document.getElementById('container-generated-books');
	const empty     = document.getElementById('results-empty');
	const countEl   = document.getElementById('results-count');
	if (!container) return;

	new MutationObserver(() => {
		const n = container.children.length;
		if (empty)   empty.style.display = n > 0 ? 'none' : 'block';
		if (countEl) countEl.textContent  = n > 0 ? `${n} Ergebnis${n !== 1 ? 'se' : ''}` : '';
	}).observe(container, { childList: true });
})();
