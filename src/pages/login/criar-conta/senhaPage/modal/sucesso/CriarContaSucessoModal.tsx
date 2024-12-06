import styles from "./criarContaSucessoModal.module.css";
import "../../../../../../App.css";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CriarContaSucessoModal() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.remove('no-scroll');
    });

    function irParaLoginPage() {
        navigate("/login");
    }

    return (
        <div className={styles.containerFixo}>
            <div className={styles.containerContaCriada}>
                <div className={styles.containerDescricao}>
                    <h4 className={classNames("fonte", styles.titulo)}>{user}, <br />agora é só entar na sua conta! ;)</h4>
                    <p className={classNames("fonte", styles.paragrafo)}>Acesse com seu e-mail e senha e comece a negociar!</p>
                </div>
                <div className={styles.containerButton}>
                    <button className={classNames("fonte", styles.button)} onClick={irParaLoginPage}>Entrar na conta</button>
                </div>
            </div>
        </div>
    )
}

export default CriarContaSucessoModal;