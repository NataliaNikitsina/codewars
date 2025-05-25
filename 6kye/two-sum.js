// Description:
//     Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
//     For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.
//     The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
//     twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or

function twoSum(numbers, target) {
    let result;
    numbers.forEach((num, index) => {
        for (let j = 0; j < numbers.length; j++) {
            if ((num + numbers[j]) === target && index !== j) {
                result = [index, j]
            }
        }
    })
    return result
}

console.log(twoSum([849, -873, 7, 816, -654, -91, -711, 303, -686, -211, -682, -686, -138, -516, -963, 152, -215, 34, -154, 539, -265, -999, 594, -85, -669, 305, -900, 477], -530));
