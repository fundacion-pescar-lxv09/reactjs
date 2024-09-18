import Areas from "../components/Areas";
import Candidates from "../components/Candidates"
    import EmployeeList from "../components/Employees/EmployeeList";

export const routes = [
    {
        path:["candidatos","candidates","postulantes"],
        element: <Candidates/> },
    { 
        path:["seleccion","selection","elegidos"],
        element: <EmployeeList/>
    },
    { 
        path:["departamentos","departments","areas"],
        element: <Areas/>
    },
    { 
        path:["empleados","employees","trabajadores"],
        element: <h1>Empleados</h1>
    },
    {
        path: ["*"],
        element: <h1>inicio</h1>
    }
]