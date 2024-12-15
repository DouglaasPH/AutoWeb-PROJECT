import styles from "./garagemPage.module.css";
import "../../App.css";
import GaragemAside from "./components/aside/GaragemAside";
import GaragemMinhaConta from "./components/categorias/minha-conta/GaragemMinhaConta";

function GaragemPage() {
    return (
        <div className={styles.containerGaragemPage}>
            <div className={styles.garagemAside}>
                <GaragemAside />
            </div>
            <div className={styles.garagemPage}>
                <GaragemMinhaConta />
            </div>
        </div>
    )
}

export default GaragemPage;