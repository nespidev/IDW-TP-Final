import React from 'react';

const CardAlojamiento = ({ alojamiento }) => {
    const { idAlojamiento, Titulo, tipoDescripcion, Latitud, Longitud, PrecioPorDia, CantidadDormitorios, CantidadBanios, Estado, rutaImagen, servicios } = alojamiento;

    return (
        <div className="habitacion">
            <a className="hipervinculo-habitacion" href="#"><img className="img-cuadrada" src={rutaImagen} alt="habitacion"/></a>
            <div className="texto-habitacion">
                <h4><a className="titulo-alojamiento" href="#">{Titulo}</a></h4>
                <h6>{tipoDescripcion}, Latitud: {Latitud}, Longitud: {Longitud}</h6>
                <p>
                    Estado: {Estado}<br />
                    Servicios: {servicios.join(', ')}.<br />
                    Dormitorios: {CantidadDormitorios}<br />
                    Baños: {CantidadBanios}.
                </p>
            </div>
            <h4 className="precio">${PrecioPorDia}</h4>
        </div>
    );
}

export default CardAlojamiento;
