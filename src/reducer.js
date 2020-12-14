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

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.LoadCellInfo:
            return {
                ...state,
                cells: action.payload,
            };
        case Action.MakeMove:
            console.log(action.payload.currPlayer);
            console.log(action.payload.currPlayer === 1);
            console.trace();
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
                        return { ...cell.id, isPlayer1: 1};
                    } else if (cell.colNum === action.payload.cell.colNum && cell.rowNum === row && action.payload.currPlayer === 2) {
                        return { ...cell.id, isPlayer2: 1 };
                    }
                    else {
                        return cell;
                    }
                }),
            };
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