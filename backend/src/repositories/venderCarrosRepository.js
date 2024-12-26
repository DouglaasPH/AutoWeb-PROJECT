import { consultarDados } from "../database/manipularDadosVenderCarro.js";


class venderCarrosRepository {
    consultarMarcas() {
        const sql = "select distinct marca from marcas_de_carros";
        return consultarDados(sql, "Não foi possível consultar marcas de carros!");
    }
    consultarModelos(marca) {
        const sql = "select distinct modelo from marcas_de_carros where marca = ?";
        return consultarDados(sql, marca, "Não foi possível consultar marcas de carros!");
    }
    consultarAnosDoModelo(modelo) {
        const sql =
        `
        SELECT DISTINCT
        CAST(JSON_EXTRACT(anos, CONCAT('$[', n.n, ']')) AS UNSIGNED) AS ano
        FROM
        marcas_de_carros
        JOIN (
        SELECT 0 AS n UNION ALL
        SELECT 1 UNION ALL
        SELECT 2 UNION ALL
        SELECT 3 UNION ALL
        SELECT 4 UNION ALL
        SELECT 5 UNION ALL
        SELECT 6 UNION ALL
        SELECT 7 UNION ALL
        SELECT 8 UNION ALL
        SELECT 9
        ) n ON n.n < JSON_LENGTH(anos)
        WHERE modelo = ?
        ORDER BY ano ASC;
         `;
        return consultarDados(sql, modelo, "Não foi possível consultar os anos do modelo da marca!");
    }    
    consultarVersoes(modelo, anos) {
        const sql =
        `
        select versao from marcas_de_carros where modelo = ? and JSON_CONTAINS(anos, ?);
        `;
        return consultarDados(sql, [modelo, anos], "Não foi possível consultar versoes do modelo!");
    }    


}

export default new venderCarrosRepository();


// VERSÃO
// select * from marcas_de_carros where JSON_contains(anos, '1997');

/*
        SELECT GROUP_CONCAT(versao ORDER BY versao ASC SEPARATOR ', ') AS versoes
        FROM marcas_de_carros
        WHERE modelo = ?
        AND JSON_CONTAINS(anos, ?);
*/

/*
        SELECT
        GROUP_CONCAT(ano_combinado ORDER BY ano_combinado ASC) AS anos
        FROM (
        SELECT DISTINCT
        CAST(JSON_EXTRACT(anos, CONCAT('$[', n.n, ']')) AS UNSIGNED) AS ano_combinado
        FROM
        marcas_de_carros
        JOIN (
        SELECT 0 AS n UNION ALL
        SELECT 1 UNION ALL
        SELECT 2 UNION ALL
        SELECT 3 UNION ALL 
        SELECT 4 UNION ALL 
        SELECT 5 UNION ALL 
        SELECT 6 UNION ALL 
        SELECT 7 UNION ALL 
        SELECT 8 UNION ALL 
        SELECT 9 
        ) n ON n.n < JSON_LENGTH(anos)
        WHERE modelo = ?
        ) AS anos_filtrados;
*/