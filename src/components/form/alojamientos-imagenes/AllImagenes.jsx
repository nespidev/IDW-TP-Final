import React, { useState, useEffect } from 'react';
import DataTable from '../../DataTable.jsx';

export default function AllImagenes() {
    const [imagenes, setImagenes] = useState([]);
    const [error, setError] = useState(null);

    const fetchImagenes = async () => {
        try {
            const response = await fetch('http://localhost:3001/imagen/getAllImagenes');
            if (response.ok) {
                const data = await response.json();
                setImagenes(data);
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener las imágenes');
            }
        } catch (error) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    // Llamada inicial para obtener las imágenes
    useEffect(() => {
        fetchImagenes();
    }, []);

    // Definición de columnas para el DataTable
    const columns = [
        { header: 'ID Imagen', accessor: 'idImagen' },
        { header: 'ID Alojamiento', accessor: 'idAlojamiento' },
        { header: 'Ruta de Archivo', accessor: 'RutaArchivo' }
    ];

    return (
        <div className="container-rect-redondeado">
            <h2>Listado de Imágenes</h2>
            <div className='descripcion-boton'>
                <button onClick={fetchImagenes}>Actualizar</button>
            </div>
            {error && <div className="error">{error}</div>}
            <DataTable columns={columns} data={imagenes} />
        </div>
    );
}
