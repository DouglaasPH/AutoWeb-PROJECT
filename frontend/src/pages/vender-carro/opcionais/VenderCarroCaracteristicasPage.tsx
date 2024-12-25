import styles from "./venderCarroCaracteristicasPage.module.css";
import "../../../App.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface ControladorState {
        unicoDono: boolean,
        ipvaPago: boolean,
        naoAceitoTroca: boolean,
        veiculoFinanciado: boolean,
        licenciado: boolean,
        garantiaDeFabrica: boolean,
        veiculoDeColecionador: boolean,
        todasAsRevisoesEmConcessionaria: boolean,
        adaptadaParaPessoasComDeficiencia: boolean,    
}

function VenderCarroCaracteristicasPage() {
    const [controladorDeOpcionais, setControladorDeOpcionais] = useState<ControladorState>({
        unicoDono: false,
        ipvaPago: false,
        naoAceitoTroca: false,
        veiculoFinanciado: false,
        licenciado: false,
        garantiaDeFabrica: false,
        veiculoDeColecionador: false,
        todasAsRevisoesEmConcessionaria: false,
        adaptadaParaPessoasComDeficiencia: false,
    });

    function atualizarDados(event) {
        const novoEstado = {
            ...controladorDeOpcionais,
            [event.target.name]: !controladorDeOpcionais[event.target.name],
        };
        setControladorDeOpcionais(novoEstado);
        console.log(novoEstado); // Usa o novo estado imediatamente
    }

    return (
        <div className={styles.containerVenderCarroCaracteristicasPage}>
            <div className={styles.containerPrincipal}>
                <div className={styles.containerFormulario}>
                    <div className={styles.containerFormularioTitulo}>
                        <h1 className={classNames("fonte", styles.formularioTitulo)}>Informe as condições do veículo</h1>
                        <p className={classNames("fonte", styles.formularioParagrafo)}>Selecione os itens que representam detalhes adicionais do seu veículo para despertar a atenção dos compradores</p>
                    </div>
                    
                    <div className={styles.containerInputs}>
                        <div className={styles.containerInputRowUm}>
                            <button className={classNames("fonte", styles.inputRowUmButtonUm)}
                                style={{backgroundColor: controladorDeOpcionais.unicoDono ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.unicoDono ? "#f5f5f5" : ""}}
                                name="unicoDono"
                                onClick={atualizarDados}>
                                Único dono
                                {controladorDeOpcionais.unicoDono ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                            </button>
                            <button className={classNames("fonte", styles.inputRowUmButtonDois)}
                                style={{backgroundColor: controladorDeOpcionais.ipvaPago ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.ipvaPago ? "#f5f5f5" : ""}}
                                name="ipvaPago"
                                onClick={atualizarDados}>
                                IPVA Pago 
                                {controladorDeOpcionais.ipvaPago ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
                            <button className={classNames("fonte", styles.inputRowUmButtonTres)}
                                style={{backgroundColor: controladorDeOpcionais.naoAceitoTroca ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.naoAceitoTroca ? "#f5f5f5" : ""}}
                                name="naoAceitoTroca"
                                onClick={atualizarDados}>
                                Não aceito troca 
                                {controladorDeOpcionais.naoAceitoTroca ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
                        </div>
                        <div className={styles.containerInputRowDois}>
                            <button className={classNames("fonte", styles.inputRowDoisButtonUm)}
                                style={{backgroundColor: controladorDeOpcionais.veiculoFinanciado ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.veiculoFinanciado ? "#f5f5f5" : ""}}
                                name="veiculoFinanciado"
                                onClick={atualizarDados}>
                                Veíuclo financiado 
                                {controladorDeOpcionais.veiculoFinanciado ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
                            <button className={classNames("fonte", styles.inputRowDoisButtonDois)}
                                style={{backgroundColor: controladorDeOpcionais.licenciado ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.licenciado ? "#f5f5f5" : ""}}                                
                                name="licenciado"
                                onClick={atualizarDados}>
                                Licenciado 
                                {controladorDeOpcionais.licenciado ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
                            <button className={classNames("fonte", styles.inputRowDoisButtonTres)}
                                style={{backgroundColor: controladorDeOpcionais.garantiaDeFabrica ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.garantiaDeFabrica ? "#f5f5f5" : ""}}
                                name="garantiaDeFabrica"
                                onClick={atualizarDados}>
                                Garantia de Fábrica 
                                {controladorDeOpcionais.garantiaDeFabrica ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
                        </div>                    
                        <div className={styles.containerInputRowTres}>
                            <button className={classNames("fonte", styles.inputRowTresButtonUm)}
                                style={{backgroundColor: controladorDeOpcionais.veiculoDeColecionador ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.veiculoDeColecionador ? "#f5f5f5" : ""}}
                                name="veiculoDeColecionador"
                                onClick={atualizarDados}>
                                Veículo de Colecionador 
                                {controladorDeOpcionais.veiculoDeColecionador ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
                            <button className={classNames("fonte", styles.inputRowTresButtonDois)}
                                style={{backgroundColor: controladorDeOpcionais.todasAsRevisoesEmConcessionaria ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.todasAsRevisoesEmConcessionaria ? "#f5f5f5" : ""}}
                                name="todasAsRevisoesEmConcessionaria"
                                onClick={atualizarDados}>
                                Todas as revisões em concessionária 
                                {controladorDeOpcionais.todasAsRevisoesEmConcessionaria ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
                        </div>
                        <div className={styles.containerInputRowQuatro}>
                            <button className={classNames("fonte", styles.inputRowQuatroButtonUm)}
                                style={{backgroundColor: controladorDeOpcionais.adaptadaParaPessoasComDeficiencia ? "#454545" : "#f5f5f5", color: controladorDeOpcionais.adaptadaParaPessoasComDeficiencia ? "#f5f5f5" : ""}}
                                name="adaptadaParaPessoasComDeficiencia"
                                onClick={atualizarDados}>
                                Adaptada para pessoas com deficiência 
                                {controladorDeOpcionais.adaptadaParaPessoasComDeficiencia ? <FontAwesomeIcon icon={faCheck} className={styles.fontCorrect} /> : <FontAwesomeIcon icon={faPlus} className={styles.fontPlus} />}
                                </button>
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
    )
}

export default VenderCarroCaracteristicasPage;