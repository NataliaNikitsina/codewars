// Description:
//     Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.
//     All input object properties will have only numeric values. Objects are combined so that the values of matching keys are added together.
//     An example:
//     const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.
//     const objA = { a: 10, b: 20, c: 30 };
//     const objB = { a: 3, c: 6, d: 3 };
//     const objC = { a: 5, d: 11, e: 8 };
//     const objD = { c: 3 };
//         assert.deepEqual(combine(objA, objB), { a: 13, b: 20, c: 36, d: 3 });
//         assert.deepEqual(combine(objA, objC), { a: 15, b: 20, c: 30, d: 11, e: 8 });
//         assert.deepEqual(combine(objA, objB, objC), { a: 18, b: 20, c: 36, d: 14, e: 8 });
//         assert.deepEqual(combine(objA, objC, objD), { a: 15, b: 20, c: 33, d: 11, e: 8 });
//         assert.deepEqual(combine({}, {}, {}), {});
//         assert.deepEqual(combine(objA, objC, {}), { a: 15, b: 20, c: 30, d: 11, e: 8 });


//function combine(...args) {
    // let newObj = {...obj1, ...obj2};
    // for (let key in obj1) {
    //     for (let prop in obj2) {
    //         if (prop === key) {
    //             newObj[key] = obj1[key] + obj2[prop]
    //             delete obj2[prop];
    //         }
    //     }
    // }
    //return newObj;
//}


// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// console.log(combine(objA, objB))


const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

// function combine(...objects) {
//     const result = {};
//     for (const obj of objects) {
//         for (const [key, value] of Object.entries(obj)) {
//             result[key] = (result[key] || 0) + value;
//         }
//     }
//
//     return result;
// }

console.log(combine(objA, objB, objC));

function combine() {
    let obj = {}
    for (let i = 0; i < arguments.length; i++) {
        for (let key in arguments[i]) {
            obj[key] = obj[key] ? obj[key] + arguments[i][key]: arguments[i][key]
        }
    }
    return obj;
}