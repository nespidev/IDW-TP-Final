
import React, { useState } from 'react';
import './Alojamientos.css';
import AddAlojamiento from '../components/form/alojamientos/AddAlojamiento.jsx';
import Sidebar from '../components/Sidebar.jsx';
// import GetTiposDeAlojamientos from '../components/form/alojamientos-tipo/GetTiposDeAlojamientos.jsx';
// import DeleteTipoDeAlojamiento from '../components/form/alojamientos-tipo/DeleteTipoDeAlojamiento.jsx';
// import GetTipoDeAlojamientoById from '../components/form/alojamientos-tipo/GetTipoDeAlojamientoById.jsx';
// import EditarTipoDeAlojamiento from '../components/form/alojamientos-tipo/EditarTipoDeAlojamiento.jsx';

export default function Alojamientos() {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(prev => !prev);
    };

    return (
        <>
        <section className="intro">
            <h1>Administrar Alojamientos</h1>
            <p> </p>
        </section>

        <div className = "pagina-alojamientos">

            <Sidebar></Sidebar>
            <AddAlojamiento onAdd={handleRefresh} />
            {/* <EditarTipoDeAlojamiento onEdit={handleRefresh} />
            <DeleteTipoDeAlojamiento onDelete={handleRefresh} />
            <GetTipoDeAlojamientoById refresh={refresh} />
            <GetTiposDeAlojamientos refresh={refresh} /> */}
        </div>
        </>
    );
}
