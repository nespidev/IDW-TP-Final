import React, { useState } from 'react';
import DataTable from '../../DataTable.jsx';

export default function GetServiciosAlojamiento() {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [servicios, setServicios] = useState([]);
    const [error, setError] = useState(null);
    const [showTable, setShowTable] = useState(false);

    const handleInputChange = (e) => {
        setAlojamientoId(e.target.value);
        setError(null);
    };

    const fetchServiciosAlojamiento = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/alojamientosServicios/getAlojamientoServicios/${id}`);
            if (!response.ok) {
                throw new Error('Error al obtener los servicios del alojamiento');
            }
            
            const data = await response.json();
            if (data.length === 0) {
                setShowTable(false); // No hay servicios, ocultar la tabla
                setServicios([]);
                setError('El alojamiento no tiene servicios disponibles.');
            } else {
                const serviciosPromises = data.map(async (item) => {
                    const servicioResponse = await fetch(`http://localhost:3001/servicio/getServicio/${item.idServicio}`);
                    if (!servicioResponse.ok) {
                        throw new Error('Error al obtener detalles del servicio');
                    }
                    return await servicioResponse.json();
                });

                const serviciosData = await Promise.all(serviciosPromises);
                setServicios(serviciosData);
                setShowTable(true);
                setError(null);
            }
        } catch (error) {
            console.error('Error:', error.message);
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setShowTable(false);
            setServicios([]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (alojamientoId) {
            fetchServiciosAlojamiento(alojamientoId);
        } else {
            setError('Por favor, ingrese un ID de alojamiento válido.');
            setShowTable(false);
            setServicios([]);
        }
    };

    const columns = [
        { header: 'ID', accessor: 'idServicio' },
        { header: 'Nombre', accessor: 'Nombre' },
    ];

    return (
        <div className="container-rect-redondeado">
            <h2>Servicios del Alojamiento</h2>
            <form onSubmit={handleSubmit}> 
                <div className="descripcion-boton">
                    <label htmlFor="alojamientoId">ID del Alojamiento:</label>
                    <input
                        className='input-id-alojamiento'
                        type="text"
                        id="alojamientoId"
                        name="alojamientoId"
                        value={alojamientoId}
                        onChange={handleInputChange}
                        placeholder="ID"
                        required
                    />
                    <button type="submit">Buscar Servicios</button>
                </div>
            </form>
            {error && <div className="error">{error}</div>}
            {showTable && <DataTable columns={columns} data={servicios} />}
        </div>
    );
}
