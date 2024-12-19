import styles from "./garagemFavoritos.module.css";
import "../../../../../../App.css";
import classNames from "classnames";

function GaragemFavoritos() {
    return (
        <div className={styles.containerFavoritos}>
            <div className={styles.containerTituloFavoritos}>
                <h2 className={classNames("fonte", styles.tituloFavoritos)}>Meus Favoritos</h2>
            </div>            

            <div className={styles.containerPrincipal}>
                    container principal
            </div>
        </div>
    )
}

export default GaragemFavoritos;