import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

export default function Sidebar() {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(true);

    const toggleSidebar = () => {
        setIsVisible(!isVisible);
    };

    return (

        <div className={`sidebar ${isVisible ? '' : 'hidden'}`}>
            <button onClick={toggleSidebar} className={`toggle-button ${isVisible ? '' : 'hidden'}`}>
                {isVisible ? '<' : '>'}
            </button>
            <ul>
                <li><Link className={location.pathname === '/Alojamientos' ? 'activo' : ''} to="/Alojamientos">Agregar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/delete' ? 'activo' : ''} to="/Alojamientos/delete">Eliminar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/get' ? 'activo' : ''} to="/Alojamientos/get">Buscar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/edit' ? 'activo' : ''} to="/Alojamientos/edit">Editar</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/all' ? 'activo' : ''} to="/Alojamientos/all">Todos</Link></li>
                <div className='linea-h' />
                <li><Link className={location.pathname === '/Alojamientos/tipos' ? 'activo' : ''} to="/Alojamientos/tipos">Tipos</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/servicios' ? 'activo' : ''} to="/Alojamientos/servicios">Servicios</Link></li>
                <li><Link className={location.pathname === '/Alojamientos/imagenes' ? 'activo' : ''} to="/Alojamientos/imagenes">Imágenes</Link></li>
            </ul>
            {!isVisible && (
            <button onClick={toggleSidebar} className="toggle-button hidden">
                {isVisible ? '<' : '>'}
            </button>
        )}
        </div>


    );
}
