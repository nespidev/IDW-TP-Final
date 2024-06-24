import React, { useState, useEffect } from 'react';
import DataTable from '../../DataTable.jsx';
import './AllAlojamientos.css';

export default function AllAlojamientos() {
    const [alojamientos, setAlojamientos] = useState([]);
    const [error, setError] = useState(null);

    // Función para obtener los alojamientos
    const fetchAlojamientos = async () => {
        try {
            const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
            if (response.ok) {
                const data = await response.json();
                setAlojamientos(data);
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener los alojamientos');
            }
        } catch (error) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    // Llamada inicial para obtener los alojamientos
    useEffect(() => {
        fetchAlojamientos();
    }, []);

    // Definición de columnas para el DataTable
    const columns = [
        { header: 'ID', accessor: 'idAlojamiento' },
        { header: 'Título', accessor: 'Titulo' },
        { header: 'Descripción', accessor: 'Descripcion' },
        { header: 'ID de Tipo de Alojamiento', accessor: 'idTipoAlojamiento' },
        // { header: 'Ubicación', accessor: 'Ubicacion', 

        // },
        { header: 'Precio por Día', accessor: 'PrecioPorDia' },
        { header: 'Cantidad de Dormitorios', accessor: 'CantidadDormitorios' },
        { header: 'Cantidad de Baños', accessor: 'CantidadBanios' },
        { header: 'Estado', accessor: 'Estado' }
    ];

    return (
        <div className="container-rect-redondeado">
            <h2>Listado de Alojamientos</h2>
            <div className='descripcion-boton'>
                <button onClick={fetchAlojamientos}>Actualizar</button>
            </div>
            {error && <div className="error">{error}</div>}
            <DataTable columns={columns} data={alojamientos} />
        </div>
    );
}
