export const Action = Object.freeze({
  LoadCellInfo: 'LoadCellInfo',
  MakeMove: 'MakeMove',
});

export function loadCellInfo(cell) {
    return {
        type: Action.LoadCellInfo,
        payload: cell,
    };
}

export function makeMove(cell, currPlayer) {
    return {
        type: Action.MakeMove,
        payload:{cell, currPlayer},
    };
}

function checkForErrors(response) {
    if (!response.ok) {
        throw Error(`${response.status}: ${response.statusText}`);
    }
    return response;
}

const host = 'http://connect4.daonx.me:5000';

export function loadTable() {
    return dispatch => {
        fetch(`${host}/play-connect4`)
        .then(checkForErrors)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                dispatch(loadCellInfo(data.board));
            }
        })
        .catch(e => console.error(e));
    };
}
