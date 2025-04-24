let questions = [
    {
        category: 'Animals',
        question: 'What Animals do you know?',
        choices: ['bear', 'rose', 'bee'],
        answer: 'bear',
    },
    {
        category: 'Birds',
        question: 'What Birds do you know?',
        choices: ['bear', 'rose', 'chicken'],
        answer: 'chicken',
    },
    {
        category: 'Plants',
        question: 'What Plants do you know?',
        choices: ['chicken', 'rose', 'bee'],
        answer: 'rose',
    },
    {
        category: 'Trees',
        question: 'What Trees do you know?',
        choices: ['oak', 'chicken', 'bear'],
        answer: 'oak',
    },
    {
        category: 'Insects',
        question: 'What Insects do you know?',
        choices: ['bee', 'oak', 'rose'],
        answer: 'bee',
    }
];

function getRandomQuestion (arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex].question;
}


function getRandomComputerChoice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    let randomNam = Math.floor(Math.random() * arr[randomIndex].choices.length);
    return arr[randomIndex].choices[randomNam];
}


function getResults(arr) {
    let q = getRandomQuestion(arr);
    console.log(q);
    let c = getRandomComputerChoice(arr);
    console.log(c);
    for (let i = 0; i < arr.length; i++) {
        if ((q === arr[i].question) && (c === arr[i].answer)) {
            return `The computer's choice is correct!`
        } else if (q === arr[i].question) {
            return `The computer's choice is wrong. The correct answer is: ${arr[i].answer}`
        }
    }
}
console.log(getResults(questions));