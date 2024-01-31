document
	.getElementById('btn-select-all-genre')
	.addEventListener('click', function () {
		const checkboxes = document.querySelectorAll(
			"#genre input[type='checkbox']"
		);
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = true;
		});
		// console.log(
		// 	'Alle Genre-Checkboxen wurden mit "Alle Auswählen" ausgewählt.'
		// );
	});
