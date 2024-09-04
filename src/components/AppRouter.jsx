import Table from './components/Table'
import Article from './components/Article'
import List from './components/List'
import Form from './components/Form'
import NotFound from './components/NotFound'

const AppRouter = ({data}) => 
<Routes>
  <Route path="table/:table" element={<Table data={data}/>}/>
  <Route path="article/:table" element={<Article data={data}/>}/>
  <Route path="list/:table" element={<List data={data}/>}/>
  <Route path="form/:table" element={<Form data={data}/>}/>
  <Route path="/" element={<h2>Bienvenido</h2>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>

export default AppRouter