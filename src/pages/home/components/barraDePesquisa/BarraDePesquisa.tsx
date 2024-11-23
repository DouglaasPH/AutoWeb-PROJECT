import styles from "./styles.module.css";
import "../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useState } from "react";

function Pesquisa() {
    const [indexButtonBorderAtivo, setIndexButtonBorderAtivo] = useState(0);
    const [indexButtonBackgroundAtivo, setIndexBackgroundAtivo] = useState(0);
    const [placeholder, setPlaceholder] = useState("do carro");
    const [valorInput, setValorInput] = useState("");

    function colorirBorderButton(index) {
        setIndexButtonBorderAtivo(index);
    };

    function colorirBackgroundButton(index) {
        setIndexBackgroundAtivo(index);
    };

    function inserirValorInput(v) {
        setValorInput(v.target.value);
    };

    function limparInput() {
        setValorInput("");
    };    

    function mudarPlaceholder(index: number) {
        if (index === 0) setPlaceholder("do carro");
        if (index >= 1) setPlaceholder("da moto");
    }

    return (
                    <div className={styles.containerDePesquisa}>
                <div className={styles.agrupamentoUm}>
                    {["Comprar carros", "Comprar motos", "Quero vender"].map((label, index) => (
                        <button
                            key={index}
                            className={classNames("fonte", styles.agrupamentoUmButton, { [styles.ativarFocoGrupUm]: indexButtonBorderAtivo === index })}
                            onClick={() =>  {colorirBorderButton(index); mudarPlaceholder(index)}}
                        >{label}</button>
                    ))}
                </div>
                <div className={styles.agrupamentoDois}>
                    {["Todos", "Novos", "Usados"].map((label, index) => (
                    <button
                        key={index}
                        className={classNames("fonte", styles.agrupamentoDoisButton, { [styles.ativarFocoGrupDois]: indexButtonBackgroundAtivo === index })}
                        onClick={() => colorirBackgroundButton(index)}
                    >{label}</button>
                    ))}
                </div>
                <div className={styles.agrupamentoTres}>
                    <div className={styles.containerEntradaDeTexto}>
                        <button className={classNames("fonte", styles.buttonEntradaDeTexto)}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <input type="text" value={valorInput} className={classNames("fonte", styles.inputEntradaDeTexto)} placeholder={`Digite marca ou modelo ${placeholder}`} onBlur={limparInput} onChange={inserirValorInput} />
                    </div>
                    <button className={classNames("fonte", styles.buttonVerOfertas)}>VER OFERTAS (398.349)</button>
                </div>
            </div>
    )
}

export default Pesquisa;