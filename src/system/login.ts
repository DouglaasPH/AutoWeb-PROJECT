const dadosDaConta = {};

function login() {
    const estadoDeLogin = localStorage.getItem("estado-de-login");
    const user = localStorage.getItem("user");
    const email = localStorage.getItem("email");
    const senha = localStorage.getItem("senha");
    const genero = localStorage.getItem("genero");
    const data_de_nascimento = localStorage.getItem("data_de_nascimento");
    const cpf = localStorage.getItem("cpf");
    const cep = localStorage.getItem("cep");
    const estado = localStorage.getItem("estado");
    const cidade = localStorage.getItem("cidade");

    if (estadoDeLogin === null) {
        localStorage.setItem("estado-de-login", "false");
    } else if (estadoDeLogin == "true") {
        Object.assign(dadosDaConta, { user, email, senha, genero, data_de_nascimento, cpf, cep, estado, cidade });
    }
}

export { login, dadosDaConta };