class Pawn extends Piece {

    getLegalMoves() {
        // return suitable cells for the piece to move

        const cells = Object.values(window.cells)
        const currentPosition = {letter: this.cell.letter, number: this.cell.number}
        
        if (this.type === "white") {
            return this.hasMoved 
                ? cells.filter(c =>
                    c.piece === null &&
                    c.letter === currentPosition.letter &&
                    c.number === currentPosition.number + 1 )
                : cells.filter(c =>
                    c.piece === null &&
                    c.letter === currentPosition.letter &&
                    (c.number === currentPosition.number + 1 || c.number === currentPosition.number + 2))
        } else {
            return this.hasMoved 
                ? cells.filter(c =>
                    c.piece === null &&
                    c.letter === currentPosition.letter &&
                    c.number === currentPosition.number - 1 )
                : cells.filter(c =>
                    c.piece === null &&
                    c.letter === currentPosition.letter &&
                    (c.number === currentPosition.number - 1 || c.number === currentPosition.number - 2))
        }
    }

}