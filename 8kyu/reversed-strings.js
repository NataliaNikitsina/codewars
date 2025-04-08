// ⁉️ DESCRIPTION: Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'
// assert.strictEqual(solution('world'), 'dlrow');
// assert.strictEqual(solution('hello'), 'olleh');
// assert.strictEqual(solution(''), '');
// assert.strictEqual(solution('h'), 'h');
// ✅SOLUTION

function solution(str){
    return str.split('').reverse().join('');
}
console.log(solution(""));