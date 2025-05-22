// Description:
//     Given a name, turn that name into a perfect square matrix (nested array with the amount of arrays equivalent to the length of each array).
// You will need to add periods (.) to the end of the name if necessary, to turn it into a matrix.
//     If the name has a length of 0, return "name must be at least one letter"
//
// Examples
// "Bill" ==> [ ["B", "i"],
//     ["l", "l"] ]
//
// "Frank" ==> [ ["F", "r", "a"],
//     ["n", "k", "."],
//     [".", ".", "."] ]

const matrixfy = str => {
    if (str.length === 0) return 'name must be at least one letter';
    const side = Math.ceil(Math.sqrt(str.length));
    str = str + '.'.repeat(side * side - str.length);
    const result = [];
    let newLength = str.length;
    let start = 0;
    while (newLength) {
        result.push(str.slice(start, side + start).split(''));
        start += side
        newLength -= side
    }
    return result
};
console.log(matrixfy("Franklin"))
