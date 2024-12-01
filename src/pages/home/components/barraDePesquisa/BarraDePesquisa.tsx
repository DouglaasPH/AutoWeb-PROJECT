import styles from "./styles.module.css";
import "../../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { SetStateAction, useRef, useState } from "react";
import { nomesDasMarcasDeCarros } from "../../../../assets/logo-marca/carro/objetoComLogoDeCarro";



function Pesquisa() {
  const [indexButtonBorderAtivo, setIndexButtonBorderAtivo] = useState(0);
  const [indexButtonBackgroundAtivo, setIndexBackgroundAtivo] = useState(0);
  const [placeholder, setPlaceholder] = useState("do carro");
  //const [valorInput, setValorInput] = useState("");
  const [tipoDePesquisa, setTipoDePesquisa] = useState("");
  const inputRef = useRef(null);

  function colorirBorderButton(index: SetStateAction<number>) {
    setIndexButtonBorderAtivo(index);
  }

  function colorirBackgroundButton(index: SetStateAction<number>) {
    setIndexBackgroundAtivo(index);
  }

  function buscarAutomovel(event) {
    // TODO BACKEND: FAZER COM QUE VERIFIQUE APENAS AS MARCAS E MODELOS DE VEÍCULOS QUE JÁ ESTEJAM ANUNCIADOS.
    const valorInput = inputRef.current.value;
    const marca = valorInput.split(" ")[0]; // pega a parte antes do primeiro espaço (marca)
    const modelo = valorInput.split(" ")[1]; // pegar a parte depois do primeiro espaço (modelo)
    nomesDasMarcasDeCarros.filter((marcaAtual) => {
      if (marcaAtual.indexOf(marca, 0) != -1) {
        console.log(marcaAtual, marca)
      }
    })
  }

  function limparInput() {
    inputRef.current.value("");
  }

  function mudarPlaceholder(index: number) {
    if (index === 0) {
      setPlaceholder("do carro");
      setTipoDePesquisa("carro");
    };
    if (index >= 1) {
      setPlaceholder("da moto");
      setTipoDePesquisa("moto");
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
            ref={inputRef}
            type="text"
            className={classNames("fonte", styles.inputEntradaDeTexto)}
            placeholder={`Digite marca ou modelo ${placeholder}`}
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
