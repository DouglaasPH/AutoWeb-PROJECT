import styles from "./styles.module.css";
import "../../../../App.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import VerImagens from "./components/verImagens/VerImagens";

const especificacoesMaisPesquisadas = {
    marcaEModelo: "Chevrolet Onix",
    especificacao: "1.0 turbo flex rs",
    tipoDeTransmissao: "automatico",
    ano: ["2020/2021", "2021/2022", "2022/2023", "2023/2024"]
}




type Recomendacao = {
    valor: string,
    ano: string,
    local: string,
    kilometragem: string,
};

const recomendadosObjeto: Record<string, Recomendacao> = {
    recomendacaoUm: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoDois: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoTres: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoQuatro: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoCinco: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoSeis: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoSete: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoOito: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoNove: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    recomendacaoDez: { valor: "86.900", ano: "2022/2023", local: "Recife - PE", kilometragem: "39.499" },
    
};

const chavesDoObjetoRecomendados = Object.keys(recomendadosObjeto);


function Recomendados() {
    const [moverRecomendados, setMoverRecomendados] = useState<number>(0);
    const irParaEsquerda = () => setMoverRecomendados(1 + moverRecomendados);
    const irParaDireita = () => setMoverRecomendados(-1 + moverRecomendados);


    return (
        <div className={styles.containerRecomendados}>
            <div className={styles.containerTitulo}>
                <h4 className={classNames("fonte", styles.titulo)}>Recomendados para você</h4>
            </div>

            <div className={styles.containerSetasERecomendados}>
                {moverRecomendados < 0 ?
                    <div className={styles.containerSetaEsquerda} onClick={irParaEsquerda}>
                        <FontAwesomeIcon icon={faArrowLeft} className={styles.setaEsquerda} />
                    </div> : null}

            <div className={styles.containerRecomendadosParaMargem}>
            <div className={styles.containerRecomendadosDiversos} style={{ transform: `translateX(${moverRecomendados * 10}%)` }}>
                {chavesDoObjetoRecomendados.map((recomendadoAtual) => (
                    <div className={styles.containerCadaRecomendado}>
                        <div className={styles.containerImagens}>
                            <VerImagens />
                        </div>

                        <div className={styles.containerInformacoesDoRecomendado}>
                            <div className={styles.containerEspecificacaoMaisPesquisada}>
                                <p className={classNames("fonte", styles.modeloDoCarro)}>{especificacoesMaisPesquisadas.marcaEModelo}</p>
                                <p className={classNames("fonte", styles.especificacaDoCarro)}>{especificacoesMaisPesquisadas.especificacao}</p>
                                <p className={classNames("fonte", styles.tipoDeTransmissao)}>{especificacoesMaisPesquisadas.tipoDeTransmissao}</p>                                
                            </div>
                            <div className={styles.containerEspecificacoesDoCarro}>
                                <h5 className={classNames("fonte", styles.valorDoCarro)}>{`R$ ${recomendadosObjeto[recomendadoAtual].valor}`}</h5>
                                <div className={styles.containerAnoEKilometragemDoAutomovel}>
                                    <p className={classNames("fonte", styles.anoDoAutomovel)}>{recomendadosObjeto[recomendadoAtual].ano}</p>
                                    <p className={classNames("fonte", styles.kilometragemDoAutomovel)}>{`${recomendadosObjeto[recomendadoAtual].kilometragem} km`}</p>                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.containerLocalDoAutomovelEAddFavoritos}>
                            <p className={classNames("fonte", styles.localDoAutomovel)}>
                                <FontAwesomeIcon icon={faLocationDot} />                                
                                {recomendadosObjeto[recomendadoAtual].local}
                            </p>
                            <FontAwesomeIcon icon={ faHeart } className={classNames("fonte", styles.adicionarAutomovelAosFavoritos)} />
                        </div>
                    </div>
                ))}
            </div>
            </div>
            {moverRecomendados >= -4 ? 
                <div className={styles.containerSetaDireita} onClick={irParaDireita}>
                    <FontAwesomeIcon icon={faArrowRight} className={styles.setaDireita} />
                </div> : null}            
                
            </div>    
        </div>
    )
}
export default Recomendados;