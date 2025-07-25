// Description:
//     Given the triangle of consecutive odd numbers:
//
//     1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
// 1 -->  1
// 2 --> 3 + 5 = 8
// assert.strictEqual(rowSumOddNumbers(1), 1);
// assert.strictEqual(rowSumOddNumbers(42), 74088);
function rowSumOddNumbers(n) {
    // return Math.pow((n*(n+1)/2), 2) - Math.pow(((n-1)*n/2), 2); вручную преобразовав эту формулу, получится n3
    return n*n*n;
}

console.log(rowSumOddNumbers(42))