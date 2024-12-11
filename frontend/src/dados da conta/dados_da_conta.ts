interface TIPO_DE_DADOS {
    [key: string]: string,
}

const PEGAR_DADOS: null | string = localStorage.getItem("dados_do_usuário");
let DADOS_DO_USUARIO: string | TIPO_DE_DADOS = "não logado";
let LOGGINED: boolean = false;

function VERIFICAR_ESTADO_DE_LOGIN() {
    if (PEGAR_DADOS == null) {
        DADOS_DO_USUARIO = "não logado";
        LOGGINED = DADOS_DO_USUARIO !== "não logado";
    } else {
        try {
            const parsedDados = JSON.parse(PEGAR_DADOS);
            if (typeof parsedDados === "object" && parsedDados !== null) {
                DADOS_DO_USUARIO = parsedDados;
                LOGGINED = DADOS_DO_USUARIO !== "não logado";
            } else {
                DADOS_DO_USUARIO = "não logado";
                LOGGINED = DADOS_DO_USUARIO !== "não logado";
            }
            LOGGINED = DADOS_DO_USUARIO !== "não logado";
        } catch (error) {
            LOGGINED = DADOS_DO_USUARIO !== "não logado";
            DADOS_DO_USUARIO = "não logado";
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
    DADOS_DO_USUARIO = "não logado";
    LOGGINED = false;

}


export default DADOS_DO_USUARIO;
export { VERIFICAR_ESTADO_DE_LOGIN, REMOVER_DADOS_DA_CONTA, LOGGINED };