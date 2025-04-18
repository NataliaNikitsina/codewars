// Description:
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]
function digitize(n) {
    n = Array.from(String(n));
    n.reverse()
    let newArr = []
    for (let i = 0; i < n.length; i++) {
        n[i] = Number(n[i]);
        newArr.push(n[i]);
    }
    return newArr;
}
console.log(digitize(9612));
