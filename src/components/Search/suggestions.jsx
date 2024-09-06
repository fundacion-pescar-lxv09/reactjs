import axios from "axios"

const suggestions = (search, value, callback, n=5) => {
    const {host:h, resource:r, endpoint:e, api_key:k} = search;
    const url = `${h}/${r}/${e}/tags?api_key=${k}&q=${value}&limit=${n}`;

    axios.get(url)
    .then(({data:{data}})=>callback(data))
    .catch(_=> callback([{name: "realice una busqueda"}]))    
}
export default suggestions