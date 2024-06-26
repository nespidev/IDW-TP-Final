import React, { useState } from 'react';

export default function DeleteImagen() {
    const [imagenId, setImagenId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setImagenId(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/imagen/deleteImagen/${imagenId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setMessage(`Imagen con ID ${imagenId} eliminada con éxito.`);
                setError(null);
                setImagenId(''); // Limpiar el input
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al eliminar la imagen');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Eliminar Imagen</h2>
            <div className='descripcion-boton'>
                <input 
                    type="text" 
                    id="imagenId" 
                    name="imagenId" 
                    value={imagenId} 
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID de la imagen"
                    required
                />
                <button type="submit">Eliminar Imagen</button>
            </div>
            {message && <div className="success">{message}</div>}
            {error && <div className="error">{error}</div>}
        </form>
    );
}
