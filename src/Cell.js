import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {makeMove} from './actions';

export function Cell(props) {
    const cell = props.cell;
    const dispatch = useDispatch();
    const [isPlayer1, setPlayer1] = useState(cell.isPlayer1);
    const [isPlayer2, setPlayer2] = useState(cell.isPlayer2);

    // onPlay make a move
    const onPlay = () => {
        dispatch(makeMove({
            id: cell.id,
            rowNum: cell.rowNum,
            rowCol: cell.colNum,
            isPlayer1: cell.isPlayer1,
            isPlayer2: cell.isPlayer2,
        }));
    }

    return (
        <div onClick={onPlay} className="cell">{cell.colNum}, {cell.rowNum}</div>
    );


}