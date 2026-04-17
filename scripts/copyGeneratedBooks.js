export function copyGeneratedBooks() {
	const container = document.getElementById('container-generated-books');
	const cards     = container.getElementsByClassName('ds-card');

	if (cards.length === 0) {
		console.warn('[copyGeneratedBooks] Keine Bücher zum Kopieren vorhanden.');
		return;
	}

	try {
		const copyText = container.innerText.replace(/\n{3,}/g, '\n\n');
		navigator.clipboard.writeText(copyText);

		const btn = document.getElementById('btn-copy');
		const orig = btn.textContent;
		btn.textContent = 'Kopiert!';
		setTimeout(function () { btn.textContent = orig; }, 3000);
	} catch (err) {
		console.error('[copyGeneratedBooks] Fehler:', err);
	}
}
