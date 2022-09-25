import FormContatoAdm from "./FormContatoAdm"
import FormViagemAdm from "./FormViagemAdm"

function ModalAdm({idV, idC, id, title }) {
    return (
        <div className="modal fade" id="ModalA">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content colorPurpleLigth">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editarModalLabel">{title}</h5>
                        <button type="button" className="btn-close colorPurple" data-bs-dismiss="modal"
                            aria-label="Close"><span className="text-white">X</span></button>
                    </div>
                    <div className="modal-body p-0 justify-content-center align-content-center">
                        {id && (title === "Apagar Contato" || title === "Alterar Contato") && (
                            <FormContatoAdm id={id} title={title} />
                        )}
                        {idV && idC && (title === "Apagar Viagem" || title === "Alterar Viagem") && (
                            <FormViagemAdm idV={idV} idC={idC} title={title} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAdm