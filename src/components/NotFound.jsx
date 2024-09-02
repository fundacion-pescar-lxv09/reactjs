import { Link } from 'react-router-dom';

const NotFound = () =>
<div className='card | container my-4 p-0'>
    <header className='card-header'>
        <h2 className='m-0'>Lo sentimos</h2>
        <p className='m-0'>Ha ocurrido un error</p>
    </header>
    <p className='card-body'>
        No se ha encontrado la direccion solicitada, intenta con otra direccion o vuelve a la <Link to="/">pagina principal</Link>
    </p>
</div>

export default NotFound