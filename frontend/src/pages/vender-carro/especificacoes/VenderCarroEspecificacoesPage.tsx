import styles from "./venderCarroEspecificacoes.module.css";
import "../../../App.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function VenderCarroEspecificacoesPage() {
  return (
    <div className={styles.containerVenderCarroEspecificacoes}>      
      <div className={styles.containerPrincipal}>
        <div className={styles.containerFormulario}>
          <div className={styles.containerFormularioTitulo}>
              <h1 className={classNames("fonte", styles.formularioTitulo)}>Preencha os dados do veículo</h1>
          </div>

          <div className={styles.containerInputs}>
            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)}>Marca*</label>
              <select className={styles.select}>
                <option selected disabled className={classNames("fonte", styles.optionDisabled)}>Escolha uma marca</option>
                <option className={classNames("fonte", styles.option)}>teste 1</option>
                <option className={classNames("fonte", styles.option)}>teste 2</option>                  
              </select>
            </div>

            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)}>Modelo*</label>
              <select className={styles.select}>
                <option selected disabled className={classNames("fonte", styles.optionDisabled)}>Escolha um modelo</option>
                <option className={classNames("fonte", styles.option)}>teste 1</option>
                <option className={classNames("fonte", styles.option)}>teste 2</option>                  
              </select>
            </div>                           

            <div className={styles.containerDoisInputs}>
              <div className={styles.containerInputAnoDoModelo}> 
                <label className={classNames("fonte", styles.label)}>Ano do modelo*</label>
                <select className={styles.selectDois}>
                  <option selected disabled className={classNames("fonte", styles.optionDisabled)}>Escolha um ano</option>
                  <option className={classNames("fonte", styles.option)}>teste 1</option>
                  <option className={classNames("fonte", styles.option)}>teste 2</option>                  
                </select>
              </div>
                  
              <div className={styles.containerInputAnoDeFabricacao}>
                <label className={classNames("fonte", styles.label)}>Ano de Fabricação*</label>
                <select className={styles.selectDois}>
                  <option selected disabled className={classNames("fonte", styles.optionDisabled)}>Escolha um ano</option>
                  <option className={classNames("fonte", styles.option)}>teste 1</option>
                  <option className={classNames("fonte", styles.option)}>teste 2</option>                  
                </select>                  
              </div>
            </div>
                
            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)}>Versão*</label>
              <select className={styles.select}>
                <option selected disabled className={classNames("fonte", styles.optionDisabled)}>Escolha uma versão</option>
                <option className={classNames("fonte", styles.option)}>teste 1</option>
                <option className={classNames("fonte", styles.option)}>teste 2</option>                  
              </select>
            </div>
                  
            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)}>Cor*</label>
              <select className={styles.select}>
                <option selected disabled className={classNames("fonte", styles.optionDisabled)}>Escolha uma cor</option>
                <option className={classNames("fonte", styles.option)}>teste 1</option>
                <option className={classNames("fonte", styles.option)}>teste 2</option>                  
              </select>
            </div>

            <div className={styles.containerInputBlindado}>
              <input type="checkbox" className={styles.inputBlindado} />
              <label className={classNames("fonte", styles.labelBlindado)}>Blindado</label>
            </div>

            <div className={styles.containerAvisos}>
              <FontAwesomeIcon icon={faCircleExclamation} className={styles.fontAviso} />
              <p className={classNames("fonte", styles.pAviso)}>Não é possível editar os dados do veículo após criar o anúncio. Confirme os dados antes de continuar.</p>
            </div>              
          </div>
          <div className={styles.containerButtons}>
            <button className={classNames("fonte", styles.buttonVoltar)}>
              <FontAwesomeIcon icon={faArrowLeft} className={styles.fontArrow} />
              Voltar
            </button>
            <button className={classNames("fonte", styles.buttonContinuar)}>
              Continuar
              <FontAwesomeIcon icon={faArrowRight} className={styles.fontArrow} />
            </button>
          </div>
        </div>                    
      </div>      
    </div>
  );
}

export default VenderCarroEspecificacoesPage;