import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function NewGame(props) {
    const history = useHistory();
    // true = singleplayer, false = multiplayer
    const [gameMode, setGameMode] = useState(true);
    // default to single player
    const [player1Name, setPlayer1Name] = useState('single');
    const [player2Name, setPlayer2Name] = useState(' ');

    const startNewGame = () => {
        history.push(`/play/${player1Name}/${player2Name}`);
    };

    return (
        <React.Fragment>
            <h1>Connect 4 Game</h1>
            <div id="game-mode">
                <input type="radio" id="single" name="game-type" value="single" onClick={event => setGameMode(true)}></input>
                <label for="single">Single Player</label>
                <input type="radio" id="single" name="game-type" value="multi" onClick={event => setGameMode(false)}></input>
                <label for="multi">Multi Player (local)</label>
            </div>
            {gameMode ? null : <div className="player-info"><div><label for="player1">Player 1 Name: </label><input type="text" id="player1" onChange={event => setPlayer1Name(event.target.value)}></input></div>
                <div><label for="player2">Player 2 Name: </label><input type="text" id="player2" onChange={event => setPlayer2Name(event.target.value)}></input></div></div>}
            <button onClick={startNewGame}>Start New Game</button>
        </React.Fragment>
    );
}