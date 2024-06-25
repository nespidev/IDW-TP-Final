
export default function Home() {
  return (
      <>

        <main>
            <section className="intro">
                <h1>Encuentra tu alojamiento ideal</h1>
                <p>Hospedate con estilo en los mejores destinos del país</p>
            </section>

            <section className="container seccion-lugares">
                <div className="titulo">
                    <h2>Destinos populares</h2>
                </div>
                <div className="lugares">
                    <div className="lugar lugar-1">
                        <a className="hipervinculo-provincia" href="#"><img src="src/assets/img/img1.png" alt="paisaje"/></a>
                        <div className="texto-encima">Buenos Aires</div>
                    </div>
                    <div className="lugar lugar-2">
                        <a className="hipervinculo-provincia" href="#"><img src="src/assets/img/img2.png" alt="paisaje"/></a>
                        <div className="texto-encima">Jujuy</div>
                    </div>
                    <div className="lugar lugar-3">
                        <a className="hipervinculo-provincia" href="#"><img src="src/assets/img/img3.jpeg" alt="paisaje"/></a>
                        <div className="texto-encima">Misiones</div>
                    </div>
                    <div className="lugar lugar-4">
                        <a className="hipervinculo-provincia" href="#"><img src="src/assets/img/img4.png" alt="paisaje"/></a>
                        <div className="texto-encima">Córdoba</div>
                    </div>
                    <div className="lugar lugar-5"> 
                        <a className="hipervinculo-provincia" href="#"><img src="src/assets/img/img5.jpeg" alt="paisaje"/></a>
                        <div className="texto-encima">Rio Negro</div>
                    </div>
                </div>
            </section>

            <section className="container habitaciones">
                <div className="titulo">
                    <h2>Habitaciones mejor puntuadas</h2>
                </div>
                <div className="habitacion">
                    <a className="hipervinculo-habitacion"  href="#"><img className="img-cuadrada" src="src/assets/img/hotel1.jpg" alt="habitacion"/></a>
                    <div className="texto-habitacion">
                        <h4><a className="nombre-hotel" href="#">Grand Hotel</a></h4>
                        <h6>Buenos Aires, calle LaCalle 404</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta cumque autem voluptate praesentium minus optio voluptates saepe eaque, corporis aut laboriosam repellat est fugit quo quasi soluta enim accusantium.</p>
                        <h4 className="precio">$400.000</h4>
                    </div>
                </div>

                <div className="habitacion">
                    <a className="hipervinculo-habitacion" href="#"><img className="img-cuadrada" src="src/assets/img/hotel2.jpg" alt="habitacion"/></a>
                    <div className="texto-habitacion">
                        <h4><a className="nombre-hotel" href="#">Luxury Palace</a></h4>
                        <h6>Cordoba, Av. UnaAvenda 1910</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta cumque autem voluptate praesentium minus optio voluptates saepe eaque, corporis aut laboriosam repellat est fugit quo quasi soluta enim accusantium.</p>
                    </div>
                    <h4 className="precio">$350.000</h4>
                </div>

                <div className="habitacion">
                    <a className="hipervinculo-habitacion" href="#"><img className="img-cuadrada" src="src/assets/img/hotel3.jpg" alt="habitacion"/></a>
                    <div className="texto-habitacion">
                        <h4><a className="nombre-hotel" href="#">Deluxe Dreams</a></h4>
                        <h6>Rio Negro, Av. NuestraAvenida 64</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta cumque autem voluptate praesentium minus optio voluptates saepe eaque, corporis aut laboriosam repellat est fugit quo quasi soluta enim accusantium.</p>
                    </div>
                    <h4 className="precio">$600.000</h4>
                </div>

            </section>
        </main>
      </>
  )
}
