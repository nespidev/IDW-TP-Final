import React, { useState } from 'react';

export default function DeleteTipoDeAlojamiento({ onDelete }) {
    const [alojamientoId, setAlojamientoId] = useState('');

    const handleInputChange = (e) => {
        setAlojamientoId(e.target.value);
    };

    const eliminarAlojamiento = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3001/tiposAlojamiento/deleteTipoAlojamiento/${alojamientoId}`, {
                method: 'DELETE',
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                alert('Alojamiento eliminado con éxito.');
                onDelete(); // Llama a la función de actualización
                setAlojamientoId('')
            } else {
                const errorText = await response.text();
                console.error('Error al eliminar el alojamiento:', errorText);
                alert('Error al eliminar el alojamiento');
            }
        } catch (error) {
            console.error('Error: ', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form className='container-rect-redondeado container-delete-alojamiento' onSubmit={eliminarAlojamiento}>
            <h2>Eliminar tipo de alojamiento</h2>
            <div className='descripcion-boton'>
                <input
                    type="text"
                    value={alojamientoId}
                    onChange={handleInputChange}
                    placeholder="Ingrese el ID del alojamiento"
                    className='input-delete-alojamiento'
                />
                <button type="submit" className='button-delete-alojamiento'>
                    Eliminar Tipo
                </button>
            </div>
        </form>
    );
}
