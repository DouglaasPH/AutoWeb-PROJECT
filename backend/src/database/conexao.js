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
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }

      const row = JSON.parse(JSON.stringify(result));
      // E-mail encontrado ou não

      console.log(row);
      if (row.length === 0) {
        // não retorne a senha
        const { senha, ...resto } = row[0];
        return resolve({
          encontrado: false,
          mensagem: "Dados não encontrado!",
          dados_da_conta: resto,
        });
      } else {
        // não retorne a senha
        const { senha, ...resto } = row[0];
        return resolve({
          encontrado: true,
          mensagem: "Dados encontrado!",
          dados_da_conta: resto,
        });
      }
    });
  });
};

export const criarConta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    if (error) {
      console.log("Erro na consulta SQL:", error);
      return reject(mensagemReject);
    }
    const row = JSON.parse(JSON.stringify(result));

    // Conta criada ou não
    if (row.length == 0) {
      return resolve({
        sucesso: false,
        mensagem: "Conta não criado!",
      });
    } else resolve({ sucesso: true, mensagem: "Conta criado!" });
  });
};
export const redefinirSenha = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }
      const row = JSON.parse(JSON.stringify(result));
      console.log(row.data, row.length, row.length == 0);
      // senha redefinida ou não
      if (row.length == undefined) {
        return resolve({
          sucesso: false,
          mensagem: "Senha não foi redefinida!",
        });
      } else resolve({ sucesso: true, mensagem: "Senha redefinida!" });
    });
  });
};

export default conexao;
