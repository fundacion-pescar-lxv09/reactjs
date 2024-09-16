import { Routes, Route } from 'react-router-dom'

import Todo from './Todo'
import Counter from './Counter'
import { Profile } from './Profile'

export const Router = () =>
<Routes>
    <Route path="contador" element={<Counter/>} />
    <Route path="perfil" element={<Profile/>} />
    <Route path="tareas" element={<Todo/>} />
</Routes>
