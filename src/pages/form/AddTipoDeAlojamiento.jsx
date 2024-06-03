import './AddTipoDeAlojamiento.css'
export default function AddTipoDeAlojamiento() {
    return (
        <>
        <section className="intro">
            <h1> </h1>
            <p> </p>
        </section>

        <div className="container-rect-redondeado formulario">
            <form>
                <h2>Nuevo tipo de alojamiento</h2>
                <div className='descripcion-enviar'>
                    <label htmlFor="descripcion"></label>
                    <input type="text" id="descripcion" name="descripcion" placeholder='Descripción' />
                    <button type="submit">enviar</button>
                </div>
            </form>
        </div>
        </>
    );
}