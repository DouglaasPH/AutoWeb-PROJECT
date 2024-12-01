import classNames from "classnames";
import styles from "./filtros.module.css";
import "../../../App.css";
import ComponentLocalizacao from "./components para filtros/localização/ComponentLocalizacao";
import ComponentUltimasBuscas from "./components para filtros/últimas buscas/ComponentUltimasBuscas";


function Filtros() {
  return (
    <div className={styles.containerFiltros}>
      <form action="">
        <div className={styles.containerTipoDoAutomovel}>
          <h3 className={classNames("fonte", styles.tituloCarros)}>Carros</h3>
          <h3 className={classNames("fonte", styles.tituloMotos)}>Motos</h3>
        </div>

        <div className={styles.componentLocalizacao}>
          <ComponentLocalizacao />
        </div>


        <div className={styles.componentUltimasBuscas}>
          <ComponentUltimasBuscas />
        </div>

        <div className={styles.componentMarcaDoAutomovel}>
          
        </div>
      </form>
    </div>
  )
}

export default Filtros;