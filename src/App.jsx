import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect, useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Modelos de datos
import { heading } from './models/heading'
import { social, jph, jphLinks, newLinks } from './models/links'
import { Request } from './controllers/Request'
// Componentes
import Header from './components/Header'
import Nav from './components/Nav'
import Table from './components/Table'
import Form from './components/Form'
import Article from './components/Article'
import List from './components/List'
import Loading from './components/Loading'
import NotFound from './components/NotFound'
import { StateContext } from './providers/stateContext'

function App() {
  const { state:{data,section} } = useContext(StateContext)
  return (
    <Router>
      <Nav links={newLinks()} />
      <Header {...heading} subtitle={"Datos de "+section}/>       
      <section className="container | row p-0 | overflow">{ 
      data?.length ?
      <Routes>
        <Route path="table/:table" element={<Table data={data}/>}/>
        <Route path="article/:table" element={<Article data={data}/>}/>
        <Route path="list/:table" element={
          <List data={data}/>
        }/>
        <Route path="form/:table" element={<Form data={data}/>}/>
        <Route path="/" element={<h2>Bienvenido</h2>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>:<Loading/> }
      </section>
    </Router>
  )
}
export default App