document
	.getElementById('btn-select-all-description')
	.addEventListener('click', function () {
		const checkboxes = document.querySelectorAll(
			"#description input[type='checkbox']"
		);
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = true;
		});
		// console.log(
		// 	'Alle Beschreibung-Checkboxen wurden mit "Alle Auswählen" ausgewählt.'
		// );
	});