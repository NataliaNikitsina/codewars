// Description:
//     Your task, is to create N×N multiplication table, of size provided in parameter.
//     For example, when given size is 3:
// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:
//     [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
    const result = []
    let step = 1;
    for (let i = 0; i < size; i++) {
        result[i] = [];
        let item=0;
        let side = size;
        while (side !== 0){
            item += step
            result[i].push(item)
            side--
        }
        step++
    }
    return result;
}

console.log(multiplicationTable(4))