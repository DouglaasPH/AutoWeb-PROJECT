import { faCar, faMotorcycle, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.css";
import "../../../App.css";
import classNames from "classnames";

export default function DropDownVender() {
    return (
        <div className={styles.containerVender}>
            <button className={classNames("fonte", styles.buttonCarro)}>
                <FontAwesomeIcon icon={faCar} className={styles.icone} />
                Vender carro
            </button>
            <button className={classNames("fonte", styles.buttonMoto)}>
                <FontAwesomeIcon icon={faMotorcycle} className={styles.icone} />
                Vender moto
            </button>
            <button className={classNames("fonte", styles.buttonGerenciar)}>
                <FontAwesomeIcon icon={faWarehouse} className={styles.icone} />                
                Gerenciar meu anúncio
            </button>
        </div>
    )
};