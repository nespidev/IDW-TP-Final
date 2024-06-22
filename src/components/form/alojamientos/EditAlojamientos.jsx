import React, { useState } from 'react';
// import './EditAlojamiento.css';

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
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Error al obtener el alojamiento');
                setFormData({});
            }
        } catch (err) {
            setError('Error al establecer el servicio. Por favor, intente de nuevo.');
            setFormData({});
        }
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
        <form className="container-rect-redondeado">
            <h2>Editar Alojamiento</h2>
            <div className='descripcion-boton'>
                <div className="form-group">
                    <label htmlFor="id">ID del Alojamiento:</label>
                    <input
                        type="text"
                        id="id"
                        name="id"
                        value={id}
                        onChange={handleIdChange}
                        placeholder="Ingrese ID del alojamiento"
                    />
                </div>
                <button type="button" onClick={() => fetchAlojamientoData(id)}>Cargar Datos</button>
            </div>

            <div className='descripcion-boton'>
                {formData.titulo && (
                    <>
                        <div className="form-group">
                            <label htmlFor="titulo">Título:</label>
                            <input
                                type="text"
                                id="titulo"
                                name="titulo"
                                value={formData.titulo}
                                onChange={handleInputChange}
                                placeholder="Ingrese el título"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripción:</label>
                            <input
                                type="text"
                                id="descripcion"
                                name="descripcion"
                                value={formData.descripcion}
                                onChange={handleInputChange}
                                placeholder="Ingrese la descripción"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="idTipoAlojamiento">ID de Tipo de Alojamiento:</label>
                            <input
                                type="text"
                                id="idTipoAlojamiento"
                                name="idTipoAlojamiento"
                                value={formData.idTipoAlojamiento}
                                onChange={handleInputChange}
                                placeholder="Ingrese el ID del tipo de alojamiento"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="latitud">Latitud:</label>
                            <input
                                type="text"
                                id="latitud"
                                name="latitud"
                                value={formData.latitud}
                                onChange={handleInputChange}
                                placeholder="Ingrese la latitud"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="longitud">Longitud:</label>
                            <input
                                type="text"
                                id="longitud"
                                name="longitud"
                                value={formData.longitud}
                                onChange={handleInputChange}
                                placeholder="Ingrese la longitud"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="precioPorDia">Precio por día:</label>
                            <input
                                type="number"
                                id="precioPorDia"
                                name="precioPorDia"
                                value={formData.precioPorDia}
                                onChange={handleInputChange}
                                placeholder="Ingrese el precio por día"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cantidadDormitorios">Cantidad de Dormitorios:</label>
                            <input
                                type="number"
                                id="cantidadDormitorios"
                                name="cantidadDormitorios"
                                value={formData.cantidadDormitorios}
                                onChange={handleInputChange}
                                placeholder="Ingrese la cantidad de dormitorios"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cantidadBanios">Cantidad de Baños:</label>
                            <input
                                type="number"
                                id="cantidadBanios"
                                name="cantidadBanios"
                                value={formData.cantidadBanios}
                                onChange={handleInputChange}
                                placeholder="Ingrese la cantidad de baños"
                            />
                        </div>
                        <div className="form-group">
                            <label>Estado:</label>
                            <div className="estado-radios">
                                <label>
                                    <input
                                        type="radio"
                                        name="estado"
                                        value="Disponible"
                                        checked={formData.estado === 'Disponible'}
                                        onChange={handleInputChange}
                                    />
                                    Disponible
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="estado"
                                        value="Reservado"
                                        checked={formData.estado === 'Reservado'}
                                        onChange={handleInputChange}
                                    />
                                    Reservado
                                </label>
                            </div>
                        </div>
                        <button type="submit" onClick={handleUpdateAlojamiento}>Actualizar</button>
                    </>
                )}
            </div>
            {error && <div className="error">{error}</div>}
            {message && <div className="success">{message}</div>}
        </form>
    );
}
