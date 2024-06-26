import React, { useState } from 'react';

export default function GetImagen() {
    const [id, setId] = useState('');
    const [imagen, setImagen] = useState(null);
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
            const response = await fetch(`http://localhost:3001/imagen/getImagen/${id}`);
            if (response.ok) {
                const data = await response.json();
                setImagen(data);
                setMessage('');
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener la imagen');
                setImagen(null);
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setImagen(null);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Obtener Imagen por ID</h2>
            <div className='descripcion-boton'>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={id}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID de la imagen"
                    required
                />
                <button type="submit">Obtener Imagen</button>
            </div>
            {error && <div className="error">{error}</div>}
            {imagen && (
                <div className="listado-alineado">
                    <strong>ID Imagen:</strong> {imagen.idImagen} <br />
                    <strong>ID Alojamiento:</strong> {imagen.idAlojamiento} <br />
                    <strong>Ruta Archivo:</strong> {imagen.RutaArchivo} <br />
                </div>
            )}
            {message && <div className="success">{message}</div>}
        </form>
    );
}
