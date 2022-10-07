// Array that has all the words and inside that array each word will be an array
// that contains each letter
let guessWord = [[]] //matrix 
// to find out which tile it is on
let getTitleID = 0;
console.log(guessWord);
// when letter is chocen, iterates through Id's
let spaceOfBox = 1
// const secretWord = 'weeks'
let currentRow = 0
 


let secretWord = wordle[Math.floor(Math.random() * wordle.length)]
console.log("Answer: ", secretWord);


// gets the current array thats updating
// function getCurrentArray() {
//     // gives you the current row number of the array
//     // const currentGuessedWords = guessWord.length
//     // console.log(currentGuessedWords);
//     // -1 because array length starts with index 0
//     return guessWord[currentRow]

// }
function getCurrentArray() {
    return guessWord[(guessWord.length) - 1 ]
}