import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src="src/assets/img/logo/logo.png" alt="Voy.com"/></Link>
            </div>
        </header>
    );
}