// Dark Mode Toggle
(function () {
	var toggle = document.getElementById('theme-toggle');
	var html = document.documentElement;
	var saved = localStorage.getItem('theme');
	if (saved) html.setAttribute('data-theme', saved);

	toggle.addEventListener('click', function () {
		var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
		html.setAttribute('data-theme', next);
		localStorage.setItem('theme', next);
	});
})();

// Filter panel accordion
document.querySelectorAll('.filter-panel-header').forEach(function (header) {
	header.addEventListener('click', function () {
		var panel = document.getElementById(header.getAttribute('data-panel'));
		if (panel) panel.classList.toggle('is-open');
	});
});

// Back-to-top visibility
window.addEventListener('scroll', function () {
	var btn = document.getElementById('btn-back-to-top');
	if (!btn) return;
	if (window.scrollY > 300) btn.classList.add('visible');
	else btn.classList.remove('visible');
});

// Back-to-top functionality
let backToTopButton = document.getElementById('btn-back-to-top');

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById('btn-back-to-top').style.display = 'block';
	} else {
		document.getElementById('btn-back-to-top').style.display = 'none';
	}
}

document.getElementById('btn-back-to-top').addEventListener('click', backToTop);

function backToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// Results counter + empty-state observer
(function () {
	var container = document.getElementById('container-generated-books');
	if (!container) return;

	new MutationObserver(function () {
		var empty = document.getElementById('results-empty');
		var countEl = document.getElementById('results-count');
		var n = container.children.length;
		if (empty) empty.style.display = n > 0 ? 'none' : 'block';
		if (countEl) countEl.textContent = n > 0 ? n + ' Ergebnis' + (n !== 1 ? 'se' : '') : '';
	}).observe(container, {childList: true});
})();
