import classNames from "classnames";
import styles from "./dropDownMinhaConta.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faPen, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import stylesNavBar from "../navBar.module.css";

function DropDownMinhaConta() {
    const buttonMinhaContaNavBar = document.querySelectorAll(`.${stylesNavBar.buttonIrParaConta}`)[0].getBoundingClientRect();

    return (
        <div className={styles.containerMinhaConta} style={{ left: `${buttonMinhaContaNavBar.left}px` }}>
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