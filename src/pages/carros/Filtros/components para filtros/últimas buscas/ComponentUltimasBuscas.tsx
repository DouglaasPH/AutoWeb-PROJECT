import styles from "./ultimasBuscas.module.css";

/* receber do banco de dados um objeto que contenha apenas marca, modelo e localização. 
O objeto deve seguir o seguinte exemplo: */
// Deve pegar apenas as cinco últimas buscas

type TipagemRequisicao = {
    marca: string,
    modelo: string,
    localizacao: string,
}

const reqAReceber: Record<string, TipagemRequisicao> = {
    buscaUm: { marca: "Honda", modelo: "Civic", localizacao: "Pernambuco" },
    buscaDois: { marca: "Honda", modelo: "Civic", localizacao: "Pernambuco" },
    buscaTres: { marca: "Honda", modelo: "Civic", localizacao: "Pernambuco" },
    buscaQuatro: { marca: "Honda", modelo: "Civic", localizacao: "Pernambuco" },
    buscaCinco: { marca: "Honda", modelo: "Civic", localizacao: "Pernambuco" },
};

const chaveDoObjetoDaReq = Object.keys(reqAReceber);


function ComponentUltimasBuscas() {
    return (
        <div className={styles.container}>
            <h5 className={styles.tituloDoContainer}>Suas últimas buscas</h5>
            <div className={styles.containerUltimasBuscas}>
                {chaveDoObjetoDaReq.map((buscaAtual) => (
                    <div className={styles.buscaIndividual}>
                        <div className={styles.containerMarcaEModelo}>
                            <h4 className={styles.marca}>{reqAReceber[buscaAtual].marca}</h4>
                            <h4 className={styles.modelo}>{reqAReceber[buscaAtual].modelo}</h4>
                        </div>
                        <div className={styles.containerLocalizacao}>
                            <h4 className={styles.localizcao}>{reqAReceber[buscaAtual].localizacao}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ComponentUltimasBuscas;