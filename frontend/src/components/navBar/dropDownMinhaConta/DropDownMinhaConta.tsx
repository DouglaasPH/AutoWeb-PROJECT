import classNames from "classnames";
import styles from "./dropDownMinhaConta.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faPen, faWarehouse } from "@fortawesome/free-solid-svg-icons";

function DropDownMinhaConta() {
    return (
        <div className={styles.containerMinhaConta}>
            <button className={classNames("fonte", styles.buttonMeusAnuncios)}>
                <FontAwesomeIcon icon={faWarehouse} className={styles.icone} />
                Meus Anúncios
            </button>
            <button className={classNames("fonte", styles.buttonMinhaConta)}>
                <FontAwesomeIcon icon={faPen} className={styles.icone} />
                Minha Conta
            </button>
            <button className={classNames("fonte", styles.buttonSair)}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.icone} />
                Sair
            </button>
        </div>
    )
}

export default DropDownMinhaConta;