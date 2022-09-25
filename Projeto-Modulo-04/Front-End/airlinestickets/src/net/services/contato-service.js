import api from "../conector/conector";


// Contato
export const obterContatos = async () => {
    return (await api.get("/contato/buscarContatos")).data;
}

export const obterContato = async (id) => {
    return (await api.get("/contato/buscarContato/" + id)).data;
}

export const adicionarContato = async (contato) => {
    var dados = { nome: contato.nome, email: contato.email, mensagem: contato.mensagem };
    return (await api.post("/contato/addContato", dados)).data;
}
export const alterarContato = async (id, contato) => {
    var dados = { nome: contato.nome, email: contato.email, mensagem: contato.mensagem };
    return (await api.put("/contato/alterarContato/" + id, dados)).data;
}

export const excluirContato = async (id) => {
    await api.delete("/contato/deletarContato/" + id);
}
