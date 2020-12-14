import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Cell } from './Cell';

export function Play(props) {
    const cells = props.cell;
    const currPlayer = props.player;

    const history = useHistory();

    const endGame = () => {
        history.push('/new');
        window.location.reload();
    };

    return (
        <React.Fragment>
            <div className="board">
                {cells.map(cell => <Cell key={cell.id} cell={cell} player={currPlayer} />)}
            </div>
            <button onClick={endGame}>End Game</button>
        </React.Fragment>
    );
}