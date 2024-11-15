import styles from "./styles.module.css";
import "../../App.css";
//import { imagensParaHome } from "../../images/images";
import { useEffect, useState } from "react";
import carroUm from "../../images/imagens-para-home/carro-1.jpg";
import carroDois from "../../images/imagens-para-home/carro-2.png";
import carroTres from "../../images/imagens-para-home/carro-3.jpg";
import carroQuatro from "../../images/imagens-para-home/carro-4.jpg";
//import { imagens } from "../../images/images";

const imagensArray = [
    carroUm,
    carroDois,
    carroTres,
    carroQuatro
]


function Home() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === imagensArray.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (

        <div className={styles.containerHome}>
            <div className={styles.carousel}>
                <div className={styles.imageContainer} style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
                    {imagensArray.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Imagem ${index + 1}`}
                            className={styles.carouselImage}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.inputDePesquisa}></div>
            <main className={styles.containerContent}>
                <div className={styles.containerLojasOficiais}></div>
            </main>
        </div>
    )
}

export default Home;

//                 <img src="" alt="imagem de carros" className={styles.propagandaImg} />