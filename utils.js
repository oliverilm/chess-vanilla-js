/**
 * this module contains only global functions.
 * 
 * every function name must start with "glob" to represent its global value
 */

 const global = {
     matrixString: `rhbqkbhr
                    pppppppp
                    00000000
                    00000000
                    00000000
                    00000000
                    PPPPPPPP
                    RHBQKBHR`,
    images: {
        white: {
            pawn:   "img/pawn_white.png",
            rook:   "img/rook_white.png",
            bishop: "img/bishop_white.png",
            knight: "img/knight_white.png",
            queen:  "img/queen_white.png",
            king:   "img/king_white.png"
        },
        black: {
            pawn:   "img/pawn_black.png",
            rook:   "img/rook_black.png",
            bishop: "img/bishop_black.png",
            knight: "img/knight_black.png",
            queen:  "img/queen_black.png",
            king:   "img/king_black.png"
        },
        target : "img/dot.png"
    },
    getInitialCellContent: (cell) =>  {
        
        const pos = {
            1: {
                a: new Rook("white", cell),
                b: new Knight("white", cell),
                c: new Bishop("white", cell),
                d: new Queen("white", cell),
                e: new King("white", cell),
                f: new Bishop("white", cell),
                g: new Knight("white", cell),
                h: new Rook("white", cell)
            },
            2: {
                a: new Pawn("white", cell),
                b: new Pawn("white", cell),
                c: new Pawn("white", cell),
                d: new Pawn("white", cell),
                e: new Pawn("white", cell),
                f: new Pawn("white", cell),
                g: new Pawn("white", cell),
                h: new Pawn("white", cell)
            },
            7: {
                a: new Pawn("black", cell),
                b: new Pawn("black", cell),
                c: new Pawn("black", cell),
                d: new Pawn("black", cell),
                e: new Pawn("black", cell),
                f: new Pawn("black", cell),
                g: new Pawn("black", cell),
                h: new Pawn("black", cell)
            },
            8: {
                a: new Rook("black", cell),
                b: new Knight("black", cell),
                c: new Bishop("black", cell),
                d: new Queen("black", cell),
                e: new King("black", cell),
                f: new Bishop("black", cell),
                g: new Knight("black", cell),
                h: new Rook("black", cell)
            }
        }
        if (pos[cell.number]) {
            return pos[cell.number][cell.letter]
        }
        return null

    },
    posAsMatrix: (cell) => {

        const vals = {
            P: new Pawn("white", cell),
            B: new Bishop("white", cell),
            R: new Rook("white", cell),
            Q: new Queen("white", cell),
            K: new King("white", cell),
            H: new Knight("white", cell),
            p: new Pawn("black", cell),
            b: new Bishop("black", cell),
            r: new Rook("black", cell),
            q: new Queen("black", cell),
            k: new King("black", cell),
            h: new Knight("black", cell),
        }
        const str = global.matrixString
        const strArr = str.trim().split("\n").map(r => r.trim())

        const row = strArr[window.letters.length-cell.number]
        const pieceVal =row[window.letters.indexOf(cell.letter)]

        return vals[pieceVal] || null
    },

    repaint: () => {
        Object.values(window.cells).forEach(c => c.removeHighLight())
    },
    id: (cell) => {
        return `${cell.letter}${cell.number}`
    },

    get: (cell) => {
        return window.cells[global.id(cell)]
    },
    

 }