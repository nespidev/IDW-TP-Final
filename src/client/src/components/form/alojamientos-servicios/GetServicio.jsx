import React, { useState } from 'react';
// import './GetServicio.css';

export default function GetServicio() {
    const [id, setId] = useState('');
    const [servicio, setServicio] = useState(null);
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setId(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/servicio/getServicio/${id}`);
            if (response.ok) {
                const data = await response.json();
                setServicio(data);
                setMessage('');
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener el servicio');
                setServicio(null);
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setServicio(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Obtener Servicio por ID</h2>
            <div className='descripcion-boton'>
                <label htmlFor="id"></label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={id}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID del servicio"
                    required
                />
                <button type="submit">Obtener Servicio</button>
            </div>
            {error && <div className="error">{error}</div>}
            {servicio && (
                <div className="listado-alineado">
                    <strong>ID:</strong> {servicio.idServicio} <br />
                    <strong>Nombre:</strong> {servicio.Nombre} <br />
                </div>
            )}
            {message && <div className="success">{message}</div>}
        </form>
    );
}
