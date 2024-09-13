import { useContext } from 'react'
import { SearchContext } from '../providers/searchProvider'
import { buttonStyle } from '../styles/nav'
import { Button } from './Button'

export default function Search() {
    const { search, setSearch } = useContext(SearchContext)
    return (
    <>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <Button style={buttonStyle} text="Buscar" />
        <p>Se busca: {search}</p>
    </>
    )
}
