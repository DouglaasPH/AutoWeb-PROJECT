import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imagens } from "../../assets/images";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./styles.module.css";
import '../../App.css';
import classNames from "classnames";
import { useState } from "react";
import DropDownComprar from "./dropDownComprar/DropDownComprar";
import DropDownVender from "./dropDownVender/DropDownVender";
import DropDownAjuda from "./dropDownAjuda/DropDownAjuda";

function NavBar() {
    const [isOpenComprar, setIsOpenComprar] = useState(false);
    const [isOpenVender, setIsOpenVender] = useState(false);    
    const [isOpenAjuda, setIsOpenAjuda] = useState(false);    
    
    function chamarDropDownComprar() {
        setIsOpenComprar(!isOpenComprar);
    };
    function chamarDropDownVender() {
        setIsOpenVender(!isOpenVender);        
    };
    function chamarDropDownAjuda() {
        setIsOpenAjuda(!isOpenAjuda);        
    };

    return (
        <nav className={styles.navBar}>
            <div className={styles.divLogo}>
                <img src={imagens["logoMarcaDoSite"]} alt="logo marca do site" className={styles.logoMarcaImg} />
                <h1 className="fonteLogo" >AutoWeb</h1>
            </div>

            <div className={styles.divInfo}>
                <div className={styles.divButtonInfo} onMouseEnter={chamarDropDownVender} onMouseLeave={chamarDropDownVender}>
                    <button className={classNames("fonte", styles.buttonInfo)}>Vender</button>
                    {isOpenVender ? <DropDownVender /> : null}
                </div>

                <div className={styles.divButtonInfo} onMouseEnter={chamarDropDownComprar} onMouseLeave={chamarDropDownComprar}>
                    <button className={classNames("fonte", styles.buttonInfo)}>Comprar</button>
                    {isOpenComprar ? <DropDownComprar /> : null}
                </div>


                <div className={styles.divButtonInfo} onMouseEnter={chamarDropDownAjuda} onMouseLeave={chamarDropDownAjuda}>
                    <button className={classNames("fonte", styles.buttonInfo)}>Ajuda</button>
                    {isOpenAjuda ? <DropDownAjuda /> : null}
                </div>
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


        </nav>
    );
}

export default NavBar;