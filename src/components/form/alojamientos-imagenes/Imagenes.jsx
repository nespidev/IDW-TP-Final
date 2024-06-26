import AddImagen from './AddImagen.jsx';
import AllImagenes from './AllImagenes.jsx';
import DeleteImagen from './DeleteImagen.jsx';
import EditImagen from './EditImagen.jsx';
import GetImagen from './GetImagen.jsx';

export default function Imagenes() {

    return (
        <div className='pagina-alojamientos-seccion'>
            <AddImagen />
            <DeleteImagen />
            <EditImagen />
            <GetImagen />
            <AllImagenes />

        </div>
    );
}
