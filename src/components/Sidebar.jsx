import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'
export default function Navbar() {
    const location = useLocation()
    return (
        <div className='sidebar'>
            <ul>
                <li><Link className={location.pathname === '/Alojamientos' ? 'activo' : ''} to="/Alojamientos">Agregar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/delete' ? 'activo' : ''} to="/Alojamientos/delete">Eliminar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/get' ? 'activo' : ''} to="/Alojamientos/get">Buscar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/edit' ? 'activo' : ''} to="/Alojamientos/edit">Editar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/all' ? 'activo' : ''} to="/Alojamientos/all">Todos</Link></li>
            </ul>
    </div>
    );
}