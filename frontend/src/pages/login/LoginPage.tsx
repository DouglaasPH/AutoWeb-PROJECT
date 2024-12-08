import styles from "./loginPage.module.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { SetStateAction, useState } from "react";
import { requisicaoEntrar } from "./requisicoesLogin.ts";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/spinner/spinner.tsx";
import { useNavigate } from "react-router-dom";
import LoginErrorModal from "./login-erro/LoginErrorModal.tsx";
import DADOS_DO_USUARIO, { VERIFICAR_ESTADO_DE_LOGIN } from "../../dados da conta/dados_da_conta.ts";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValido, setSenhaValido] = useState(true);
    const [labelSenha, setLabelSenha] = useState("Campo obrigatório")
    const [tipoDeIconeOlhinho, setTipoDeIconeOlhinho] = useState(faEyeSlash);
    const [girarSpinner, setGirarSpinner] = useState(false);
    const [exibirModalDeError, setExibirModalDeError] = useState("false");

    function validarEmail(event: { target: { value: SetStateAction<string>; }; }) {
        setEmail(event.target.value)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(event.target.value)) {
            setEmailValido(false);
        } else setEmailValido(true);
    }

    function validarSenha(event: { target: { value: SetStateAction<string>; }; }) {
        setSenha(event.target.value)
        if (event.target.value === "") {
            setSenhaValido(false);
            setLabelSenha("Campo obrigatório");
        } else if (event.target.value !== "") {
            setLabelSenha("Sua senha deve conter ao menos 8 caracteres")
            if (event.target.value.split("").length >= 8) setSenhaValido(true)
            else setSenhaValido(false);
        }
    }

    function verSenha() {
        if (tipoDeIconeOlhinho.iconName === "eye-slash") return setTipoDeIconeOlhinho(faEye);
        else return setTipoDeIconeOlhinho(faEyeSlash)
    }

    async function fazerRequisicaoEntrar(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (emailValido && senhaValido && email !== "" && senha !== "") {
            const request = await requisicaoEntrar({ email: email, senha: senha });
            setGirarSpinner(true);
            setTimeout(() => {
                setGirarSpinner(false);
                if (request?.data.encontrado) {
                    console.log(request.data.dados_da_conta);
                    localStorage.setItem("dados_do_usuário", JSON.stringify(request.data.dados_da_conta));
                    VERIFICAR_ESTADO_DE_LOGIN();
                    navigate("/")
                } else setExibirModalDeError("true");
            }, 1500);
        }
    }

    function irParaRedefinirSenhaPage(event: { preventDefault: () => void; }) {
        event.preventDefault();
        navigate("redefinir-senha");
    }

    function irParaRegistrarPage(event: { preventDefault: () => void; }) {
        event.preventDefault();
        navigate("registrar");
    };

    function abrirOuFecharLoginErrorModal(condicao: string) {
        setExibirModalDeError(condicao);
    }

    return (
        <div>
            {exibirModalDeError === "true" ? <LoginErrorModal exibirOuNao={abrirOuFecharLoginErrorModal} /> : null}
            {girarSpinner ? <Spinner /> : null}

            <div className={styles.containerForm}>
                <div className={styles.containerLogin}>
                    <div className={styles.legenda}>
                        <h2 className={classNames("fonte", styles.tituloLogin)}>Entrar</h2>
                        <p className={classNames("fonte", styles.descricaoTitulo)}>Digite o seu e-mail e senha.</p>
                    </div>
                    <article className={styles.articleForm}>
                        <form action="" className={styles.form}>
                            <div className={styles.containerInputEmail}>
                                <label className={classNames("fonte", styles.labelEmail)} style={{
                                    color: emailValido ? "#858585" : "#c700c7"
                                }}>E-mail</label>
                                <input type="email" autoComplete="on" value={email} onChange={validarEmail} className={classNames("fonte", styles.input)} style={{ borderColor: emailValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeEmail} style={{ opacity: emailValido ? 0 : 1 }} />
                                <p className={classNames("fonte", styles.paragrafoEmailInvalido)} style={{ opacity: emailValido ? 0 : 1 }}>Digite um email válido. Ex: douglas@gmail.com</p>
                            </div>

                            <div className={styles.containerInputSenha}>
                                <label className={classNames("fonte", styles.labelSenha)} style={{
                                    color: senhaValido ? "#858585" : "#c700c7"
                                }}>Senha</label>
                                <input type={tipoDeIconeOlhinho.iconName === "eye-slash" ? "password" : "text"} autoComplete="on" value={senha} onChange={validarSenha} className={classNames("fonte", styles.input)} style={{ borderColor: senhaValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeSenha} style={{ opacity: senhaValido ? 0 : 1 }} />
                                <FontAwesomeIcon icon={tipoDeIconeOlhinho} className={styles.olhinho} onClick={verSenha} style={{ right: senhaValido ? "35.5%" : "37.5%" }} />
                                <p className={classNames("fonte", styles.paragrafoSenhaInvalido)} style={{ opacity: senhaValido ? 0 : 1 }}>{labelSenha}</p>
                            </div>

                            <div className={styles.containerEsqueciMinhaSenha}>
                                <a href="" className={classNames("fonte", styles.descricaoEsqueceuSenha)} onClick={irParaRedefinirSenhaPage}>Esqueceu a senha?</a>
                            </div>

                            <div className={styles.containerButtonEntrar}>
                                <button className={classNames("fonte", styles.buttonLogin)} onClick={fazerRequisicaoEntrar}>Entrar</button>
                            </div>
                        </form>

                    </article>
                    <article className={styles.containerEsqueceuENaoTemContaOuSenha}>
                        <p className={classNames("fonte", styles.descricaoNaoTemConta)}>Você não tem conta? <a href="" className={classNames("fonte", styles.criarConta)} onClick={irParaRegistrarPage}>Criar conta</a></p>
                    </article>
                </div>
            </div>
        </div >
    )
}

export default LoginPage;