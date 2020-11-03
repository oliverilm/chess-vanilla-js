class Knight extends Piece {
    getLegalMoves() {

        const cells = Object.values(window.cells)
        const currentPosition = {letter: this.cell.letter, number: this.cell.number}
        
        const combinations = [
            {
                letter: -2,
                number: 1
            },
            {
                letter: -1,
                number: 2
            },
            {
                letter: 1,
                number: 2
            },
            {
                letter: 2,
                number: 1
            },
            {
                letter: -1,
                number: -2
            },
            {
                letter: -2,
                number: -1
            },
            {
                letter: 2,
                number: -1
            },
            {
                letter: 1,
                number: -2
            }
        ]

        const suitableCells = combinations.map(c => (
            cells.find(cell => 
                cell.letter === window.letters[window.letters.indexOf(currentPosition.letter) + c.letter] &&
                cell.number === currentPosition.number + c.number)
        ))

        return suitableCells.filter(c => c !== undefined && (c.piece == null || c.piece.type !== this.type))
    }
}