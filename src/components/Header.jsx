import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/"><img src="/home/nahu/Documents/estudio/uner_desarrollo_web/idwPagina/src/assets/idwcheckin.svg" alt="Voy.com"/></Link>
            </div>
        </header>
    );
}