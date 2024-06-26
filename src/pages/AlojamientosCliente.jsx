import React, { useState, useEffect } from 'react';
import CardAlojamiento from '../components/CardAlojamiento.jsx'
const fetchAlojamientos = async () => {
    const response = await fetch('http://localhost:3001/alojamiento/getAlojamientos');
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error al obtener alojamientos');
    }
};

const fetchTipoAlojamiento = async (id) => {
    const response = await fetch(`http://localhost:3001/tiposAlojamiento/getTipoAlojamiento/${id}`);
    if (response.ok) {
        const data = await response.json();
        return data.Descripcion;
    } else {
        throw new Error('Error al obtener tipo de alojamiento');
    }
};

const fetchImagenes = async () => {
    const response = await fetch('http://localhost:3001/imagen/getAllImagenes');
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        throw new Error('Error al obtener imágenes');
    }
};

const fetchServicio = async (id) => {
    const response = await fetch(`http://localhost:3001/servicio/getServicio/${id}`);
    if (response.ok) {
        const data = await response.json();
        return data.Nombre;
    } else {
        throw new Error('Error al obtener servicio');
    }
};

const fetchAlojamientoServicios = async (idAlojamiento) => {
    const response = await fetch(`http://localhost:3001/alojamientosServicios/getAlojamientoServicios/${idAlojamiento}`);
    if (response.ok) {
        const data = await response.json();
        return data.map(servicio => servicio.idServicio);
    } else {
        throw new Error('Error al obtener servicios del alojamiento');
    }
};

export default function AlojamientosCliente() {
    const [alojamientos, setAlojamientos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const alojamientosData = await fetchAlojamientos();
                const imagenesData = await fetchImagenes();

                const updatedAlojamientos = await Promise.all(
                    alojamientosData.map(async (alojamiento) => {
                        const tipoDescripcion = await fetchTipoAlojamiento(alojamiento.idTipoAlojamiento);
                        const imagen = imagenesData.find(img => img.idAlojamiento === alojamiento.idAlojamiento);
                        const rutaImagen = imagen ? imagen.RutaArchivo : 'No hay imagen disponible';

                        // Obtener servicios del alojamiento
                        const serviciosIds = await fetchAlojamientoServicios(alojamiento.idAlojamiento);
                        const serviciosNombres = await Promise.all(serviciosIds.map(async (servicioId) => {
                            try {
                                return await fetchServicio(servicioId);
                            } catch (error) {
                                console.error(`Error al obtener servicio con ID ${servicioId}: `, error);
                                return 'Servicio no disponible';
                            }
                        }));

                        return { ...alojamiento, tipoDescripcion, rutaImagen, servicios: serviciosNombres };
                    })
                );

                setAlojamientos(updatedAlojamientos);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='container habitaciones'>
            {alojamientos.map((alojamiento) => (
                <CardAlojamiento key={alojamiento.idAlojamiento} alojamiento={alojamiento} />
            ))}
        </div>
    );
}
