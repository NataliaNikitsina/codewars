// Description:
//     The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//     Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word) {
    let arrWord = word.toLowerCase().split('')
    let result = '';
    arrWord.map((item) => {
        let count =0;
        for (let i=0; i<arrWord.length; i++) {
            if ( item === arrWord[i]){count++}
        }
        count > 1 ? result += ')' : result += '('
    })
    return result;
}

console.log(duplicateEncode("Success"));






