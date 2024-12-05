import styles from "./registrarPage.module.css";
import "../../../App.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Background from "../../../components/telaDeFundo/background";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emailParaCriarConta, nomeDeUserParaCriarConta } from "../../../redux/sliceCriarConta";

function RegistrarPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const email = useRef(null);
    const nome = useRef(null);
    const [emailValido, setEmailValido] = useState(true);
    const [senhaValido, setSenhaValido] = useState(true);
    const [labelSenha, setLabelSenha] = useState("Campo obrigatório");

    function validarSenha() {
        const partesDoNome = nome.current.value.split(" ");

        if (nome.current.value === "") {
            setSenhaValido(false);
            setLabelSenha("Campo obrigatório");
        } else if (nome.current.value !== "") {
            setLabelSenha("Escreva no mínimo dois nomes. Ex: Douglas Phelipe.")
            const verificarNome = partesDoNome.every((parteDoNome: string) => parteDoNome !== "" && parteDoNome.length >= 2);
            if (partesDoNome.length >= 2 && verificarNome) setSenhaValido(true)
            else setSenhaValido(false);
        }
    };

    function validarEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email.current.value)) {
            setEmailValido(false);
        } else setEmailValido(true);
    };

    function voltarPagina() {
        navigate(-1);
    };

    function IrParaSenhaPage() {
        dispatch(emailParaCriarConta(email.current.value));
        dispatch(nomeDeUserParaCriarConta(nome.current.value));
        navigate("senha");
    };

    return (
        <div>
            <Background pageAtual="Registrar" />
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
                                <input type="text" autoComplete="on" ref={nome} className={classNames("fonte", styles.input)} onChange={validarSenha} style={{ borderColor: senhaValido ? "#e0e0e0" : "#c700c7" }} />
                                <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeNomeCompleto} style={{ opacity: senhaValido ? 0 : 1 }} />
                                <p className={classNames("fonte", styles.paragrafoSenhaInvalido)} style={{ opacity: senhaValido ? 0 : 1 }}>{labelSenha}</p>
                            </div>

                            <div className={styles.containerInputEmail}>
                                <label className={classNames("fonte", styles.labelEmail)} style={{
                                    color: emailValido ? "#858585" : "#c700c7"
                                }}>E-mail</label>
                                <input type="email" autoComplete="on" ref={email} onChange={validarEmail} className={classNames("fonte", styles.input)} style={{ borderColor: emailValido ? "#e0e0e0" : "#c700c7" }} />
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