import 'bootstrap/dist/css/bootstrap.min.css'
// Modelos de datos
import { heading } from './models/heading'
import { links, social } from './models/links'
// Componentes
import Header from './components/Header'
import Nav, { Link } from  './components/Nav'
import { Footer } from './components/Footer'

function App() {
  return (
    <>{/* Fragmento (Etiqueta vacia)*/}
    <Nav links={links} />{/* Asignacion de Propiedades */}
    <Header {...heading}/> {/* Herencia de Propiedades */}
    <Footer>{/* Propiedad children */}
      <ul className="list-unstyled d-flex justify-content-center gap-2">
        {social.map((item,i) => <Link key={i} {...item}/>)}
      </ul>
    </Footer>
    </>
  )
}

export default App