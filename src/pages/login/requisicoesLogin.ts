import axios from "axios";

const API_URL = "http://localhost:3000";


async function requisicaoEntrar(dados: { email: string; senha: string; }) {
    try {
        const response = await axios.get(`${API_URL}/verificarEmailESenha`, {
            params: {
                email: dados.email,
                senha: dados.senha,
            },
        });
        console.log(response.data);        

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
        console.log(response);
    } catch (error) {
        console.log("Resposta ao erro em requisicaoCriarConta:",error);
    }
}

async function requisicaoVerificarEmail(user: string, email: string, senha: string) {
    try {
        const response = await axios.get(`${API_URL}/verificarEmail`, {
            params: { email }
        });

        // se o e-mail não for encontrado em algum cadastro no banco de dados, então crie um
        if (!response.data.encontrado) requisicaoCriarConta(user, email, senha);
        else return "o email já possui um cadastro!";
        return response.data;
    } catch (error) {
        console.log("Resposta ao erro em requisicaoVerificarEmail:",error);
    }
}

export { requisicaoEntrar, requisicaoVerificarEmail, requisicaoCriarConta };