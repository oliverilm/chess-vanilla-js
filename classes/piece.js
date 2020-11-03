class Piece {
    constructor(type, cell) {
        this.cell = cell;
        this.type = type;
        this.hasMoved = false;
        this.isClicked = false;
    }

    getMoves(directions) {
        const currentPos = this.currentPos()
        const cells = Object.values(window.cells)
        
        const suitableCells = []

        Object.values(directions).forEach(dir => {
            let currentLetter = currentPos.letter;
            let currentNumber = currentPos.number;
            while (true) {
                const nextLetter = window.letters[window.letters.indexOf(currentLetter) + dir.letter]
                const nextCell = cells.find(c => c.letter === nextLetter && c.number === currentNumber + dir.number)

                if (nextCell !== undefined && nextCell.piece === null) {
                    suitableCells.push(nextCell)
                    currentLetter = nextLetter
                    currentNumber += dir.number
                } else if (nextCell !== undefined && nextCell.piece !== null && nextCell.piece.type !== this.type) {
                    suitableCells.push(nextCell)
                    break;
                } else {
                    break;
                }
            }
        })

        return suitableCells
    }

    currentPos() {
        return {letter: this.cell.letter, number: this.cell.number}
    }

    render() {
        const piece = document.createElement("div")
        piece.className = "img-content"
        piece.style.backgroundSize = "100%"
        piece.style.backgroundImage = `url('${global.images[this.type][this.constructor.name.toLowerCase()]}')`

        piece.addEventListener("click", () => {
            global.repaint()
            const suitableCells = this.getLegalMoves()

            window.pendingPiece = this;
            suitableCells.forEach(c => {
                c.awaitingMove(this)
            })
        })

        return piece
    }
}