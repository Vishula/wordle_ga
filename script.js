createBoxes()
setupKeyboard()

function tilteColors(letter, index) {
    // code from ian lenehan youtube account was used to get the logic to work 
    const correctLetterIndex = secretWord.includes(letter)

    // letter doesn't exist in the secret word. Turn it to grey
    if (!correctLetterIndex) {
        return 'rgba(58, 58, 60)'
    }
    
    const letterIndex = secretWord.charAt(index)
    // console.log(letterIndex);
    const correctPosition = letter === letterIndex
    
    // if the letter is in the correct position 
    if (correctPosition) {
        return 'rgba(83, 141, 78)'
    } else {
        return 'rgba(181, 159, 59)'
    }
}


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
        
        //  get the position of the first letter [id]  
        const firstLetterOfId = getTitleID * 5 + 1

        // animation for gameboard. 
        wordArray.map((letter, index) => {
            setTimeout(() => {
                const tileColor = tilteColors(letter, index)
                const letterId = firstLetterOfId + index 
                const getElementOfLetter = document.getElementById(letterId)
                getElementOfLetter.classList.add('animate__flipOutX')
                getElementOfLetter.style = `background-color:${tileColor}; border-color:${tileColor}`
            })
        })
        // update guess word count 
        getTitleID = getTitleID + 1 

        if (currentWord === secretWord) {
            window.alert(`Congratulations!!`)
            
        }
        if (guessWord.length === 7) {
            alert(`You ran out of guesses. Word is ${secretWord}`)
        }
        
    }
    
}
