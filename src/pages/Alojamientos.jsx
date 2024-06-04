import React, { useState } from 'react';
import './Alojamientos.css';
import AddTipoDeAlojamiento from '../components/form/AddTipoDeAlojamiento';
import GetTiposDeAlojamientos from '../components/form/GetTiposDeAlojamientos';
import DeleteTipoDeAlojamiento from '../components/form/DeleteTipoDeAlojamiento';
import GetTipoDeAlojamientoById from '../components/form/GetTipoDeAlojamientoById';
import EditarTipoDeAlojamiento from '../components/form/EditarTipoDeAlojamiento.jsx';

export default function Alojamientos() {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(prev => !prev);
    };

    return (
        <>
            <section className="intro">
                <h1>Administrar alojamientos</h1>
                <p> </p>
            </section>
            <AddTipoDeAlojamiento onAdd={handleRefresh} />
            <EditarTipoDeAlojamiento onEdit={handleRefresh} />
            <DeleteTipoDeAlojamiento onDelete={handleRefresh} />
            <GetTipoDeAlojamientoById />
            <GetTiposDeAlojamientos refresh={refresh} />
        </>
    );
}
