import styles from "./venderCarroEspecificacoes.module.css";
import "../../../App.css";
import classNames from "classnames";

function VenderCarroEspecificacoesPage() {
  return (
    <div className={styles.containerVenderCarroEspecificacoes}>
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
      
      <div className={styles.containerPrincipal}>
        <div className={styles.containerFormulario}>
          <div className={styles.containerFormularioTitulo}>
            <h3 className={styles.formularioTitulo}>Preencha os dados do veículo</h3>
          </div>
        </div>      
              
      </div>
          
    </div>
  );
}

export default VenderCarroEspecificacoesPage;
