import Search from './components/Search'
import Results from './components/Results'
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Search/>
      <Results/>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App
