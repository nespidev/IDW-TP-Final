import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src="src/assets/idwcheckin.svg" alt="Voy.com"/></Link>
            </div>
            <button className="admin-button">Admin</button>
        </header>
    );
}