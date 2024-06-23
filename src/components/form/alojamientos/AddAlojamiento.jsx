import React, { useState } from 'react';

export default function AddAlojamiento({ onAdd }) {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        idTipoAlojamiento: '',
        latitud: '',
        longitud: '',
        precioPorDia: '',
        cantidadDormitorios: '',
        cantidadBanios: '',
        estado: 'disponible'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        try {
            const alojamientoResponse = await fetch('http://localhost:3001/alojamiento/createAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (alojamientoResponse.ok) {
                const alojamientoData = await alojamientoResponse.json();
                console.log('Alojamiento agregado:', alojamientoData);

                const idAlojamiento = alojamientoData.id;
                console.log('ID del Alojamiento:', idAlojamiento);

                alert('Alojamiento agregado con éxito.');
            } else {
                const errorData = await alojamientoResponse.json();
                console.error('Error al agregar el alojamiento:', errorData);
                alert('Error al agregar el alojamiento.');
            }
        } catch (error) {
            console.error('Error al agregar el alojamiento:', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form className="container-rect-redondeado" onSubmit={handleSubmit}>
            <h2>Nuevo alojamiento</h2>
            <div className='descripcion-boton'>
                <div className="form-group">
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        required
                        value={formData.titulo}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción:</label>
                    <input
                        type="text"
                        id="descripcion"
                        name="descripcion"
                        required
                        value={formData.descripcion}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="idTipoAlojamiento">ID de Tipo de Alojamiento:</label>
                    <input
                        type="text"
                        id="idTipoAlojamiento"
                        name="idTipoAlojamiento"
                        required
                        value={formData.idTipoAlojamiento}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="latitud">Latitud:</label>
                    <input
                        type="text"
                        id="latitud"
                        name="latitud"
                        required
                        value={formData.latitud}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="longitud">Longitud:</label>
                    <input
                        type="text"
                        id="longitud"
                        name="longitud"
                        required
                        value={formData.longitud}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="precioPorDia">Precio por día:</label>
                    <input
                        type="number"
                        id="precioPorDia"
                        name="precioPorDia"
                        required
                        value={formData.precioPorDia}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadDormitorios">Cantidad de Dormitorios:</label>
                    <input
                        type="number"
                        id="cantidadDormitorios"
                        name="cantidadDormitorios"
                        required
                        value={formData.cantidadDormitorios}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cantidadBanios">Cantidad de Baños:</label>
                    <input
                        type="number"
                        id="cantidadBanios"
                        name="cantidadBanios"
                        required
                        value={formData.cantidadBanios}
                        onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Estado:</label>
                    <div className="estado-radios">
                        <label>
                            <input
                                type="radio"
                                name="estado"
                                value="disponible"
                                checked={formData.estado === 'disponible'}
                                onChange={handleInputChange}
                            />
                            Disponible
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="estado"
                                value="reservado"
                                checked={formData.estado === 'reservado'}
                                onChange={handleInputChange}
                            />
                            Reservado
                        </label>
                    </div>
                </div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    );
}
