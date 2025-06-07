// Description:
//     Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
    return str.split(' ').map(item => {
        let count = 0;
        for (let i = 0; i < item.length; i++) {
            if (/[a-zA-Z]/.test(item[i])) {
                count++
            }
        }
        if (count === item.length) {
            return (item.slice(1) + item[0] + 'ay')
        } else {
            return item;
        }
    }).join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))

// function pigIt(str) {
//     return str.replace(/\w+/g, (w) => {
//         return w.slice(1) + w[0] + 'ay';
//     });
// }