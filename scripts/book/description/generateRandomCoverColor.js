function generateRandomCoverColor() {
    const coverColor = getRandomElement(color);
    return {
        name: coverColor.name,
        hex: coverColor.hex,
        hue: coverColor.hue,
    };
}