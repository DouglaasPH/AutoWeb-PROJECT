import styles from "./styles.module.css";
import "../../App.css";
import { imagensParaHome } from "../../images/images";


function Home() {

    return (
        <div className={styles.containerHome}>
            <div className={styles.imagensPassando}>
                <img src={imagensParaHome["imagemUm"]} alt="imagem de carros"  />
            </div>
            <div className={styles.inputDePesquisa}></div>
            <main className={styles.containerContent}>
                <div className={styles.containerLojasOficiais}></div>
            </main>
        </div>
    )
}

export default Home;