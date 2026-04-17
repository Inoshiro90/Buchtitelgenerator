import {AppState} from '../state.js';
import {generateBooksStream} from '../book/generateBooks.js';
import {displaySingleBook} from '../book/displayGeneratedBooks.js';
import {showError, clearError} from '../ui/showError.js';

async function runGeneration() {
	clearError();

	const countInput = document.getElementById('input-field-book-count');
	const count = Math.max(1, Math.min(1000, parseInt(countInput.value, 10) || 1));

	const btn = document.getElementById('btn-generate');
	const origText = btn.textContent.trim();
	btn.disabled = true;
	btn.textContent = 'Generiere\u2026';

	const container = document.getElementById('container-generated-books');
	container.innerHTML = '';

	try {
		for await (const book of generateBooksStream(
			count,
			AppState.getSettings(),
			AppState.getGenres(),
		)) {
			displaySingleBook(book, AppState.getFields(), container);

			// 👇 zwingt sichtbares schrittweises Rendern
			await new Promise(requestAnimationFrame);
		}
	} catch (err) {
		console.error('[Generierung fehlgeschlagen]', err);
		showError(err.message || 'Unbekannter Fehler bei der Generierung.');
	} finally {
		btn.disabled = false;
		btn.textContent = origText;
	}
}

document.getElementById('btn-generate').addEventListener('click', runGeneration);

document.getElementById('input-field-book-count').addEventListener('keydown', function (e) {
	if (e.key === 'Enter') runGeneration();
});
