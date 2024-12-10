import {
  consulta,
  verificarDados,
  redefinirSenha,
  atualizarDados,
} from "../database/conexao.js";

class usersRepository {
  criarConta(newUser) {
    const sql = "insert into users set ?";
    return consulta(sql, newUser, "Não foi possível cadastrar!");
  }

  verificarEmailESenha(email, senha) {
    const sql = "select * from users where email =? and senha = ?";
    return verificarDados(
      sql,
      [email, senha],
      "Não foi possível verificar o email!"
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

  verificarEmail(email) {
    const sql = "select * from users where email = ?";
    return verificarDados(
      sql,
      email,
      "Não foi possível localizar o email no banco de dados!"
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
    const sql = `update users set ?  where id =${id}`;
    return atualizarDados(
      sql,
      [dados, id],
      `Não foi possível atualizar os dados de usuário com id ${id}`,
      `Os dados de usuário com id ${id} foram atualizados!`
    );
  }
}

export default new usersRepository();
