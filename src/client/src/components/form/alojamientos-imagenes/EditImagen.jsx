import React, { useState } from 'react';

export default function EditImagen() {
    const [id, setId] = useState('');
    const [idAlojamiento, setIdAlojamiento] = useState('');
    const [rutaArchivo, setRutaArchivo] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleIdChange = (e) => {
        setId(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleIdAlojamientoChange = (e) => {
        setIdAlojamiento(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleRutaArchivoChange = (e) => {
        setRutaArchivo(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const fullPath = `src/assets/img/${rutaArchivo}`;
            if (!rutaArchivo.includes('.')) {
                setError('El nombre del archivo debe contener una extensión válida (por ejemplo, archivo.jpg)');
                return;
            } 
            const response = await fetch(`http://localhost:3001/imagen/updateImagen/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    idAlojamiento,
                    RutaArchivo: fullPath
                })
            });
            if (response.ok) {
                setMessage(`Imagen con ID ${id} actualizada exitosamente`);
                setError(null);
                setId('');
                setIdAlojamiento('');
                setRutaArchivo('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al actualizar la imagen');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Actualizar Imagen por ID</h2>
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
                    id="idAlojamiento"
                    name="idAlojamiento"
                    value={idAlojamiento}
                    onChange={handleIdAlojamientoChange}
                    placeholder="ID de Alojamiento"
                    required
                    className='input-edit-alojamiento'
                />
                <input
                    type="text"
                    id="rutaArchivo"
                    name="rutaArchivo"
                    value={rutaArchivo}
                    onChange={handleRutaArchivoChange}
                    placeholder="Ruta del Archivo"
                    required
                    className='input-edit-alojamiento'
                />
            </div>
            <button type="submit">Actualizar Imagen</button>
            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
        </form>
    );
}
