import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// Modelos de datos
import { heading } from './models/heading'
import { newLinks } from './models/links'
import { StateContext } from './providers/stateContext'
// Componentes
import Header from './components/Header'
import Nav from './components/Nav'
import AppRouter from './components/AppRouter'
import Loading from './components/Loading'

function App() {
  const { state:{data,section} } = useContext(StateContext)
  return (
  <Router>
    <Nav links={newLinks()} />
    <Header {...heading} subtitle={"Datos de "+section}/>       
    <section className="container | row p-0 | overflow">
    { data?.length ? <AppRouter data={data}/> : <Loading/> }
    </section>
  </Router>
)}
export default App