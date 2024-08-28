import { useState } from "react"
import { squareStyle } from "../styles/Square";

function Square({callback, row, col, message, ...props}) {
    const [content, setContent] = useState("");
    const setValue = () => (!content && !message) && (setContent(props.currentPlayer), callback(row, col))
    return(
    <button style={squareStyle} onClick={setValue} {...props}>
        {content}
    </button>
) }

export default Square;