import './App.css'

import { useEffect, useState } from 'react'
// Componentes
import Player from './components/Player'
import Board from './components/Board'
// Controladores
import { GameStart, setBoard } from './controllers/Game';
import { isDraw, isWinner } from './controllers/Player';

function App() {
  // Estado de la Aplicacion
  const [game, setGame] = useState(GameStart())
  // Reinicio de Estado
  const resetGame = () => setGame(GameStart())
  // Actualizacion parcial del Estado
  const changePlayer = (r,c) => {
    // Extraccion de Propiedades
    const {message, currentPlayer:a, nextPlayer:b} = game
    !message && setGame({
      ...game, currentPlayer: b,nextPlayer: a,
      board: setBoard(game.board, r, c, a)
  })}
  // Equivalente de ComponentDidUpdate
  useEffect(() => {
    // Funcion de actualizacion
    const [{board:b, nextPlayer:p}, gameState ] = [ game, "finished"];
    if(isWinner(b,p)) setGame({...game, message:"Ganador "+p, gameState})
    else isDraw(b) && setGame({...game, message:"Empate", gameState})
  }, [game.board]) // Observacion de Cambios externos
  // Renderizado de la aplicacion
  return (
    <div className="game">
      <h1 className="game-header">Ta-Te-Ti</h1>
      <Player {...game}/>
      <Board callback={changePlayer} {...game}/>
      <button className="game-header" onClick={resetGame}>Iniciar Partida</button>
    </div>
  )
}

export default App