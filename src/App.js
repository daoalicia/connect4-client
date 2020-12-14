import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadTable } from './actions';
import { NewGame } from './NewGame';
import { Play } from './Play';
import { WinGame } from './WinGame';

function App() {
  const cells = useSelector(state => state.cells);
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();

  const [player, setPlayer] = useState(1);

  useEffect(() => {
    dispatch(loadTable())
  }, [dispatch]);

  const togglePlayer = () => {
    if (player === 1) {
      setPlayer(2);
    } else {
      setPlayer(1);
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/new">
            <NewGame game={cells} />
          </Route>
          <Route exact path="/play">
            <Play board={cells} />
          </Route>
          <Route exact path="/play/:p1/:p2" children={props => {
            let p1 = props.match.params.p1;
            let p2 = props.match.params.p2;
            let playerName = "1";
            if (p1 === 'single' && p2 === 'player') {
              p1 = 'Red';
              p2 = 'Yellow';
            }
            setPlayer1(p1);
            setPlayer2(p2);
            if (player === 1) {
              playerName = player1;
            } else {
              playerName = player2;
            }
            return (
              <div className="game">
                <h1>Connect 4 Game</h1>
                <h3>Current Turn: {playerName}</h3>
                <div id="instructions">To make a move, click on a white circle in the column you want to drop your token.</div>
                <div id="play" onClick={togglePlayer}>
                  <Play cell={cells} player={player} />
                </div>
              </div>
            );
          }} />
          <Route exact path="/winner/:id" children={props => {
            let id = parseInt(props.match.params.id);
            if (id === 1) {
              return (
                <WinGame cell={cells} winner={player1} />
              );
            } else {
              return (
                <WinGame cell={cells} winner={player2} />
              );
            }
          }} />
          <Redirect to="/new" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
