createBoxes()
setupKeyboard()

// when hit enter key it should enter the word and move to next row if it has 5 letters in the word
function enterWord() {
    // get the current array and write if statements to do 
    const wordArray = getCurrentArray()
    console.log(wordArray);
    console.log(currentRow);
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

        // animation for gameboard. code from ian lenehan youtube account 
        wordArray.map((letter, index) => {
            setTimeout(() => {
                const tileColor = tilteColors(letter, index)
                const letterId = firstLetterOfId + index 
                const getElementOfLetter = document.getElementById(letterId)
                getElementOfLetter.classList.add()
                getElementOfLetter.style = `background-color:${tileColor}; border-color:${tileColor}`
            })
        })
        
    }



    // if (wordArray.length !== 5) {
    //     console.log(guessWord);
    //     // add code to initalize the current array and remove all the letters from the square boxes
    //     // currentWord.length = 0
    //     alert("Enter a 5 letter word and try again")

    // }


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
    if (guessWord.length === 7) {
        alert(`You ran out of guesses. Word is ${secretWord}`)
    }


    
    currentRow++
}

function tilteColors(letter, index) {
    const correctLetterIndex = wordArray.includes(letter)

    // letter doesn't exist in the secret word. Turn it to grey
    if (!correctLetterIndex) {
        return (58, 58, 60)
    }
    // 

    const letterIndex = secretWord.charAt(index)
    console.log(letterIndex);
    const correctPosition = letter == letterIndex

    if (correctPosition) {
        return 'rgb(83, 141, 78, 0.7)'
    } else {
        return 'rgb(181, 159, 59, 0.7)'
    }

}