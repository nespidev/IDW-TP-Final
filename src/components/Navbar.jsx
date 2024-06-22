import { Link, useLocation } from 'react-router-dom'
export default function Navbar() {
    const location = useLocation()
    return (
        <nav>
            <ul>
                <li ><Link className={location.pathname === '/' ? 'activo' : ''} to="/">Inicio</Link></li>
                <li><Link className={location.pathname === '/Alojamientos' ? 'activo' : ''} to="/Alojamientos">Alojamientos</Link></li>
                <li><Link className={location.pathname === '/AlojamientosTipo' ? 'activo' : ''} to="/AlojamientosTipo">AlojamientosTipo</Link></li>
                <li><Link className={location.pathname === '/Contacto' ? 'activo' : ''}to="/Contacto">Contacto</Link></li>
                <li><Link className={location.pathname === '/Institucional' ? 'activo' : ''} to="/Institucional">Institucional</Link></li>
            </ul>
        </nav>
    );
}