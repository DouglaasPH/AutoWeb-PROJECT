import conexao from "./conexao.js";

export const consultarDados = (sql, valores = "", mensagemReject) => {
  return new Promise((resolve, reject) => {
    conexao.query(sql, valores, (error, result) => {
      if (error) {
        console.log("Erro na consulta SQL:", error);
        return reject(mensagemReject);
      }

      const row = JSON.parse(JSON.stringify(result));
      if (row !== undefined) {
        const dados = [];

        row.map((dadoAtual, index) => {
          if (dadoAtual.hasOwnProperty('modelo')) dados.push(row[index].modelo)
          else if (dadoAtual.hasOwnProperty('marca')) dados.push(row[index].marca)
          else if (dadoAtual.hasOwnProperty('ano')) dados.push(row[index].ano)
          else if (dadoAtual.hasOwnProperty('versao')) dados.push(row[index].versao);
        });
        return resolve({
          encontrado: true,
          mensagem: "Dados encontrado!",
          dados,
        });
      } else {
        return resolve({
          encontrado: false,
          mensagem: "Dados não encontrado!",
          dados: undefined
        });
      }
    });
  });
};