createBoxes()
setupKeyboard()

// when hit enter key it should enter the word and move to next row if it has 5 letters in the word
function enterWord() {
    // get the current array and write if statements to do 
    const wordArray = getCurrentArray()

    // join the array together
    const currentWord = wordArray.join('')
    
    if (!wordle.includes(currentWord) && wordArray.length !== 5) {
        // console.log(secretWord, currentWord);
        alert("Word doesn't exist, delete and type again")

        return //early exit 
    }

    else {
        guessWord.push([])
        // flip animation 
        const timeInterval = 150 
        //  get the position of the first letter [id]  
        const firstLetterOfId = getTitleID * 5 + 1 

        // animation for gameboard. 
        wordArray.map((letter, index) => {
            setTimeout(() => {
                const tileColor = tilteColors(letter, index)
                const letterId = firstLetterOfId + index 
                const getElementOfLetter = document.getElementById(letterId)
                getElementOfLetter.classList.add()
                getElementOfLetter.style = `background-color:${tileColor}; border-color:${tileColor}`
            })
        })
        // update word count 
        getTitleID = getTitleID + 1 

        if (currentWord === secretWord) {
            window.alert(`Congratulations!!`)
            // console.log(secretWord, currentWord);
        }
        if (guessWord.length === 7) {
            alert(`You ran out of guesses. Word is ${secretWord}`)
        }
        
    }
    
}

function tilteColors(letter, index) {
    const wordArray = getCurrentArray()
    const correctLetterIndex = wordArray.includes(letter)

    // letter doesn't exist in the secret word. Turn it to grey
    if (!correctLetterIndex) {
        return 'rgba(58, 58, 60)'
    }

    // code from ian lenehan youtube account. 
    
    const letterIndex = secretWord.charAt(index)
    console.log(letterIndex);
    const correctPosition = letter == letterIndex
    
    if (correctPosition) {
        return 'rgb(83, 141, 78)'
    } else {
        return 'rgb(181, 159, 59)'
    }

}

