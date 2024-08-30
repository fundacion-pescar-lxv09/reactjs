const THead = ({row}) => 
<thead className="sticky-top">
    <tr>
    { row.map((heading,i) => 
        <th key={i}>{heading}</th>) }
    </tr>
</thead>

export default THead