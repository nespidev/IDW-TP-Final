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
            <h2>Nuevo tipo de alojamiento</h2>
            <div className='descripcion-boton'>
                <label htmlFor="titulo"></label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder='Titulo'
                    required
                    value={formData.titulo}
                    onChange={handleInputChange} />
                <label htmlFor="descripcion"></label>
                <input
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    placeholder='Descripción'
                    required
                    value={formData.descripcion}
                    onChange={handleInputChange} />
                <label htmlFor="tipo-alojamiento"></label>
                <input
                    type="text"
                    id="idTipoAlojamiento"
                    name="idTipoAlojamiento"
                    placeholder='Id de Tipo de Alojamiento'
                    required
                    value={formData.idTipoAlojamiento}
                    onChange={handleInputChange} />
                <label htmlFor="latitud"></label>
                <input
                    type="text"
                    id="latitud"
                    name="latitud"
                    placeholder='Latitud'
                    required
                    value={formData.latitud}
                    onChange={handleInputChange} />
                <label htmlFor="longitud"></label>
                <input
                    type="text"
                    id="longitud"
                    name="longitud"
                    placeholder='Longitud'
                    required
                    value={formData.longitud}
                    onChange={handleInputChange} />
                <label htmlFor="precio-por-dia"></label>
                <input
                    type="number"
                    id="precioPorDia"
                    name="precioPorDia"
                    placeholder='Precio por día'
                    required
                    value={formData.precioPorDia}
                    onChange={handleInputChange} />
                <label htmlFor="cantidad-dormitorios"></label>
                <input
                    type="number"
                    id="cantidadDormitorios"
                    name="cantidadDormitorios"
                    placeholder='Cant. de dormitorios'
                    required
                    value={formData.cantidadDormitorios}
                    onChange={handleInputChange} />
                <label htmlFor="cantidad-banios"></label>
                <input
                    type="number"
                    id="cantidadBanios"
                    name="cantidadBanios"
                    placeholder='Cant. de Baños'
                    required
                    value={formData.cantidadBanios}
                    onChange={handleInputChange} />
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
                <button type="submit">Enviar</button>
            </div>
        </form>
    );
}
