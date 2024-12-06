import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imagens } from "../../assets/images";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import styles from "./navBar.module.css";
import '../../App.css';
import classNames from "classnames";
import { useEffect, useState } from "react";
import DropDownComprar from "./dropDownComprar/DropDownComprar";
import DropDownVender from "./dropDownVender/DropDownVender";
import DropDownAjuda from "./dropDownAjuda/DropDownAjuda";
import { useNavigate } from "react-router-dom";
import { dadosDaConta } from "../../system/login";
import DropDownMinhaConta from "./dropDownMinhaConta/DropDownMinhaConta";


function NavBar() {
    const navigate = useNavigate();
    const [estadoDeLogin, setEstadoDeLogin] = useState("");

    useEffect(() => {
        const dados = localStorage.getItem("estado-de-login");
        setEstadoDeLogin(String(dados));
        console.log(estadoDeLogin, "useEffect", dados)
    }, []);

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
        console.log("jklsdfjkl")
        if (estadoDeLogin === "true") {
            // TODO interface para conta
            return console.log("estado de login = true", estadoDeLogin)
        } else {
            console.log("ir para redefinir senha")
            navigate("/login");
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

            <div className={styles.divLogin} onClick={irParaContaOuLogin}>
                <button className={classNames("fonte", styles.buttonIrParaConta)}>
                    <FontAwesomeIcon icon={faUser} className={styles.fontUser} />
                    {estadoDeLogin === "true" ? dadosDaConta.user : "Entrar"}
                </button>
                {estadoDeLogin === "true" ? <DropDownMinhaConta /> : null}

                <button className={classNames("fonte", styles.buttonFavoritos)}>
                    <FontAwesomeIcon icon={faHeart} className={styles.fontHeart} />
                </button>
            </div>


        </nav>
    );
}

export default NavBar;