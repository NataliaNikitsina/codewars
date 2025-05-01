// Description:
//     Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
//     Examples
//     If a = [1, 2] and b = [1], the result should be [2].
//     If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
// assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
// assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
// assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
// assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
// assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")

function arrayDiff(a, b) {
    for (let i = 0; i < b.length; i++) {
        while (a.includes(b[i])) {
            a.splice(a.indexOf(b[i]), 1);
        }
    }
    return a
}

// или вариант 2
// function arrayDiff(a, b) {
//     return a.filter(elem => !b.includes(elem))
}

console.log(arrayDiff([15,1,-14,-13,-15,10,11,-17,-19,-14,-15,20,12,-17], [15,1,-14,-13,-15,10,11,-17,-19,-14,-15,20,12])) // []
console.log(arrayDiff([1,2,3], [1,2]))  // [3]
