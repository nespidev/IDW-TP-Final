import { BrowserRouter , Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Institucional from './pages/Institucional.jsx'
import Contacto from './pages/Contacto.jsx'
import Alojamientos from './pages/Alojamientos.jsx'

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
        <Route path="/Contacto" element={<Contacto />}></Route>
        <Route path="/Institucional" element={<Institucional />}></Route>
        <Route path="/Alojamientos/*" element={<Alojamientos />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
