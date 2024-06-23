import React, { useState, useEffect } from 'react';
import './AllAlojamientos.css';

export default function AllAlojamientos() {
    const [alojamientos, setAlojamientos] = useState([]);
    const [error, setError] = useState(null);

    // Mueve fetchAlojamientos fuera de useEffect para poder usarlo en el botón
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

    // Llama a fetchAlojamientos cuando el componente se monte
    useEffect(() => {
        fetchAlojamientos();
    }, []);

    return (
        <div className="container-rect-redondeado">
            <div className='descripcion-boton'>
                <h2>Listado de Alojamientos</h2>
            </div>
            <button onClick={fetchAlojamientos}>Actualizar</button>
            {error && <div className="error">{error}</div>}
            <div className='contenedor-listado'>
                {alojamientos.map((alojamiento) => (
                    <div key={alojamiento.idAlojamiento} className='listado-alineado'>
                        <strong>ID:</strong> {alojamiento.idAlojamiento} <br />
                        <strong>Título:</strong> {alojamiento.Titulo} <br />
                        <strong>Descripción:</strong> {alojamiento.Descripcion} <br />
                        <strong>ID de Tipo de Alojamiento:</strong> {alojamiento.idTipoAlojamiento} <br />
                        <strong>Ubicación:</strong><br /><span className='tab'></span> Latitud: {alojamiento.Latitud}, <br /> <span className='tab'></span>Longitud: {alojamiento.Longitud} <br />
                        <strong>Precio por Día:</strong> ${alojamiento.PrecioPorDia} <br />
                        <strong>Cantidad de Dormitorios:</strong> {alojamiento.CantidadDormitorios} <br />
                        <strong>Cantidad de Baños:</strong> {alojamiento.CantidadBanios} <br />
                        <strong>Estado:</strong> {alojamiento.Estado} <br />
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}
