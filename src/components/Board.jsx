import Square from "./Square"

const Board = ({board, ...props}) => 
    board.map((row,ridx) => 
    row.map((col, cidx) => 
        <Square key={`${ridx}${cidx}`} row={ridx} col={cidx} {...props}/>
))

export default Board;