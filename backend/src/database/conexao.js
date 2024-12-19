// conectar banco de dados do mysql

import mysql from "mysql";

const conexao = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "26042007",
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

export const login = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }

      const row = JSON.parse(JSON.stringify(result))[0];
      if (row !== undefined) {
        // retorne apenas o id de usuário
        const { senha, ...resto } = row;
        return resolve({
          sucesso: true,
          mensagem: "login com sucesso!",
          dados_da_conta: resto,
        });
      } else {
        return resolve({
          sucesso: false,
          mensagem: "login falhou!",
        });
      }
    });
  });
};

// VERIFICA SE UM DADO EXISTE NO BANCO DE DADOS
export const verificarDados = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }

      const row = JSON.parse(JSON.stringify(result))[0];
      if (row !== undefined) {
        // retorne apenas o id de usuário
        const { id, ...resto } = row;
        return resolve({
          encontrado: true,
          mensagem: "Dados encontrado!",
          dados_da_conta: { id: id },
        });
      } else {
        return resolve({
          encontrado: false,
          mensagem: "Dados não encontrado!",
        });
      }
    });
  });
};

// CONSULTA OS DADOS, PEGANDO-OS E LEVANDO AO FRONTEND
export const consultarDados = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }

      const row = JSON.parse(JSON.stringify(result))[0];

      if (row !== undefined) {
        // retorne apenas o id de usuário
        const { senha, ...resto } = row;
        return resolve({
          encontrado: true,
          mensagem: "Dados encontrado!",
          dados_da_conta: resto,
        });
      } else {
        return resolve({
          encontrado: false,
          mensagem: "Dados não encontrado!",
        });
      }
    });
  });
};

export const criarConta = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }
      const row = JSON.parse(JSON.stringify(result));
      console.log(row);
      // Conta criada ou não
      if (row.affectedRows !== 0) {
        const { insertId, ...resto } = row;
        return resolve({
          sucesso: true,
          mensagem: "Conta criada!",
          dados_da_conta: { id: insertId },
        });
      } else resolve({ sucesso: false, mensagem: "Conta não criada!" });
    });
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

export const atualizarDados = (
  sql,
  valores = "",
  mensagemReject,
  mensagemResolve
) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }
      const row = JSON.parse(JSON.stringify(result));

      console.log(row);
      console.log(row.affectedRows);

      // dados não atualizados ou dados atualizados
      if (row.affectedRows === 0) {
        return resolve({
          sucesso: false,
          mensagem: mensagemReject,
        });
      } else
        resolve({
          sucesso: true,
          mensagem: mensagemResolve,
        });
    });
  });
};

export default conexao;
