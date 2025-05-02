// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.
// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:
//     ['a', 1, 2, false, 'b']
// expected output is:
// {
//     number: [1, 2],
//     string: ['a', 'b'],
//     boolean: [false]
// }

function separateTypes(input) {
    let inputObject = {};
    input.forEach(item => {
        switch (typeof item) {
            case 'number':
                inputObject['number'] = []
                break;
            case 'string':
                inputObject['string'] = [];
                break;
            case 'boolean':
                inputObject['boolean'] = [];
                break;
        }
    })
    input.forEach(item => {
        switch (typeof item) {
            case 'number':
                inputObject['number'].push(item)
                break;
            case 'string':
                inputObject['string'].push(item)
                break;
            case 'boolean':
                inputObject['boolean'].push(item)
                break;
        }
    })
    return inputObject;
}

console.log(separateTypes(['a', 1, 2, false, 'b']));