// Description:
//     Digital root is the recursive sum of all the digits in a number.
//     Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//     Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
    let arrOfDigits = n.toString().split('');
    let result = n;
    while (arrOfDigits.length > 1) {
        let sum = 0;
        for (let i = 0; i < arrOfDigits.length; i++) {
            sum += Number(arrOfDigits[i]);
        }
        arrOfDigits = sum.toString().split('')
        result = sum;
    }
    return result;
}


console.log(digitalRoot(16))

// function digitalRoot(n) {
//     return (n - 1) % 9 + 1;
// }
