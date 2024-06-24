import React, { useState } from 'react';
// import './DeleteServicio.css';

export default function DeleteServicio() {
    const [id, setId] = useState('');
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
            const response = await fetch(`http://localhost:3001/servicio/deleteServicio/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setMessage(`Servicio con ID ${id} eliminado exitosamente`);
                setError(null);
                setId('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al eliminar el servicio');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Eliminar Servicio por ID</h2>
            <div className='descripcion-boton'>
                <label htmlFor="id"></label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={id}
                    onChange={handleInputChange}
                    placeholder="Ingrese ID de servicio a eliminar"
                    required
                />
                <button type="submit">Eliminar Servicio</button>
            </div>
            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
        </form>
    );
}
