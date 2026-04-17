export function showError(message) {
	var existing = document.getElementById('app-error-banner');
	if (existing) existing.remove();

	var banner  = document.createElement('div');
	banner.id   = 'app-error-banner';

	var text        = document.createElement('span');
	text.textContent = message;

	var closeBtn = document.createElement('button');
	closeBtn.textContent = '\u00d7';
	closeBtn.setAttribute('aria-label', 'Fehler schließen');
	closeBtn.onclick = function () { banner.remove(); };

	banner.appendChild(text);
	banner.appendChild(closeBtn);

	var generateBtn = document.getElementById('btn-generate');
	generateBtn.parentNode.insertBefore(banner, generateBtn);
}

export function clearError() {
	var existing = document.getElementById('app-error-banner');
	if (existing) existing.remove();
}
