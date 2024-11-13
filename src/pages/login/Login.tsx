import styles from "./styles.module.css";
import "../../App.css";
import FooterBar from "../../components/footerBar/FooterBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";


function Login() {
    return (
        <div>
            <div className={styles.backgroundAzul}></div>
            <div className={styles.backgroundBranco}></div>
            <div className={styles.containerForm}>
                <div className={styles.containerLogin}>
                    <div className={styles.legenda}>
                        <h2 className={classNames("fonte", styles.tituloLogin)}>Entrar</h2>
                        <p className={classNames("fonte", styles.descricaoTitulo)}>Digite o seu e-mail e senha.</p>
                    </div>
                    <article className={styles.articleForm}>
                        <form action="" className={styles.form}>
                            <input type="email" name="Email" placeholder="Email" required autoComplete="on" className={classNames("fonte", styles.input)} />
                            <input type="password" name="Senha" placeholder="Senha" required autoComplete="on" className={classNames("fonte", styles.input)} />
                            <button className={classNames("fonte", styles.buttonLogin)}>Entrar</button>                            
                        </form>

                    </article>
                    <article className={styles.articleLoginExterior}>
                        <section className={styles.containerOutrosMeioslogin}>
                            <button className={styles.buttonMeioLoginExterior}>
                                <FontAwesomeIcon icon={faFacebook} className={styles.icone} />
                                <p className={classNames("fonte", styles.descricao)}>Entrar com Facebook</p>
                            </button>
                            <button className={styles.buttonMeioLoginExterior}>
                                <FontAwesomeIcon icon={faGoogle} className={styles.icone} />
                                <p className={classNames("fonte", styles.descricao)}>Entrar com Google</p>
                            </button>
                            <button className={styles.buttonMeioLoginExterior}>
                                <FontAwesomeIcon icon={faApple} className={styles.icone} />
                                <p className={classNames("fonte", styles.descricaoLogin)}>Entrar com Apple</p>
                            </button>
                        </section>
                    </article>

                <article className={styles.containerEqueceuENaoTemContaOuSenha}>
                            <a href="" className={classNames("fonte", styles.descricaoEsqueceuSenha)}>Esqueceu a senha?</a>
                            <p className={classNames("fonte", styles.descricaoNaoTemConta)}>Você não tem conta? <a href="" className={classNames("fonte", styles.criarConta)}>Criar conta</a></p>
                        </article>                    
                </div>
            </div>
            <div className={styles.rodape}>
                <FooterBar />
            </div>
        </div>

    )
}

export default Login;