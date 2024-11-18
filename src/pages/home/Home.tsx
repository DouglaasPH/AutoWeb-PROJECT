import styles from "./styles.module.css";
import "../../App.css";
import Carrossel from "../../components/passarImgPageHome/Carrossel";
import BarraDePesquisa from "./components/barraDePesquisa/BarraDePesquisa";
import UltimasPesquisas from "./components/ultimasPesquisas/UltimasPesquisas";

function Home() {    
    
    return (
        <div className={styles.containerHome}>
            <Carrossel />
            <BarraDePesquisa />
            <main className={styles.containerContent}>
                <UltimasPesquisas />
                <div className={styles.containerLojasOficiais}></div>
            </main>
        </div>
    )
}

export default Home;