interface TIPO_DE_DADOS {
    cep: string,
    cidade: string,
    cpf: string,
    data_de_nascimento: string,
    email: string,
    estado: string,
    genero: string,
    id: string,
    telefone: string,
    user: string,
}

const PEGAR_DADOS: null | string = localStorage.getItem("dados_do_usuário");
let DADOS_DO_USUARIO: TIPO_DE_DADOS = {
    cep: "",
    cidade: "",
    cpf: "",
    data_de_nascimento: "",
    email: "",
    estado: "",
    genero: "",
    id: "",
    telefone: "",
    user: "",
};
let LOGGINED: boolean = false;

function VERIFICAR_ESTADO_DE_LOGIN() {
    if (PEGAR_DADOS == null) {
        LOGGINED = false;
    } else {
        try {
            const parsedDados = JSON.parse(PEGAR_DADOS);
            if (typeof parsedDados === "object" && parsedDados !== null) {
                DADOS_DO_USUARIO = parsedDados;
                LOGGINED = parsedDados !== null;
            } else {
                LOGGINED = false;
            }
        } catch (error) {
            LOGGINED = false;
            console.error("erro ao parsear dados do usuário:", error);
        }
    };
};

VERIFICAR_ESTADO_DE_LOGIN();

/*
const PEGAR_DADOS: null | string = localStorage.getItem("dados_do_usuário");
let DADOS_DO_USUARIO: string | TIPO_DE_DADOS = "não logado" ;
let LOGGINED: boolean = false;
*/
function REMOVER_DADOS_DA_CONTA() {
    localStorage.removeItem("dados_do_usuário");
    DADOS_DO_USUARIO = {
    cep: "",
    cidade: "",
    cpf: "",
    data_de_nascimento: "",
    email: "",
    estado: "",
    genero: "",
    id: "",
    telefone: "",
    user: "",
};
    LOGGINED = false;

}


export default DADOS_DO_USUARIO;
export { VERIFICAR_ESTADO_DE_LOGIN, REMOVER_DADOS_DA_CONTA, LOGGINED };