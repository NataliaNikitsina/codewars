// ⁉️ DESCRIPTION:You get an array of numbers, return the sum of all of the positives ones.
//
// Example
// [1, -4, 7, 12] => 1+7+12=20
// Note If there is nothing to sum, the sum is default to 0.
// assert.strictEqual(positiveSum([1,2,3,4,5]),15);
// assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
// assert.strictEqual(positiveSum([]),0);
// assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
// assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
// ✅SOLUTION
// function positiveSum(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] > 0) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// function positiveSum (arr) {
//     return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);
// }

const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);
console.log(positiveSum([-1,-2,-3,-4,-5]));

