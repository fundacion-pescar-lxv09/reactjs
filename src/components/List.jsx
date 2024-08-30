const List = ({data}) =>
<ul className="list-group">{ 
    Object.keys(data).map(k => 
    <li className="list-group-item">
    { typeof data[k] === 'object' ? 
        <List data={data[k]}/> : 
        <> <strong>{k}</strong>: {data[k]} </> }
    </li> 
    )}
</ul>

export default List