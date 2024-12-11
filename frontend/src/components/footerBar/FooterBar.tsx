import styles from "./footerBar.module.css";
import "../../App.css";
import { imagens } from "../../assets/images";
import classNames from "classnames";


function FooterBar() {
    return (
        <footer className={styles.containerFooter}>
            <section className={styles.sectionInfo}>
                <div className={styles.divLogo}>
                    <img src={imagens["logoMarcaDoSite"]} alt="logo marca do site" className={styles.imgLogo} />
                    <p className={classNames("fonteLogo", "colorDefault", styles.nameLogo)}>AutoWeb</p>
                </div>

                <div className={styles.divLinks}>
                    <a href="" className={classNames("fonte", styles.link, styles.linkUm)}>Comprar</a>
                    <a href="" className={classNames("fonte", styles.link, styles.linkDois)}>Vender</a>
                    <a href="" className={classNames("fonte", styles.link, styles.linkTres)}>Quem somos</a>
                    <a href="" className={classNames("fonte", styles.link, styles.linkQuatro)}>Atendimento</a>
                </div>
            </section>

            <section className={styles.sectionCopyright}>
                <p className={classNames("fonte", "colorDefault", styles.pCopyright)}>© 2024 AutoWeb S.A. Todos os direitos reservados.</p>
                <a href="" className={classNames("fonte", styles.linkCopyright)}>Termos de uso e Política de Privacidade</a>
            </section>
        </footer>
    )
};

export default FooterBar;