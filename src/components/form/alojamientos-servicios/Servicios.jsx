import AllServicios from './AllServicios.jsx';
import AddServicio from './AddServicio.jsx';
import GetServicio from './GetServicio.jsx';
import DeleteServicio from './DeleteServicio.jsx';
import EditServicio from './EditServicio.jsx';


export default function Servicios() {

    return (
        <>
            <AddServicio />
            <GetServicio />
            <EditServicio />
            <DeleteServicio />
            <AllServicios />
        </>
    );
}
