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
import DropDownMinhaConta from "./dropDownMinhaConta/DropDownMinhaConta";
import DADOS_DO_USUARIO, { LOGGINED } from "../../dados da conta/dados_da_conta";

function NavBar() {
    const navigate = useNavigate();
    const [isOpenComprar, setIsOpenComprar] = useState(false);
    const [isOpenVender, setIsOpenVender] = useState(false);
    const [isOpenAjuda, setIsOpenAjuda] = useState(false);
    const [isOpenMinhaConta, setIsOpenMinhaConta] = useState(false);

    function chamarDropDownComprar() {
        setIsOpenComprar(!isOpenComprar);
    };
    function chamarDropDownVender() {
        setIsOpenVender(!isOpenVender);
    };
    function chamarDropDownAjuda() {
        setIsOpenAjuda(!isOpenAjuda);
    };
    function chamarDropDownMinhaConta() {
        console.log(isOpenMinhaConta);
        if (LOGGINED) setIsOpenMinhaConta(!isOpenMinhaConta)
        else return setIsOpenMinhaConta(false);
    };

    function irParaContaOuLogin() {
        if (LOGGINED) {
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
                    <button className={classNames("fonte", styles.buttonInfo)} style={{
                        borderBottom: "0.15rem solid",
                        borderBottomColor: isOpenVender ? "#1e90ff" : "white"
                    }}>Vender</button>
                    {isOpenVender ? <DropDownVender /> : null}
                </div>

                <div className={styles.divButtonInfo} onMouseEnter={chamarDropDownComprar} onMouseLeave={chamarDropDownComprar}>
                    <button className={classNames("fonte", styles.buttonInfo)} style={{
                        borderBottom: "0.15rem solid",
                        borderBottomColor: isOpenComprar ? "#1e90ff" : "white"
                    }}>Comprar</button>
                    {isOpenComprar ? <DropDownComprar /> : null}
                </div>


                <div className={styles.divButtonInfo} onMouseEnter={chamarDropDownAjuda} onMouseLeave={chamarDropDownAjuda}>
                    <button className={classNames("fonte", styles.buttonInfo)} style={{
                        borderBottom: "0.15rem solid",
                        borderBottomColor: isOpenAjuda ? "#1e90ff" : "white"
                    }}>Ajuda</button>
                    {isOpenAjuda ? <DropDownAjuda /> : null}
                </div>
            </div>

            <div className={styles.divLogin} onClick={irParaContaOuLogin} style={{ width: LOGGINED && typeof DADOS_DO_USUARIO === "object" ? `${DADOS_DO_USUARIO.user.length + 5}%` : "10%" }} >
                <div className={styles.divButtonIrParaConta} onMouseEnter={chamarDropDownMinhaConta} onMouseLeave={chamarDropDownMinhaConta}>
                    <button className={classNames("fonte", styles.buttonIrParaConta)}>
                        <FontAwesomeIcon icon={faUser} className={styles.fontUser} />
                        {LOGGINED && typeof DADOS_DO_USUARIO === "object" ? DADOS_DO_USUARIO.user : "Entrar"}
                    </button>
                    {LOGGINED && isOpenMinhaConta ? <DropDownMinhaConta /> : null}
                </div>
                <button className={classNames("fonte", styles.buttonFavoritos)}>
                    <FontAwesomeIcon icon={faHeart} className={styles.fontHeart} />
                </button>
            </div>


        </nav >
    );
}

export default NavBar;