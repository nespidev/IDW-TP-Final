import './AddTipoDeAlojamiento.css'
export default function AddTipoDeAlojamiento() {
    return (

        <div className="container-rect-redondeado formulario">
            <form>
                <h2>Nuevo tipo de alojamiento</h2>
                <label htmlFor="descripcion"></label>
                <input type="text" id="descripcion" name="descripcion" placeholder='Descripción' />
                <button type="submit">enviar</button>
            </form>
        </div>
    );
}