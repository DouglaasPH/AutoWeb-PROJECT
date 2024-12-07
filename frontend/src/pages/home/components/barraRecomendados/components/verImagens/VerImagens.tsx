import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./verImagens.module.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


function VerImagens() {
    return (
        <div className={styles.containerVerImagens}>
            <div className={styles.containerSeta}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>

            <div className={styles.containerImagens}>
                <img src="" alt="" className={styles.imagem} />
            </div>

            <div className={styles.containerSetaDireita}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

export default VerImagens;