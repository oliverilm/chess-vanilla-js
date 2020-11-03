class Rook extends Piece {

    getLegalMoves() {
        return this.getMoves({
            up: {
                letter: 0,
                number: 1
            },
            down: {
                letter: 0,
                number: -1
            },
            left: {
                letter: -1,
                number: 0
            },
            right: {
                letter: 1,
                number: 0
            }
        })
    }
    
}