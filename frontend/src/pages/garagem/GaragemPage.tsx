import styles from "./garagemPage.module.css";
import "../../App.css";
import GaragemAside from "./components/aside/GaragemAside";
import GaragemMinhaConta from "./components/categorias/minha-conta/GaragemMinhaConta";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import GaragemFavoritos from "./components/categorias/favoritos/modal/GaragemFavoritos";
import GaragemMeusAnuncios from "./components/categorias/meus-anuncios/modal/GaragemMeusAnuncios";

function GaragemPage() {
    const location = useLocation();


    interface ControleDePaginas {
        perfil: boolean;
        meusAnuncios: boolean;
        favoritos: boolean;
    }

    const [controleDePaginas, setControleDePaginas] = useState<ControleDePaginas>({
        perfil: false,
        meusAnuncios: false,
        favoritos: false,

    })

    useEffect(() => {
        const URL_ATUAL = location.pathname;
        if (URL_ATUAL === "/garagem/perfil") setControleDePaginas(() => ({
            perfil: true,
            meusAnuncios: false,
            favoritos: false
        }))
        else if (URL_ATUAL === "/garagem/meus-anuncios") setControleDePaginas(() => ({
            perfil: false,
            meusAnuncios: true,
            favoritos: false
        }))
        else if (URL_ATUAL === "/garagem/favoritos") setControleDePaginas(() => ({
            perfil: false,
            meusAnuncios: false,
            favoritos: true
        }))
        else return;
    }, [location.pathname])
    return (
        <div className={styles.containerGaragemPage}>
            <div className={styles.garagemAside}>
                <GaragemAside />
            </div>
            <div className={styles.garagemPage}>
                {controleDePaginas.perfil ? <GaragemMinhaConta /> : null}
                {controleDePaginas.meusAnuncios ? <GaragemMeusAnuncios /> : null}
                {controleDePaginas.favoritos ? <GaragemFavoritos /> : null}

            </div>
        </div>
    )
}

export default GaragemPage;