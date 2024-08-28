import { useState } from "react"
import { squareStyle } from "../styles/Square";

function Square({value = "X", callback}) {
    const [content, setContent] = useState("");
    const setValue = () => !content && (setContent(value), callback())
    return(
    <button style={squareStyle} onClick={setValue}>
        {content}
    </button>
) }

export default Square;