import axios from "axios";

const API_URL = "http://localhost:3000";


async function requisicaoEntrar(dados: { email: string; senha: string; }) {
    try {
        const response = await axios.get(`${API_URL}/entrar`, {
            params: {
                email: dados.email,
                senha: dados.senha,
            },
        });
        return response.data;   
    } catch (error) {
        console.log(error);
    }
}

async function requisicaoCriarConta(user: string, email: string, senha: string) {
    try {
        const response = await axios.post(`${API_URL}/cadastrar`, {
            user,
            email,
            senha,
        }); 
        return response.data;
    } catch (error) {
        console.log("Resposta ao erro em requisicaoCriarConta:",error);
    }
}

async function requisicaoRedefinirSenha(senha: string, id: string) {
    try {
        const response = await axios.put(`${API_URL}/atualizar-conta`, {
            senha,
            id,
        }); 
        return response;
    } catch (error) {
        console.log("Resposta ao erro em requisicaoRedefinirSenha:",error);
    }
}

async function requisicaoVerificarDados(tipoDeDados: string, valorDosDados: string) {
    const params = { [tipoDeDados]: valorDosDados };
    try {
        const response = await axios.get(`${API_URL}/verificar-dados`, { params });
        // se os dados forem encontrados ou não, envie o estado da requisição
        return response.data;
    } catch (error) {
        console.log("Resposta ao erro em requisicaoVerificarDados:",error);
    }
}

export { requisicaoEntrar, requisicaoCriarConta, requisicaoRedefinirSenha, requisicaoVerificarDados };