import Header from './components/Header'
import Nav from './components/Nav'
import Search from './components/Search'
import Form from './components/Form'
import { ContextProvider } from './providers'

function App() {
  return (
    <ContextProvider>
      <Nav/>
      <Header/>
      <Search/>
      <Form/>
    </ContextProvider>
  )
}

export default App