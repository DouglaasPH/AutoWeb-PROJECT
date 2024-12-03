const API_URL = "http://localhost:3000";


async function requisicaoEntrar(dados: { email: string; senha: string; }) {
    try {
        const response = await fetch(`${API_URL}/verificarEmailESenha?email=${dados.email}&senha=${dados.senha}`, {
            method: "GET",
        });

        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

async function requisicaoCriarConta(email: string) {
    try {
        const response = await fetch(`${API_URL}/verificarEmail?email=${email}`, {
            method: "GET",
        });

        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.log(error)
   }
}

export {requisicaoEntrar, requisicaoCriarConta};