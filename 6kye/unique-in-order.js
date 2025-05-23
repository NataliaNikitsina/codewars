// Description:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//     For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
    const result = [];
    for (let j = 0; j < iterable.length; j++) {
        if (iterable[j] !== iterable[j - 1]) {
            result.push(iterable[j]);
        }
    }
    return result;
}

// var uniqueInOrder=function(iterable){
//     return [...iterable].filter((item, indexItem) => item !== iterable[indexItem-1])
// }

console.log(uniqueInOrder('AAAABBBCCDAABBB'))