let globBoard;

window.onload = () => {
    const parent = document.getElementById("container")
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h"]
    const numbers = [8,7,6,5,4,3,2,1]

    window.letters = letters;
    window.numbers = numbers;

    globBoard = new Board(parent)
    globBoard.render()

    window.board = globBoard;
}