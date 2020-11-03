class Cell {
    constructor(letter, number) {
        this.letter = letter
        this.number = number
        this.piece = null;
        this.initialColor = null;
        this.element = document.createElement("td")
        this.targetDiv = document.createElement("div")
        this.waitingForClick = false
        this.init()
    }

    init() {
        this.getInitialColor()
        this.getPiece()

        this.element.style.border = "1px solid black";
        this.element.style.backgroundColor = this.initialColor
        this.element.style.position = "relative"

        this.targetDiv.className = "img-content"
        this.targetDiv.style.backgroundSize = "35%"
        this.targetDiv.style.scale = 0.5
        this.targetDiv.style.backgroundImage = `url('${global.images.target}')`

    }

    getPiece() {
        const content = global.posAsMatrix(this) 
        // const content = global.getInitialCellContent(this)
        this.piece = content
    }

    removeHighLight() {
        if (this.piece === null) {
            this.element.innerHTML = ""
        }
    }

    addPiece(piece) {
        this.piece = piece
        this.piece.cell = this
        this.piece.hasMoved = true

        return this
    }

    awaitingMove(piece) {
        this.waitingForClick = true
        this.element.appendChild(this.targetDiv)

        this.targetDiv.addEventListener("click", () => {
            if (!this.waitingForClick) return;

            const pieceCopy = window.pendingPiece.cell
            this.addPiece(window.pendingPiece)
            window.cells[global.id(pieceCopy)].piece = null

            this.waitingForClick = false
            this.element = this.element.cloneNode(false)
            window.pendingPiece = null
            global.repaint()
            globBoard.render()
        })
    }

    getInitialColor() { 
        const darkOnEven = ["b", "d", "f", "h"]
        if (
            (this.number % 2 === 0 && darkOnEven.includes(this.letter)) || 
            (this.number % 2 !== 0 && !darkOnEven.includes(this.letter))
            ) {

            this.initialColor = "#ccc"
        }
    }

    render() {
        if (this.piece) {
            this.element.appendChild(this.piece.render())
        }

        return this.element;
    }
}