import logoMarcaDoSite from './logo-marca.png';
import imagemUm from './imagens-para-home/anuncio-carrossel/anuncio-1.jpg';
import imagemDois from './imagens-para-home/anuncio-carrossel/anuncio-2.png';
import imagemTres from './imagens-para-home/anuncio-carrossel/anuncio-3.jpg';
import imagemQuatro from './imagens-para-home/anuncio-carrossel/anuncio-4.jpg';


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