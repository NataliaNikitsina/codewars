// Description:
//     Complete the method so that it'll find the greatest product of five consecutive digits in the given string of digits.
// For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.
// The input string always has more than five digits.
//     Adapted from Project Euler.
// Test.assertEquals(greatestProduct("123834539327238239583"), 3240, 'The method gave a wrong answer');
// Test.assertEquals(greatestProduct("92494737828244222221111111532909999"), 5292, 'The method gave a wrong answer');
// Test.assertEquals(greatestProduct("92494737828244222221111111532909999"), 5292);
// Test.assertEquals(greatestProduct("92494737828244222221111111532909999"), 5292);
// Test.assertEquals(greatestProduct("02494037820244202221011110532909999"), 0);


function greatestProduct(input) {
    let mainResult = 0;
    for (let i = 0; i < (input.split('').length-4); i++) {
        const resultArr = input.split('').slice(i, i + 5)
        let resultOfMpn = resultArr.reduce((accum, item) => accum * item)
        if (resultOfMpn > mainResult) {
            mainResult = resultOfMpn
        }
    }
    return mainResult
}

console.log(greatestProduct('123834539327238239583'))