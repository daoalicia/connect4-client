import React from 'react';
import { useHistory } from 'react-router-dom';

export function WinGame(props) {
    const winner = props.winner;
    const history = useHistory();

    const startNewGame = () => {
        history.push('/new');
        window.location.reload();
    };


    return (
        <React.Fragment>
            <h1>Connect 4 Game</h1>
            <h2>{winner} wins!</h2>
            <button className="decor" onClick={startNewGame}>Start New Game</button>
        </React.Fragment>
    );
}