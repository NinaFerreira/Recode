import TabelaViagemAdm from '../adm/TabelaViagemAdm';
import { useState } from 'react'
import TabelaContatoAdm from '../adm/TabelaContatoAdm';

function Administracao() {

    const [btnContato, setBtnContato] = useState(true);
    const [btnViagem, setBtnViagem] = useState(false);
    const [title, setTitle] = useState("Caixa de Contatos");


    function show(title) {
        if (title === "Contato") {
            setBtnContato(true);
            setBtnViagem(false);
            setTitle("Caixa de Contatos");
        } else if (title === "Viagem") {
            setBtnContato(false);
            setBtnViagem(true);
            setTitle("Lista de Viagens");

        }
    }

    return (
        <div className="row h-50 my-4 text-center text-break">
            <div className="col-2 mx-3">
                <div className="row my-2">
                    <button className="btn w-100 btn-md text-white colorPurple" onClick={(e) => show("Contato")}>
                        Caixa de Mensagem
                    </button>
                </div>
                <div className="row">
                    <button className="btn w-100 btn-md text-white colorPurple" onClick={(e) => show("Viagem")}>
                        Lista de Viagens
                    </button>
                </div>
            </div>
            <div className="col-8 colorPurple rounded py-3 text-center text-break border border-white">
                <h3 className="mb-3">Administração do Airlines Tickets - {title}</h3>
                <div className="row mx-auto">
                    {btnContato && (
                        <TabelaContatoAdm />
                    )}
                    {btnViagem && (
                        <TabelaViagemAdm />
                    )}
                </div>
            </div>
        </div >
    )

}

export default Administracao