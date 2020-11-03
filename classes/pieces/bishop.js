class Bishop extends Piece {


    getLegalMoves() {
        // can move up and down and left and right as long as there are free spaces
       
        return this.getMoves({
            rightUp: {
                letter: 1,
                number: 1
            },
            rightDown: {
                letter: 1,
                number: -1
            },
            leftUp: {
                letter: -1,
                number: 1
            },
            leftDown: {
                letter: -1,
                number: -1
            }
        })
    }
}