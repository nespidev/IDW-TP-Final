import React, { useState } from 'react';

export default function EditarTipoDeAlojamiento({ onEdit }) {
    const [alojamientoId, setAlojamientoId] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleInputChange = (e) => {
        setAlojamientoId(e.target.value);
    };

    const handleDescripcionChange = (e) => {
        setDescripcion(e.target.value);
    };

    const editarAlojamiento = async () => {
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/putTipoAlojamiento/${alojamientoId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ Descripcion: descripcion })
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                alert('Alojamiento actualizado con éxito.');
                onEdit();
            } else {
                const errorText = await response.text();
                console.error('Error al actualizar el alojamiento:', errorText);
                alert('Error al actualizar el alojamiento');
            }
        } catch (error) {
            console.error('Error: ', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <div className='container-rect-redondeado container-edit-alojamiento'>
            <h2>Editar tipo de alojamiento</h2>
            <div className='descripcion-boton'>
                <input
                    type="text"
                    value={alojamientoId}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID del alojamiento"
                    className='input-edit-alojamiento'
                />
                <input
                    type="text"
                    value={descripcion}
                    onChange={handleDescripcionChange}
                    placeholder="Ingrese la nueva descripción"
                    className='input-edit-descripcion'
                />
                <button className='button-edit-alojamiento' onClick={editarAlojamiento}>
                    Editar Tipo
                </button>
            </div>
        </div>
    );
}
