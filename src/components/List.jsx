const List = ({data}) =>
<ul className="list-group">{ 
    Object.keys(data).map((k,i) => 
    <li key={k+i} className="list-group-item">
    { typeof data[k] === 'object' ? 
        <List data={data[k]}/> : 
        <> <strong>{k}</strong>: {data[k]} </> }
    </li> 
    )}
</ul>

export default List