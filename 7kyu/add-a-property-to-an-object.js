// Description:
//     Write a function that adds a named property to an object. It must be possible to set the property to a new value. If the property already exists on the object, and error should be thrown.


// function addProperty(obj, prop, value) {
//     for (let key in obj) {
//         if (prop === key) {
//             throw new Error('The property exists on the object')
//         }
//     }
//     obj[prop] = value
// }


function addProperty(obj, prop, value) {
    if (prop in obj) throw new Error('The property exists on the object');
    obj[prop] = value;
}



const vel = {
    name : 'John',
    age : 20,
}
addProperty (vel, 'isAdmin', 'yes');
console.log(vel)