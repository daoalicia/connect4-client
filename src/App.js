import React, { useEffect } from 'react';
import './App.css';
import { Cell } from './Cell'
import { useSelector, useDispatch } from 'react-redux';
import { loadTable} from './actions';

function App() {
  const cells = useSelector(state => state.cells);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTable())
  }, [dispatch]);

  const inGame = () => {
    document.getElementById('board').style.display('block');
  }

  return (
    <div className="App">
      <h1>Connect 4 Game</h1>
      <button onClick={inGame}>Start New Game</button>
      <div id="board">
        {cells.map(cell => <Cell key={cell.id} cell={cell} />)}
      </div>
    </div>
  );
}

export default App;
