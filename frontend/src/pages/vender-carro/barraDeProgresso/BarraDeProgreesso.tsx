import styles from "./barraDeProgresso.module.css";
import "../../../App.css";
import classNames from "classnames";

function BarraDeProgresso() {
    return (
      <div className={styles.containerBarrasDeProgresso}>
        <div className={styles.containerBarraDeProgressoUm}>
          <div className={styles.containerTituloBarraDeProgresso}>
            <h3 className={classNames("fonte", styles.numeradorBarraDeProgresso)}>1</h3>
            <h3 className={classNames("fonte", styles.descricaoBarraDeProgresso)}>Preencha os dados do veículo</h3>
          </div>
          <div className={styles.barraDeProgresso}></div>
        </div>

        <div className={styles.containerBarraDeProgressoUm}>
          <div className={styles.containerTituloBarraDeProgresso}>
            <h3 className={classNames("fonte", styles.numeradorBarraDeProgresso)}>2
            </h3>
            <h3 className={classNames("fonte", styles.descricaoBarraDeProgresso)}>Destaque seu veículo</h3>
          </div>
          <div className={styles.barraDeProgresso}></div>
        </div>

        <div className={styles.containerBarraDeProgressoUm}>
          <div className={styles.containerTituloBarraDeProgresso}>
            <h3 className={classNames("fonte", styles.numeradorBarraDeProgresso)}>3</h3>
            <h3 className={classNames("fonte", styles.descricaoBarraDeProgresso)}>Finalizar anúncio</h3>
          </div>
          <div className={styles.barraDeProgresso}></div>
        </div>
      </div>        
    )
}

export default BarraDeProgresso;