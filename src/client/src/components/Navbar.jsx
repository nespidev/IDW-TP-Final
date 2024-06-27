import { Link, useLocation } from 'react-router-dom'
export default function Navbar() {
    const location = useLocation()
    return (
        <nav>
            <ul>
                <li ><Link className={location.pathname === '/' ? 'activo' : ''} to="/">Inicio</Link></li>
                <li><Link className={location.pathname === '/alojamientos' ? 'activo' : ''} to="/alojamientos">Alojamientos</Link></li>
                <li><Link className={location.pathname === '/contacto' ? 'activo' : ''}to="/contacto">Contacto</Link></li>
                <li><Link className={location.pathname === '/institucional' ? 'activo' : ''} to="/institucional">Institucional</Link></li>
            </ul>
        </nav>
    );
}