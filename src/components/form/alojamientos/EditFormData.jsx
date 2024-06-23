import React from 'react';

const EditFormData = ({ formData, handleInputChange, handleUpdateAlojamiento }) => {
    return (
        <form className='descripcion-boton' onSubmit={handleUpdateAlojamiento}>
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
            <button type="submit">Actualizar</button>
        </form>
    );
};

export default EditFormData;
