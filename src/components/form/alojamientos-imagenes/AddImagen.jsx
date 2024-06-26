import React, { useState, useEffect } from 'react';

export default function AddImagen() {
    const [fileName, setFileName] = useState('');
    const [alojamientoId, setAlojamientoId] = useState('');
    const [alojamientoTitulo, setAlojamientoTitulo] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAlojamientoTitulo = async (id) => {
            try {
                const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setAlojamientoTitulo(data.Titulo);
                } else {
                    setAlojamientoTitulo('');
                }
            } catch (err) {
                setAlojamientoTitulo('');
            }
        };

        if (alojamientoId) {
            fetchAlojamientoTitulo(alojamientoId);
        } else {
            setAlojamientoTitulo('');
        }
    }, [alojamientoId]);

    const handleFileNameChange = (e) => {
        setFileName(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleAlojamientoIdChange = (e) => {
        setAlojamientoId(e.target.value);
        setMessage('');
        setError(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullPath = `src/assets/${fileName}`;

        // Verificar si el nombre del archivo tiene una extensión
        if (!fileName.includes('.')) {
            setError('El nombre del archivo debe contener una extensión válida (por ejemplo, archivo.jpg)');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/imagen/createImagen', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    idAlojamiento: alojamientoId,
                    RutaArchivo: fullPath 
                })
            });
            if (response.ok) {
                setMessage(`Imagen agregada con éxito: ${fullPath}`);
                setError(null);
                setFileName(''); // Limpiar el input
                setAlojamientoId(''); // Limpiar el id de alojamiento
                setAlojamientoTitulo(''); // Limpiar el título del alojamiento
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al agregar la imagen');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="container-rect-redondeado">
            <h2>Agregar Nueva Imagen</h2>
            <div className='cont-alineado-izq'>
                <label htmlFor="alojamientoId">Alojamiento:</label>
                <input className='input-id-alojamiento'
                    type="text" 
                    id="alojamientoId" 
                    name="alojamientoId" 
                    value={alojamientoId} 
                    onChange={handleAlojamientoIdChange}
                    placeholder="ID"
                    required
                />
                <strong> | Título de Alojamiento: </strong>{alojamientoTitulo && <span>{alojamientoTitulo}</span>}
            </div>
            <div className='descripcion-boton'>
                <label htmlFor="fileName">src/assets/</label>
                <input 
                    type="text" 
                    id="fileName" 
                    name="fileName" 
                    value={fileName} 
                    onChange={handleFileNameChange}
                    placeholder="archivo.jpg"
                    required
                />
                <button type="submit">Agregar Imagen</button>
            </div>
            {message && <div className="success">{message}</div>}
            {error && <div className="error">{error}</div>}
        </form>
    );
}
