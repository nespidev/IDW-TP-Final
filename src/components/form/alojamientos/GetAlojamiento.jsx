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
                        placeholder="Ingrese ID del alojamiento"
                    />
                </div>
                <button onClick={handleFetchAlojamiento}>Buscar</button>
            </div>
            {error && <div className="error">{error}</div>}
            {alojamiento && (
                <div className="alojamiento-info">
                    <h3>{alojamiento.Titulo}</h3>
                    <p><strong>Descripción:</strong> {alojamiento.Descripción}</p>
                    <p><strong>Tipo de Alojamiento:</strong> {alojamiento.TipoAlojamiento}</p>
                    <p><strong>Latitud:</strong> {alojamiento.Latitud}</p>
                    <p><strong>Longitud:</strong> {alojamiento.Longitud}</p>
                    <p><strong>Precio por Día:</strong> ${alojamiento.PrecioPorDia}</p>
                    <p><strong>Cantidad de Dormitorios:</strong> {alojamiento.CantidadDormitorios}</p>
                    <p><strong>Cantidad de Baños:</strong> {alojamiento.CantidadBanios}</p>
                    <p><strong>Estado:</strong> {alojamiento.Estado}</p>
                </div>
            )}
        </form>
    );
}
