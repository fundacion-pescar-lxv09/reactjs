import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react'
// Modelos de datos
import { heading } from './models/heading'
import { social, jph, jphLinks } from './models/links'
import { Request } from './controllers/Request'
// Componentes
import Header from './components/Header'
import Table from './components/Table'
import Loading from "./components/Loading"

function App() {
  const [state, setState] = useState({ url: jph+jphLinks[0].url, data: []})
  useEffect(() => { 
    Request(state?.url)
    .then(({data}) => setState({...state, data}))
  }, [state.url])
  return (
    <>
      <Header {...heading} subtitle={"Tabla de "+jphLinks[0].text}/> 
      <section className="overflow-auto">
        { state?.data?.length ? <Table data={state?.data}/> : <Loading/> }
      </section>
    </>
  )
}
export default App