// conectar banco de dados do mysql

import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "172441",
  database: "autoweb",
});

conexao.connect();

/** JSDOC
 * Executa um código sql com ou sem valores
 * @param {*string} sql instrução sql a ser executada
 * @param {*string | [newUser, email, nomeDeUsuario]} valores valores a serem passados para o sql
 * @param {*string} mensagemReject mensagem a ser exibida
 * @returns objeto da Promise
 */

export const consulta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    });
  });
};

export const verificarDados = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) return reject(mensagemReject);
      const row = JSON.parse(JSON.stringify(result));
      try {
        return resolve("E-mail ou senha inválidos!", row);
      } catch {
        return reject("E-mail ou senha válido!", row);
      }
    });
  });
};

export default conexao;
