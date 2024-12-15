import {
  verificarDados,
  redefinirSenha,
  atualizarDados,
  criarConta,
  login,
  consultarDados,
} from "../database/conexao.js";

class usersRepository {
  criarConta(newUser) {
    const sql = "insert into users set ?";
    return criarConta(sql, newUser, "Não foi possível cadastrar!");
  }

  entrarConta(email, senha) {
    const sql = "select * from users where email =? and senha = ?";
    return login(
      sql,
      [email, senha],
      "Não foi possível consulta o e-mail e senha fornecido pelo usuário!"
    );
  }

  verificarNomeDeUsuario(user) {
    const sql = "select * from users where user = ?;";
    return verificarDados(
      sql,
      user.user,
      "Não foi possível verificar o usuário!"
    );
  }

  verificarDados(dados) {
    const nome = Object.keys(dados)[0];
    const valor = dados[nome];
    const sql = `select * from users where ?? = ?`;
    return verificarDados(
      sql,
      [nome, valor],
      `Não foi possível localizar o ${nome} no banco de dados!`
    );
  }

  consultarDados(id) {
    const sql = `select * from users where ?? = ?`;
    return consultarDados(
      sql,
      ["id", id],
      `Não foi possível localizar o id no banco de dados!`
    );
  }

  redefinirSenha(email, senha) {
    const sql = "update users set senha=? where email = ?";
    return redefinirSenha(
      sql,
      [email, senha],
      "Não foi possível redefinir senha!"
    );
  }
  atualizarConta(dados, id) {
    const sql = "update users set ?  where id = ?";
    return atualizarDados(
      sql,
      [dados, id],
      `Não foi possível atualizar os dados de usuário com id ${id}`,
      `Os dados de usuário com id ${id} foram atualizados!`
    );
  }
}

export default new usersRepository();
