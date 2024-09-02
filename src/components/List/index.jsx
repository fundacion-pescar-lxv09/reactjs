const List = ({data, deepMapping=true}) =>
<ul className="list-group">{ 
Object.keys(data).map((k,i) => {
    return(
    <li key={k+i} className="list-group-item">
        { k != i && <strong>{k}: </strong> }
        { typeof data[k] === 'object' ? ( 
            deepMapping && <List data={data[k]}/>
        ) : data[k] }
    </li> 
    )
    })
}
</ul>

export default List