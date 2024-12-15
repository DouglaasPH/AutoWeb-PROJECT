import { faCar, faMotorcycle, faWarehouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./dropDownVender.module.css";
import "../../../App.css";
import classNames from "classnames";
import stylesNavBar from "../navBar.module.css";

export default function DropDownVender() {
    const buttonVenderNavBar = document.querySelectorAll(`.${stylesNavBar.buttonInfo}`)[0].getBoundingClientRect();

    return (
        <div className={styles.containerVender} style={{ left: `${buttonVenderNavBar.left}px` }}>
            <button className={classNames("fonte", "colorDefault", styles.buttonCarro)}>
                <FontAwesomeIcon icon={faCar} className={styles.icone} />
                Vender carro
            </button>
            <button className={classNames("fonte", "colorDefault", styles.buttonMoto)}>
                <FontAwesomeIcon icon={faMotorcycle} className={styles.icone} />
                Vender moto
            </button>
            <button className={classNames("fonte", "colorDefault", styles.buttonGerenciar)}>
                <FontAwesomeIcon icon={faWarehouse} className={styles.icone} />
                Gerenciar meu anúncio
            </button>
        </div>
    )
};