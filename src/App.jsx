import './App.css'

import { useEffect, useState } from 'react'
// Componente
import Player from './components/Player'
import Square from './components/Square'
import { GameStart, isWinner } from './controllers/Game';

function App() {
  const [game, setGame] = useState(GameStart())

  const changePlayer = (r,c) => {
    const {message, currentPlayer:a, nextPlayer:b} = game
    !message && setGame({
      ...game, currentPlayer: b,nextPlayer: a,
      board: game.board.map((row,ri) => row.map((col, ci) => r == ri && c == ci ? a : col))
    })
  }
  const resetGame = () => setGame(GameStart())

  useEffect(() => {
    const [{board:b, nextPlayer:p}, gameState ] = [ game, "finished"];
    if(isWinner(b,p)) setGame({...game, message:"Ganador "+p, gameState})
    else{
      const isDraw = b.map((row) => row.every(col => col !== "")).every(row => row !== false)
      isDraw && setGame({...game, message:"Empate", gameState})}
  }, [game.board])
  return (
    <div className="game">
      <h1 className="game-header">Ta-Te-Ti</h1>
      <Player {...game}/>
      { game.board.map((row,ridx) => row.map((col, cidx) => <Square key={`${ridx}${cidx}`}value={game.currentPlayer} callback={changePlayer} row={ridx} col={cidx} message={game.message}/>)
      )}
      <button className="game-header" onClick={resetGame}>Iniciar Partida</button>
    </div>
  )
}

export default App