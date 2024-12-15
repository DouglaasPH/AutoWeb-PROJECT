import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faPeopleGroup, faShieldHalved } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./dropDownAjuda.module.css";
import "../../../App.css";
import classNames from "classnames";
import stylesNavBar from "../navBar.module.css";

function DropDownAjuda() {
    const buttonAjudaNavBar = document.querySelectorAll(`.${stylesNavBar.buttonInfo}`)[2].getBoundingClientRect();

    return (
        <div className={styles.containerAjuda} style={{ left: `${buttonAjudaNavBar.left}px` }}>
            <button className={classNames("fonte", "colorDefault", styles.buttonParaVoce)}>
                <FontAwesomeIcon icon={faUser} className={styles.icone} />
                Para você
            </button>
            <button className={classNames("fonte", "colorDefault", styles.buttonParaSuaLoja)}>
                <FontAwesomeIcon icon={faPeopleGroup} className={styles.icone} />
                Para sua loja
            </button>
            <button className={classNames("fonte", "colorDefault", styles.buttonSeguranca)}>
                <FontAwesomeIcon icon={faShieldHalved} className={styles.icone} />
                Segurança
            </button>
        </div>
    )
}

export default DropDownAjuda;