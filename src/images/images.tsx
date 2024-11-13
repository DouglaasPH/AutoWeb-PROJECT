import logoMarcaDoSite from './logo-marca.png';
import imagemUm from './imagens-para-home/carro-1.jpg';
import imagemDois from './imagens-para-home/carro-2.jfif';
import imagemTres from './imagens-para-home/carro-3.jpg';
import imagemQuatro from './imagens-para-home/carro-4.jpg';

interface tipoDasImagens {
    [chave: string]: string
}

const imagens: tipoDasImagens = {
    logoMarcaDoSite,
};

const imagensParaHome: tipoDasImagens = {
    imagemUm,
    imagemDois,
    imagemTres,
    imagemQuatro,

};

export { imagens, imagensParaHome };