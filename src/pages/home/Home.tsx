import styles from "./styles.module.css";
import "../../App.css";
import Carrossel from "../../components/passarImgPageHome/Carrossel";
import BarraDePesquisa from "./components/barraDePesquisa/BarraDePesquisa";
import UltimasPesquisas from "./components/ultimasPesquisas/UltimasPesquisas";
import Categorias from "./components/barraCategorias/Categorias";

function Home() {    
    
    return (
        <div className={styles.containerHome}>
            <Carrossel />
            <BarraDePesquisa />
            <main className={styles.containerContent}>
                <UltimasPesquisas />
                <Categorias />
            </main>
        </div>
    )
}

export default Home;