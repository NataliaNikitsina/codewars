// Description:
//     Given a string of words, you need to find the highest scoring word.
//     Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//     For example, the score of abad is 8 (1 + 2 + 1 + 4).
//     You need to return the highest scoring word as a string.
//     If two words score the same, return the word that appears earliest in the original string.
//     All letters will be lowercase and all inputs will be valid.
// assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
// assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano');
// assert.strictEqual(high('take me to semynak'), 'semynak');

// function high(x) {
//     const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     const arr = x.split(' ')
//     const numberArr = arr.map(x => {
//         let count = 0;
//         for (let i = 0; i < x.length; i++) {
//             count += (alphabet.indexOf(x[i]) + 1)
//         }
//         return count
//     })
//     return arr[numberArr.indexOf([...numberArr].sort((a, b) => b - a)[0])]
// }

function high(x) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const arr = x.split(' ').map(x => {
        return x.split('').reduce((a, b) => a + alphabet.indexOf(b) + 1, 0);
    });
    return x.split(' ')[arr.indexOf(Math.max(...arr))]
}

console.log(high('man i need a taxi up to ubud'));