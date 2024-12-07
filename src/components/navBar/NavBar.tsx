import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imagens } from "../../assets/images";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./navBar.module.css";
import '../../App.css';
import classNames from "classnames";
import DropDownComprar from "./dropDownComprar/DropDownComprar";
import DropDownVender from "./dropDownVender/DropDownVender";
import DropDownAjuda from "./dropDownAjuda/DropDownAjuda";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function NavBar() {
    const navigate = useNavigate();
    const dados_da_conta = JSON.parse(localStorage.getItem("dados_do_usuário"));
    console.log(dados_da_conta);
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

    function irParaContaOuLogin() {
        if (dados_da_conta !== null) {
            navigate("/garagem/perfil");
        } else {
            navigate("login");
        }
    }

    return (
        <nav className={styles.navBar}>
            <div className={styles.divLogo}>
                <img src={imagens["logoMarcaDoSite"]} alt="logo marca do site" className={styles.logoMarcaImg} />
                <h1 className={classNames("fonteLogo", styles.logoMarcaTitulo)} >AutoWeb</h1>
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

            <div className={styles.divLogin} onClick={irParaContaOuLogin} style={{ width: dados_da_conta !== null ? `${dados_da_conta.user.length}%` : "60%" }} >
                <button className={classNames("fonte", styles.buttonIrParaConta)}>
                    <FontAwesomeIcon icon={faUser} className={styles.fontUser} />
                    {dados_da_conta !== null ? dados_da_conta.user : "Entrar"}
                </button>
                <button className={classNames("fonte", styles.buttonFavoritos)}>
                    <FontAwesomeIcon icon={faHeart} className={styles.fontHeart} />
                </button>
            </div>


        </nav >
    );
}

export default NavBar;