import styles from "./navBarApenasLogo.module.css";
import "../../App.css";
import classNames from "classnames";
import { imagens } from "../../assets/images";

function NavBarApenasLogo() {
  return (
    <div className={styles.containerNavBar}>
      <div className={styles.containerLogo}>
        <img
          src={imagens["logoMarcaDoSite"]}
          alt="logo marca do site"
          className={styles.logoMarcaImg}
        />
        <h3 className={classNames("fonteLogo", styles.logoMarcaTitulo)}>
          AutoWeb
        </h3>
      </div>
    </div>
  );
}

export default NavBarApenasLogo;
