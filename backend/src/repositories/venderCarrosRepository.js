import { consultarDados } from "../database/manipularDadosVenderCarro.js";


class venderCarrosRepository {
    consultarMarcas() {
        const sql = "select distinct marca from marcas_de_carros";
        return consultarDados(sql, "Não foi possível selecionar marcas de carros!");
    }
    consultarModelos(marca) {
        const sql = "select distinct modelo from marcas_de_carros where marca = ?";
        return consultarDados(sql, marca, "Não foi possível selecionar marcas de carros!");
    }
    consultarAnosDoModelo(marca, modelo) {
        const sql = "select distinct anos from marcas_de_carros where marca = ? and modelo = ?";
        return consultarDados(sql, [marca, modelo], "Não foi possível selecionar anos do modelo da marca!");
    }    

}

export default new venderCarrosRepository();


// VERSÃO
// select * from marcas_de_carros where JSON_contains(anos, '1997');