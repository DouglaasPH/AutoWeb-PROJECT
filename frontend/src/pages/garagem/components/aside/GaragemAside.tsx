import styles from "./garagemAside.module.css";
import "../../../../App.css";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { imagens } from "../../../../assets/images";
import DADOS_DO_USUARIO, { REMOVER_DADOS_DA_CONTA } from "../../../../dados da conta/dados_da_conta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket, faCarSide, faHandHoldingDollar, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import Spinner from "../../../../components/spinner/spinner";

function GaragemAside() {
    const navigate = useNavigate();
    const location = useLocation();
    const primeira_letra = DADOS_DO_USUARIO.user[0];
    const [focoEmBuscarVeiculos, setFocoEmBuscarVeiculos] = useState(false);
    const [focoEmVenderMeuVeiculo, setFocoEmVenderMeuVeiculo] = useState(false);
    const [focoEmMeusAnuncios, setFocoEmMeusAnuncios] = useState(false);
    const [focoEmFavoritos, setFocoEmFavoritos] = useState(false);
    const [focoEmMinhaConta, setFocoEmMinhaConta] = useState(false);
    const [focoEmSair, setFocoEmSair] = useState(false);
    const [aparecerSpinner, setAparecerSpinner] = useState(false);

    useEffect(() => {
        const URL_ATUAL = location.pathname;
        if (URL_ATUAL === "/garagem/perfil") setFocoEmMinhaConta(true);
        else if (URL_ATUAL === "/garagem/meus-anuncios") setFocoEmMeusAnuncios(true);
        else if (URL_ATUAL === "/garagem/favoritos") setFocoEmFavoritos(true);
        else return;
    }, [location.pathname])

    function irParaHomePage() {
        navigate("/");
    }

    function mudarFocoBuscarVeiculos() {
        setFocoEmBuscarVeiculos(true);
        setFocoEmVenderMeuVeiculo(false);
        setFocoEmMeusAnuncios(false);
        setFocoEmFavoritos(false);
        setFocoEmMinhaConta(false);
        setFocoEmSair(false);
    }

    function mudarFocoVenderMeuVeiculo() {
        setFocoEmBuscarVeiculos(false);
        setFocoEmVenderMeuVeiculo(true);
        setFocoEmMeusAnuncios(false);
        setFocoEmFavoritos(false);
        setFocoEmMinhaConta(false);
        setFocoEmSair(false);
    }

    function mudarFocoMeusAnuncios() {
        setFocoEmBuscarVeiculos(false);
        setFocoEmVenderMeuVeiculo(false);
        setFocoEmMeusAnuncios(true);
        setFocoEmFavoritos(false);
        setFocoEmMinhaConta(false);
        setFocoEmSair(false);
    }

    function mudarFocoFavoritos() {
        setFocoEmBuscarVeiculos(false);
        setFocoEmVenderMeuVeiculo(false);
        setFocoEmMeusAnuncios(false);
        setFocoEmFavoritos(true);
        setFocoEmMinhaConta(false);
        setFocoEmSair(false);
    }

    function mudarFocoMinhaConta() {
        setFocoEmBuscarVeiculos(false);
        setFocoEmVenderMeuVeiculo(false);
        setFocoEmMeusAnuncios(false);
        setFocoEmFavoritos(false);
        setFocoEmMinhaConta(true);
        setFocoEmSair(false);
    }

    function mudarFocoSair() {
        setFocoEmBuscarVeiculos(false);
        setFocoEmVenderMeuVeiculo(false);
        setFocoEmMeusAnuncios(false);
        setFocoEmFavoritos(false);
        setFocoEmMinhaConta(false);
        setFocoEmSair(true);
    }

    // funcionalidade para button sair da conta

    function sairDaConta() {
        try {
            setAparecerSpinner(true);
            REMOVER_DADOS_DA_CONTA();
        } finally {
            setTimeout(() => {
                setAparecerSpinner(false);
                navigate("/login");
            }, 1500);
        }
    };

    return (
        <>
            {aparecerSpinner ? <Spinner /> : null}
            <div className={styles.containerGaragemAside}>
                <div className={styles.containerLogoMarca} onClick={irParaHomePage}>
                    <img src={imagens["logoMarcaDoSite"]} alt="logo marca do site" className={styles.logoMarcaImg} />
                    <h1 className={classNames("fonteLogo", styles.logoMarcaTitulo)} >AutoWeb</h1>
                </div>

                <div className={styles.containerUsuario}>
                    <div className={styles.containerFotoDeUsuario}>
                        <div className={classNames("fonte", styles.fotoDeUsuario)}>
                            <h1>{primeira_letra}</h1>
                        </div>
                    </div>
                    <div className={styles.containerUserEmail}>
                        <h2 className={classNames("fonte", styles.nomeDeUser)}>{DADOS_DO_USUARIO.user}</h2>
                        <p className={classNames("fonte", styles.emailDeUser)}>{DADOS_DO_USUARIO.email}</p>
                    </div>
                </div>

                <div className={styles.containerLinks}>
                    <button className={classNames(styles.buttonLinks, { [styles.focoAtivo]: focoEmBuscarVeiculos })} onClick={mudarFocoBuscarVeiculos}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.fonteButtonLink} />
                        <p className={classNames("fonte", styles.descricaoButtonLink)}>Buscar veículo</p>
                    </button>
                    <button className={classNames(styles.buttonLinks, { [styles.focoAtivo]: focoEmVenderMeuVeiculo })} onClick={mudarFocoVenderMeuVeiculo}>
                        <FontAwesomeIcon icon={faHandHoldingDollar} className={styles.fonteButtonLink} />
                        <p className={classNames("fonte", styles.descricaoButtonLink)}>Vender meu veículo</p>
                    </button>
                    <button className={classNames(styles.buttonLinks, { [styles.focoAtivo]: focoEmMeusAnuncios })} onClick={mudarFocoMeusAnuncios}>
                        <FontAwesomeIcon icon={faCarSide} className={styles.fonteButtonLink} onClick={mudarFocoMeusAnuncios} />
                        <p className={classNames("fonte", styles.descricaoButtonLink)}>Meus anúncios</p>
                    </button>
                    <button name="Favoritos" className={classNames(styles.buttonLinks, { [styles.focoAtivo]: focoEmFavoritos })} onClick={mudarFocoFavoritos}>
                        <FontAwesomeIcon icon={faHeart} className={styles.fonteButtonLink} />
                        <p className={classNames("fonte", styles.descricaoButtonLink)}>Favoritos</p>
                    </button>
                    <button className={classNames(styles.buttonLinks, { [styles.focoAtivo]: focoEmMinhaConta })} onClick={mudarFocoMinhaConta}>
                        <FontAwesomeIcon icon={faUser}
                            className={styles.fonteButtonLink}
                        />
                        <p className={classNames("fonte", styles.descricaoButtonLink)}>Minha conta</p>
                    </button>
                    <button className={classNames(styles.buttonLinks, { [styles.focoAtivo]: focoEmSair })} onClick={() => { mudarFocoSair(); sairDaConta(); }}>
                        <FontAwesomeIcon
                            icon={faArrowRightFromBracket}
                            className={styles.fonteButtonLink} />
                        <p className={classNames("fonte", styles.descricaoButtonLink)}>Sair</p>
                    </button>
                </div>
            </div >
        </>
    )
}

export default GaragemAside;

//                     style={{ color: focoEmSair ? "#2d2d2d" : "#858585", borderLeftColor: focoEmSair ? "#1e90ff" : "white" }}