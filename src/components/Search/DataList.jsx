const DataList = ({options}) =>
<datalist id="searchlist">
    {options.map(({name},i) => <option key={i} value={name}/> )}
</datalist>

export default DataList