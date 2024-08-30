import List from '../List'

const TBody = ({data}) => 
<tbody>{ data?.map((row,i) => 
    <tr key={i}>{ 
    Object.values(row).map((cell,idx) => 
        <td key={idx}>
        { typeof cell === 'object' ? <List data={cell}/> : cell }
        </td> 
    )}
    </tr>
)}
</tbody>

export default TBody