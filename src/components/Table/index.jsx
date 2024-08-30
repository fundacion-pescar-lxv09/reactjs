import THead from './THead'
import TBody from './TBody'
import TFoot from './TFoot'

const Table = ({data}) => {
    const titles = Object.keys(data[0])
    const total = data.length
return(
    <table className="table table-striped bg-body">
        <THead row={titles}/>
        <TBody data={data}/>
        <TFoot {...{total}}/>
    </table>
)}

export default Table;