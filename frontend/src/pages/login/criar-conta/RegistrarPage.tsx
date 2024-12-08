import styles from "./registrarPage.module.css";
import "../../../App.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EMAIL_PARA_CRIAR_CONTA, USER_PARA_CRIAR_CONTA } from "../../../redux/sliceCriarConta";

function RegistrarPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValido, setSenhaValido] = useState(true);
    const [labelSenha, setLabelSenha] = useState("Campo obrigatório");

    function validarSenha(event: { target: { value: string; }; }) {
        const nomeDigitado = event.target.value;
        setNome(nomeDigitado);
        const partesDoNome = nomeDigitado.split(" ");

        if (nomeDigitado === "") {
            setSenhaValido(false);
            setLabelSenha("Campo obrigatório");
        } else if (nomeDigitado !== "") {
            setLabelSenha("Escreva no mínimo dois nomes. Ex: Douglas Phelipe.")
            const verificarNome = partesDoNome.every((parteDoNome: string) => parteDoNome !== "" && parteDoNome.length >= 2);
            if (partesDoNome.length >= 2 && verificarNome) setSenhaValido(true)
            else setSenhaValido(false);
        }
    };

    function validarEmail(event: { target: { value: string; }; }) {
        const emailDigitado = event.target.value;
        setEmail(emailDigitado);

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(emailDigitado)) {
            setEmailValido(false);
        } else setEmailValido(true);
    };

    function voltarPagina() {
        navigate(-1);
    };

    function IrParaSenhaPage() {
        dispatch(EMAIL_PARA_CRIAR_CONTA(email));
        dispatch(USER_PARA_CRIAR_CONTA(nome));
        navigate("senha");
    };

    return (
        <div>
            <div className={styles.containerPrincipal}>
                <div className={styles.containerRegistro}>
                    <div className={styles.containerX}>
                        <FontAwesomeIcon icon={faX} className={styles.x} onClick={voltarPagina} />
                    </div>
                    <div className={styles.containerTitulo}>
                        <h2 className={classNames("fonte", styles.titulo)}>Crie uma conta com seu e-mail</h2>
                    </div>
                    <article className={styles.articleForm}>
                        <form action="" className={styles.form}>
                            <div className={styles.containerInputSenha}>
                                <label className={classNames("fonte", styles.labelNomeCompleto)} style={{
                                    color: senhaValido ? "#858585" : "#c700c7"
                                }}>Nome completo</label>
                                <input type="text" autoComplete="on" value={nome} className={classNames("fonte", styles.input)} onChange={validarSenha} style={{ borderColor: senhaValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeNomeCompleto} style={{ opacity: senhaValido ? 0 : 1 }} />
                                <p className={classNames("fonte", styles.paragrafoSenhaInvalido)} style={{ opacity: senhaValido ? 0 : 1 }}>{labelSenha}</p>
                            </div>

                            <div className={styles.containerInputEmail}>
                                <label className={classNames("fonte", styles.labelEmail)} style={{
                                    color: emailValido ? "#858585" : "#c700c7"
                                }}>E-mail</label>
                                <input type="email" autoComplete="on" value={email} onChange={validarEmail} className={classNames("fonte", styles.input)} style={{ borderColor: emailValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeEmail} style={{ opacity: emailValido ? 0 : 1 }} />
                                <p className={classNames("fonte", styles.paragrafoEmailInvalido)} style={{ opacity: emailValido ? 0 : 1 }}>Digite um email válido. Ex: douglas@gmail.com</p>
                            </div>
                            <div className={styles.containerCertificaoMaioridade}>
                                <p className={classNames("fonte", styles.certificacaoMaioridade)} >Ao me cadastrar, eu declaro ter ciência de que este cadastro é somente para maiores de 18 anos.</p>
                            </div>

                            <button className={classNames("fonte", styles.buttonCadastrar)} onClick={IrParaSenhaPage}>Criar conta</button>
                        </form>

                    </article>
                    <article className={styles.containerJaTemContaECertificacao}>
                        <p className={classNames("fonte", styles.descricaoJaTemConta)}>Já tem uma conta? <a href="" className={classNames("fonte", styles.buttonEntrarConta)}>Entrar</a></p>
                        <p className={classNames("fonte", styles.descricaoCertificaoDoApp)}>Ao prosseguir você está ciente e concorda em receber comunicações da AutoWeb.</p>
                    </article>
                </div>
            </div>
        </div >

    )
};

export default RegistrarPage;