import styles from "./homePage.module.css";
import "../../App.css";
import Pesquisa from "./components/barraDePesquisa/BarraDePesquisa";
import UltimasPesquisas from "./components/ultimasPesquisas/UltimasPesquisas";
import Categorias from "./components/barraCategorias/Categorias";
import Recomendados from "./components/barraRecomendados/BarraRecomendados";
import { useEffect } from "react";

function HomePage() {
    useEffect(() => {
        document.body.classList.remove('no-scroll');
    })
    return (
        <div className={styles.containerHome}>
            <Pesquisa />
            <UltimasPesquisas />
            <Categorias />
            <Recomendados />
        </div>

    )
}

export default HomePage;