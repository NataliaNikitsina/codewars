// Description:
//     Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    return str.split(' ').map(item => item.slice(1) + item[0] + 'ay').join(' ')
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('Hello world !'))