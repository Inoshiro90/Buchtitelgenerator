document
	.getElementById('btn-deselect-all-description')
	.addEventListener('click', function () {
		const checkboxes = document.querySelectorAll(
			"#description input[type='checkbox']"
		);
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = false;
		});
		// console.log(
		// 	'Alle Beschreibung-Checkboxen wurden mit "Alle Abwählen" abgewählt'
		// );
	});
