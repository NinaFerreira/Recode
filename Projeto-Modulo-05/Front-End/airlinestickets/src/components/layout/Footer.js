import {} from './Footer.css';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="fixed-bottom mt-5 colorPurple footer">
           
            <ul className="nav justify-content-center border-bottom text-white">
                <li className="nav-item"><Link className="nav-link px-2 text-white" to='/'>Home</Link></li>
                <li className="nav-item"><Link to='/Destinos' className="nav-link px-2 text-white">Destinos</Link></li>
                <li className="nav-item"><Link to='/Promocoes' className="nav-link px-2 text-white">Promoções</Link></li>
                <li className="nav-item"><Link to='/Contatos' className="nav-link px-2 text-white">Contatos</Link></li>
            </ul>
            <p className="text-center text-white">© 2022 Airline Tickets</p>
        </footer>
    )
}

export default Footer