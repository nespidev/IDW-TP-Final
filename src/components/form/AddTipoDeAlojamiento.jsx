import React, { useState } from 'react';

export default function AddTipoDeAlojamiento({ onAdd }) {
    const [descripcion, setDescripcion] = useState('');

    const handleInputChange = (e) => {
        setDescripcion(e.target.value);
    };

    const enviar = async (e) => {
        e.preventDefault();

        try {
            const obtenerResponse = await fetch('http://localhost:3001/tiposAlojamiento/getTiposAlojamiento');
            if (obtenerResponse.ok) {
                const alojamientos = await obtenerResponse.json();
                const existeAlojamiento = alojamientos.some(alojamiento => alojamiento.Descripcion.toLowerCase() === descripcion.toLowerCase());

                if (existeAlojamiento) {
                    alert('El tipo de alojamiento ya se encuentra registrado');
                    return;
                }
            } else {
                console.error('Error al obtener los tipos de alojamientos');
                alert('Error al verificar el tipo de alojamiento');
                return;
            }

            const newAlojamiento = { Descripcion: descripcion };
            const response = await fetch('http://localhost:3001/tiposAlojamiento/createTipoAlojamiento', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newAlojamiento)
            });

            if (response.ok) {
                alert('Alojamiento agregado');
                onAdd(); // Llama a la función de actualización
                setDescripcion('')
            } else {
                console.error('Error al agregar el alojamiento');
                alert('Error al agregar el alojamiento');
            }
        } catch (error) {
            console.error('Error: ', error);
            alert('Error al establecer el servicio. Por favor, intente de nuevo.');
        }
    };

    return (
        <form className="container-rect-redondeado" onSubmit={enviar}>
            <h2>Nuevo tipo de alojamiento</h2>
            <div className='descripcion-boton'>
                <label htmlFor="descripcion"></label>
                <input
                    type="text"
                    id="descripcion"
                    name="descripcion"
                    placeholder='Descripción'
                    required
                    value={descripcion}
                    onChange={handleInputChange} />
                <button type="submit">Enviar</button>
            </div>
        </form>
    );
}
