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

    function delWord() {
        const wordArray = getCurrentArray()


        console.log(wordArray);
        const currentBoxEl = document.getElementById(String(spaceOfBox - 1))
        currentBoxEl.textContent = ''
        spaceOfBox = spaceOfBox - 1
        wordArray.pop()
        console.log(currentBoxEl);
        console.log(spaceOfBox);



    }


const keyboardKeys = document.querySelectorAll('.row button')
function setupKeyboard() {
    for (let i = 0; i < keyboardKeys.length; i++) {
        keyboardKeys[i].onclick = ({ target }) => {
            const key = target.getAttribute('data-key')
            // console.log(key);

            if (key === 'enter') {
                enterWord()
                return
            }
            if (key === 'del') {
                delWord()
                // output.textContent = output.textContent.slice(0, output.textContent.length-1);

                return
            }
            updateBoxWords(key)


        }
    }
}