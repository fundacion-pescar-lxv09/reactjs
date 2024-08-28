import { Numbers } from "../components/utils"

export const GameStart = (a ="X", b="O") => ({
    gameState: "running",
    currentPlayer: a,
    nextPlayer: b,
    board: Numbers(),
    message: ""
})

export const setBoard = (arr,r,c,a) => arr.map((row,ri) => 
    row.map((col, ci) => (r == ri && c == ci) ? a : col))