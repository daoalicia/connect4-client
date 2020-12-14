import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export function NewGame(props) {
    const history = useHistory();
    // true = singleplayer, false = multiplayer
    const [gameMode, setGameMode] = useState(true);
    const [disableButton, setDisableButton] = useState(true);
    // default to single player
    const [player1Name, setPlayer1Name] = useState('single');
    const [player2Name, setPlayer2Name] = useState('player');

    const startNewGame = () => {
        history.push(`/play/${player1Name}/${player2Name}`);
    };

    const single = () => {
        setDisableButton(false);
        setGameMode(true);
    }

    const multi = () => {
        setDisableButton(false);
        setGameMode(false);
    }

    return (
        <React.Fragment>
            <h1>Connect4 Game </h1>
            <div id="game-mode">
                <img src="/images/joystick.png" />
                <ul id="game-mode-desc">
                    <li><b>single player mode:</b> play against yourself.</li>
                    <li><b>multi player mode:</b> play against a friend on the same computer.</li>
                </ul>
                <div className="button-r">
                    <input type="radio" id="single" name="game-type" value="single" onClick={single}></input>
                    <label for="single">Single Player</label>
                    <input type="radio" id="single" name="game-type" value="multi" onClick={multi}></input>
                    <label for="multi">Multi Player (local)</label>
                </div>
            </div>
            {gameMode ? null : <div className="player-info"><div><label for="player1"  className="orange label2">Player 1 Name: </label><input type="text" id="player1" onChange={event => setPlayer1Name(event.target.value)}></input></div>
                <div><label for="player2" className="orange label2">Player 2 Name: </label><input type="text" id="player2" onChange={event => setPlayer2Name(event.target.value)}></input></div></div>}
            <button onClick={startNewGame} disabled={disableButton} className="decor">Start New Game</button>
        </React.Fragment>
    );
}