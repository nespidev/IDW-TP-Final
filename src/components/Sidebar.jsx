import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'
export default function Navbar() {
    const location = useLocation()
    return (
        <div className='sidebar'>
            <ul>
                <li><Link className={location.pathname === '/Alojamientos' ? 'activo' : ''} to="/Alojamientos">Agregar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/2' ? 'activo' : ''} to="/Alojamientos/2">Eliminar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/3' ? 'activo' : ''} to="/Alojamientos/3">Ver</Link></li>
            </ul>
    </div>
    );
}