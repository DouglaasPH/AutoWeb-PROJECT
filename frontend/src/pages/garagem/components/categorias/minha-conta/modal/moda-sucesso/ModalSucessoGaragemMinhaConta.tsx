import styles from "./modalSucessoGaragemMinhaConta.module.css";
import "../../../../../../../App.css";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

function ModalSucessoGaragemMinhaConta() {
    return (
        <div className={styles.containerFixo}>
            <div className={styles.containerModalSucesso}>
                <div className={styles.containerCheck}>
                    <FontAwesomeIcon icon={faCircleCheck} className={styles.check} />
                </div>
                <div className={styles.containerDescricao}>
                    <h2 className={classNames("fonte", "colorDefault", styles.descricao)}>Dados alterados com sucesso!</h2>
                </div>
            </div>
        </div>
    )
}

export default ModalSucessoGaragemMinhaConta;