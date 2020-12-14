import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { loadTable } from './actions';
import { NewGame } from './NewGame';
import { Play } from './Play';

function App() {
  const cells = useSelector(state => state.cells);
  const dispatch = useDispatch();
  const [currPlayer, setCurrPlayer] = useState();
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [player, setPlayer] = useState(1);

  useEffect(() => {
    dispatch(loadTable())
  }, [dispatch]);

  const togglePlayer = () => {
    if (player === 1) {
      setPlayer(2);
      setCurrPlayer(player2);
      console.log(currPlayer);
    } else {
      setPlayer(1);
      setCurrPlayer(player1);
      console.log(currPlayer);
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
            if (p1 === 'single' && p2 === ' ') {
              p1 = 'Red';
              p2 = 'Yellow';
            }
            setPlayer1(p1);
            setPlayer2(p2);
            setCurrPlayer(player1);
            return (
              <div>
                <h1>Connect 4 Game</h1>
                <h3>Current Turn: {currPlayer}</h3>
                <div id="play" onClick={togglePlayer}>
                  <Play cell={cells} player={player} />
                </div>
              </div>
            );
          }} />
          {/* <Route exact path="/winner"></Route> */}
          <Redirect to="/new" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
