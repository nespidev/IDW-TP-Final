import React, { useState, useEffect } from 'react';
import './AllAlojamientos.css'

export default function AllAlojamientos() {
    const [alojamientos, setAlojamientos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        fetchAlojamientos();
    }, []);

    return (
        <div className="all-alojamientos container-rect-redondeado">
            <h2>Listado de Alojamientos</h2>
            {error && <div className="error">{error}</div>}
            <div className='all-alojamientos-lista'>
                {alojamientos.map((alojamiento) => (
                    <div key={alojamiento.idAlojamiento} className='all-alojamiento-singular'>
                        <strong>Título:</strong> {alojamiento.Titulo} <br />
                        <strong>Descripción:</strong> {alojamiento.Descripcion} <br />
                        <strong>ID de Tipo de Alojamiento:</strong> {alojamiento.idTipoAlojamiento} <br />
                        <strong>Ubicación:</strong><br /><span className='tab'></span> Latitud: {alojamiento.Latitud}, <br /> <span className='tab'></span>Longitud: {alojamiento.Longitud} <br />
                        <strong>Precio por Día:</strong> {alojamiento.PrecioPorDia} <br />
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
