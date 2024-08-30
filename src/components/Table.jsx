
const Table = ({data}) => {
return(
    <table className="table table-dark table-striped">
        <thead>
            <tr>
            {typeof headers === "object" && headers.map((heading,i) => <th key={i}>{heading}</th>) }
            </tr>
        </thead>
        <tbody>{ 
        data?.map((row,i) => 
            <tr key={i}>
            { Object.values(row).map((cell,idx) => 
                <td key={idx}>{typeof cell === 'object' ? "OBJETO" : cell}</td>
            )}
            </tr>
        )}
        </tbody>
    </table>
)}

export default Table;