import { Routes, Route } from "react-router-dom"
import { routes } from "../models/routes"

export const Router = () =>
<Routes>
{ routes.map(({path, element:e}) => path.map((p,i) => 
    <Route key={i} path={p} element={e}/>)) }
</Routes>