import { BrowserRouter } from "react-router-dom"
import { Router } from "./controllers/Router"
import { NavBar } from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
return (
  <BrowserRouter>
    <NavBar/>
    <Router/>
  </BrowserRouter>
)}

export default App
