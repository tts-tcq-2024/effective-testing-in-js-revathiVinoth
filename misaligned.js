const { expect } = require('chai')

function calculateColorMap() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const colorMap = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            colorMap.push(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[i]}`)
        }
    }
    return colorMap;
}

function printColorMap(colorMap) {
    colorMap.forEach(element => {
        console.log(element);
    });
}


result = calculateColorMap();
printColorMap(result)
expect(result.length).equals(25);
expect(result[0]).equals('0 | White | Blue'); // Test for correct alignment
expect(result[24]).equals('24 | Violet | Slate');
console.log('All is well (maybe!)');