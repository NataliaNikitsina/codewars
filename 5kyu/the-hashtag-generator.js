// Description:
//     The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!
// Here's the deal:
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.
//     Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    const result = []
    str.split(' ').forEach((item) => {
        if (item) {
            result.push(item[0].toUpperCase() + item.slice(1))
        }
    });
    return result.length !== 0 && result.join('').length < 140 ? `#${result.join('')}` : false
}

console.log(generateHashtag("" ))