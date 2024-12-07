import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./spinner.module.css";

function Spinner() {
    return (
        <div className={styles.containerSpinner}>
            <FontAwesomeIcon icon={faCircleNotch} className={styles.spinner} />
        </div>
    )
}

export default Spinner;