import styles from "./redefinicaoDeSenhaSucessoPage.module.css";
import "../../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

function RedefinicaoDeSenhaSucessoPage() {
    const navigate = useNavigate();

    function irParaLogin() {
        navigate("/login");
    };

    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.containerRedefinicaoDeSenhaSucesso}>
                <div className={styles.containerX}>
                    <FontAwesomeIcon icon={faX} className={styles.x} onClick={irParaLogin} />
                </div>
                <div className={styles.containerCheck}>
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.check} />
                </div>
                <div className={styles.containerDescricao}>
                    <h4 className={classNames("fonte", styles.titulo)}>Senha alterada com sucesso!</h4>
                    <p className={classNames("fonte", styles.paragrafo)}>Agora é só entrar na Autoweb e continuar suas negociações. ;)</p>
                </div>

                <div className={styles.containerButton}>
                    <button className={classNames("fonte", styles.button)} onClick={irParaLogin}>Entrar</button>
                </div>

            </div>
        </div>
    )
}

export default RedefinicaoDeSenhaSucessoPage;