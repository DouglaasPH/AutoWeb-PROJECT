import styles from "./barraDePesquisa.module.css";
import "../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { SetStateAction, useState } from "react";
import { nomesDasMarcasDeCarros } from "../../../../assets/logo-marca/carro/objetoComLogoDeCarro";

function Pesquisa() {
  const [indexButtonBorderAtivo, setIndexButtonBorderAtivo] = useState(0);
  const [indexButtonBackgroundAtivo, setIndexBackgroundAtivo] = useState(0);
  const [tipoDePesquisa, setTipoDePesquisa] = useState("do carro");
  const [inputValue, setInputValue] = useState("");

  function colorirBorderButton(index: SetStateAction<number>) {
    setIndexButtonBorderAtivo(index);
  }
  function colorirBackgroundButton(index: SetStateAction<number>) {
    setIndexBackgroundAtivo(index);
  }

  function buscarAutomovel(event: { target: { value: string; }; }) {
    setInputValue(event.target.value)
    // TODO BACKEND: FAZER COM QUE VERIFIQUE APENAS AS MARCAS E MODELOS DE VEÍCULOS QUE JÁ ESTEJAM ANUNCIADOS.
    const valorInput = event.target.value;
    const marca = valorInput.split(" ")[0]; // pega a parte antes do primeiro espaço (marca)
    // TODO
    //const modelo = valorInput.split(" ")[1]; // pegar a parte depois do primeiro espaço (modelo)
    nomesDasMarcasDeCarros.filter((marcaAtual) => {
      if (marcaAtual.indexOf(marca, 0) != -1) {
        console.log(marcaAtual, marca)
      }
    })
  }

  function limparInput() {
    setInputValue("");
  }

  function mudarPlaceholder(index: number) {
    if (index === 0) {
      setTipoDePesquisa("do carro");
    };
    if (index >= 1) {
      setTipoDePesquisa("da moto");
    };
  }

  return (
    <div className={styles.containerDePesquisa}>
      <div className={styles.agrupamentoUm}>
        {["Comprar carros", "Comprar motos", "Quero vender"].map(
          (label, index) => (
            <button
              key={index}
              className={classNames("fonte", styles.agrupamentoUmButton, {
                [styles.ativarFocoGrupUm]: indexButtonBorderAtivo === index,
              })}
              onClick={() => {
                colorirBorderButton(index);
                mudarPlaceholder(index);
              }}
            >
              {label}
            </button>
          )
        )}
      </div>
      <div className={styles.agrupamentoDois}>
        {["Todos", "Novos", "Usados"].map((label, index) => (
          <button
            key={index}
            className={classNames("fonte", styles.agrupamentoDoisButton, {
              [styles.ativarFocoGrupDois]: indexButtonBackgroundAtivo === index,
            })}
            onClick={() => colorirBackgroundButton(index)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={styles.agrupamentoTres}>
        <div className={styles.containerEntradaDeTexto}>
          <button className={classNames("fonte", styles.buttonEntradaDeTexto)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <input
            value={inputValue}
            type="text"
            className={classNames("fonte", styles.inputEntradaDeTexto)}
            placeholder={`Digite marca ou modelo ${tipoDePesquisa}`}
            onBlur={limparInput}
            onChange={buscarAutomovel}
          />
        </div>
        <button className={classNames("fonte", styles.buttonVerOfertas)}>
          VER OFERTAS (398.349)
        </button>
      </div>
    </div>
  );
}

export default Pesquisa;
