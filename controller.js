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