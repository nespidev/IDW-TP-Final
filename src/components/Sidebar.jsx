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
                <li><Link className={location.pathname === '/admin' ? 'activo' : ''} to="/admin">Agregar</Link></li>
                <li><Link className={location.pathname === '/admin/delete' ? 'activo' : ''} to="/admin/delete">Eliminar</Link></li>
                <li><Link className={location.pathname === '/admin/get' ? 'activo' : ''} to="/admin/get">Buscar</Link></li>
                <li><Link className={location.pathname === '/admin/edit' ? 'activo' : ''} to="/admin/edit">Editar</Link></li>
                <li><Link className={location.pathname === '/admin/all' ? 'activo' : ''} to="/admin/all">Todos</Link></li>
                <div className='linea-h' />
                <li><Link className={location.pathname === '/admin/tipos' ? 'activo' : ''} to="/admin/tipos">Tipos</Link></li>
                <li><Link className={location.pathname === '/admin/servicios' ? 'activo' : ''} to="/admin/servicios">Servicios</Link></li>
                <li><Link className={location.pathname === '/admin/imagenes' ? 'activo' : ''} to="/admin/imagenes">Imágenes</Link></li>
            </ul>
            {!isVisible && (
            <button onClick={toggleSidebar} className="toggle-button hidden">
                {isVisible ? '<' : '>'}
            </button>
        )}
        </div>


    );
}
