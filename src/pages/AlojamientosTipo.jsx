import React, { useState } from 'react';
import './AlojamientosTipo.css';
import AddTipoDeAlojamiento from '../components/form/alojamientos-tipo/AddTipoDeAlojamiento.jsx';
import GetTiposDeAlojamientos from '../components/form/alojamientos-tipo/GetTiposDeAlojamientos.jsx';
import DeleteTipoDeAlojamiento from '../components/form/alojamientos-tipo/DeleteTipoDeAlojamiento.jsx';
import GetTipoDeAlojamientoById from '../components/form/alojamientos-tipo/GetTipoDeAlojamientoById.jsx';
import EditarTipoDeAlojamiento from '../components/form/alojamientos-tipo/EditarTipoDeAlojamiento.jsx';

export default function AlojamientosTipo() {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(prev => !prev);
    };

    return (
        <div className='pagina-alojamientos-tipo'>
            <section className="intro">
                <h1>Administrar tipos de alojamientos</h1>
                <p> </p>
            </section>
            <AddTipoDeAlojamiento onAdd={handleRefresh} />
            <EditarTipoDeAlojamiento onEdit={handleRefresh} />
            <DeleteTipoDeAlojamiento onDelete={handleRefresh} />
            <GetTipoDeAlojamientoById refresh={refresh} />
            <GetTiposDeAlojamientos refresh={refresh} />
        </ div>
    );
}
