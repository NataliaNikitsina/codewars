// Description:
//     Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.present
// assert.strictEqual(spinWords("Welcome"), "emocleW");
// assert.strictEqual(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
// assert.strictEqual(spinWords("This is a test"), "This is a test");
// assert.strictEqual(spinWords("This is another test"), "This is rehtona test");
// assert.strictEqual(spinWords("You are almost to the last test"), "You are tsomla to the last test");
// assert.strictEqual(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// assert.strictEqual(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");

function spinWords(string){
    let arrOfString = string.split(' ');
    for (let i = 0; i < arrOfString.length; i++){
        if (arrOfString[i].length >= 5){
            let newWord = '';
            for (let j = arrOfString[i].length - 1; j >= 0; j--){
                newWord += arrOfString[i][j];
            }
            arrOfString[i] = newWord;
        }
    }
    return arrOfString.join(' ');
}

console.log(spinWords("Just kidding there is still one more"));