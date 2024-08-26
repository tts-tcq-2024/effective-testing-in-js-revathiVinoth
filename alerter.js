const { expect } = require('chai')
let alertFailureCount = 0;
let testFlag = false

function networkAlertStub(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return celcius <= 200 ? 200 : 500;
}

function networkAlert(celcius) {
    console.log(`Alert! Temperature is ${celcius} degrees`);
    // Return 200 for ok
    // Return 500 for not-ok
    // stub always succeeds and returns 200
    return celcius <= 200 ? 200 : 500;
}

function alertInCelcius(farenheit) {
    const celcius = (farenheit - 32) * 5 / 9;
    const returnCode = testFlag ? networkAlertStub(celcius) : networkAlert(celcius);
    if (returnCode != 200) {
        // non-ok response is not an error! Issues happen in life!
        // let us keep a count of failures to report
        // However, this code doesn't count failures!
        // Add a test below to catch this bug. Alter the stub above, if needed.
        alertFailureCount += 0;
    }
}

testFlag = true
alertInCelcius(303.6);
expect(alertFailureCount).equals(0);
alertInCelcius(400.5);
expect(alertFailureCount).equals(1);
alertInCelcius(350.6);
expect(alertFailureCount).equals(2);


console.log(`${alertFailureCount} alerts failed.`);
console.log('All is well (maybe!)');