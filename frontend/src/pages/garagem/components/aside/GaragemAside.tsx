import styles from "./garagemAside.module.css";
import "../../../../App.css";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { imagens } from "../../../../assets/images";
import DADOS_DO_USUARIO from "../../../../dados da conta/dados_da_conta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCarSide, faHandHoldingDollar, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";

function GaragemAside() {
    const navigate = useNavigate();
    const primeira_letra = DADOS_DO_USUARIO.user[0];
    console.log(primeira_letra)

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
                    <div className={classNames("fonte", styles.fotoDeUsuario)}>
                        <h1>{primeira_letra}</h1>
                    </div>
                </div>
                <div className={styles.containerUserEmail}>
                    <h2 className={classNames("fonte", styles.nomeDeUser)}>{DADOS_DO_USUARIO.user}</h2>
                    <p className={classNames("fonte", styles.emailDeUser)}>{DADOS_DO_USUARIO.email}</p>
                </div>
            </div>

            <div className={styles.containerLinks}>
                <button className={styles.buttonLinks}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.fonteButtonLink} />
                    <p className={classNames("fonte", styles.descricaoButtonLink)}>Buscar veículo</p>
                </button>
                <button className={styles.buttonLinks}>
                    <FontAwesomeIcon icon={faHandHoldingDollar} className={styles.fonteButtonLink} />
                    <p className={classNames("fonte", styles.descricaoButtonLink)}>Vender meu veículo</p>
                </button>
                <button className={styles.buttonLinks}>
                    <FontAwesomeIcon icon={faCarSide} className={styles.fonteButtonLink} />
                    <p className={classNames("fonte", styles.descricaoButtonLink)}>Meus anúncios</p>
                </button>
                <button className={styles.buttonLinks}>
                    <FontAwesomeIcon icon={faHeart} className={styles.fonteButtonLink} />
                    <p className={classNames("fonte", styles.descricaoButtonLink)}>Favoritos</p>
                </button>
                <button className={styles.buttonLinks}>
                    <FontAwesomeIcon icon={faUser} className={styles.fonteButtonLink} />
                    <p className={classNames("fonte", styles.descricaoButtonLink)}>Minha conta</p>
                </button>
                <button className={styles.buttonLinks}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.fonteButtonLink} />
                    <p className={classNames("fonte", styles.descricaoButtonLink)}>Sair</p>
                </button>
            </div>
        </div>
    )
}

export default GaragemAside;