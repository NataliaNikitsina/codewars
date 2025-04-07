//⁉️ DESCRIPTION:
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
//         assert.strictEqual(boolToWord(true), 'Yes')
//         assert.strictEqual(boolToWord(false), 'No')


// ✅SOLUTION
function boolToWord( bool ){
    return bool === true ? "Yes" : "No";
}
console.log(boolToWord(true));