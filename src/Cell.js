import React from 'react';
import { useDispatch } from 'react-redux';
import { makeMove } from './actions';

export function Cell(props) {
    const cell = props.cell;
    const currPlayer = props.player;
    const dispatch = useDispatch();


    const dropToken = () => {
        if (cell.isPlayer1 === 0 && cell.isPlayer2 === 0) {
            return 1;
        } else {
            return 0;
        }
    }

    // onPlay make a move
    const onPlay = () => {
        // if (dropToken() === 1) {
        //     dispatch(makeMove({
        //         id: cell.id,
        //         rowNum: cell.rowNum,
        //         colNum: cell.colNum,
        //         isPlayer1: cell.isPlayer1,
        //         isPlayer2: cell.isPlayer2,
        //     }, currPlayer));
        // } else if (dropToken() === 0) {
        //         dispatch(makeMove({
        //             id: cell.id,
        //             rowNum: cell.rowNum + 1,
        //             colNum: cell.colNum,
        //             isPlayer1: cell.isPlayer1,
        //             isPlayer2: cell.isPlayer2,
        //         }, currPlayer));
        // }
        dispatch(makeMove({
            id: cell.id,
            rowNum: cell.rowNum + 1,
            colNum: cell.colNum,
            isPlayer1: cell.isPlayer1,
            isPlayer2: cell.isPlayer2,
        }, currPlayer));
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
            <div onClick={onPlay} className="cell">{cell.colNum} {cell.rowNum}</div>
        );
    }


}