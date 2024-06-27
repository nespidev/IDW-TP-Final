import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src="src/assets/idwcheckin.svg" alt="Voy.com"/></Link>
            </div>
            <Link className={location.pathname === '/Alojamientos' ? 'activo' : ''} to="/admin"><button className="admin-button">Admin</button></Link>
        </header>
    );
}