import React, { useEffect, useState } from 'react';

export default function GetTipoAlojamientoById({ refresh }) {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [alojamiento, setAlojamiento] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setAlojamientoId(e.target.value);
        setError(null);
    };

    const fetchAlojamientoById = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${id}`);
            if (response.ok) {
                const data = await response.json();
                if (data) {
                    setAlojamiento(data);
                } else {
                    setError('No se encontró el tipo de alojamiento con el ID proporcionado');
                    setAlojamiento(null);
                }
            } else {
                setError('Error al obtener el tipo de alojamiento');
                setAlojamiento(null);
            }
        } catch (error) {
            console.error('Error: ', error);
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setAlojamiento(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (alojamientoId) {
            fetchAlojamientoById(alojamientoId);
        }
    };

    useEffect(() => {
        if (alojamiento && alojamiento.idTipoAlojamiento) {
            fetchAlojamientoById(alojamiento.idTipoAlojamiento);
        }
    }, [refresh]);

    return (
        <div className='container-rect-redondeado get-tipos-de-alojamientos'>
            <form onSubmit={handleSubmit}>
                <h2>Obtener Tipo de Alojamiento por ID</h2>
                <div className='descripcion-boton'>
                    <input
                        type="text"
                        value={alojamientoId}
                        onChange={handleInputChange}
                        placeholder="Ingrese el ID del alojamiento"
                    />
                    <button type="submit">Buscar</button>
                </div>
                {error && <p className='error'>{error}</p>}
                {alojamiento && (
                    <div className='lista-alojamientos'>
                        <p>ID: </p><span>{alojamiento.idTipoAlojamiento}</span>
                        <p>Descripción: </p><span>{alojamiento.Descripcion}</span>
                    </div>
                )}
            </form>
        </div>
    );
}
