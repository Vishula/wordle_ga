// Array that has all the words and inside that array each word will be an array
// that contains each letter
let guessWord = [[]]
let getTitleID = 0;
console.log(guessWord);
// box to start 
let spaceOfBox = 1
// const secretWord = 'weeks'
// console.log(wordle);

// user = diary
// secret = ['a', 'p', 'p', 'l', 'e']

let secretWord = wordle[Math.floor(Math.random() * wordle.length)]
console.log("Answer: ", secretWord);