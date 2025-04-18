// Description:
//     I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//     P.S. Each array includes only integer numbers. Output is a number too.
// assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
// assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
// assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
// assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    const sumArr = [ ...arr1, ...arr2 ];
    for (let i = 0; i < sumArr.length; i++) {
        sum += sumArr[i];
    }
    return sum;
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));