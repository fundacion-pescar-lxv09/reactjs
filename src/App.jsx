import { useContext } from 'react'
import './App.css'
import { SearchContext } from './providers/searchContext'

function App() {
  const { search: {q}, set } = useContext(SearchContext)
  return (
    <>
      <input type="search" onInput={(e) => set("q", e.target.value)}/>
      <p>{q}</p>
    </>
  )
}

export default App
