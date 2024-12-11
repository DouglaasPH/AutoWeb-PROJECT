import styles from "./garagemAside.module.css";
import "../../../../App.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { imagens } from "../../../../assets/images";
import DADOS_DO_USUARIO from "../../../../dados da conta/dados_da_conta";

function GaragemAside() {
    const navigate = useNavigate();

    function irParaHomePage() {
        navigate("/");
    }

    return (
        <div className={styles.containerGaragemAside}>
            <div className={styles.containerLogoMarca} onClick={irParaHomePage}>
                <img src={imagens["logoMarcaDoSite"]} alt="logo marca do site" className={styles.logoMarcaImg} />
                <h1 className={classNames("fonteLogo", styles.logoMarcaTitulo)} >AutoWeb</h1>
            </div>

            <div className={styles.containerUsuario}>
                <div className={styles.containerFotoDeUsuario}>
                    <div className={styles.fotoDeUsuario}></div>
                </div>
                <div className={styles.containerUserEmail}>
                    <h2 className={classNames("fonte", styles.nomeDeUser)}>{DADOS_DO_USUARIO.user}</h2>
                    <p className={classNames("fonte", styles.emailDeUser)}>{DADOS_DO_USUARIO.email}</p>
                </div>
            </div>

            <div className={styles.containerLinks}>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
    )
}

export default GaragemAside;