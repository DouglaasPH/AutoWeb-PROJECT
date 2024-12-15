import styles from "./modalErroGaragemMinhaConta.module.css";
import "../../../../../../../App.css";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

function ModalErroGaragemMinhaConta() {
    return (
        <div className={styles.containerFixo}>
            <div className={styles.containerModalErro}>
                <div className={styles.containerX}>
                    <FontAwesomeIcon icon={faCircleXmark} className={styles.x} />
                </div>
                <div className={styles.containerDescricao}>
                    <h2 className={classNames("fonte", "colorDefault", styles.descricao)}>Ocorreu um erro, tente novamente!</h2>
                </div>
            </div>
        </div>
    )
}

export default ModalErroGaragemMinhaConta;