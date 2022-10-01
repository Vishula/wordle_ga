function createBoxes() {
    // create gameboard 
    const gameBoard = document.getElementById('game-board')
    for (let box = 0; box < 30; box++) {
        let boxes = document.createElement('div')
        boxes.classList.add('square')
        boxes.setAttribute('id', box + 1)
        // boxes.innerHTML = '@'
        gameBoard.append(boxes)
    }
}
