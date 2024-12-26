import styles from "./garagemMeusAnuncios.module.css";
import "../../../../../../App.css";
import classNames from "classnames";

function GaragemMeusAnuncios() {
    return (
        <div className={styles.containerMeusAnuncios}>
            <div className={styles.containerTituloMeusAnuncios}>
                <h2 className={classNames("fonte", styles.tituloMeusAnuncios)}>Meus Anúncios</h2>
            </div>

            <div className={styles.containerPrincipal}>
                containerPrincipal
            </div>
        </div>
    )
}

export default GaragemMeusAnuncios;