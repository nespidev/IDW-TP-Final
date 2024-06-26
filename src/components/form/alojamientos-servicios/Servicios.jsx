import AllServicios from './AllServicios.jsx';
import AddServicio from './AddServicio.jsx';
import GetServicio from './GetServicio.jsx';
import DeleteServicio from './DeleteServicio.jsx';
import EditServicio from './EditServicio.jsx';
import GetServiciosAlojamiento from './GetServiciosAlojamiento.jsx';


export default function Servicios() {

    return (
        <>
            <AddServicio />
            <GetServicio />
            <EditServicio />
            <DeleteServicio />
            <GetServiciosAlojamiento />
            <AllServicios />
        </>
    );
}
