// Description:
//     Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
//     For example, a tower with 3 floors looks like this:
//
// [
//     "  *  ",
//     " *** ",
//     "*****"
// ]
// And a tower with 6 floors looks like this:
//
// [
//     "     *     ",
//     "    ***    ",
//     "   *****   ",
//     "  *******  ",
//     " ********* ",
//     "***********"
// ]
//
function towerBuilder(nFloors) {
    const block = '*'
    const result = [block];
    let floor = block;
    while (nFloors) {
        if (nFloors !== 1) {
            floor = floor + block + block
            result.push(floor);
        }
        nFloors--
    }
    for (let i = 0; i < result.length; i++) {
        while (result[i].length < result.at(-1).length) {
            result[i] = ` ${result[i]} `;
        }
    }
    return result;
}

// function towerBuilder(nFloors) {
//     const tower = [];
//     for (let i = 0; i < nFloors; i++) {
//         tower.push(" ".repeat(nFloors - i - 1)
//             + "*".repeat((i * 2)+ 1)
//             + " ".repeat(nFloors - i - 1));
//     }
//     return tower;
// }
console.log(towerBuilder(3))
