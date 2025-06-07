// Description:
//     Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//     Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    let count = 0;
    const str1Arr = str1.split('');
    for (let i = 0; i < str2.length; i++) {
        if (str1Arr.includes(str2[i])) {
            count++;
            str1Arr.splice(str1Arr.indexOf(str2[i]), 1);
        }
    }
    return count === str2.length
}
console.log(scramble('scriptjavx','javascript'))