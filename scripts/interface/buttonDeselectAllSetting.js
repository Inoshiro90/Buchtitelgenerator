document
	.getElementById('btn-deselect-all-setting')
	.addEventListener('click', function () {
		const checkboxes = document.querySelectorAll(
			"#setting input[type='checkbox']"
		);
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = false;
		});
		// console.log(
		// 	'Alle Setting-Checkboxen wurden mit "Alle Abwählen" abgewählt.'
		// );
	});