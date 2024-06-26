import AddImagen from './AddImagen.jsx';
import AllImagenes from './AllImagenes.jsx';
import DeleteImagen from './DeleteImagen.jsx';

export default function Imagenes() {

    return (
        <div className='pagina-alojamientos-seccion'>
            <AddImagen />
            <DeleteImagen />
            <AllImagenes />

        </div>
    );
}
