// Description:
//     Complete the solution so that the function will break up camel casing, using a space between words.
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const arrString = string.split('');
    let result = arrString.map(item => {
        if (item === item.toUpperCase()) {
            item = ` ${item}`
        }
        return item
    });
    return result.join('');
}

console.log(solution("camelCasingTest"))