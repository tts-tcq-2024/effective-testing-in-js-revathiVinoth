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

function constructExpectedColorMap() {
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    const colorMap = [];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            colorMap.push(`${i * 5 + j} | ${majorColors[i]} | ${minorColors[j]}`)
        }
    }
    return colorMap;
}

expectedColorMap = constructExpectedColorMap();
observedColorMap = calculateColorMap();
printColorMap(observedColorMap)
expect(observedColorMap.length).equals(25);
expect(observedColorMap).equals(expectedColorMap);
console.log('All is well (maybe!)');