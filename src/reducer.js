import { Action } from "./actions";

const initialState = {
    cells: [],
}

const findLowestRow = (state, col) => {
    let lowestRow = 7;
    state.cells.map(cell => {
        // if its in the same column
        if (cell.colNum === col) {
            // if the cell is unused
            if (cell.isPlayer1 === 0 && cell.isPlayer2 === 0) {
                if (cell.rowNum < lowestRow) {
                    lowestRow = cell.rowNum;
                }
            }
        }
        return cell;
    });
    return lowestRow;
}

const vertical = (state) => {
    let previous = 0;
    let player1 = 0;
    let player2 = 0;
    let currColSet;
    for (let col = 0; col < 7; col++) {
        currColSet = state.cells.filter(cell => cell.colNum === col);
        for (let i = 0; i < currColSet.length; i++) {
            if (currColSet[i].isPlayer1 === 1 && (previous === 0 || previous === 1)) {
                player1 = player1 + 1;
                previous = 1;
            } else if (currColSet[i].isPlayer2 === 1 && (previous === 0 || previous === 2)) {
                player2 = player2 + 1;
                previous = 2;
            } else {
                previous = currColSet[i].isPlayer1 === 0 ? currColSet[i].isPlayer2 : currColSet[i].isPlayer1;
                player1 = 0;
                player2 = 0;
            }
            if (player1 === 4) {
                return 1;
            } else if (player2 === 4) {
                return 2;
            }
        }
    }
    return 0;
}

const horizontal = (state) => {
    let previous = 0;
    let player1 = 0;
    let player2 = 0;
    let currRowSet;
    for (let row = 0; row < 6; row++) {
        currRowSet = state.cells.filter(cell => cell.rowNum === row);
        for (let i = 0; i < currRowSet.length; i++) {
            if (currRowSet[i].isPlayer1 === 1 && (previous === 0 || previous === 1)) {
                player1 = player1 + 1;
                previous = 1;
            } else if (currRowSet[i].isPlayer2 === 1 && (previous === 0 || previous === 2)) {
                player2 = player2 + 1;
                previous = 2;
            } else {
                previous = currRowSet[i].isPlayer1 === 0 ? currRowSet[i].isPlayer2 : currRowSet[i].isPlayer1;
                player1 = 0;
                player2 = 0;
            }
            if (player1 === 4) {
                return 1;
            } else if (player2 === 4) {
                return 2;
            }
        }
    }
    return 0;
}

const diagonal = (state) => {
    const diagonalSets = [
        [4, 10, 16, 22],
        [5, 11, 17, 23, 29],
        [6, 12, 18, 24, 30, 36],
        [7, 13, 19, 25, 31, 37],
        [14, 20, 26, 32, 38],
        [21, 27, 33, 39],
        [4, 12, 20, 28],
        [3, 11, 19, 27, 35],
        [2, 10, 18, 26, 34, 42],
        [1, 9, 17, 25, 33, 41],
        [8, 16, 24, 32, 40],
        [15, 23, 31, 39],
    ]
    let currDiagSet;
    let previous = 0;
    let player1 = 0;
    let player2 = 0;
    for (let currSet = 0; currSet < diagonalSets.length; currSet++) {
        currDiagSet = state.cells.filter(cell => diagonalSets[currSet].includes(cell.id));
        for (let i = 0; i < currDiagSet.length; i++) {
            if (currDiagSet[i].isPlayer1 === 1 && (previous === 0 || previous === 1)) {
                player1 = player1 + 1;
                previous = 1;
            } else if (currDiagSet[i].isPlayer2 === 1 && (previous === 0 || previous === 2)) {
                player2 = player2 + 1;
                previous = 2;
            } else {
                previous = currDiagSet[i].isPlayer1 === 0 ? currDiagSet[i].isPlayer2 : currDiagSet[i].isPlayer1;
                player1 = 0;
                player2 = 0;
            }
            if (player1 === 4) {
                return 1;
            } else if (player2 === 4) {
                return 2;
            }
        }

    }
    return 0;
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.LoadCellInfo:
            return {
                ...state,
                cells: action.payload,
            };
        case Action.MakeMove:
            const col = action.payload.cell.colNum;
            const row = findLowestRow(state, col);
            return {
                ...state,
                cells: state.cells.map(cell => {
                    // no valid space in this column selected
                    if (row === 7) {
                        console.log('invalid move');
                        return cell;
                    } else if (cell.colNum === action.payload.cell.colNum && cell.rowNum === row && action.payload.currPlayer === 1) {
                        return { ...cell, isPlayer1: 1 };
                    } else if (cell.colNum === action.payload.cell.colNum && cell.rowNum === row && action.payload.currPlayer === 2) {
                        return { ...cell, isPlayer2: 1 };
                    }
                    else {
                        return cell;
                    }
                }),
            };
        case Action.CheckBoard:
            let checkVert = vertical(state);
            let checkHor = horizontal(state);
            let checkDiag = diagonal(state);

            if (checkVert === 1 || checkHor === 1 || checkDiag === 1) {
                console.log("player 1 wins");
                return {
                    ...state,
                    cells: state.cells.map(cell => {
                        return { ...cell, foundWinner: true, winner: 1 };
                    }),
                };
            } else if (checkVert === 2 || checkHor === 2 || checkDiag === 2) {
                console.log("player 2 wins");
                return {
                    ...state,
                    cells: state.cells.map(cell => {
                        return { ...cell, foundWinner: true, winner: 2 };
                    }),
                };
            } else {
                return {
                    ...state,
                    cells: state.cells.map(cell => { return { ...cell, foundWinner: undefined }; })
                };
            }
        default:
            return state;
    }
}

export default reducer;

/*
[
        {colNum: 0, rowNum: 0},
        {colNum: 1, rowNum: 0},
        {colNum: 2, rowNum: 0},
        {colNum: 3, rowNum: 0},
        {colNum: 4, rowNum: 0},
        {colNum: 5, rowNum: 0},
        {colNum: 6, rowNum: 0},

        {colNum: 0, rowNum: 1},
        {colNum: 1, rowNum: 1},
        {colNum: 2, rowNum: 1},
        {colNum: 3, rowNum: 1},
        {colNum: 4, rowNum: 1},
        {colNum: 5, rowNum: 1},
        {colNum: 6, rowNum: 1},

        {colNum: 0, rowNum: 2},
        {colNum: 1, rowNum: 2},
        {colNum: 2, rowNum: 2},
        {colNum: 3, rowNum: 2},
        {colNum: 4, rowNum: 2},
        {colNum: 5, rowNum: 2},
        {colNum: 6, rowNum: 2},

        {colNum: 0, rowNum: 3},
        {colNum: 1, rowNum: 3},
        {colNum: 2, rowNum: 3},
        {colNum: 3, rowNum: 3},
        {colNum: 4, rowNum: 3},
        {colNum: 5, rowNum: 3},
        {colNum: 6, rowNum: 3},

        {colNum: 0, rowNum: 4},
        {colNum: 1, rowNum: 4},
        {colNum: 2, rowNum: 4},
        {colNum: 3, rowNum: 4},
        {colNum: 4, rowNum: 4},
        {colNum: 5, rowNum: 4},
        {colNum: 6, rowNum: 4},

        {colNum: 0, rowNum: 5},
        {colNum: 1, rowNum: 5},
        {colNum: 2, rowNum: 5},
        {colNum: 3, rowNum: 5},
        {colNum: 4, rowNum: 5},
        {colNum: 5, rowNum: 5},
        {colNum: 6, rowNum: 5},
    ]
*/