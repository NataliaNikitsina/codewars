// Description:
//     Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//     Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//     For example, decode("h3 th2r2") would return "hi there".
//     For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    let changedString = '';
    for (let i = 0; i < string.length; i++) {
        switch (string[i]) {
            case 'a':
                changedString += '1';
                break;
            case 'e':
                changedString += '2';
                break;
            case 'i':
                changedString += '3';
                break;
            case 'o':
                changedString += '4';
                break;
            case 'u':
                changedString += '5';
                break;
            default:
                changedString += string[i];
                break;
        }
    }
    return changedString;
}
console.log(encode("hello"));

function decode(string) {
    let decodedString = '';
    for (let i = 0; i < string.length; i++) {
        if(string[i] === '1') {decodedString += 'a'}
        else if(string[i] === '2') { decodedString +='e'}
        else if(string[i] === '3') { decodedString +='i'}
        else if(string[i] === '4') { decodedString +='o'}
        else if(string[i] === '5') { decodedString +='u'}
        else {decodedString += string[i];}
    }
    return decodedString;
}

console.log(decode("h3 th2r2"));