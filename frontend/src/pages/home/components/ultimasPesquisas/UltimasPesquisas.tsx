import styles from "./ultimasPesquisas.module.css";
import "../../../../App.css";
import classNames from "classnames";

// últimas buscas comporta até 5 visualizações de histórico por vez

function UltimasPesquisas() {
    return (
        <div className={styles.containerUltimasPesquisas}>
            <div className={styles.containerTitulo}>
                <h3 className={classNames("fonte", styles.titulo)}>Suas últimas buscas</h3>
            </div>

            <div className={styles.containerHistorico}>
                <div className={styles.containerHistoricoUm}>
                    <div className={styles.containerNomeDoVeiculo}>
                        <h4 className={classNames("fonte", styles.marcaDoVeiculo)}>VOLKSWAGEN</h4>
                        <h4 className={classNames("fonte", styles.modeloDoVeiculo)}>FOX</h4>
                    </div>
                    <div className={styles.containerEstado}>
                        <p className={classNames("fonte", "colorDefault", styles.nomeDoEstado)}>Pernambuco</p>
                    </div>
                </div>

                <div className={styles.containerHistoricoUm}>
                    <div className={styles.containerNomeDoVeiculo}>
                        <h4 className={classNames("fonte", styles.marcaDoVeiculo)}>VOLKSWAGEN</h4>
                        <h4 className={classNames("fonte", styles.modeloDoVeiculo)}>FOX</h4>
                    </div>
                    <div className={styles.containerEstado}>
                        <p className={classNames("fonte", "colorDefault", styles.nomeDoEstado)}>Pernambuco</p>
                    </div>
                </div>

                <div className={styles.containerHistoricoUm}>
                    <div className={styles.containerNomeDoVeiculo}>
                        <h4 className={classNames("fonte", styles.marcaDoVeiculo)}>VOLKSWAGEN</h4>
                        <h4 className={classNames("fonte", styles.modeloDoVeiculo)}>FOX</h4>
                    </div>
                    <div className={styles.containerEstado}>
                        <p className={classNames("fonte", "colorDefault", styles.nomeDoEstado)}>Pernambuco</p>
                    </div>
                </div>

                <div className={styles.containerHistoricoUm}>
                    <div className={styles.containerNomeDoVeiculo}>
                        <h4 className={classNames("fonte", styles.marcaDoVeiculo)}>VOLKSWAGEN</h4>
                        <h4 className={classNames("fonte", styles.modeloDoVeiculo)}>FOX</h4>
                    </div>
                    <div className={styles.containerEstado}>
                        <p className={classNames("fonte", "colorDefault", styles.nomeDoEstado)}>Pernambuco</p>
                    </div>
                </div>

                <div className={styles.containerHistoricoUm}>
                    <div className={styles.containerNomeDoVeiculo}>
                        <h4 className={classNames("fonte", styles.marcaDoVeiculo)}>VOLKSWAGEN</h4>
                        <h4 className={classNames("fonte", styles.modeloDoVeiculo)}>FOX</h4>
                    </div>
                    <div className={styles.containerEstado}>
                        <p className={classNames("fonte", "colorDefault", styles.nomeDoEstado)}>Pernambuco</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UltimasPesquisas;