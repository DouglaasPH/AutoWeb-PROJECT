import styles from "./verificarCodigoPage.module.css";
import "../../../../App.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Background from "../../../../components/telaDeFundo/background";

function VerificarCodigoPage() {
    const emailParaEnviarCodigo = useSelector(state => state.email);
    const navigate = useNavigate();

    function voltarPagina() {
        navigate(-1);
    }

    function irParaSenhaPage() {

    }

    return (
        <div className={styles.containerVerificarCodigo}>
            <Background pageAtual="VerificarCodigo" />

            <div className={styles.containerPrincipal}>
                <div className={styles.containerX}>
                    <FontAwesomeIcon icon={faX} className={styles.x} onClick={voltarPagina} />
                </div>
                <div className={styles.containerTitulo}>
                    <label className={classNames("fonte", styles.titulo)}>Quase lá...</label>
                </div>
                <div className={styles.containerDescricao}>
                    <p className={classNames("fonte", styles.paragrafoUm)} >Para recuperar sua senha, digite na próxima tela o <strong>código de 6 dígitos</strong> que enviamos para o e-mail:</p>
                    <p className={classNames("fonte", styles.email)}>{emailParaEnviarCodigo}</p>
                </div>
                <div className={styles.containerButtons}>
                    <button className={classNames("fonte", styles.buttonContinuar)} onClick={irParaSenhaPage}>Continuar</button>
                </div>
            </div>
        </div >
    );
};

export default VerificarCodigoPage;