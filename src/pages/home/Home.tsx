import styles from "./styles.module.css";
import "../../App.css";
import Carrossel from "../../components/passarImgPageHome/Carrossel";
import Pesquisa from "./components/barraDePesquisa/BarraDePesquisa";
import UltimasPesquisas from "./components/ultimasPesquisas/UltimasPesquisas";
import Categorias from "./components/barraCategorias/Categorias";
import Recomendados from "./components/barraRecomendados/BarraRecomendados";


function Home() {    
    
    return (
        <div className={styles.containerHome}>
            <Carrossel />
            <Pesquisa />
            <main className={styles.containerContent}>
                <UltimasPesquisas />
                <Categorias />
                <Recomendados />
            </main>
        </div>
    )
}

export default Home;