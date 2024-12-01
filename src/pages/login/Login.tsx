import styles from "./login.module.css";
import "../../App.css";
import FooterBar from "../../components/footerBar/FooterBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";
import { useRef, useState } from "react";
import requisicaoEntrar from "./requisicoesLogin.ts";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/spinner/spinner.tsx";


function Login() {
    const email = useRef(null);
    const senha = useRef(null);
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValido, setSenhaValido] = useState(true);
    const [labelSenha, setLabelSenha] = useState("Campo obrigatório")
    const [tipoDeIconeOlhinho, setTipoDeIconeOlhinho] = useState(faEyeSlash);
    const [girarSpinner, setGirarSpinner] = useState(false);

    function validarEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email.current.value)) {
            setEmailValido(false);
        } else setEmailValido(true);
    }

    function validarSenha() {
        if (senha.current.value === "") {
            setSenhaValido(false);
            setLabelSenha("Campo obrigatório");
        } else if (senha.current.value !== "") {
            setLabelSenha("Sua senha deve conter ao menos 8 caracteres")
            if (senha.current.value.split("").length >= 8) setSenhaValido(true)
            else setSenhaValido(false);
        }
    }

    function verSenha() {
        if (tipoDeIconeOlhinho.iconName === "eye-slash") return setTipoDeIconeOlhinho(faEye);
        else return setTipoDeIconeOlhinho(faEyeSlash)
    }

    function fazerRequisicaoEntrar(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (emailValido && senhaValido && email.current.value !== "" && senha.current.value !== "") {
            const value = requisicaoEntrar({ email: email.current.value, senha: senha.current.value });
            setGirarSpinner(true);
            setTimeout(() => {
                setGirarSpinner(false);
                console.log(value);
            }, 1000);
        }
    }

    return (
        <div>
            {girarSpinner ? <Spinner /> : null}
            <div className={styles.backgroundAzul}></div>
            <div className={styles.backgroundBranco}></div>
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
                                <input type="email" autoComplete="on" ref={email} onChange={validarEmail} className={classNames("fonte", styles.input)} style={{ borderColor: emailValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeEmail} style={{ opacity: emailValido ? 0 : 1 }} />
                                <p className={classNames("fonte", styles.paragrafoEmailInvalido)} style={{ opacity: emailValido ? 0 : 1 }}>Digite um email válido. Ex: douglas@gmail.com</p>
                            </div>

                            <div className={styles.containerInputSenha}>
                                <label className={classNames("fonte", styles.labelSenha)} style={{
                                    color: senhaValido ? "#858585" : "#c700c7"
                                }}>Senha</label>
                                <input type={tipoDeIconeOlhinho.iconName === "eye-slash" ? "password" : "text"} autoComplete="on" ref={senha} onChange={validarSenha} className={classNames("fonte", styles.input)} style={{ borderColor: senhaValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeSenha} style={{ opacity: senhaValido ? 0 : 1 }} />
                                <FontAwesomeIcon icon={tipoDeIconeOlhinho} className={styles.olhinho} onClick={verSenha} style={{ right: senhaValido ? "36.7%" : "38.6%" }} />
                                <p className={classNames("fonte", styles.paragrafoSenhaInvalido)} style={{ opacity: senhaValido ? 0 : 1 }}>{labelSenha}</p>
                            </div>
                            <button className={classNames("fonte", styles.buttonLogin)} onClick={fazerRequisicaoEntrar}>Entrar</button>
                        </form>

                    </article>
                    <article className={styles.articleLoginExterior}>
                        <section className={styles.containerOutrosMeioslogin}>
                            <button className={styles.buttonMeioLoginExterior}>
                                <FontAwesomeIcon icon={faFacebook} className={styles.icone} />
                                <p className={classNames("fonte", styles.descricao)}>Entrar com Facebook</p>
                            </button>
                            <button className={styles.buttonMeioLoginExterior}>
                                <FontAwesomeIcon icon={faGoogle} className={styles.icone} />
                                <p className={classNames("fonte", styles.descricao)}>Entrar com Google</p>
                            </button>
                            <button className={styles.buttonMeioLoginExterior}>
                                <FontAwesomeIcon icon={faApple} className={styles.icone} />
                                <p className={classNames("fonte", styles.descricaoLogin)}>Entrar com Apple</p>
                            </button>
                        </section>
                    </article>

                    <article className={styles.containerEqueceuENaoTemContaOuSenha}>
                        <a href="" className={classNames("fonte", styles.descricaoEsqueceuSenha)}>Esqueceu a senha?</a>
                        <p className={classNames("fonte", styles.descricaoNaoTemConta)}>Você não tem conta? <a href="" className={classNames("fonte", styles.criarConta)}>Criar conta</a></p>
                    </article>
                </div>
            </div>
            <div className={styles.rodape}>
                <FooterBar />
            </div>
        </div >

    )
}

export default Login;