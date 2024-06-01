import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Header from "../components/Header"

export default function Contacto() {
  return (
      <div className="pagina-contacto">
          <Header />
          <Navbar />
          <main>
              <section className="intro">
                  <h1>Contacto</h1>
                  <p>¿Cómo podemos ayudarte?</p>
              </section>
              <section className="container-rect-redondeado">
                  <div className="titulo">
                      <h2>Contactanos</h2>
                  </div>
                  <div className="datos-contacto">
                      <p>Teléfono: + 54 9 (376) 5304857</p>
                      <p>Dirección: Misiones, LaDireccion 1921</p>
                  </div>
                  <div className="titulo">
                      <h2>Nuestras redes</h2>
                  </div>
                  <div className="redes-sociales">
                      <div className="imagenes-container">
                          <a href="#"><img src="../img/redes/wpp.png" alt="WhatsApp"/></a>
                          <a href="#"><img src="../img/redes/tel.png" alt="Teléfono"/></a>
                          <a href="#"><img src="../img/redes/fb.png" alt="Facebook"/></a>
                          <a href="#"><img src="../img/redes/inst.png" alt="Instagram"/></a>
                          <a href="#"><img src="../img/redes/tw.png" alt="Twitter"/></a>
                      </div>
                  </div>
              </section>
          </main>
          <Footer />
      </div>
  )
}
