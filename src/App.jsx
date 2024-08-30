import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
// Modelos de datos
import { heading } from './models/heading'
// Componentes
import Header from './components/Header'
import Profile from "./components/Profile"
import Config from "./components/Config"

function App() {
  return (
    <BrowserRouter>
    {/* Rutas de Aplicacion */}
      <nav className='d-flex gap-2'>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/profile">Pefil</NavLink>
        <NavLink to="/config">Configuracion</NavLink>
      </nav>
    {/* Renderizado de Rutas */}
      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/config" element={<Config/>} />
        <Route path='/' element={<Header {...heading}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App