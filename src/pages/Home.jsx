import Footer from "../components/Footer"

export default function Home() {
  return (
      <>
        <header>
            <div class="logo">
                <a href="/index.html"><img src="../img/logo/logo.png" alt="Voy.com"/></a>
            </div>
        </header>
        <nav>
            <ul>
                <li><a class="activo" href="#">Inicio</a></li>
                <li><a href="#">Alojamientos</a></li>
                <li><a href="/contacto.html">Contacto</a></li>
                <li><a href="/institucional.html">Institucional</a></li>
            </ul>
        </nav>
        <main>
            <section class="intro">
                <h1>Encuentra tu alojamiento ideal</h1>
                <p>Hospedate con estilo en los mejores destinos del país</p>
            </section>

            <section class="container seccion-lugares">
                <div class="titulo">
                    <h2>Destinos populares</h2>
                </div>
                <div class="lugares">
                    <div class="lugar lugar-1">
                        <a class="hipervinculo-provincia" href="#"><img src="../img/img1.png" alt="paisaje"/></a>
                        <div class="texto-encima">Buenos Aires</div>
                    </div>
                    <div class="lugar lugar-2">
                        <a class="hipervinculo-provincia" href="#"><img src="../img/img2.png" alt="paisaje"/></a>
                        <div class="texto-encima">Jujuy</div>
                    </div>
                    <div class="lugar lugar-3">
                        <a class="hipervinculo-provincia" href="#"><img src="../img/img3.jpeg" alt="paisaje"/></a>
                        <div class="texto-encima">Misiones</div>
                    </div>
                    <div class="lugar lugar-4">
                        <a class="hipervinculo-provincia" href="#"><img src="../img/img4.png" alt="paisaje"/></a>
                        <div class="texto-encima">Córdoba</div>
                    </div>
                    <div class="lugar lugar-5"> 
                        <a class="hipervinculo-provincia" href="#"><img src="../img/img5.jpeg" alt="paisaje"/></a>
                        <div class="texto-encima">Rio Negro</div>
                    </div>
                </div>
            </section>

            <section class="container habitaciones">
                <div class="titulo">
                    <h2>Habitaciones mejor puntuadas</h2>
                </div>
                <div class="habitacion">
                    <a class="hipervinculo-habitacion"  href="#"><img class="img-cuadrada" src="../img/hotel1.jpg" alt="habitacion"/></a>
                    <div class="texto-habitacion">
                        <h4><a class="nombre-hotel" href="#">Grand Hotel</a></h4>
                        <h6>Buenos Aires, calle LaCalle 404</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta cumque autem voluptate praesentium minus optio voluptates saepe eaque, corporis aut laboriosam repellat est fugit quo quasi soluta enim accusantium.</p>
                        <h4 class="precio">$400.000</h4>
                    </div>
                </div>

                <div class="habitacion">
                    <a class="hipervinculo-habitacion" href="#"><img class="img-cuadrada" src="../img/hotel2.jpg" alt="habitacion"/></a>
                    <div class="texto-habitacion">
                        <h4><a class="nombre-hotel" href="#">Luxury Palace</a></h4>
                        <h6>Cordoba, Av. UnaAvenda 1910</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta cumque autem voluptate praesentium minus optio voluptates saepe eaque, corporis aut laboriosam repellat est fugit quo quasi soluta enim accusantium.</p>
                    </div>
                    <h4 class="precio">$350.000</h4>
                </div>

                <div class="habitacion">
                    <a class="hipervinculo-habitacion" href="#"><img class="img-cuadrada" src="../img/hotel3.jpg" alt="habitacion"/></a>
                    <div class="texto-habitacion">
                        <h4><a class="nombre-hotel" href="#">Deluxe Dreams</a></h4>
                        <h6>Rio Negro, Av. NuestraAvenida 64</h6>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dicta cumque autem voluptate praesentium minus optio voluptates saepe eaque, corporis aut laboriosam repellat est fugit quo quasi soluta enim accusantium.</p>
                    </div>
                    <h4 class="precio">$600.000</h4>
                </div>

            </section>
        </main>
        <Footer />
      </>
  )
}
