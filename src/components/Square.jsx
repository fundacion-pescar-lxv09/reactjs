import { useState } from "react"
import { squareStyle } from "../styles/Square";

function Square({value = "X", callback, ...props}) {
    const [content, setContent] = useState("");
    const setValue = () => (!content && !props.message) && (setContent(value), callback(props.row, props.col))
    return(
    <button style={squareStyle} onClick={setValue} {...props}>
        {content}
    </button>
) }

export default Square;