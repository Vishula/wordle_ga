// Array that has all the words and inside that array each word will be an array
// that contains each letter
let guessWord = [[]]
console.log(guessWord);  
// box to start 
let spaceOfBox = 1
const secretWord = 'weeks'

function createBoxes(){
// create gameboard 
const gameBoard = document.getElementById('game-board')
for (let box = 0; box <30; box++){
    let boxes = document.createElement('div')
    boxes.classList.add('square')
    boxes.setAttribute('id', box + 1)
    // boxes.innerHTML = '@'
    gameBoard.append(boxes)
}  
}
createBoxes()

// when hit enter key it should enter the word and move to next row if it has 5 letters in the word

function enterWord() {
    const wordArray = getCurrentArray()
    if (wordArray.length != 5) {
        console.log(guessWord);
        alert("Enter a 5 letter word and try again")
    }
    const currentWord = wordArray.join('')
    if (currentWord == secretWord){
        window.alert (`Congratulations Mate!!`)
    }
    if (guessWord.length === 6){
        alert(`You ran out of guesses. Word is ${secretWord}`)
    }
    guessWord.push([])
}

function delWord(){
    const wordArray = getCurrentArray()
    wordArray.pop()

    console.log(wordArray);
    const currentBoxEl = document.getElementById(String(spaceOfBox - 1))
    currentBoxEl.innerHTML = ''
    spaceOfBox = spaceOfBox - 1
    console.log(currentBoxEl);
    console.log(spaceOfBox);
     


}
const keyboardKeys = document.querySelectorAll('.row button')
for (let i = 0; i < keyboardKeys.length; i++){
    keyboardKeys[i].onclick = ({target}) => {
        const key = target.getAttribute('data-key')
        // console.log(key);

        if (key === 'enter'){
            enterWord()
            return
        }
        if (key === 'del'){
            delWord()
            return
        }
        updateBoxWords(key)


    }
}
// output.textContent = output.textContent.slice(0, output.textContent.length-1);

// gets the current array thats updating
function getCurrentArray(){
    const currentGuessedWords = guessWord.length
    return guessWord[currentGuessedWords - 1]
     
}
getCurrentArray()

// update the box with letters
function updateBoxWords(key) {
    const currentBox = getCurrentArray()
    if (currentBox && currentBox.length < 5){
        currentBox.push(key)
        // gets the box with id 1 
        const boxSpace = document.getElementById(String(spaceOfBox))
        spaceOfBox = spaceOfBox + 1;

        boxSpace.textContent = key
    }
    
}
 


// // When you press the keyboard it will append it to the square boxes
// function letterInsert(){
//     // get keyboard from HTML 
//     const squaresOutput = document.getElementsByClassName ('square')
//     const keyboard = document.getElementsByClassName('key')
     
//     for (let square of squaresOutput){
//         console.log(square);
//         for (let key of keyboard){
//             console.log(key);
//             let keyElement = key.textContent
//             key.addEventListener('click', function(){
//                 switch (key) {
//                     case '␡':
//                         output.textContent = output.textContent.slice(0, output.textContent.length-1);
//                         break;
//                     case '␡ all':
//                         output.textContent = '';
//                         break;
//                     default:
//                         }
                     
//             })
//         }

//     }
    

// }

// letterInsert()

 