import React, { useEffect } from 'react';
import './App.css';
import { Cell } from './Cell'
import { useSelector, useDispatch } from 'react-redux';
import { loadTable, startChangingPlayer} from './actions';

function App() {
  const cells = useSelector(state => state.cells);
  const dispatch = useDispatch();
  const currentPlayer = 1;

  useEffect(() => {
    dispatch(loadTable())
  }, [dispatch]);

  // const changePlayer = () => {
  //   dispatch(startChangingPlayer(currentPlayer));
  //   // if cell.currentPlayer1 = 1
  //   // then currentPlayer = 2
  //   // else if cell.currentPlayer1 = 2
  //   // currentPlayer = 1
  // }

  return (
    <div className="App">
      <h1>Connect 4 Game</h1>
      <button>Start New Game</button>
      <div id="board">
        {cells.map(cell => <Cell key={cell.id} cell={cell} />)}
        <button>End Turn</button>
      </div>
    </div>
  );
}

export default App;
