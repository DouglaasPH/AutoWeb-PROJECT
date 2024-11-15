import { faCar, faCarOn, faFileCircleCheck, faMotorcycle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css";
import "../../../App.css";
import classNames from "classnames";

export default function DropDownComprar() {
    return (
        <div className={styles.containerComprar}>
            <button className={classNames("fontes", styles.buttonCarroUsado)}>
                <FontAwesomeIcon icon={faCar} className={styles.icone} />
                Carros usados
            </button>
            <button className={classNames("fontes", styles.buttonCarroNovo)}>
                <FontAwesomeIcon icon={faCarOn} className={styles.icone} />
                Carros novos
            </button>
            <button className={classNames("fontes", styles.buttonMotoUsada)}>
                <FontAwesomeIcon icon={faMotorcycle} className={styles.icone} />
                Motos usadas
            </button>
            <button className={classNames("fontes", styles.buttonMotoNova)}>
                <FontAwesomeIcon icon={faMotorcycle} className={styles.icone} />
                Motos novas
            </button>
            <button className={classNames("fontes", styles.buttonVistoriado)}>
                <FontAwesomeIcon icon={faFileCircleCheck} className={styles.icone} />
                Vistoriado
            </button>
        </div>
    )
}