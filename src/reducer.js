import { Action } from "./actions";

const initialState = {
    cells: [],
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case Action.LoadCellInfo:
            return {
                ...state,
                cells: action.payload,
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