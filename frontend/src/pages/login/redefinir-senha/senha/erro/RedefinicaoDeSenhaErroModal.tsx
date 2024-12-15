import styles from "./redefinicaoDeSenhaErroModal.module.css";
import "../../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

function RedefinicaoDeSenhaErroModal() {
    const navigate = useNavigate();

    function irParaLogin() {
        navigate("/login");
    };

    function irParaRedefinirSenhaPage() {
        navigate(-1)
    }

    return (
        <div className={styles.containerFixo}>
            <div className={styles.containerErroModal}>
                <div className={styles.containerX}>
                    <FontAwesomeIcon icon={faX} className={styles.x} onClick={irParaLogin} />
                </div>
                <div className={styles.containerErro}>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={styles.erro} />
                </div>
                <div className={styles.containerDescricao}>
                    <h4 className={classNames("fonte", styles.titulo)}>E-mail inválido!</h4>
                    <p className={classNames("fonte", "colorDefault", styles.paragrafo)}>Revise seu e-mail e tente novamente. :(</p>
                </div>

                <div className={styles.containerButton}>
                    <button className={classNames("fonte", styles.button)} onClick={irParaRedefinirSenhaPage}>Tentar novamente</button>
                </div>

            </div>
        </div>

    )
}

export default RedefinicaoDeSenhaErroModal;