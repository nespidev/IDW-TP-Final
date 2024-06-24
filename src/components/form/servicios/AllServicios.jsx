import React, { useState, useEffect } from 'react';
import DataTable from '../../DataTable.jsx';
// import './AllServicios.css';

export default function AllServicios() {
    const [servicios, setServicios] = useState([]);
    const [error, setError] = useState(null);

    const fetchServicios = async () => {
        try {
            const response = await fetch('http://localhost:3001/servicio/getAllServicios');
            if (response.ok) {
                const data = await response.json();
                setServicios(data);
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener los servicios');
            }
        } catch (error) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    useEffect(() => {
        fetchServicios();
    }, []);

    const columns = [
        { header: 'ID', accessor: 'idServicio' },
        { header: 'Nombre', accessor: 'Nombre' },
    ];

    return (
        <div className="container-rect-redondeado">
            <h2>Listado de Servicios</h2>
            <div className='descripcion-boton'>
                <button onClick={fetchServicios}>Actualizar</button>
            </div>
            {error && <div className="error">{error}</div>}
            <DataTable columns={columns} data={servicios} />
        </div>
    );
}
