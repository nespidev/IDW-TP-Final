import React, { useState } from 'react';
import './AlojamientosTipo.css';
import AddTipoDeAlojamiento from './AddTipoDeAlojamiento.jsx';
import GetTiposDeAlojamientos from './GetTiposDeAlojamientos.jsx';
import DeleteTipoDeAlojamiento from './DeleteTipoDeAlojamiento.jsx';
import GetTipoDeAlojamientoById from './GetTipoDeAlojamientoById.jsx';
import EditTipoDeAlojamiento from './EditTipoDeAlojamiento.jsx';

export default function AlojamientosTipo() {
    const [refresh, setRefresh] = useState(false);

    const handleRefresh = () => {
        setRefresh(prev => !prev);
    };

    return (
        <>
            <AddTipoDeAlojamiento onAdd={handleRefresh} />
            <EditTipoDeAlojamiento onEdit={handleRefresh} />
            <DeleteTipoDeAlojamiento onDelete={handleRefresh} />
            <GetTipoDeAlojamientoById refresh={refresh} />
            <GetTiposDeAlojamientos refresh={refresh} />
        </>
    );
}
