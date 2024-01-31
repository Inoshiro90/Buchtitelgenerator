function copyGeneratedBooks() {
    const container = document.getElementById('container-generated-books');
    const paragraphs = container.getElementsByTagName('p');

    // Überprüfe, ob der Container leer ist
    if (paragraphs.length === 0) {
        alert('Es wurde nichts generiert. Bitte generiere Bücher, bevor du versuchst zu kopieren.');
        return;
    }

    // Erstelle einen leeren Bereich
    const range = document.createRange();
    range.selectNodeContents(container);

    // Erstelle eine Auswahl und füge den Bereich hinzu
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        // Kopiere den Text mit reduzierten Zeilenumbrüchen, wenn selectedGenre leer ist
        const copyText = selectedDescription.length === 0
            ? Array.from(paragraphs).map(p => p.textContent.trim().replace(/\n{3,}/g, '\n\n')).join('\n')
            : container.innerText.replace(/\n{3,}/g, '\n\n');
        navigator.clipboard.writeText(copyText);

        const copyButton = document.getElementById('btn-copy');
        copyButton.textContent = 'Kopiert!';

        // Nach 5 Sekunden den Text des Buttons zurücksetzen
        setTimeout(function () {
            copyButton.textContent = 'Kopieren';
        }, 5000);
    } catch (err) {
        console.error('Fehler beim Kopieren in die Zwischenablage:', err);
    }

    // Entferne die Auswahl
    selection.removeAllRanges();
}