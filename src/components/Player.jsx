function Player (props){
    return (
        <ul style={playerStyle}>{   
            Object.keys(props).map((k,i) => typeof props[k] !== "object" &&
            <li key={i}><strong>{k}</strong>: {props[k]}</li>
        )}
        </ul>
)}
export default Player;

const playerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    margin: ".5rem",
    borderRadius: ".5rem",
    padding: "1.5rem",
    textAlign: "left",
    opacity: .8,
    listStyle: "none",
    backgroundColor: "#333"
}