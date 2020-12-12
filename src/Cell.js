import React from 'react';

export function Cell(props) {
    const cell = props.cell;

    const handleClick = () => {
        console.log(`Clicked on column ${cell.colNum} and row ${cell.rowNum}`);
    }

    return (
        <div onClick={handleClick} className="cell">{cell.colNum}, {cell.rowNum}</div>
    );
}