import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkBoard, makeMove } from './actions';

export function Cell(props) {
    const cell = props.cell;
    const currPlayer = props.player;
    const dispatch = useDispatch();
    const history = useHistory();

    // onPlay make a move
    const onPlay = () => {
        dispatch(makeMove({
            id: cell.id,
            rowNum: cell.rowNum,
            colNum: cell.colNum,
            isPlayer1: cell.isPlayer1,
            isPlayer2: cell.isPlayer2,
        }, currPlayer));
        dispatch(checkBoard(cell));
    }

    if (cell.foundWinner) {
        history.push(`/winner/${cell.winner}`);
    }

    if (cell.isPlayer1 === 1) {
        return (
            <div className="cell player1" ></div>
        );
    } else if (cell.isPlayer2 === 1) {
        return (
            <div className="cell player2"></div>
        );
    } else {
        return (
            <div onClick={onPlay} className="cell"></div>
        );
    }


}