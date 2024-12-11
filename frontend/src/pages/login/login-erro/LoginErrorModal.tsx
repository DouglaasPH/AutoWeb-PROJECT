import styles from "./loginErrorModal.module.css";
import "../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

interface LoginErrorModalProps {
    exibirOuNao: (abrirOuFecharLoginErrorModal: string) => void;
}

function LoginErrorModal({ exibirOuNao }: LoginErrorModalProps) {
    const navigate = useNavigate();

    function tenteNovamente() {
        exibirOuNao("false");
    }

    function irParaRedefinirSenhaPage() {
        navigate("redefinir-senha")
    }

    return (
        <div className={styles.containerFixo}>
            <div className={styles.containerErrorModal}>
                <div className={styles.containerX}>
                    <FontAwesomeIcon icon={faX} className={styles.x} />
                </div>
                <div className={styles.containerUm}>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={styles.triangulo} />
                    <h4 className={classNames("fonte", styles.titulo)}>E-mail ou senhas inválidos! :(</h4>
                    <p className={classNames("fonte", "colorDefault", styles.paragrafo)}>Revise seu e-mail ou senha e tente novamente ou redifina sua senha e evite o bloqueio da sua conta.</p>
                </div>

                <div className={styles.containerDois} >
                    <button className={classNames("fonte", styles.buttonTentarNovamente)} onClick={tenteNovamente}>Tente novamente</button>
                    <button className={classNames("fonte", styles.buttonRedefinirSenha)} onClick={irParaRedefinirSenhaPage}>Redefinir Senha</button>
                </div>
            </div>
        </div>
    )
}

export default LoginErrorModal;