// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { useState, Fragment } from 'react'
import { Numbers } from './components/utils'
import Square from './components/Square'

function App() {
  const squares = Numbers(1,9);
  const [player, setPlayer] = useState("O")
  const changePlayer = () => setPlayer(player==="X"?"O":"X")
  return (
    <div className="game">
      <h1 className="game-header">Ta-Te-Ti</h1>
      { squares.map(s => 
        <>
          <Square value={player} callback={changePlayer}/>
        </>
      )}
    </div>
  )
}

export default App