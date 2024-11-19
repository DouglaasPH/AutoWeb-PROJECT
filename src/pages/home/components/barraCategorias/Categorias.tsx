import styles from "./styles.module.css";
import "../../../../App.css";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const categoriasArray = [
    "Carros abaixo da Tabela",
    "Motos abaixo da Tabela",
    "Ofertas até R$30 mil",
    "Ofertas de R$30 mil a R$40 mil",
    "Ofertas de R$40 mil a R$50 mil",
    "Ofertas de R$50 mil a R$60 mil",
    "Ofertas de R$60 mil ou mais"
]

function Categorias() {
    const [moverCategorias, setMoverCategorias] = useState<number>(0);
    const irParaEsquerda = () => setMoverCategorias(1 + moverCategorias)
    const irParaDireita = () => setMoverCategorias(-1 + moverCategorias);

        
    return (
        <div className={styles.containerCategorias}>
            <div className={styles.containerTitulo}>
                <h3 className={classNames("fonte", styles.titulo)}>Categorias</h3>
            </div>

            {moverCategorias < 0 ? 
                <FontAwesomeIcon icon={faArrowLeft} className={styles.setaEsquerda} onClick={irParaEsquerda} style
                    ={{ opacity: 1 }} /> : null            
            }
            <div className={styles.containerTiposDeCategoria} style={{ transform: `translateX(${moverCategorias * 3}%)`}}>
                {categoriasArray.map((categoria) => (
                    <div className={styles.containerTipoDaCategoria}>
                        <h4 className={classNames("fonte", styles.nomeDaCategoria)}>{categoria}</h4>
                    </div>
                ))}
            </div>
            {moverCategorias >= -1  ? 
                <FontAwesomeIcon icon={faArrowRight} className={styles.setaDireita} onClick={irParaDireita} style
                    ={{ opacity: 1 }} /> : null           
}
        </div>
    )
}

export default Categorias;