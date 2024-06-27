import React from 'react';
import PropTypes from 'prop-types';
import './DataTable.css'
// Definición del componente DataTable
export default function DataTable({ columns, data }) {
    return (
        <div className="data-table-container">
            <table className="data-table">
                <thead>
                    <tr>
                        {/* Renderiza los encabezados de la tabla */}
                        {columns.map((column, index) => (
                            <th key={index}>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Renderiza las filas de datos */}
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {/* Renderiza las celdas de cada fila */}
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{row[column.accessor]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

// Definición de las propTypes para la validación de las props
DataTable.propTypes = {
    // La prop columns debe ser un array de objetos, cada uno con un header y un accessor, ambos obligatorios
    columns: PropTypes.arrayOf(PropTypes.shape({
        header: PropTypes.string.isRequired,  // header es una cadena de texto y es requerida
        accessor: PropTypes.string.isRequired // accessor es una cadena de texto y es requerida
    })).isRequired, // columns es requerida

    // La prop data debe ser un array de objetos, cada uno representando una fila de datos
    data: PropTypes.arrayOf(PropTypes.object).isRequired // data es requerida
};
