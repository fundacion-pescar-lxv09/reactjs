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
  const [url, setUrl] = useState(jph+jphLinks[0].url)
  const [data, setData] = useState([])

  useEffect(() => { 
    Request(url).then(({data}) => setData(data))
  }, [url])

  return (
    <>
    <Header {...heading}/> 
    { data?.length ? <Table {...data} /> : <Loading/> 
    }
    </>
  )
}

export default App