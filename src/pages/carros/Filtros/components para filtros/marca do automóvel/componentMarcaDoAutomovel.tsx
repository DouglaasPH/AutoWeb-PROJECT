import { objetoComLogoDeCarro } from "../../../../../assets/logo-marca/carro/objetoComLogoDeCarro";
import { objetoComLogoDeMoto } from "../../../../../assets/logo-marca/moto/objetoComLogoDeMoto";
import styles from "./marcaDoAutomovel.module.css";


// TODO: fazer uma requisição ao banco de dados para consultar marcas mais anunciadas
const marcasDeCarros = {
    opcaoUm: { logo: objetoComLogoDeCarro.chevrolet, marca: "Chevrolet" },
    opcaoDois: { logo: objetoComLogoDeCarro.ford, marca: "Ford" },
    opcaoTres: { logo: objetoComLogoDeCarro.fiat, marca: "Fiat" },
    opcaoQuatro: { logo: objetoComLogoDeCarro.honda, marca: "Honda" },
    opcaoCinco: { logo: objetoComLogoDeCarro.hyundai, marca: "Hyundai" },
    opcaoSeis: { logo: objetoComLogoDeCarro.mitsubishi, marca: "Mitsubishi" },
    opcaoSete: { logo: objetoComLogoDeCarro.renault, marca: "Renault" },
    opcaoOito: { logo: objetoComLogoDeCarro.toyota, marca: "Toyota" },
    opcaoNove: { logo: objetoComLogoDeCarro.volkswagen, marca: "Volkswagen" },
}

// TODO: fazer uma requisição ao banco de dados para consultar marcas mais anunciadas
const marcasDeMotos = {
    opcaoUm: { logo: objetoComLogoDeMoto.bmw, marca: "Bmw" },
    opcaoDois: { logo: objetoComLogoDeMoto.dafra, marca: "Dafra" },
    opcaoTres: { logo: objetoComLogoDeMoto.ducati, marca: "Ducati" },
    opcaoQuatro: { logo: objetoComLogoDeMoto.harleyDavidson, marca: "HarleyDavidson" },
    opcaoCinco: { logo: objetoComLogoDeMoto.honda, marca: "Honda" },
    opcaoSeis: { logo: objetoComLogoDeMoto.kasinski, marca: "Kasinski" },
    opcaoSete: { logo: objetoComLogoDeMoto.kawasaki, marca: "Kawasaki" },
    opcaoOito: { logo: objetoComLogoDeMoto.suzuki, marca: "Suzuki" },
    opcaoNove: { logo: objetoComLogoDeMoto.yamaha, marca: "Yamaha" },
}


function ContainerMarcaDoAutomovelSemSelecao() {
    return (
        <div className={styles.marcaDoAutomovelSemSelecao}>

        </div>
    )
}

// ContainerMarcaDoAutomovelComSelecao

export default ContainerMarcaDoAutomovelSemSelecao;