import React, { useState } from 'react';
import EditFormData from './EditFormData'; // Importa el nuevo componente

export default function EditAlojamiento() {
    const [id, setId] = useState('');
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        idTipoAlojamiento: '',
        latitud: '',
        longitud: '',
        precioPorDia: '',
        cantidadDormitorios: '',
        cantidadBanios: '',
        estado: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Reset message when input changes
        setMessage('');
    };

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const fetchAlojamientoData = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/alojamiento/getAlojamiento/${id}`);
            if (response.ok) {
                const data = await response.json();
                setFormData({
                    titulo: data.Titulo,
                    descripcion: data.Descripcion,
                    idTipoAlojamiento: data.idTipoAlojamiento,
                    latitud: data.Latitud,
                    longitud: data.Longitud,
                    precioPorDia: data.PrecioPorDia,
                    cantidadDormitorios: data.CantidadDormitorios,
                    cantidadBanios: data.CantidadBanios,
                    estado: data.Estado
                });
                setError(null);
                // Reset message when new data is fetched
                setMessage('');
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener el alojamiento');
                setFormData({});
                setMessage('');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setFormData({});
            setMessage('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
        await fetchAlojamientoData(id);
    };

    const handleUpdateAlojamiento = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/alojamiento/putAlojamiento/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Titulo: formData.titulo,
                    Descripcion: formData.descripcion,
                    idTipoAlojamiento: formData.idTipoAlojamiento,
                    Latitud: formData.latitud,
                    Longitud: formData.longitud,
                    PrecioPorDia: formData.precioPorDia,
                    CantidadDormitorios: formData.cantidadDormitorios,
                    CantidadBanios: formData.cantidadBanios,
                    Estado: formData.estado
                })
            });
            if (response.ok) {
                setMessage('Alojamiento actualizado con éxito.');
                setError(null);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al actualizar el alojamiento');
                setMessage('');
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setMessage('');
        }
    };

    return (
        <div className="container-rect-redondeado">
            <h2>Editar Alojamiento</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="id">ID del Alojamiento:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={id}
                        onChange={handleIdChange}
                    />
                </div>
                <button type="submit">Cargar Datos</button>
            </form>

            {Object.values(formData).some(value => value !== '') && (
                <EditFormData
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleUpdateAlojamiento={handleUpdateAlojamiento}
                />
            )}

            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
        </div>
    );
}
