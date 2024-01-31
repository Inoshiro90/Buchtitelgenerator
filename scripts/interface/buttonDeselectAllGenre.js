document
	.getElementById('btn-deselect-all-genre')
	.addEventListener('click', function () {
		const checkboxes = document.querySelectorAll(
			"#genre input[type='checkbox']"
		);
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = false;
		});
		// console.log(
		// 	'Alle Genre-Checkboxen wurden mit "Alle Abwählen" abgewählt'
		// );
	});
