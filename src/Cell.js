import React from 'react';
import { useDispatch } from 'react-redux';
import { makeMove } from './actions';

export function Cell(props) {
    const cell = props.cell;
    const dispatch = useDispatch();

    // onPlay make a move
    const onPlay = () => {

        dispatch(makeMove({
            id: cell.id,
            rowNum: cell.rowNum,
            rowCol: cell.colNum,
            isPlayer1: cell.isPlayer1,
        },));
        console.log(cell.colNum, cell.rowNum);
    }

    if (cell.isPlayer1 === 1) {
        return (
            <div className="cell player1">{cell.colNum}, {cell.rowNum}, {cell.isPlayer1} {cell.currentPlayer}</div>
        );
    } else if (cell.isPlayer1 === 2) {
        return (
            <div className="cell player2">{cell.colNum}, {cell.rowNum}, {cell.isPlayer1} {cell.currentPlayer} </div>
        );
    } else {
        return (
            <div onClick={onPlay} className="cell"> {cell.colNum}, {cell.rowNum}, {cell.isPlayer1} {cell.currentPlayer} </div>
        )
    }
}