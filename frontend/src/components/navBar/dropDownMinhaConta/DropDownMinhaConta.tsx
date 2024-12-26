import classNames from "classnames";
import styles from "./dropDownMinhaConta.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faPen, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import stylesNavBar from "../navBar.module.css";
import { REMOVER_DADOS_DA_CONTA } from "../../../dados da conta/dados_da_conta";
import { useState } from "react";
import Spinner from "../../spinner/spinner";

function DropDownMinhaConta() {
    const [aparecerSpinner, setAparecerSpinner] = useState(false);

    function sairDaConta() {
        try {
            setAparecerSpinner(true);
            REMOVER_DADOS_DA_CONTA();
        } finally {
            setAparecerSpinner(false);
        }
    };

    function irParaGaragemPerfilPage() {
        window.open("/garagem/perfil", "_blank");
    }

    function irParaGaragemMeusAnunciosPage() {
        window.open("/garagem/meus-anuncios", "_blank");
    }    

    const buttonMinhaContaNavBar = document.querySelectorAll(`.${stylesNavBar.buttonIrParaConta}`)[0].getBoundingClientRect();

    return (
        <>
            {aparecerSpinner ? <Spinner /> : null}
            <div className={styles.containerMinhaConta} style={{ left: `${buttonMinhaContaNavBar.left}px` }}>
                <button className={classNames("fonte", "colorDefault", styles.buttonMeusAnuncios)} onClick={irParaGaragemMeusAnunciosPage}>
                    <FontAwesomeIcon icon={faWarehouse} className={styles.icone} />
                    Meus Anúncios
                </button>
                <button className={classNames("fonte", "colorDefault", styles.buttonMinhaConta)} onClick={irParaGaragemPerfilPage}>
                    <FontAwesomeIcon icon={faPen} className={styles.icone} />
                    Minha Conta
                </button>
                <button className={classNames("fonte", "colorDefault", styles.buttonSair)} onClick={sairDaConta}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.icone} />
                    Sair
                </button>
            </div>
        </>
    )
}

export default DropDownMinhaConta;