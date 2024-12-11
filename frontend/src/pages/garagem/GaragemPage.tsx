import styles from "./garagemPage.module.css";
import "../../App.css";
import GaragemAside from "./components/aside/GaragemAside";

function GaragemPage() {
    return (
        <div className={styles.containerGaragemPage}>
            <div className={styles.garagemAside}>
                <GaragemAside />
            </div>
            <div className={styles.garagemPage}>
                garagem page
            </div>
        </div>
    )
}

export default GaragemPage;