createBoxes()
setupKeyboard()

// when hit enter key it should enter the word and move to next row if it has 5 letters in the word

function enterWord() {
    // get the current array and write if statements to do 
    const wordArray = getCurrentArray()
    console.log(wordArray);
    const currentWord = wordArray.join('')
    if (!wordle.includes(currentWord)) {
        // console.log(secretWord, currentWord);
        alert("Word doesn't exist, delete and type again")
        return //early exit 
    }
   
    // current word and secret word 
    for (let i = 0; i < 5; i++) {
        let userGuess = currentWord.charAt(i)
        let secretGuess = secretWord.charAt(i)
        const idOfMatchingLetters = (getTitleID) + 1

        if (userGuess === secretGuess) {
            wordArray.map((char, index) => {
                setTimeout(function colors() {
                    // get id of specific box
                    const idofLetter = idOfMatchingLetters + index
                    // const elofLetter = document.getElementById(idofLetter).style.backgroundColor = 'green'

                })
            })
            // get current tile element ID and set its background to green 
        } else if (currentWord.indexOf(guessWord) != -1) {
            // current tiles to yellow 
        } else {
            // tiles to grey 
        }



    }

    // }
    if (wordArray.length !== 5) {
        console.log(guessWord);
        // add code to initalize the current array and remove all the letters from the square boxes
        // currentWord.length = 0
        alert("Enter a 5 letter word and try again")

    }


    if (currentWord === secretWord) {
        window.alert(`Congratulations!!`)
        console.log(secretWord, currentWord);
        const idOfMatchingLetters = (getTitleID) + 1
        wordArray.map((character, index) => {
            setTimeout(function colors() {
                // const colorOfTiles = colorAdd(character, index)
                // this gives ID of each specific box 
                const idOfLetter = idOfMatchingLetters + index
                // get element and apply grey to background
                const elOfLetter = document.getElementById(idOfLetter).style.backgroundColor = 'green'
            })
        })




    }
    if (guessWord.length === 6) {
        alert(`You ran out of guesses. Word is ${secretWord}`)
    }


    guessWord.push([])
}
// color function 


// function colorAdd(guess, solution){
//     let r = []
//     for (let i = 0; i < guess.length; i++){
//         let userGuessed = guess.charAt(i)
//         let secretWordLetter = solution.charAt(i)

//         console.log(userGuessed, secretWordLetter);
//         if (userGuessed === secretWordLetter){
//             r.push('Green')



//         }else if (solution.indexOf(userGuessed)!=-1){
//             r.push('Yellow')
//         }
//         else {
//             r.push("Grey")
//         }
//     }
//     return r 
// }


function delWord() {
    const wordArray = getCurrentArray()
    wordArray.pop()

    console.log(wordArray);
    const currentBoxEl = document.getElementById(String(spaceOfBox - 1))
    currentBoxEl.innerHTML = ''
    spaceOfBox = spaceOfBox - 1
    console.log(currentBoxEl);
    console.log(spaceOfBox);



}



// update the box with letters
function updateBoxWords(key) {
    const currentBox = getCurrentArray()
    if (currentBox && currentBox.length < 5) {
        currentBox.push(key)
        // gets the box with id 1 
        const boxSpace = document.getElementById(String(spaceOfBox))
        spaceOfBox = spaceOfBox + 1;
        boxSpace.textContent = key
    }

}


