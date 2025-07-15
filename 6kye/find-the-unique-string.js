// Description:
//     There is an array of strings. All strings contains similar letters except one. Try to find it!
// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
//  It’s guaranteed that array contains more than 2 strings.
// assert.strictEqual(findUniq([ 'silvia', 'vasili', 'victor' ]), 'victor');
// assert.strictEqual(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]), 'Harry Potter');
// assert.strictEqual(findUniq([ '    ', 'a', ' ' ]), 'a');

function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        const newStringOfArr = [arr.slice(0 , i), arr.slice(i + 1)].join().toLowerCase();
        for (let j = 0; j < arr[i].length; j++) {
            if (!newStringOfArr.includes(arr[i][j].toLowerCase())) {
                return arr[i]
            }
        }
    }
}

console.log(findUniq([ 'Tom Marvolo Riddle', 'I am Lord Voldemort', 'Harry Potter' ]));
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]));
console.log(findUniq([  'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]));