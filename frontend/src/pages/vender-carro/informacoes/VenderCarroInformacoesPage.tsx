import styles from "./venderCarroInformacoesPage.module.css";
import "../../../App.css";
import classNames from "classnames";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

function VenderCarroInformacoesPage() {
    const [valueInputSobreCarro, setValueInputSobreCarro] = useState({ textAtual: "", quantDeCaracteres: 0 });
    const [valueInputPreco, setValueInputPreco] = useState("");

    function inputSobreCarro(event: { target: { value: string; }; }) {
        const valueAtual = event.target.value;
        if (valueAtual.length < 500) {
            setValueInputSobreCarro({ textAtual: valueAtual, quantDeCaracteres: valueAtual.length });
        } else if (valueAtual.length < valueInputSobreCarro.quantDeCaracteres) {
            setValueInputSobreCarro({ textAtual: valueAtual, quantDeCaracteres: valueAtual.length });
        } else return;
    };

    function inputPrecoChange(event: { target: { value: string; }; }) {
        const digitado = event.target.value.replace(/\D/g, ""); // Remove tudo que não é número
        const numero = parseInt(digitado || "0", 10); // Converte para número, default 0
        const valorFormatado = (numero / 100).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
        setValueInputPreco(valorFormatado); // Atualiza o estado com o valor formatado
    }
    
    function inputPrecoKeyDown(event: { key: string; preventDefault: () => void; }) {
    if (event.key === "Backspace") {
      const digitado = valueInputPreco.replace(/\D/g, ""); // Remove tudo que não é número
      const numero = parseInt(digitado || "0", 10); // Converte para número, default 0
      const novoNumero = Math.floor(numero / 10); // Remove o último dígito
      const valorFormatado = (novoNumero / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      setValueInputPreco(valorFormatado); // Atualiza o estado com o valor formatado
      event.preventDefault(); // Impede o comportamento padrão
    }
  };

    return (
        <div className={styles.containerVenderCarroInformacoesPage}>
            <div className={styles.containerPrincipal}>
                <div className={styles.containerFormulario}>
                    <div className={styles.containerFormularioTitulo}>
                        <h1 className={classNames("fonte", styles.formularioTitulo)}>Complemente as informações do seu veículo</h1>
                    </div>                
                
                    <div className={styles.containerInputs}>
                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.label)}>Quilometragem*</label>
                            <input type="text" className={styles.input} placeholder="Informe a quilometragem" />
                        </div>

                        <div className={styles.containerInputSobreCarro}>
                            <label className={classNames("fonte", styles.label)}>Aqui você pode falar um pouco mais sobre os diferenciais do seu carro. Mas não é obrigatório, tá?</label>
                            <input type="text" className={styles.input} onChange={inputSobreCarro} value={valueInputSobreCarro.textAtual} />
                            <div className={styles.containerContadorDeCaracteres}>
                                <p className={classNames("fonte", styles.contadorDeCaracteresInputSobreCarro)}>{valueInputSobreCarro.quantDeCaracteres} / 500</p>
                            </div>
                        </div>

                        <div className={styles.containerAviso}>
                            <FontAwesomeIcon icon={faCircleExclamation} className={styles.fontAviso} />
                            <p className={classNames("fonte", styles.pAviso)}>Atenção: Informações pessoais não são permitidas no campo de descrição por questões de segurança e políticas antifraude.</p>
                        </div>

                        <div className={styles.containerInput}>
                            <label className={classNames("fonte", styles.label)}>Preço*</label>
                            <input type="text" className={styles.input} placeholder="Informe o preço de venda do veículo" onChange={inputPrecoChange} onKeyDown={inputPrecoKeyDown} value={valueInputPreco} />
                        </div>                

                        <div className={styles.containerPrecoFipe}>
                            <p className={classNames("fonte", styles.pTituloFipe)}>Preço FIPE</p>
                            <p className={classNames("fonte", styles.pPrecoFipe)}>R$ 12.123,50</p>                    
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

export default VenderCarroInformacoesPage;