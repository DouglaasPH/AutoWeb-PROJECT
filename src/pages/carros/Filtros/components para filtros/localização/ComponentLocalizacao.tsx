import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./localizacao.module.css";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function ComponentLocalizacao() {
    return (
        <div className={styles.container}> 
            <h5>Localizacação</h5>
            <input type="text" />
            <FontAwesomeIcon icon={faLocationDot} />
        </div>
    )
}

export default ComponentLocalizacao;