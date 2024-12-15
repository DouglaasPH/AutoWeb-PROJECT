import styles from "./criarContaErrorModal.module.css";
import "../../../../../../App.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

function CriarContaErrorModal() {
    const navigate = useNavigate();

    function irParaRedefinirSenhaPage(event: { preventDefault: () => void; }) {
        event.preventDefault();
        navigate("/login/redefinir-senha");
    }

    return (
        <div className={styles.containerFixo}>
            <div className={styles.containerModal}>
                <div className={styles.containerTitulo}>
                    <h4 className={classNames("fonte", styles.titulo)}>Que bom te ver de novo, ;)</h4>
                </div>
                <div className={styles.containerDescricao}>
                    <p className={classNames("fonte", "colorDefault", styles.descricaoUm)}>Você está tentando criar uma conta com um endereço de e-mail que já está cadastrado no AutoWeb.</p>
                    <p className={classNames("fonte", "colorDefault", styles.descricaoDois)}>Caso você não se lembre da sua senha, é necessário que você redefina sua senha.</p>
                </div>
                <div className={styles.containerButton}>
                    <button className={classNames("fonte", styles.button)} onClick={irParaRedefinirSenhaPage}>Redefinir senha</button>
                </div>
            </div>
        </div>
    )
}

export default CriarContaErrorModal;