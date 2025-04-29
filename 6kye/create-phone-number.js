// Description:
//     Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//     Don't forget the space after the closing parentheses!
// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// assert.strictEqual(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//вариант1
// function createPhoneNumber(numbers){
//     let code = [];
//     let firstPartOfNumber = [];
//     let secondPartOfNumber = [];
//     for (let j = 0; j < numbers.length; j++){
//         if (j < 3) {code.push(numbers[j]);}
//         else if (j < 6) {firstPartOfNumber.push(numbers[j]);}
//         else {secondPartOfNumber.push(numbers[j])}
//     }
// return `(${code.join('')}) ${firstPartOfNumber.join('')}-${secondPartOfNumber.join('')}`;
// }
//вариант2
function createPhoneNumber(numbers){
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))