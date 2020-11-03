class King extends Piece {

   
    getLegalMoves() {
        // can move up and down and left and right as long as there are free spaces
        const currentPos = this.currentPos()
        const cells = Object.values(window.cells)
        const allNumbers = [currentPos.number + 1, currentPos.number - 1, currentPos.number ]
        const allLetters = [
            currentPos.letter,
            window.letters[window.letters.indexOf(currentPos.letter) + 1],
            window.letters[window.letters.indexOf(currentPos.letter) - 1]]

        const suitableCells = cells.filter(c => 
            c.piece === null && 
                (allLetters.includes(c.letter) && allNumbers.includes(c.number)))

        return suitableCells

    }

}