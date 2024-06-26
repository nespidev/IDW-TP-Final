import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Institucional from './pages/Institucional.jsx'
import Contacto from './pages/Contacto.jsx'
import AlojamientosAdmin from './pages/AlojamientosAdmin.jsx'
import AlojamientosCliente from './pages/AlojamientosCliente.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/institucional" element={<Institucional />}></Route>
        <Route path="/admin/*" element={<AlojamientosAdmin />}></Route>
        <Route path="/alojamientos" element={<AlojamientosCliente />}></Route>
        
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
