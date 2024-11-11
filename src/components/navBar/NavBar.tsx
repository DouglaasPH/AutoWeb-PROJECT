import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imagensParaNavBar } from "../../images/images";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./styles.module.css";
import '../../App.css';
import classNames from "classnames";
import DropDownComprar from "./compraDropDown/DropDownComprar";

let dropDownCompra = false; 

function chamarDropDownComprar() {
    console.log("hello")
    return dropDownCompra = true;
};

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <div className={styles.divLogo}>
                <img src={imagensParaNavBar["logoMarcaDoSite"]} alt="logo marca do site" className={styles.logoMarcaImg} />
                <h1 className={styles.logoMarcaName} >AutoWeb</h1>
            </div>

            <div className={styles.divInfo}>
                <button className={classNames("fonte", styles.buttonInfo)} onMouseEnter={chamarDropDownComprar}>Comprar</button>
                <button className={classNames("fonte", styles.buttonInfo)}>Vender</button>
                <button className={classNames("fonte", styles.buttonInfo)}>Ajuda</button>
            </div>

            <div className={styles.divLogin}>
                <button className={classNames("fonte", styles.b)}>
                    <FontAwesomeIcon icon={faUser} className={styles.fontUser} />
                    Entrar
                </button>
                <button className={classNames("fonte", styles.b)}>
                    <FontAwesomeIcon icon={faHeart} className={styles.fontHeart} />
                </button>
            </div>

            {dropDownCompra ? <DropDownComprar/> : null}
        </nav>
    );
}

export default NavBar;