import "../../../App.css";
import styles from "./redefinirSenhaPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emailParaRedefinirSenha } from "../../../redux/sliceRedefinirSenha";
import Background from "../../../components/telaDeFundo/background";


function RedefinirSenhaPage() {
    const email = useRef(null);
    const [emailValido, setEmailValido] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function validarEmail() {
        console.log(email.current.value)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email.current.value)) {
            setEmailValido(false);
        } else setEmailValido(true);
    }

    function voltarPagina() {
        navigate(-1);
    }

    function irParaVerificarCodigoPage() {
        dispatch(emailParaRedefinirSenha(email.current.value));
        navigate("verificar-codigo")
    }

    return (
        <div className={styles.containerRedefinirSenha}>
            <Background pageAtual="RedefinirSenha" />

            <div className={styles.containerForm}>
                <div className={styles.containerX}>
                    <FontAwesomeIcon icon={faX} className={styles.x} onClick={voltarPagina} />
                </div>
                <div className={styles.containerDescricao}>
                    <label className={classNames("fonte", styles.descricao)}>Digite seu e-mail para redefinir sua senha:</label>
                </div>
                <div className={styles.containerInputEmail}>
                    <label className={classNames("fonte", styles.labelEmail)} style={{
                        color: emailValido ? "#858585" : "#c700c7"
                    }}>E-mail</label>
                    <input type="email" autoComplete="on" ref={email} onChange={validarEmail} className={classNames("fonte", styles.input)} style={{ borderColor: emailValido ? "#e0e0e0" : "#c700c7" }} />
                    <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeEmail} style={{ opacity: emailValido ? 0 : 1 }} />
                    <p className={classNames("fonte", styles.paragrafoEmailInvalido)} style={{ opacity: emailValido ? 0 : 1 }}>Digite um email válido. Ex: douglas@gmail.com</p>
                </div>
                <div className={styles.containerButtons}>
                    <button className={classNames("fonte", styles.buttonCancelar)} onClick={voltarPagina}>Cancelar</button>
                    <button className={classNames("fonte", styles.buttonRedefinirSenha)} onClick={irParaVerificarCodigoPage}>Redefinir Senha</button>
                </div>
            </div>
        </div >
    )
}

export default RedefinirSenhaPage;