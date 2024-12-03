import styles from "./senhaPage.module.css";
import "../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useRef, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { requisicaoCriarConta } from "../../requisicoesLogin";
import { useSelector } from "react-redux";


function SenhaPage() {
    const emailParaEnviarCodigo = useSelector(state => state.email);
    const navigate = useNavigate();
    const senha = useRef(null);
    const confirmarSenha = useRef(null);
    const [senhaValido, setSenhaValido] = useState(true);
    const [confirmarSenhaValido, setConfirmarSenhaValido] = useState(true);
    const [tipoDeIconeOlhinhoSenha, setTipoDeIconeOlhinhoSenha] = useState(faEyeSlash);
    const [tipoDeIconeOlhinhoConfirmarSenha, setTipoDeIconeOlhinhoConfirmarSenha] = useState(faEyeSlash);
    const [exibirValidacao, setExibirValidacao] = useState(false);
    const [todosRequisitos, setTodosRequisitos] = useState(false);
    const [validarRequisitoUm, setValidarRequisitoUm] = useState(false);
    const [validarRequisitoDois, setValidarRequisitoDois] = useState(false);
    const [validarRequisitoTres, setValidarRequisitoTres] = useState(false);
    const [validarRequisitoQuatro, setValidarRequisitoQuatro] = useState(false);
    const [validarRequisitoCinco, setValidarRequisitoCinco] = useState(false);
    const [validarRequisitoSeis, setValidarRequisitoSeis] = useState(false);

    function validarSenha() {
        const novaSenha = senha.current.value;

        if (novaSenha.length > 0) setExibirValidacao(true);
        else setExibirValidacao(false);

        if (!/[0-9]/.test(novaSenha)) setValidarRequisitoUm(false); // Combine letras e números. Ex.: W1
        else setValidarRequisitoUm(true);
        if (!/[@#%&*!]/.test(novaSenha)) setValidarRequisitoDois(false); // Use caracteres especiais. Ex.: @#%
        else setValidarRequisitoDois(true);
        if (novaSenha.length < 8) setValidarRequisitoTres(false); // Use pelo menos 8 caracteres
        else setValidarRequisitoTres(true);
        if (!/[A-Z]/.test(novaSenha) && !/[a-z]/.test(novaSenha)) setValidarRequisitoQuatro(false); // Use letras maiúsculas e minúsculas
        else setValidarRequisitoQuatro(true);
        if (/(.)\1/.test(novaSenha)) setValidarRequisitoCinco(false); // Não repita caracteres consecutivos. Ex.: AAA
        else setValidarRequisitoCinco(true);
        if (/\s/.test(novaSenha) && /(?:012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ)/.test(novaSenha)) setValidarRequisitoSeis(false); // Não utilize espaços e sequência de números ou letras. Ex.: ABC ou 123
        else setValidarRequisitoSeis(true);

        if (validarRequisitoUm && validarRequisitoDois && validarRequisitoTres && validarRequisitoQuatro && validarRequisitoCinco && validarRequisitoSeis) {
            setSenhaValido(true);
            setTodosRequisitos(true);
        } else {
            setSenhaValido(false);
            setTodosRequisitos(false);
        }


    }

    function validarConfirmarSenha() {
        const novaSenha = senha.current.value;
        const confirmarNovaSenha = confirmarSenha.current.value;

        if (novaSenha === confirmarNovaSenha || confirmarNovaSenha === 0) setConfirmarSenhaValido(true)
        else setConfirmarSenhaValido(false)
    }

    function verSenha() {
        if (tipoDeIconeOlhinhoSenha.iconName === "eye-slash") return setTipoDeIconeOlhinhoSenha(faEye);
        else return setTipoDeIconeOlhinhoSenha(faEyeSlash)
    }

    function verConfirmarSenha() {
        if (tipoDeIconeOlhinhoConfirmarSenha.iconName === "eye-slash") return setTipoDeIconeOlhinhoConfirmarSenha(faEye);
        else return setTipoDeIconeOlhinhoConfirmarSenha(faEyeSlash)
    }

    function voltarPagina() {
        navigate(-1)
    }

    function fazerRequisicaoCriarConta(event: { preventDefault: () => void; }) {
        event.preventDefault();
        if (senhaValido && confirmarSenhaValido && todosRequisitos) {
            console.log("jskj")
            const value = requisicaoCriarConta(emailParaEnviarCodigo);
            console.log(value);
        }
    }

    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.containerSenhaPage}>
                <div className={styles.containerX}>
                    <FontAwesomeIcon icon={faX} className={styles.x} onClick={voltarPagina} />
                </div>

                <div className={styles.containerInformacoes}>
                    <h4 className={classNames("fonte", styles.titulo)}>Crie uma senha</h4>
                    <p className={classNames("fonte", styles.descricao)}>Digite uma senha que cumpra todos os requisitos abaixo: </p>
                </div>

                <div className={styles.containerInput}>
                    <div className={styles.containerSenha}>
                        <label className={classNames("fonte", styles.labelSenha)}>Senha</label>
                        <input type={tipoDeIconeOlhinhoSenha.iconName === "eye-slash" ? "password" : "text"} className={classNames("fonte", styles.input)} ref={senha} onChange={validarSenha} style={{ borderColor: senhaValido ? "#e0e0e0" : "#c700c7" }}
                        />
                        <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeSenha} style={{ opacity: senhaValido ? 0 : 1 }} />
                        <FontAwesomeIcon icon={tipoDeIconeOlhinhoSenha} className={styles.olhinhoSenha} onClick={verSenha} style={{ right: senhaValido ? "28.9%" : "31.1%" }} />
                        <p className={classNames("fonte", styles.paragrafoSenhaInvalido)} style={{ opacity: senhaValido ? 0 : 1 }}>A senha não atende aos requisitos.</p>

                    </div>

                    <div className={styles.containerConfirmarSenha}>
                        <label className={classNames("fonte", styles.labelConfirmarSenha)}
                        >Confirmar senha</label>
                        <input type={tipoDeIconeOlhinhoConfirmarSenha.iconName === "eye-slash" ? "password" : "text"} className={classNames("fonte", styles.input)} ref={confirmarSenha} onChange={validarConfirmarSenha} style={{ borderColor: confirmarSenhaValido ? "#e0e0e0" : "#c700c7" }}
                        />
                        <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeConfirmarSenha} style={{ opacity: confirmarSenhaValido ? 0 : 1 }} />
                        <FontAwesomeIcon icon={tipoDeIconeOlhinhoConfirmarSenha} className={styles.olhinhoConfirmarSenha} onClick={verConfirmarSenha} style={{ right: confirmarSenhaValido ? "28.9%" : "31.1%" }} />
                        <p className={classNames("fonte", styles.paragrafoConfirmarSenhaInvalido)} style={{ opacity: confirmarSenhaValido ? 0 : 1 }}>As senhas estão diferentes.</p>
                    </div>
                </div>

                <div className={styles.containerRequitosDaSenha}>

                    <div className={styles.containerDeUmRequisito}>
                        <FontAwesomeIcon icon={validarRequisitoUm ? faCheck : faX} className={styles.indicarDoRequisito} style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoUm ? "#00b100" : "#d80000" }} />
                        <p className={classNames("fonte", styles.requisito)} style={{ color: validarRequisitoUm && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoUm && exibirValidacao ? "#d80000" : "#686868" }}>Combine letras e números. Ex.: W1</p>
                    </div>
                    <div className={styles.containerDeUmRequisito}>
                        <FontAwesomeIcon icon={validarRequisitoDois ? faCheck : faX} className={styles.indicarDoRequisito} style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoDois ? "#00b100" : "#d80000" }} />
                        <p className={classNames("fonte", styles.requisito)} style={{ color: validarRequisitoDois && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoDois && exibirValidacao ? "#d80000" : "#686868" }}>Use caracteres especiais. Ex.: @#%</p>
                    </div>
                    <div className={styles.containerDeUmRequisito}>
                        <FontAwesomeIcon icon={validarRequisitoTres ? faCheck : faX} className={styles.indicarDoRequisito} style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoTres ? "#00b100" : "#d80000" }} />
                        <p className={classNames("fonte", styles.requisito)} style={{ color: validarRequisitoTres && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoTres && exibirValidacao ? "#d80000" : "#686868" }}>Use pelo menos 8 caracteres</p>
                    </div>
                    <div className={styles.containerDeUmRequisito}>
                        <FontAwesomeIcon icon={validarRequisitoQuatro ? faCheck : faX} className={styles.indicarDoRequisito} style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoQuatro ? "#00b100" : "#d80000" }} />
                        <p className={classNames("fonte", styles.requisito)} style={{ color: validarRequisitoQuatro && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoQuatro && exibirValidacao ? "#d80000" : "#686868" }}>Use letras maiúsculas e minúsculas</p>
                    </div>
                    <div className={styles.containerDeUmRequisito}>
                        <FontAwesomeIcon icon={validarRequisitoCinco ? faCheck : faX} className={styles.indicarDoRequisito} style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoCinco ? "#00b100" : "#d80000" }} />
                        <p className={classNames("fonte", styles.requisito)} style={{ color: validarRequisitoCinco && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoCinco && exibirValidacao ? "#d80000" : "#686868" }}>Não repita caracteres consecutivos. Ex.: AAA</p>
                    </div>
                    <div className={styles.containerDeUmRequisito}>
                        <FontAwesomeIcon icon={validarRequisitoSeis ? faCheck : faX} className={styles.indicarDoRequisito} style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoSeis ? "#00b100" : "#d80000" }} />
                        <p className={classNames("fonte", styles.requisito)} style={{ color: validarRequisitoSeis && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoSeis && exibirValidacao ? "#d80000" : "#686868" }}>Não utilize espaços e sequência de números ou letras. Ex.: ABC ou 123</p>
                    </div>
                </div>

                <div className={styles.containerButton}>
                    <button className={classNames("fonte", styles.buttonCriarConta)} onClick={fazerRequisicaoCriarConta}>Criar conta</button>
                </div>

            </div>
        </div>
    )
}

export default SenhaPage