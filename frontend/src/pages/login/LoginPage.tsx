import styles from "./loginPage.module.css";
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { requisicaoEntrar } from "./requisicoesLogin.ts";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/spinner/spinner.tsx";
import { useNavigate } from "react-router-dom";
import LoginErrorModal from "./login-erro/LoginErrorModal.tsx";
import { VERIFICAR_ESTADO_DE_LOGIN } from "../../dados da conta/dados_da_conta.ts";

function LoginPage() {
    useEffect(() => {
        if (aparecerSpinner) document.body.classList.add('no-scroll')
        else document.body.classList.remove('no-scroll');
    });

    const [aparecerSpinner, setAparecerSpinner] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValido, setSenhaValido] = useState(true);
    const [labelSenha, setLabelSenha] = useState("Campo obrigatório")
    const [tipoDeIconeOlhinho, setTipoDeIconeOlhinho] = useState(faEyeSlash);
    const [exibirModalDeError, setExibirModalDeError] = useState("false");

    function validarEmail(event: { target: { value: string; }; }) {
        setEmail(event.target.value)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(event.target.value)) {
            setEmailValido(false);
        } else setEmailValido(true);
    }

    function validarSenha(event: { target: { value: string; }; }) {
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
            setAparecerSpinner(true);
            let request: { sucesso: boolean; dados_da_conta: undefined | number } = {
                sucesso: false,
                dados_da_conta: undefined,
            };

            try {
                request = await requisicaoEntrar({ email: email, senha: senha });
            } finally {
                console.log(request);
                setAparecerSpinner(false)
                if (request.sucesso) {
                    localStorage.setItem("dados_do_usuário", JSON.stringify(request.dados_da_conta));
                    VERIFICAR_ESTADO_DE_LOGIN();
                    navigate("/")
                    window.location.reload();
                    console.log(localStorage.getItem("dados_do_usuário"))
                } else setExibirModalDeError("true");
            }
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
        <>
            {exibirModalDeError === "true" ? <LoginErrorModal exibirOuNao={abrirOuFecharLoginErrorModal} /> : null}
            {aparecerSpinner ? <Spinner /> : null}

            <div className={styles.containerForm}>
                <div className={styles.containerLogin}>
                    <div className={styles.legenda}>
                        <h2 className={classNames("fonte", styles.tituloLogin)}>Entrar</h2>
                        <p className={classNames("fonte", "colorDefault", styles.descricaoTitulo)}>Digite o seu e-mail e senha.</p>
                    </div>
                    <article className={styles.articleForm}>
                        <form action="" className={styles.form}>
                            <div className={styles.containerInputEmail}>
                                <label className={classNames("fonte", styles.labelEmail)} style={{
                                    color: emailValido ? "#858585" : "#c700c7"
                                }}>E-mail</label>
                                <input type="email" autoComplete="on" value={email} onChange={validarEmail} className={classNames("fonte", styles.input)} style={{ borderColor: emailValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeEmail} style={{ opacity: emailValido ? 0 : 1 }} />
                                <p className={classNames("fonte", "colorDefault", styles.paragrafoEmailInvalido)} style={{ opacity: emailValido ? 0 : 1 }}>Digite um email válido. Ex: douglas@gmail.com</p>
                            </div>

                            <div className={styles.containerInputSenha}>
                                <label className={classNames("fonte", styles.labelSenha)} style={{
                                    color: senhaValido ? "#858585" : "#c700c7"
                                }}>Senha</label>
                                <input type={tipoDeIconeOlhinho.iconName === "eye-slash" ? "password" : "text"} autoComplete="on" value={senha} onChange={validarSenha} className={classNames("fonte", styles.input)} style={{ borderColor: senhaValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeSenha} style={{ opacity: senhaValido ? 0 : 1 }} />
                                <FontAwesomeIcon icon={tipoDeIconeOlhinho} className={styles.olhinho} onClick={verSenha} style={{ right: senhaValido ? "35.5%" : "37.5%" }} />
                                <p className={classNames("fonte", "colorDefault", styles.paragrafoSenhaInvalido)} style={{ opacity: senhaValido ? 0 : 1 }}>{labelSenha}</p>
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
                        <p className={classNames("fonte", "colorDefault", styles.descricaoNaoTemConta)}>Você não tem conta? <a href="" className={classNames("fonte", styles.criarConta)} onClick={irParaRegistrarPage}>Criar conta</a></p>
                    </article>
                </div>
            </div>

        </>
    )
}

export default LoginPage;