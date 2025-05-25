// Description:
//     Please write a function that sums a list, but ignores any duplicated items in the list.
//     For instance, for the list [3, 4, 3, 6] the function should return 10,
//     and for the list [1, 10, 3, 10, 10] the function should return 4.


function sumNoDuplicates(numList) {
    return numList.filter((num, index, array) => {
        return !(array.slice(0, index).includes(num) || array.slice(index + 1).includes(num))
    }).reduce((a, b) => a + b, 0);
}



// function sumNoDuplicates(numList) {
//     return numList.filter((num) => {
//         return numList.indexOf(num) === numList.lastIndexOf(num)
//     }).reduce((a, b) => a + b, 0);
// }


console.log(sumNoDuplicates([3, 4, 3, 6]));
console.log(sumNoDuplicates([1, 10, 3, 10, 10]));