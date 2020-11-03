class Board {
    constructor(parent) {
        this.parent = parent

        this.init()
    }

    init() {
        this.generateCells()
    }

    generateCells() {
        let cells = {}
        for (let number of window.numbers) {
            for (let letter of window.letters) {
                const cell = new Cell(letter, number)
                cells[`${letter}${number}`] = cell
            }
        }
        window.cells = cells
    }


    render() {
        this.parent.innerHTML = ""

        const table = document.createElement("table")
        table.style.minWidth = "90vh";
        table.style.minHeight = "90vh";
        table.style.borderCollapse = "collapse"

        for(let number of window.numbers){
            const row = document.createElement("tr")
            for (let letter of window.letters) {
                const cell = window.cells[`${letter}${number}`]
                cell.waitingForClick = false;
                row.appendChild(cell.render())
            }
            table.appendChild(row)
        }

        this.parent.appendChild(table)
    }
}