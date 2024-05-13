function sentenceCase(word) {
    if (!word) return '';

    // Großschreibung des ersten Buchstabens
    const firstChar = word.charAt(0).toUpperCase();

    // Rückgabe des Wortes mit großgeschriebenem ersten Buchstaben und restlichem Text
    return firstChar + word.slice(1);
}