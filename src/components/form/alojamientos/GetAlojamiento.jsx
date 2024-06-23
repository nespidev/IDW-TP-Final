import React, { useState } from 'react';
import './GetAlojamiento.css'

export default function GetAlojamiento() {
    const [id, setId] = useState('');
    const [alojamiento, setAlojamiento] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setId(e.target.value);
    };

    const handleFetchAlojamiento = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${id}`);
            if (response.ok) {
                const data = await response.json();
                setAlojamiento(data);
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener el alojamiento');
                setAlojamiento(null);
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlojamiento(null);
        }
    };

    return (
        <form className="container-rect-redondeado">
            <h2>Mostrar Alojamiento</h2>
            <div className='descripcion-boton'>
                <div className="form-group">
                    <label htmlFor="id">ID del Alojamiento:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={id}
                        onChange={handleInputChange}
                    />
                </div>
                <button onClick={handleFetchAlojamiento}>Buscar</button>
            </div>
            {error && <div className="error">{error}</div>}
            {alojamiento && (
                <div className="alojamiento-singular">
                       <strong>ID:</strong> {alojamiento.idAlojamiento} <br />
                        <strong>Título:</strong> {alojamiento.Titulo} <br />
                        <strong>Descripción:</strong> {alojamiento.Descripcion} <br />
                        <strong>ID de Tipo de Alojamiento:</strong> {alojamiento.idTipoAlojamiento} <br />
                        <strong>Ubicación:</strong><br /><span className='tab'></span> Latitud: {alojamiento.Latitud}, <br /> <span className='tab'></span>Longitud: {alojamiento.Longitud} <br />
                        <strong>Precio por Día:</strong> ${alojamiento.PrecioPorDia} <br />
                        <strong>Cantidad de Dormitorios:</strong> {alojamiento.CantidadDormitorios} <br />
                        <strong>Cantidad de Baños:</strong> {alojamiento.CantidadBanios} <br />
                        <strong>Estado:</strong> {alojamiento.Estado} <br />
                </div>
            )}
        </form>
    );
}
