// ⁉️ DESCRIPTION: Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');
// ✅SOLUTION

// function solution(str){
//     return str.split('').reverse().join('');
// }
// console.log(solution(""));
//

function solution(str){
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--)
        reversedStr += str[i];
    return reversedStr;
}
console.log(solution('hello'));
