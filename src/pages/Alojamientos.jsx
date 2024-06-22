
import React, { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './Alojamientos.css';
import AddAlojamiento from '../components/form/alojamientos/AddAlojamiento.jsx';
import GetAlojamiento from '../components/form/alojamientos/GetAlojamiento.jsx';
import Sidebar from '../components/Sidebar.jsx';


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
            <Routes>
                <Route path='/' element={<AddAlojamiento onAdd={handleRefresh}/>}></Route>
                <Route path='get' element={<GetAlojamiento />}></Route>
                
            </Routes>
        </div>
    </>
    );
}
