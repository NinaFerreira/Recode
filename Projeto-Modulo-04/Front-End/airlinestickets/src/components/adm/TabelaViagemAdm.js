import React, { useEffect, useState } from 'react';
import { buscarClientes } from '../../net/services/cliente-service';
import ModalAdm from './ModalAdm';

function TabelaViagemAdm() {

    const [clientes, setClientes] = useState();
    const [title, setTitle] = useState('');
    const [idV, setIdV] = useState();
    const [idC, setIdC] = useState();



    useEffect(() => {
        if (clientes === undefined) {
            async function fetchData() {
                const recebe = await buscarClientes();
                setClientes(recebe);
            }
            fetchData();
        }
    }, [clientes])

    function callModal(idV, idC, title) {
        setIdV(idV);
        setIdC(idC);
        setTitle(title);
    }

    return (
        <>
            <ModalAdm idV={idV} idC={idC} title={title} />
            <table className="table text-break text-center">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>CPF</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Valor</th>
                        <th>Data Ida</th>
                        <th>DataVolta</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                    {clientes && (
                        <>
                            {clientes.map(cliente => (
                                <>
                                    {cliente.viagem && (
                                        <tr key={cliente.id.toString() + cliente.viagem.id.toString()}>
                                            <td>{cliente.nome}</td>
                                            <td>{cliente.idade}</td>
                                            <td>{cliente.cpf}</td>
                                            <td>{cliente.viagem.origem}</td>
                                            <td>{cliente.viagem.destino}</td>
                                            <td> R$: {cliente.viagem.valor} </td>
                                            <td>{cliente.viagem.data_ida} </td>
                                            <td>{cliente.viagem.data_volta} </td>
                                            <td>
                                                <button type="button" className="btn btn-sm m-1" data-bs-toggle="modal" data-bs-target="#ModalA" onClick={(e) => callModal(cliente.viagem.id, cliente.id,"Alterar Viagem")}>
                                                    <img src="img/edit.png" alt="editar" />
                                                </button>

                                                <button type="button" className="btn btn-sm m-1" data-bs-toggle="modal" data-bs-target="#ModalA" onClick={(e) => callModal(cliente.viagem.id, cliente.id , "Apagar Viagem")}>
                                                    <img src="img/delete.png" alt="delete" />
                                                </button>
                                            </td>
                                        </tr>
                                    )}
                                </>
                            ))}
                        </>
                    )}

                </tbody >
            </table >
        </>
    )
}


export default TabelaViagemAdm