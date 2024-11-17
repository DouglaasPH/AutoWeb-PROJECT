import styles from "./styles.module.css";
import "../../App.css";
import Carrossel from "../../components/passarImgPageHome/Carrossel";
import BarraDePesquisa from "./components/barraDePesquisa/BarraDePesquisa";


function Home() {    
    
    return (
        <div className={styles.containerHome}>
            <Carrossel />
            <BarraDePesquisa />
            <main className={styles.containerContent}>
                <div className={styles.containerLojasOficiais}></div>
            </main>
        </div>
    )
}

export default Home;