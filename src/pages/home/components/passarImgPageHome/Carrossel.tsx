import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import carroUm from "../../../../assets/imagens-para-home/anuncio-carrossel/anuncio-1.jpg";
import carroDois from "../../../../assets/imagens-para-home/anuncio-carrossel/anuncio-2.png";
import carroTres from "../../../../assets/imagens-para-home/anuncio-carrossel/anuncio-3.jpg";
import carroQuatro from "../../../../assets/imagens-para-home/anuncio-carrossel/anuncio-4.jpg";

const imagensArray = [
    carroUm,
    carroDois,
    carroTres,
    carroQuatro
]

function Carrossel() {
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

    )
}

export default Carrossel;