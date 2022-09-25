/* eslint-disable jsx-a11y/anchor-is-valid */
import CardViagens from "../destinos-anuncios/CardViagens"
import React, { useEffect, useState } from 'react';
import ModalCompra from "../destinos-anuncios/ModalComprar";


function Destinos() {
    const [title, setTitle] = useState('')
    const [valor, setValor] = useState('')

    function SendDados(titulo, valor) {
        setTitle(titulo);
        setValor(valor);
    }

    return (
        <>
            <ModalCompra title={title} preco={valor} />
           
            <div className="row justify-content-center my-4">
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Nova York, EUA" preco="7.600" InsImg="/img/new.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Nova York, EUA", "7.600")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Maragogi Alagoas" preco="1.400" InsImg="/img/maragogi-alagoas.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Roma, Italia", "6.400")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Londres, Inglaterra" preco="7.200" InsImg="/img/londres.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Londres, Inglaterra", "7.200")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Pernambuco" preco="1.000" InsImg="/img/pernambuco.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Cusco, Peru", "3.900")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Santa Barbara" preco="800" InsImg="/img/santabarbara.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Santa Barbara", "800")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Recife" preco="1.500" InsImg="/img/recife.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Recife", "1.500")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Paris" preco="5.200" InsImg="/img/PARIS.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Paris", "9.200")}>Comprar</button>
                    </div>
                </div>

                <div className="col-6 col-sm-6 col-md-4 col-lg-3 py-3">
                    <div className="card colorPurple">
                        <CardViagens titulo="Havai" preco="10.000" InsImg="/img/havai.jpg" />
                        <button className="m-auto w-50 colorPurpleLigth border-light  rounded text-white" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={(e) => SendDados("Havai", "10.000")}>Comprar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinos