class Queen extends Piece {

    getLegalMoves() {
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
            },
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