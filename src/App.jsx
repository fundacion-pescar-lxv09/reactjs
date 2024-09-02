import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Modelos de datos
import { heading } from './models/heading'
import { social, jph, jphLinks, newLinks } from './models/links'
import { Request } from './controllers/Request'
// Componentes
import Header from './components/Header'
import Nav from './components/Nav'
import Table from './components/Table'
import Loading from './components/Loading'
import NotFound from './components/NotFound'

function App() {
  const [state, setState] = useState({ url:'', data: []})
  const set = (key,value) => setState({...state, [key]: value})
  const setUrl = (url) => set("url", url)
  const setData = (data) => set("data",data)

  useEffect(() => { 
    Request(state?.url)
    .then(({data}) => setData(data))
    .catch((error) => setData(error))
  }, [state?.url])

  return (
    <Router>
      <Nav links={newLinks()} {...{fn:setUrl, host:jph}}/>
      <Header {...heading} subtitle={"Tabla de "+jphLinks[0].text}/>       
      <section className="overflow-auto">{ 
      state?.data?.length ?
      <Routes>
        <Route path="table/:table" element={<Table data={state?.data}/>}/>
        <Route path="article/:table" element={<Article data={state?.data}/>}/>
        <Route path="list/:table" element={<List data={state?.data}/>}/>
        <Route path="form/:table" element={<Form data={state?.data}/>}/>
        <Route path="/" element={<h2>Bienvenido</h2>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>:<Loading/> }
      </section>
    </Router>
  )
}
export default App