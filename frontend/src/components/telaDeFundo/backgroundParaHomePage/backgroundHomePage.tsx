import Carrossel from "./passarImgPageHome/Carrossel";
import styles from "./backgroundHomePage.module.css";


function BackgroundParaHomePage() {
    return (
        <div className={styles.containerBackground}>
            <div className={styles.containerPassarAnuncio}>
                <Carrossel />
            </div>
            <div className={styles.backgroundCinza}></div>
        </div>
    )
}

export default BackgroundParaHomePage;