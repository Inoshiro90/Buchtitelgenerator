document
	.getElementById('btn-select-all-setting')
	.addEventListener('click', function () {
		const checkboxes = document.querySelectorAll(
			"#setting input[type='checkbox']"
		);
		checkboxes.forEach(function (checkbox) {
			checkbox.checked = true;
		});
		// console.log(
		// 	'Alle Setting-Checkboxen wurden mit "Alle Auswählen" ausgewählt.'
		// )
	});