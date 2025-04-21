// Description:
//     Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
//     For example:
//     var questions = [{
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0
//     }, {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//         corAnswer: 0
//     }];
// After adding the property the result should be:
//     var questions = [{
//         question: "What's the currency of the USA?",
//         choices: ["US dollar", "Ruble", "Horses", "Gold"],
//         corAnswer: 0,
//         usersAnswer: null
//     }, {
//         question: "Where was the American Declaration of Independence signed?",
//         choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//         corAnswer: 0,
//         usersAnswer: null
//     }];
// The questions array is already defined for you and is not the same as the one in the example.
// Test.expect(questions[0].usersAnswer === null);
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

// Вариант 1 - пишем функцию для каждого элемента массива
// function addQuestion(item){
//     item.usersAnswer = null;
//     return item
// }
// questions.forEach(addQuestion);
// console.log(questions);

// Вариант 2
// questions.forEach(function(q) {
//     q.usersAnswer = null
// })

// Вариант 3
function addQuestion(arr){
    for (let i = 0; i < arr.length; i++) {
        arr[i].usersAnswer = null;
    }
    return arr;
}
addQuestion(questions)
console.log(questions);