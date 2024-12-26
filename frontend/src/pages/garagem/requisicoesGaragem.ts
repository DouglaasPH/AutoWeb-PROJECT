import axios from "axios";

const API_URL = "http://localhost:3000";
const API_URL_CEP = "https://viacep.com.br/ws";

async function buscarCep(cep: string) {
    try {
        const response = await axios.get(`${API_URL_CEP}/${cep}/json/`);
        return { estado: response.data.estado, cidade: response.data.localidade };
    } catch (error) {
        console.log(error)
    }
};

async function requisicaoSalvarAlteracoes(dadosParaAlterar: object) {
    try {
        const response = await axios.put(`${API_URL}/atualizar-conta`, dadosParaAlterar);
        console.log(response);
        return response;
    } catch (error) {
        console.log("Resposta ao erro em requisicaoDadosParaAlterar:", error);
    }
}

async function requisicaoConsultarDados(id: string) {
    const params = { id };

    try {
        const response: { data: { encontrado: boolean; dados_da_conta: object; } } = await axios.get(`${API_URL}/consultar-dados`, { params });
        console.log(response);
        if (response.data.encontrado) {
            localStorage.removeItem("dados_do_usuário");
            localStorage.setItem("dados_do_usuário", JSON.stringify(response.data.dados_da_conta));
            console.log(localStorage.getItem("dados_do_usuário"));
            return response;
        } else return response;
    } catch (error) {
        console.log(error);
    }
}


export { buscarCep, requisicaoSalvarAlteracoes, requisicaoConsultarDados };