import styles from "./senhaPage.module.css";
import "../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { requisicaoRedefinirSenha } from "../../requisicoesLogin";
import { useSelector } from "react-redux";
import Spinner from "../../../../components/spinner/spinner";
import RedefinicaoDeSenhaErroModal from "./erro/RedefinicaoDeSenhaErroModal";

function SenhaPage() {
    const emailParaEnviarCodigo = useSelector((state: { email: string }) => state.email);
    const navigate = useNavigate();
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
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
    const [aparecerSpinner, setAparecerSpinner] = useState(false);
    const [exibirModalDeErro, setExibirModalDeErro] = useState(false);

    // Ao aparecer o modal ou ao aparecer o spinner, trave o scroll
    useEffect(() => {
        if (aparecerSpinner) document.body.classList.add('no-scroll')
        else document.body.classList.remove('no-scroll');
    });

    function validarSenha(event: { target: { value: string } }) {
        const novaSenha = event.target.value;
        setSenha(novaSenha);

        const exibirValidacao = novaSenha.length > 0;
        const validarRequisitoUm = /[0-9]/.test(novaSenha); // Letras e números
        const validarRequisitoDois = /[@#%&*!]/.test(novaSenha); // Caracteres especiais
        const validarRequisitoTres = novaSenha.length >= 8; // Pelo menos 8 caracteres
        const validarRequisitoQuatro = /[A-Z]/.test(novaSenha) && /[a-z]/.test(novaSenha); // Letras maiúsculas e minúsculas
        const validarRequisitoCinco = !/(.)\1/.test(novaSenha); // Sem caracteres consecutivos repetidos
        const validarRequisitoSeis =
            !/\s/.test(novaSenha) &&
            !/(?:012|123|234|345|456|567|678|789|890|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ)/.test(novaSenha); // Sem espaços ou sequências

        const todosRequisitos =
            validarRequisitoUm &&
            validarRequisitoDois &&
            validarRequisitoTres &&
            validarRequisitoQuatro &&
            validarRequisitoCinco &&
            validarRequisitoSeis;

        setExibirValidacao(exibirValidacao);
        setValidarRequisitoUm(validarRequisitoUm);
        setValidarRequisitoDois(validarRequisitoDois);
        setValidarRequisitoTres(validarRequisitoTres);
        setValidarRequisitoQuatro(validarRequisitoQuatro);
        setValidarRequisitoCinco(validarRequisitoCinco);
        setValidarRequisitoSeis(validarRequisitoSeis);
        setTodosRequisitos(todosRequisitos);
        setSenhaValido(todosRequisitos);
    }

    function validarConfirmarSenha(event: { target: { value: string } }) {
        const confirmarNovaSenha = event.target.value;
        setConfirmarSenha(confirmarNovaSenha)

        if (senha === confirmarNovaSenha || confirmarNovaSenha.length === 0) setConfirmarSenhaValido(true)
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

    async function fazerRequisicaoRedefinirSenha(event: { preventDefault: () => void; }) {
        event.preventDefault();
        setAparecerSpinner(true);
        if (senhaValido && confirmarSenhaValido && todosRequisitos) {
            const request = await requisicaoRedefinirSenha(emailParaEnviarCodigo, confirmarSenha);

            // se o e-mail já possui um cadastro, então vá para sucesso na redefinição de senha
            // enquanto faz a requisição, exiba um spinner para simular modo carregamento
            //console.log(request.data)
            if (typeof request !== "undefined" && request.data.sucesso) {
                setTimeout(() => {
                    setAparecerSpinner(false);
                    navigate("sucesso");
                }, 1000);
            } else {
                setTimeout(() => {
                    setExibirModalDeErro(true);
                    setAparecerSpinner(false);
                }, 1000);
            }
        }
    }

    return (
        <>
            {exibirModalDeErro ? <RedefinicaoDeSenhaErroModal /> : null}
            {aparecerSpinner ? <Spinner /> : null}

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
                            <label
                                className={classNames("fonte", styles.labelSenha)}
                                style={{ color: senhaValido ? "#686868" : senha.length === 0 ? "#686868" : "#c700c7" }}
                            >
                                Senha
                            </label>
                            <input
                                type={tipoDeIconeOlhinhoSenha.iconName === "eye-slash" ? "password" : "text"}
                                className={classNames("fonte", styles.input)}
                                onChange={validarSenha}
                                value={senha}
                                style={{ borderColor: senhaValido ? "#e0e0e0" : senha.length === 0 ? "#e0e0e0" : "#c700c7" }}
                            />
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                                className={styles.iconeSenha}
                                style={{ opacity: senhaValido ? 0 : senha.length === 0 ? 0 : 1 }}
                            />
                            <FontAwesomeIcon
                                icon={tipoDeIconeOlhinhoSenha}
                                className={styles.olhinhoSenha}
                                onClick={verSenha}
                                style={{ right: senhaValido ? "28.9%" : senha.length === 0 ? "28.9%" : "31.1%" }}
                            />
                            <p
                                className={classNames("fonte", styles.paragrafoSenhaInvalido)}
                                style={{ opacity: senhaValido ? 0 : senha.length === 0 ? 0 : 1 }}
                            >
                                A senha não atende aos requisitos.
                            </p>

                        </div>

                        <div className={styles.containerConfirmarSenha}>
                            <label
                                className={classNames("fonte", styles.labelConfirmarSenha)}
                                style={{ color: confirmarSenhaValido ? "#686868" : confirmarSenha.length === 0 ? "#686868" : "#c700c7" }}
                            >
                                Confirmar senha
                            </label>
                            <input
                                type={tipoDeIconeOlhinhoConfirmarSenha.iconName === "eye-slash" ? "password" : "text"}
                                className={classNames("fonte", styles.input)}
                                value={confirmarSenha}
                                onChange={validarConfirmarSenha}
                                style={{ borderColor: confirmarSenhaValido ? "#e0e0e0" : "#c700c7" }}
                            />
                            <FontAwesomeIcon
                                icon={faTriangleExclamation}
                                className={styles.iconeConfirmarSenha}
                                style={{ opacity: confirmarSenhaValido ? 0 : 1 }}
                            />
                            <FontAwesomeIcon
                                icon={tipoDeIconeOlhinhoConfirmarSenha}
                                className={styles.olhinhoConfirmarSenha}
                                onClick={verConfirmarSenha}
                                style={{ right: confirmarSenhaValido ? "28.9%" : "31.1%" }}
                            />
                            <p className={classNames("fonte", styles.paragrafoConfirmarSenhaInvalido)} style={{ opacity: confirmarSenhaValido ? 0 : 1 }}>
                                As senhas estão diferentes.
                            </p>
                        </div>
                    </div>

                    <div className={styles.containerRequitosDaSenha}>

                        <div className={styles.containerDeUmRequisito}>
                            <FontAwesomeIcon
                                icon={validarRequisitoUm ? faCheck : faX}
                                className={styles.indicarDoRequisito}
                                style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoUm ? "#00b100" : "#d80000" }}
                            />
                            <p
                                className={classNames("fonte", styles.requisito)}
                                style={{ color: validarRequisitoUm && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoUm && exibirValidacao ? "#d80000" : "#686868" }}
                            >
                                Combine letras e números. Ex.: W1
                            </p>
                        </div>
                        <div className={styles.containerDeUmRequisito}>
                            <FontAwesomeIcon
                                icon={validarRequisitoDois ? faCheck : faX}
                                className={styles.indicarDoRequisito} style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoDois ? "#00b100" : "#d80000" }}
                            />
                            <p
                                className={classNames("fonte", styles.requisito)}
                                style={{ color: validarRequisitoDois && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoDois && exibirValidacao ? "#d80000" : "#686868" }}
                            >
                                Use caracteres especiais. Ex.: @#%
                            </p>
                        </div>
                        <div className={styles.containerDeUmRequisito}>
                            <FontAwesomeIcon
                                icon={validarRequisitoTres ? faCheck : faX}
                                className={styles.indicarDoRequisito}
                                style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoTres ? "#00b100" : "#d80000" }}
                            />
                            <p
                                className={classNames("fonte", styles.requisito)}
                                style={{ color: validarRequisitoTres && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoTres && exibirValidacao ? "#d80000" : "#686868" }}
                            >
                                Use pelo menos 8 caracteres
                            </p>
                        </div>
                        <div className={styles.containerDeUmRequisito}>
                            <FontAwesomeIcon
                                icon={validarRequisitoQuatro ? faCheck : faX}
                                className={styles.indicarDoRequisito}
                                style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoQuatro ? "#00b100" : "#d80000" }}
                            />
                            <p
                                className={classNames("fonte", styles.requisito)}
                                style={{ color: validarRequisitoQuatro && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoQuatro && exibirValidacao ? "#d80000" : "#686868" }}
                            >
                                Use letras maiúsculas e minúsculas
                            </p>
                        </div>
                        <div className={styles.containerDeUmRequisito}>
                            <FontAwesomeIcon
                                icon={validarRequisitoCinco ? faCheck : faX}
                                className={styles.indicarDoRequisito}
                                style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoCinco ? "#00b100" : "#d80000" }}
                            />
                            <p
                                className={classNames("fonte", styles.requisito)}
                                style={{ color: validarRequisitoCinco && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoCinco && exibirValidacao ? "#d80000" : "#686868" }}
                            >
                                Não repita caracteres consecutivos. Ex.: AAA
                            </p>
                        </div>
                        <div className={styles.containerDeUmRequisito}>
                            <FontAwesomeIcon
                                icon={validarRequisitoSeis ? faCheck : faX}
                                className={styles.indicarDoRequisito}
                                style={{ opacity: exibirValidacao ? 1 : 0, color: validarRequisitoSeis ? "#00b100" : "#d80000" }}
                            />
                            <p
                                className={classNames("fonte", styles.requisito)}
                                style={{ color: validarRequisitoSeis && exibirValidacao ? "#00b100" : !exibirValidacao ? "#686868" : !validarRequisitoSeis && exibirValidacao ? "#d80000" : "#686868" }}
                            >
                                Não utilize espaços e sequência de números ou letras. Ex.: ABC ou 123
                            </p>
                        </div>
                    </div>

                    <div className={styles.containerButton}>
                        <button className={classNames("fonte", styles.buttonCriarConta)} onClick={fazerRequisicaoRedefinirSenha}>Redefinir senha</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SenhaPage;