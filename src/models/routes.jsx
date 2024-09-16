import Areas from "../components/Areas";

export const routes = [
    {
        path:["candidatos","candidates","postulantes"],
        element: <h1>Candidatos</h1> },
    { 
        path:["seleccion","selection","elegidos"],
        element: <h1>Seleccion</h1>
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