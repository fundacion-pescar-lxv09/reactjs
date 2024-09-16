import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { Nav } from './components/Nav'

function App() {
  return(
    <BrowserRouter>
      <Nav/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
