import styles from "./styles.module.css";
import "../../App.css";
import { imagens } from "../../images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames";


function FooterBar() { 
    return (
        <footer className={styles.containerFooter}>
            <section className={styles.sectionInfo}>
                <div className={styles.divLogo}>
                    <img src={imagens["logoMarcaDoSite"]} alt="logo marca do site" className={styles.imgLogo} />
                </div>

                <div className={styles.divLinks}>
                    <a href="" className={classNames("fonte", styles.link, styles.linkUm)}>Comprar</a>
                    <a href="" className={classNames("fonte", styles.link, styles.linkDois)}>Vender</a>
                    <a href="" className={classNames("fonte", styles.link, styles.linkTres)}>Quem somos</a>
                    <a href="" className={classNames("fonte", styles.link, styles.linkQuatro)}>Atendimento</a>
                </div>

                <div className={styles.divRedesSociais}>
                    <a href="" className={classNames("fonte", styles.icone)}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="" className={classNames("fonte", styles.icone)}>
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </a>
                    <a href="" className={classNames("fonte", styles.icone)}>
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="" className={classNames("fonte", styles.icone)}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="" className={classNames("fonte", styles.icone)}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </section>

            <section className={styles.sectionCopyright}>
                <p className={classNames("fonte", styles.pCopyright)}>© 2024 AutoWeb S.A. Todos os direitos reservados.</p>
                <a href="" className={classNames("fonte", styles.linkCopyright)}>Termos de uso e Política de Privacidade</a>                
            </section>
        </footer>
    )
};

export default FooterBar;