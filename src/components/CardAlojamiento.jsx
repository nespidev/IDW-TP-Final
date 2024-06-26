export default function CardAlojamiento(){

    return (
        <div className="habitacion">
            <a className="hipervinculo-habitacion" href="#"><img className="img-cuadrada" src="src/assets/img/alojamiento3.jpg" alt="habitacion"/></a>
            <div className="texto-habitacion">
                <h4><a className="titulo-alojamiento" href="#">Deluxe Dreams</a></h4>
                <h6>tipo de alojamiento, ubicacion de alojamiento</h6>
                <p>servicioso</p>
            </div>
            <h4 className="precio"></h4>
        </div>
    );
}