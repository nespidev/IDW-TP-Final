import React, { useState, useEffect } from 'react';

const EditFormData = ({ formData, handleInputChange, handleUpdateAlojamiento }) => {
    const [serviciosDisponibles, setServiciosDisponibles] = useState([]);
    const [serviciosAsociados, setServiciosAsociados] = useState([]);
    const [selectedServicios, setSelectedServicios] = useState([]);

    // Obtener todos los servicios disponibles
    useEffect(() => {
        const fetchServicios = async () => {
            try {
                const response = await fetch('http://localhost:3001/servicio/getAllServicios');
                if (response.ok) {
                    const data = await response.json();
                    setServiciosDisponibles(data);
                } else {
                    console.error('Error al obtener los servicios');
                    alert('Error al obtener los servicios');
                }
            } catch (error) {
                console.error('Error: ', error);
                alert('Error al obtener los servicios. Por favor, intente de nuevo.');
            }
        };

        fetchServicios();
    }, []);

    // Obtener servicios asociados al alojamiento por editar
    useEffect(() => {
        const fetchServiciosAlojamiento = async () => {
            try {
                const response = await fetch(`http://localhost:3001/alojamientosServicios/getAlojamientoServicio/${formData.idAlojamiento}`);
                if (response.ok) {
                    const data = await response.json();
                    if (Array.isArray(data)) {
                        const serviciosIds = data.map(item => item.idServicio.toString());
                        setServiciosAsociados(data);
                        setSelectedServicios(serviciosIds);
                    } else if (data.idServicio) { // Si data no es un array, manejamos el caso en que es un objeto único
                        setServiciosAsociados([data]);
                        setSelectedServicios([data.idServicio.toString()]);
                    } else {
                        console.error('Respuesta inesperada del servidor:', data);
                        setServiciosAsociados([]);
                        setSelectedServicios([]);
                    }
                } else {
                    console.error('Error al obtener los servicios del alojamiento');
                    alert('Error al obtener los servicios del alojamiento');
                }
            } catch (error) {
                console.error('Error: ', error);
                alert('Error al obtener los servicios del alojamiento. Por favor, intente de nuevo.');
            }
        };

        if (formData.idAlojamiento) {
            fetchServiciosAlojamiento();
        }
    }, [formData.idAlojamiento]);

    // Manejar cambios en los checkboxes de servicios
    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedServicios((prevSelectedServicios) => [...prevSelectedServicios, value]);
        } else {
            setSelectedServicios((prevSelectedServicios) => prevSelectedServicios.filter(id => id !== value));
        }
    };

    // Actualizar alojamiento con servicios modificados
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            handleUpdateAlojamiento(e)
            // Eliminar servicios desmarcados
            const serviciosAEliminar = serviciosAsociados.filter(serv => !selectedServicios.includes(serv.idServicio.toString()));
            for (const servicio of serviciosAEliminar) {
                await fetch(`http://localhost:3001/alojamientosServicios/deleteAlojamientoServicio/${servicio.idAlojamientoServicio}`, {
                    method: 'DELETE'
                });
            }

            // Agregar nuevos servicios seleccionados
            const serviciosAAgregar = selectedServicios.filter(serv => !serviciosAsociados.some(item => item.idServicio.toString() === serv));
            for (const idServicio of serviciosAAgregar) {
                await fetch('http://localhost:3001/alojamientosServicios/createAlojamientoServicio', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        idAlojamiento: formData.idAlojamiento,
                        idServicio: parseInt(idServicio)
                    })
                });
            }

            alert('Alojamiento actualizado con éxito.');
        } catch (error) {
            console.error('Error al actualizar el alojamiento:', error);
            alert('Error al actualizar el alojamiento. Por favor, intente de nuevo.');
        }
    };

    return (
        <form className='descripcion-boton' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="titulo">Título:</label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={formData.titulo}
                    onChange={handleInputChange}
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
            <div className="form-group-servicios">
                <label>Servicios:</label>
                <div className='list-checkboxes'>
                    {serviciosDisponibles.map(servicio => (
                        <div key={servicio.idServicio} className='servicio-checkbox'>
                            <label>
                                <input
                                    type="checkbox"
                                    value={servicio.idServicio}
                                    checked={selectedServicios.includes(servicio.idServicio.toString())}
                                    onChange={handleCheckboxChange}
                                />
                                {servicio.Nombre}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
            <button type="submit">Actualizar</button>
        </form>
    );
};

export default EditFormData;