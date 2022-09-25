import React, { useState, useEffect } from 'react';
import { Check, Desconto } from "./CompraFuncao";
import { cadastrarCliente } from "../../net/services/cliente-service";
import { useNavigate } from 'react-router-dom';


function FormComprar({ idViagem, titulo, title, preco }) {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState();
    const [cpf, setCpf] = useState('');
    const [origem, setOrigem] = useState('');
    const [destino, setDestino] = useState();
    const [valor, setValor] = useState('');
    const [data_ida, setDataIda] = useState('');
    const [data_volta, setDataVolta] = useState('');
    const [validacao, setValidacao] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        if ((title !== "") && (preco !== "")) {
            setDestino(title);
            setValor(preco);
        } 
    }, [preco, title, ])


    const handleClick = (e) => {
        e.preventDefault();
        debugger
        if (origem !== '' && destino !== '' && valor !== '' && data_ida !== '' && nome !== '' && cpf !== ''  && idade !== '') {
            document.getElementById("campos").innerHTML = "";
            var viagem = {origem, destino, valor, data_ida, data_volta};
            cadastrarCliente(nome, cpf, idade, viagem).then(() => {
                navigate("/Administracao");
                window.location.reload();
            }, (error) => {
                const msgErro = (error.response &&
                    error.response.data && error.response.data.message) || error.message || error.toString();
                setValidacao(msgErro);
            });
        } else {
            document.getElementById("campos").innerHTML = "Preencha todos os campos.";
        }
    }
    return (

        <form>
            <span id="campos" className="mb-3"> </span>
            {validacao && (
                <span>
                    {validacao}
                </span>
            )}
            <div className="row m-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1  rounded ">
                            <label className="control-label text-white mt-1">Nome: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-light" onChange={(e) => setNome(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 col-sm-4 col-md-4 col-lg-6 border border-1  rounded ">
                            <label className="control-label mt-1">Idade:</label>
                        </div>
                        <div className="col-5 col-sm-5 col-md-4 col-lg-6">
                            <input type="number" min="1" className="form-control bg-transparent text-white" onChange={(e) => setIdade(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1  rounded ">
                            <label className="control-label text-white mt-1">CPF: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-light" onChange={(e) => setCpf(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1  rounded ">
                            <label className="control-label text-white mt-1">Valor: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-light" id="Valor" value={valor} readOnly={true} onChange={(e) => setValor(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1  rounded ">
                            <label className="control-label text-white mt-1">Cupom: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-light" id="Cupom" />
                        </div>
                        <span className="text-white m-0" id="AspCp"></span>
                    </div>
                </div>

                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1  rounded ">
                            <label className="control-label text-white mt-1">Destino: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-light" readOnly={true} value={title} onChange={(e) => setDestino(e.target.value)}/>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1  rounded ">
                            <label className="control-label text-white mt-1">Origem: </label>
                        </div>
                        <div className="col-8 col-sm-8 col-md-8 col-lg-8 m-0">
                            <input type="text" className="form-control text-white bg-transparent btn-outline-light" onChange={(e) => setOrigem(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 py-1 border border-1  rounded ">
                            <label className="control-label text-white mt-1">Ida e Volta</label>
                        </div>
                        <div className="col-7 col-sm-7 col-md-7 col-lg-3 py-1 m-0">
                            <input type="checkbox" id="voltaCheck" onChange={Check} className="checkbox text-white bg-transparent btn-outline-light" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3 col-sm-3 col-md-3 col-lg-3 border border-1  rounded ">
                            <label className="control-label text-white mt-1">Data Ida: </label>
                        </div>
                        <div className="col-7 col-sm-7 col-md-7 col-lg-7 m-0">
                            <input type="date" className="form-control text-white bg-transparent btn-outline-light" onChange={(e) => setDataIda(e.target.value)} />
                        </div>
                    </div>
                    <div className="row mb-3" id="volta" style={{ display: 'none' }}>
                        <div className="col-4 col-sm-4 col-md-4 col-lg-4 border border-1  rounded">
                            <label className="control-label text-white mt-1">Data Volta: </label>
                        </div>
                        <div className="col-7 col-sm-7 col-md-7 col-lg-7 m-0">
                            <input type="date" className="form-control text-white bg-transparent btn-outline-light" onChange={(e) => setDataVolta(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer  px-0 py-2">
                <div className="form-group">
                    <button type="button" className="btn colorPurple btn-outline-light text-white me-2"
                        data-bs-dismiss="modal">
                        Sair
                    </button>
                    <button type="button" className="btn colorPurple btn-outline-light text-white me-2" onClick={Desconto}> Aplicar Desconto </button>
                    <button type="submit" onClick={handleClick} className="btn colorPurple btn-outline-light text-white">Comprar</button>
                </div>
            </div>
        </form>
    )
}

export default FormComprar


