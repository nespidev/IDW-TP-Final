import React, { useState } from 'react';
// import './DeleteAlojamiento.css';

export default function DeleteAlojamiento() {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setId(e.target.value);
    };

    const handleDeleteAlojamiento = async (e) => {
        try {
            e.preventDefault();
            const response = await fetch(`http://localhost:3001/alojamiento/deleteAlojamiento/${id}`, {
                method: 'DELETE',
            });
            if (response.status === 204) {
                setMessage('Alojamiento eliminado con éxito.');
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al eliminar el alojamiento');
                setMessage('');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setMessage('');
        }
    };

    return (
        <form className="container-rect-redondeado">
            <h2>Eliminar Alojamiento</h2>
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
                <button onClick={handleDeleteAlojamiento}>Eliminar</button>
            </div>
            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
        </form>
    );
}
