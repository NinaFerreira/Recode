import api from "../conector/conector";

export const obterViagens = async() => {
    return (await api.get("/viagem/buscarViagens")).data;
}

export const obterViagem = async(id) => {
    return (await api.get("/viagem/buscarViagem/"+id)).data;
}

export const alterarViagem = async(id, origem, destino, valor, data_ida, data_volta) => {
    var viagem = {origem, destino, valor, data_ida, data_volta};
    return (await api.put("/viagem/alterarViagem/"+id, viagem)).data;
}

export const excluirViagem = async(id) => {
    await api.delete("/viagem/excluirViagem/"+id );
}
