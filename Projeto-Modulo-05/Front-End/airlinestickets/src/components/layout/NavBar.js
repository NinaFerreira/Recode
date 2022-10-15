/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { isLoger, logout } from '../../net/services/user-service';

function NavBar() {
    const [showCliente, setShowCliente] = useState(false);
    const [showAdmin, setShowAdmin] = useState(false);
    const [logado, setLogado] = useState(undefined);

    useEffect(() => {
        const user = isLoger();
        //logout();
        if (user) {
            setLogado(user);
            setShowCliente(user.roles.includes("ROLE_CLIENTE"));
            setShowAdmin(user.roles.includes("ROLE_ADMIN"));
        }
    }, []);
    const logouted = () => {
        logout()
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark colorPurple">
                <Link className="navbar-brand mx-4 my-auto" to='/'>Airlines</Link>
                <button className="navbar-toggler btn-lg border-light border-1 " data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2 my-1">
                            <Link className="w-100 btn btn-sm border-light text-white" to='/Destinos'>Destinos</Link>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn w-100 btn-sm border-light text-white" to='/Promocoes'>Promoções</Link>
                        </li>
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn w-100 btn-sm border-light text-white" to='/Contatos'>Contatos</Link>
                        </li>
                        {showAdmin && (
                        <li className="nav-item mx-2 my-1 dropdown">
                            <a className="btn w-100  btn-sm border-light text-white dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Olá, {logado.email}
                            </a>

                            <div className="dropdown-menu dropdown-menu-end colorPurple mx-auto p-0" aria-labelledby="navbarDropdown">
                                <Link className="btn w-100  btn-sm border-light text-white" to="/GerenciarConta">Gerenciar Conta</Link>
                                <Link className="btn w-100  btn-sm border-light text-white" to='/Administracao'>Gerenciar Site</Link>
                                <a href="/login" className="btn w-100  btn-sm border-light text-white" onClick={logouted}>Sair</a>
                            </div>
                        </li>
                    )}
                    {showCliente && (
                        <li className="nav-item my-1 mx-2 dropdown">
                            <a className="btn w-100 btn-sm border-light text-white bg-transparent dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Olá, {logado.email}
                            </a>

                            <div className="dropdown-menu dropdown-menu-end colorPurple mx-auto p-0" aria-labelledby="navbarDropdown">
                                <Link className="btn w-100  btn-sm border-light text-white" to="/GerenciarConta">Gerenciar Conta</Link>
                                <Link className="btn w-100 btn-sm border-light text-white" to="/ComprasCliente">Minhas Viagens</Link>
                                <a href="/login" className="btn w-100 btn-sm border-light text-white" onClick={logouted}>Sair</a>
                            </div>
                        </li>
                    )}
                    {!logado && (
                        <>
                            <li className="nav-item mx-2 my-1">
                                <Link className="btn w-100  btn-sm border-light text-white" to='/Login'>Login</Link>
                            </li>
                            <li className="nav-item mx-2 my-1">
                                <Link className="btn w-100  btn-sm border-light text-white" to='/Registrar'>Registrar</Link>
                            </li>
                        </>
                    )}
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default NavBar
