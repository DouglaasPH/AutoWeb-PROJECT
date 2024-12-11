import styles from "./background.module.css";
import "../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

function Background(props: { pageAtual: string; }) {
    interface tipagemDoObjeto {
        Login: string;
        Registrar: string;
        RedefinirSenha: string;
        VerificarCodigo: string;
        Senha: string;
        ContaCriada: string;
        RedefinicaoDeSenhaSucessoPage: string;
    }
    const tamanhoDoBackgroundBrancoParaCadaPage: tipagemDoObjeto = {
        Login: "70",
        Registrar: "75",
        RedefinirSenha: "50",
        VerificarCodigo: "50",
        Senha: "80",
        ContaCriada: "50",
        RedefinicaoDeSenhaSucessoPage: "40",
    };
    const chaveT = Object.keys(tamanhoDoBackgroundBrancoParaCadaPage);

    return (
        <div className={styles.containerBackground}>
            <div className={styles.backgroundAzul}></div>
            <div className={styles.backgroundBranco} style={{
                height: chaveT.includes(props.pageAtual)
                    ? `${tamanhoDoBackgroundBrancoParaCadaPage[props.pageAtual as keyof tipagemDoObjeto]}vh`
                    : "auto",
            }}>
                <div className={styles.containerText}>
                    <FontAwesomeIcon icon={faCircleQuestion} className={styles.circuloDeInterrogacao} />
                    <p className={classNames("fonte", "colorDefault", styles.comentario)}>Precisa de ajuda? <a className={styles.link}>Fale com a gente</a></p>
                </div>
            </div>
        </div>
    )
}

export default Background;