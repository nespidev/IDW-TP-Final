import React from 'react';

const CardAlojamiento = ({ alojamiento }) => {
    const { idAlojamiento, Titulo, tipoDescripcion, Latitud, Longitud, PrecioPorDia, CantidadDormitorios, CantidadBanios, Estado, rutaImagen, servicios } = alojamiento;

    return (
        <div className="habitacion">
            {/* <a className="hipervinculo-habitacion" href="#"><img className="img-cuadrada" src={rutaImagen} alt="Imagen del alojamiento"/></a> */}
            <a className="hipervinculo-habitacion" href="#"><img className="img-cuadrada" src="src/assets/img/alojamiento3.jpg" alt="habitacion"/></a>
            <div className="texto-habitacion">
                <h4><a className="titulo-alojamiento" href="#">{Titulo}</a></h4>
                <h6>{tipoDescripcion}, Latitud: {Latitud}, Longitud: {Longitud}</h6>
                <p>Servicios: {servicios.join(', ')}</p>
            </div>
            <h4 className="precio">{PrecioPorDia} por día</h4>
        </div>
    );
}

export default CardAlojamiento;
