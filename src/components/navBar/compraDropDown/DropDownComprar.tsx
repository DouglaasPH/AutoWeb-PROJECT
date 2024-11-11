import { faCar, faCarOn, faFileCircleCheck, faMotorcycle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css";
import "../../../App.css";

export default function DropDownComprar() {
    return (
        <div className={styles.divA}>
            <button>
                <FontAwesomeIcon icon={faCar} />
                Carros usados
            </button>
            <button>
                <FontAwesomeIcon icon={faCarOn} />
                Carros novos
            </button>
            <button>
                <FontAwesomeIcon icon={faMotorcycle} />
                Motos usadas
            </button>
            <button>
                <FontAwesomeIcon icon={faMotorcycle} />
                Motos novas
            </button>
            <button>
                <FontAwesomeIcon icon={faFileCircleCheck} />
                Vistoriado
            </button>
        </div>
    )
}