
export default function Institucional() {
  return (
        <div className="pagina-institucional">
            <img className="imagen-fondo-institucional" src='src/assets/paisaje-fondo.jpg'/>
            <header>
                <div className="logo">
                    <a href="/index.html"><img src="../img/logo/logo.png" alt="Voy.com"/></a>
                </div>
            </header>
            <nav>
                <ul>
                    <li><a href="/index.html">Inicio</a></li>
                    <li><a href="#">Alojamientos</a></li>
                    <li><a href="/contacto.html">Contacto</a></li>
                    <li><a className="activo" href="#">Institucional</a></li>
                </ul>
            </nav>
            <main>
                <section className="intro">
                    <h1>¿Quienes somos?</h1>
                    <p>Voy.com es más que un hotel, es un hogar lejos de casa.</p>
                </section>
                <section className="container-rect-redondeado">
                    <div className="titulo">
                        <h2>Sobre nosotros</h2>
                    </div>
                    <div>
                    <img src="/img/iconos-quienes-somos/busqueda.png"/>
                    <p><strong>Voy.com</strong> es una plataforma online líder en la búsqueda y comparación de hoteles, dedicada a ofrecer a los viajeros la mejor experiencia posible al reservar su alojamiento.</p>
                    </div>
                    <div>
                        <img src="/img/iconos-quienes-somos/mision.png"/>
                        <p><strong>Nuestra misión</strong> es simplificar y democratizar el proceso de búsqueda de hoteles, brindando a nuestros usuarios acceso a una amplia gama de opciones, precios competitivos y herramientas útiles para tomar la mejor decisión.</p>
                    </div>
                    <div>
                        <img src="/img/iconos-quienes-somos/vision.png"/>
                        <p><strong>Nuestra visión</strong> es convertirnos en la plataforma de referencia para la reserva de hoteles en todo el mundo, reconocida por nuestra transparencia, confiabilidad y compromiso con la satisfacción del cliente.</p>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer">
                    <p>&copy; IDW 2024. Todos los derechos reservados.</p><p> Alumnos: Juan Nahuel Espinola Grativol - Alejandra Ruggiero</p>
                </div>
            </footer>
      </div>
  )
}
