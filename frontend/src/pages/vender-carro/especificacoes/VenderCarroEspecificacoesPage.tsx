import styles from "./venderCarroEspecificacoes.module.css";
import "../../../App.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { consultarAnosDoModelo, consultarMarcas, consultarModelos, consultarVersoesDoModelo } from "../requisicoesVenderCarro";
import { useNavigate } from "react-router-dom";

interface controleOpcoesDosInputsState {
  marca: string[],
  modelo: string[],
  anoDoModelo: number[],
  anoDeFabricacao: number[],
  versao: string[],
  cor: string[],    
}

interface controleValueDosInputsState {
  marca: string,
  modelo: string,
  anoDoModelo: string,
  anoDeFabricacao: string,
  versao: string,
  cor: string,   
  blindado: boolean,
}


function VenderCarroEspecificacoesPage() {
  const valueDefaultInput = {
    marca: "",
    modelo: "",
    anoDoModelo: "",
    anoDeFabricacao: "",
    versao: "",
    cor: "",
    blindado: false,        
  };

  const navigate = useNavigate();
  const [controleOpcoesDosInputs, setControleOpcoesDosInputs] = useState<controleOpcoesDosInputsState>({
    marca: [],
    modelo: [],
    anoDoModelo: [],
    anoDeFabricacao: [],
    versao: [],
    cor: [
      "Amarelo",
      "Azul",
      "Bege",
      "Branco",
      "Bronze",
      "Cinza",
      "Dourado",
      "Indefinida",
      "Laranja",
      "Marrom",
      "Prata",
      "Preto",
      "Rosa",
      "Roxo",
      "Verde",
      "Vermelho",
    ],
  });

  const [controleValueDosInputs, setControleValueDosInputs] = useState<controleValueDosInputsState>({
    marca: "",
    modelo: "",
    anoDoModelo: "",
    anoDeFabricacao: "",
    versao: "",
    cor: "",
    blindado: false,
  });

  // consultar marcas disponíveis
  useEffect(() => {
    async function buscarMarcas() {
      try {
        const marcas = await consultarMarcas();
        const novoEstado = {
          ...controleOpcoesDosInputs,
          marca: marcas.dados,
        };
        setControleOpcoesDosInputs(novoEstado);
      } catch (error) {
        console.log(error);
      }
    }    
    if (controleOpcoesDosInputs.marca.length === 0) {
      buscarMarcas();
    } else return;
  });

  /* Função atualiza todas as opções de input. Uma única função (possui switch) atende as necessidades de buscar novos valores para opções de cada 'select'. */
  async function atualizarOpcoesInput(valorAtual: string, tipoDeInput: string) {
    switch (tipoDeInput) {
      case 'marca':
        {
          const requisicao = await consultarModelos(valorAtual);
          const novoEstado = {
            ...controleOpcoesDosInputs,
            modelo: requisicao.dados,
            anoDoModelo: [],
            anoDeFabricacao: [],
            versao: [],
          };
          setControleOpcoesDosInputs(novoEstado);
        }
        break; 
      case 'modelo':
        {
          const requisicao = await consultarAnosDoModelo(valorAtual);
          const novoEstado = {
            ...controleOpcoesDosInputs,
            anoDoModelo: requisicao.dados,
            anoDeFabricacao: [],
            versao: [],
          };
          setControleOpcoesDosInputs(novoEstado);
        }
        break;
      case 'anoDoModelo':
        {
          const anoDeFabricacao = [(Number(valorAtual) - 1), (Number(valorAtual)), (Number(valorAtual) + 1)];
          const novoEstado = {
            ...controleOpcoesDosInputs,
            anoDeFabricacao: anoDeFabricacao,
            versao: [],
          };
          setControleOpcoesDosInputs(novoEstado);
        }
        break;        
      case 'anoDeFabricacao':
        {
          console.log(controleValueDosInputs.modelo, controleValueDosInputs.anoDoModelo);
          const requisicao = await consultarVersoesDoModelo(controleValueDosInputs.modelo, controleValueDosInputs.anoDoModelo);
          const novoEstado = {
            ...controleOpcoesDosInputs,
            versao: requisicao.dados,
          };
          setControleOpcoesDosInputs(novoEstado);
        }
        break;              
      default:
        break;
    }
  }

  /* Uma única função atualiza um objeto que guarda todos os valores selecionado pelo usuário. A atualização se dá por meio da utilização da nomeação de cada 'select' e seu valor selecionado após o evento 'onChange'. Logo após da atualização de valor é chamado a função 'atualizarOpcoesInput' para atualizar as opções da próxima input disponível para escolha de opções. */
  function atualizarValorInput(event: {
    target: {
    value: string;
    name: string; 
  }
  }) {
    const keys = Object.keys(controleValueDosInputs);
    const position: number = keys.indexOf(event.target.name);
    const novoEstado: controleValueDosInputsState = { ...controleValueDosInputs };

    keys.forEach((chaveAtual: string, index: number) => {
      if (index === position) {
        novoEstado[chaveAtual] = event.target.value;
      } else if (index > position) {
        novoEstado[chaveAtual] = valueDefaultInput[chaveAtual];
      }
    });

    setControleValueDosInputs(novoEstado);   
    atualizarOpcoesInput(event.target.value, event.target.name)
  };

  /* Por a input do blindado ser um 'checkbox' é necessário que seja tratado em uma função separada dos demais input's, para não houver conflito de tipos. */
  function atualizarValorBlindado(event: {
    target: {
      name: string;
      checked: boolean;
    }}) {
    const novoEstado = {
      ...controleValueDosInputs,
      [event.target.name]: event.target.checked,
    }
    setControleValueDosInputs(novoEstado);
  };

  function voltarParaHomePage() {
    window.location.href = '/';
  };

  function verificarAutencidadeParaIrParaProximaPage() {
    if (controleValueDosInputs.anoDeFabricacao.length !== 0 &&
      controleValueDosInputs.anoDoModelo.length !== 0 &&
      controleValueDosInputs.cor.length !== 0 &&
      controleValueDosInputs.marca.length !== 0 &&
      controleValueDosInputs.modelo.length !== 0 &&
      controleValueDosInputs.versao.length !== 0) return true
    else return false;
  }

  function irParaCaracteristicasPage() {
    if(verificarAutencidadeParaIrParaProximaPage()) navigate('/vender-carro/caracteristicas')
    else return;
  };

  return (
    <div className={styles.containerVenderCarroEspecificacoes}>      
      <div className={styles.containerPrincipal}>
        <div className={styles.containerFormulario}>
          <div className={styles.containerFormularioTitulo}>
              <h1 className={classNames("fonte", styles.formularioTitulo)}>Preencha os dados do veículo</h1>
          </div>

          <div className={styles.containerInputs}>
            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)} style={{ opacity: controleValueDosInputs.marca !== "" ? "1" : "0.5"}}>Marca*</label>
              <select name="marca" onChange={atualizarValorInput} className={styles.select} disabled={controleOpcoesDosInputs.marca.length !== 0 ? false : true} style={{ opacity: controleValueDosInputs.marca !== "" ? "1" : "0.5"}}>
                <option selected disabled className={classNames("fonte", styles.optionDisabled)}>Escolha uma marca</option>
                {controleOpcoesDosInputs.marca.map((marcaAtual) => <option className={classNames("fonte", styles.option)}>{marcaAtual}</option>)}
              </select>
            </div>

            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)} style={{ opacity: controleValueDosInputs.modelo !== "" ? "1" : "0.5"}}>Modelo*</label>
              <select name="modelo" onChange={atualizarValorInput} className={styles.select} disabled={controleOpcoesDosInputs.modelo.length !== 0 ? false : true} style={{ opacity: controleValueDosInputs.modelo !== "" ? "1" : "0.5"}}>
                <option selected={controleValueDosInputs.modelo === "" ? true : false } disabled className={classNames("fonte", styles.optionDisabled)}>Escolha um modelo</option>
                {controleOpcoesDosInputs.modelo?.map((modeloAtual) => <option className={classNames("fonte", styles.option)}>{modeloAtual}</option> )}                  
              </select>
            </div>                           

            <div className={styles.containerDoisInputs}>
              <div className={styles.containerInputAnoDoModelo}> 
                <label className={classNames("fonte", styles.label)} style={{ opacity: controleValueDosInputs.anoDoModelo !== "" ? "1" : "0.5"}}>Ano do modelo*</label>
                <select name="anoDoModelo" onChange={atualizarValorInput} className={styles.selectDois} disabled={controleOpcoesDosInputs.anoDoModelo.length !== 0 ? false : true} style={{ opacity: controleValueDosInputs.anoDoModelo !== "" ? "1" : "0.5"}}>
                  <option selected={controleValueDosInputs.anoDoModelo === "" ? true : false } disabled className={classNames("fonte", styles.optionDisabled)}>Escolha um ano</option>
                {controleOpcoesDosInputs.anoDoModelo.map((anoDoModeloAtual) => <option className={classNames("fonte", styles.option)}>{anoDoModeloAtual}</option> )}
                </select>
              </div>
                  
              <div className={styles.containerInputAnoDeFabricacao}>
                <label className={classNames("fonte", styles.label)}  style={{ opacity: controleValueDosInputs.anoDeFabricacao !== "" ? "1" : "0.5"}}>Ano de Fabricação*</label>
                <select name="anoDeFabricacao" onChange={atualizarValorInput} className={styles.selectDois} disabled={controleOpcoesDosInputs.anoDeFabricacao.length !== 0 ? false : true} style={{ opacity: controleValueDosInputs.anoDeFabricacao !== "" ? "1" : "0.5"}}>
                  <option selected={controleValueDosInputs.anoDeFabricacao === "" ? true : false } disabled className={classNames("fonte", styles.optionDisabled)}>Escolha um ano</option>
                  {controleOpcoesDosInputs.anoDeFabricacao.map((anoDeFabricacaoAtual) => <option className={classNames("fonte", styles.option)}>{anoDeFabricacaoAtual}</option> )}                  
                </select>                  
              </div>
            </div>
                
            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)}  style={{ opacity: controleValueDosInputs.versao !== "" ? "1" : "0.5"}}>Versão*</label>
              <select name="versao" onChange={atualizarValorInput} className={styles.select} disabled={controleOpcoesDosInputs.versao.length !== 0 ? false : true} style={{ opacity: controleValueDosInputs.versao !== "" ? "1" : "0.5"}}>
                <option selected={controleValueDosInputs.versao === "" ? true : false } disabled className={classNames("fonte", styles.optionDisabled)}>Escolha uma versão</option>
                {controleOpcoesDosInputs.versao.map((versaoAtual) => <option className={classNames("fonte", styles.option)}>{versaoAtual}</option> )}                  
              </select>
            </div>
                  
            <div className={styles.containerInput}>
              <label className={classNames("fonte", styles.label)}  style={{ opacity: controleValueDosInputs.cor !== "" ? "1" : "0.5"}}>Cor*</label>
              <select name="cor" onChange={atualizarValorInput} className={styles.select} disabled={controleOpcoesDosInputs.versao.length !== 0 ? false : true} style={{ opacity: controleValueDosInputs.cor !== "" ? "1" : "0.5"}}>
                <option selected={controleValueDosInputs.cor === "" ? true : false } disabled className={classNames("fonte", styles.optionDisabled)}>Escolha uma cor</option>
                {controleOpcoesDosInputs.cor.map((corAtual) => <option className={classNames("fonte", styles.option)}>{corAtual}</option> )}
              </select>
            </div>

            <div className={styles.containerInputBlindado}>
              <input name="blindado" onChange={atualizarValorBlindado} type="checkbox" className={styles.inputBlindado} />
              <label className={classNames("fonte", styles.labelBlindado)}  style={{ opacity: controleValueDosInputs.blindado !== false ? "1" : "0.5"}}>Blindado</label>
            </div>

            <div className={styles.containerAvisos}>
              <FontAwesomeIcon icon={faCircleExclamation} className={styles.fontAviso} />
              <p className={classNames("fonte", styles.pAviso)}>Não é possível editar os dados do veículo após criar o anúncio. Confirme os dados antes de continuar.</p>
            </div>              
          </div>
          <div className={styles.containerButtons}>
            <button className={classNames("fonte", styles.buttonVoltar)} onClick={voltarParaHomePage}>
              <FontAwesomeIcon icon={faArrowLeft} className={styles.fontArrow} />
              Voltar
            </button>
            <button className={classNames("fonte", styles.buttonContinuar)} onClick={irParaCaracteristicasPage} style={{ opacity: verificarAutencidadeParaIrParaProximaPage() ? "1" : "0.5"}}>
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