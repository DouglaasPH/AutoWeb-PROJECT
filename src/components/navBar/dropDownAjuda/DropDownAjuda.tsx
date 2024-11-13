import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faPeopleGroup, faShieldHalved} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css";
import "../../../App.css";
import classNames from "classnames";

function DropDownAjuda() {
    return (
        <div className={styles.containerAjuda}>
            <button className={classNames("fonte", styles.buttonParaVoce)}>
                <FontAwesomeIcon icon={faUser} className={styles.icone} />
                Para você
            </button>
            <button className={classNames("fonte", styles.buttonParaSuaLoja)}>
                <FontAwesomeIcon icon={faPeopleGroup} className={styles.icone} />
                Para sua loja
            </button>
            <button className={classNames("fonte", styles.buttonSeguranca)}>
                <FontAwesomeIcon icon={faShieldHalved} className={styles.icone} />
                Segurança
            </button>
        </div>
    )
}

export default DropDownAjuda;