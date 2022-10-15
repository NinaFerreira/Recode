import FormComprar from "./FormComprar"


function ModalCompra({ title, preco }) {
    

    return (
        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content colorPurpleLigth">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Comprar Passagem</h5>
                        <button type="button" className="btn btn-close bg-danger btn-outline-danger " data-bs-dismiss="modal"
                            aria-label="Close"><span className="text-white"></span></button>
                    </div>
                    <div className="modal-body p-0">
                        <FormComprar title={title} preco={preco} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalCompra