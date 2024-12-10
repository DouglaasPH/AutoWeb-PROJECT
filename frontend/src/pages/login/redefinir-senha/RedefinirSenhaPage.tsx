import "../../../App.css";
import styles from "./redefinirSenhaPage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EMAIL_PARA_REDEFINICAO_DE_SENHA, ID_DO_USUARIO_PARA_REDEFINICAO_DE_SENHA } from "../../../redux/sliceRedefinirSenha";
import { requisicaoVerificarDados } from "../requisicoesLogin";
import Spinner from "../../../components/spinner/spinner";


function RedefinirSenhaPage() {
    useEffect(() => {
        if (aparecerSpinner) document.body.classList.add('no-scroll')
        else document.body.classList.remove('no-scroll');
    });

    const [aparecerSpinner, setAparecerSpinner] = useState(false);
    const [email, setEmail] = useState("");
    const [emailValido, setEmailValido] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function validarEmail(event: { target: { value: string; }; }) {
        const emailDigitado = event.target.value;
        setEmail(emailDigitado);

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(emailDigitado)) {
            setEmailValido(false);
        } else setEmailValido(true);
    }

    function voltarPagina() {
        navigate(-1);
    }

    async function irParaVerificarCodigoPage() {
        setAparecerSpinner(true);
        let request: { encontrado: boolean; dados_da_conta: { id: number | undefined } } = {
            encontrado: false,
            dados_da_conta: { id: undefined },
        };
        console.log(request);
        if (emailValido) {
            try {
                request = await requisicaoVerificarDados("email", email);
                console.log(request);
            } finally {
                setAparecerSpinner(false)
                // se o email for encontrado vá para senhaPage, se não exiba um modal de aviso
                if (request.encontrado) {
                    dispatch(EMAIL_PARA_REDEFINICAO_DE_SENHA(email));
                    dispatch(ID_DO_USUARIO_PARA_REDEFINICAO_DE_SENHA(request.dados_da_conta.id))
                    navigate("senha");
                } else console.log("email não encontrado.");
            }
        } else return;
    }

    return (
        <>
            {aparecerSpinner ? <Spinner /> : null}
            <div className={styles.containerRedefinirSenha}>
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
                        <input type="email" autoComplete="on" value={email} onChange={validarEmail} className={classNames("fonte", styles.input)} style={{ borderColor: emailValido ? "#e0e0e0" : "#c700c7" }} />
                        <FontAwesomeIcon icon={faTriangleExclamation} className={styles.iconeEmail} style={{ opacity: emailValido ? 0 : 1 }} />
                        <p className={classNames("fonte", styles.paragrafoEmailInvalido)} style={{ opacity: emailValido ? 0 : 1 }}>Digite um email válido. Ex: douglas@gmail.com</p>
                    </div>
                    <div className={styles.containerButtons}>
                        <button className={classNames("fonte", styles.buttonRedefinirSenha)} onClick={irParaVerificarCodigoPage}>Redefinir Senha</button>
                        <button className={classNames("fonte", styles.buttonCancelar)} onClick={voltarPagina}>Cancelar</button>
                    </div>
                </div>
            </div >
        </>
    )
}
export default RedefinirSenhaPage;