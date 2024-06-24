import React, { useEffect, useState } from 'react';
import DataTable from '../../DataTable.jsx';

export default function GetTiposAlojamientos({ refresh }) {
    const [alojamientos, setAlojamientos] = useState([]);

    const getAlojamientos = async () => {
        try {
            const response = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (response.ok) {
                const data = await response.json();
                console.log('Datos recibidos:', data);
                setAlojamientos(data);
            } else {
                console.error('Error al obtener los alojamientos');
                alert('Error al obtener los alojamientos');
            }
        } catch (error) {
            console.error('Error: ', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    useEffect(() => {
        getAlojamientos();
    }, [refresh]);

    const columns = [
        { header: 'ID', accessor: 'idTipoAlojamiento' },
        { header: 'Descripción', accessor: 'Descripcion' }
    ];

    return (
        <div className='container-rect-redondeado get-tipos-de-alojamientos'>
            <div className="descripcion-boton">
                <h2>Tipos de alojamientos</h2>
                <button onClick={getAlojamientos}>Actualizar</button>
            </div>
            {alojamientos.length > 0 ? (
                <DataTable columns={columns} data={alojamientos} />
            ) : (
                <p className='sin-alojamientos'>No hay tipos de alojamientos disponibles.</p>
            )}
        </div>
    );
}
