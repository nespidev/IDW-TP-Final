import React, { useState } from 'react';
// import './AddServicio.css';

export default function AddServicio() {
    const [nombre, setNombre] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setNombre(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/servicio/createServicio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Nombre: nombre })
            });
            if (response.ok) {
                const data = await response.json();
                setMessage(`Servicio creado con éxito`);
                setError(null);
                setNombre(''); // Clear the input field
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al crear el servicio');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Agregar Nuevo Servicio</h2>
            <div className='descripcion-boton' >
                    <label htmlFor="nombre"></label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        placeholder="Ingrese el nombre del servicio"
                        required
                    />
                <button type="submit">Agregar Servicio</button>
            </div>
            {message && <div className="success">{message}</div>}
            {error && <div className="error">{error}</div>}
        </form>
    );
}
