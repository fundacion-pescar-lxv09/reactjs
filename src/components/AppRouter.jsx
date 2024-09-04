import { Routes, Route } from 'react-router-dom'
import Table from './Table'
import Article from './Article'
import List from './List'
import Form from './Form'
import NotFound from './NotFound'

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