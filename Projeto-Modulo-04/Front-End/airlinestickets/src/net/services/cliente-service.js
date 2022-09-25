import api from "../conector/conector";

// Cliente 

export const buscarClientes = async() => {
    return (await api.get("/cliente/buscarClientes")).data;
}

export const buscarCliente = async(id) => {
    return (await api.get("/cliente/buscarCliente/"+id)).data;
}

export const buscarClienteByUser = async(id) => {
    return (await api.get("/cliente/buscarClienteByUser/"+id)).data;
}

export const cadastrarCliente = async(nome, cpf, idade, viagem) => {
    var dados = {nome, idade, cpf, viagem};
    return (await api.post("/cliente/cadastrarCliente/", dados)).data;
}

export const alterarCliente = async(id, nome, cpf, idade, viagem) => {
    var dados = {id, nome, cpf, idade, viagem};
    return (await api.put("/cliente/alterarCliente/"+id, dados )).data;
}

export const excluirCliente = async(id) => {
    await api.delete("/cliente/deleteCliente/"+id);
}