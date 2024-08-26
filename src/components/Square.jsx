import { useState } from "react"

function Square({value = "X", callback}) {
    const [content, setContent] = useState("");
    const setValue = () => !content && (setContent(value), callback())
    return(
    <button className="border border-2 p-3" onClick={setValue}>
        {content}
    </button>
) }

export default Square;