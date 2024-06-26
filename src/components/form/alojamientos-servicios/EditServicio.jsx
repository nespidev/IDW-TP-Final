import React, { useState } from 'react';
// import './EditServicio.css';

export default function EditServicio() {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleIdChange = (e) => {
        setId(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleNombreChange = (e) => {
        setNombre(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/servicio/updateServicio/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Nombre: nombre })
            });
            if (response.ok) {
                setMessage(`Servicio con ID ${id} actualizado exitosamente`);
                setError(null);
                setId(''); // Clear input fields
                setNombre('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al actualizar el servicio');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Actualizar Servicio por ID</h2>
            <div className='descripcion-boton'>

                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={id}
                        onChange={handleIdChange}
                        placeholder="ID"
                        required
                        className='input-id-alojamiento'
                    />

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleNombreChange}
                        placeholder="Ingrese el nuevo nombre"
                        required
                        className='input-edit-alojamiento'
                    />
                    <button type="submit">Actualizar Servicio</button>

            </div>
            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
        </form>
    );
}
