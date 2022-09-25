/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {} from './Navbar.css';

function NavBar() {

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
                        <li className="nav-item mx-2 my-1">
                            <Link className="btn w-100 btn-sm border-light text-white" to='/Administracao'>Administração</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>

    )
}

export default NavBar
