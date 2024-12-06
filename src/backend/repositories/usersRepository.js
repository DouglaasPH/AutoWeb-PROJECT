import {
  consulta,
  verificarDados,
  redefinirSenha,
} from "../database/conexao.js";

class usersRepository {
  criarConta(newUser) {
    const sql = "insert into users set ?";
    return consulta(sql, newUser, "Não foi possível cadastrar!");
  }

  verificarEmailESenha(email, senha) {
    const sql = "select * from users where email =? and senha =?";
    return verificarDados(
      sql,
      [email, senha],
      "Não foi possível verificar o email!"
    );
  }

  verificarNomeDeUsuario(user) {
    const sql = "select * from users where user =?;";
    return verificarDados(
      sql,
      user.user,
      "Não foi possível verificar o usuário!"
    );
  }

  verificarEmail(email) {
    const sql = "select * from users where email =?";
    return verificarDados(
      sql,
      email,
      "Não foi possível localizar o email no banco de dados!"
    );
  }
  redefinirSenha(email, senha) {
    const sql = "update users set senha=? where email=?";
    return redefinirSenha(
      sql,
      [email, senha],
      "Não foi possível redefinir senha!"
    );
  }
}

export default new usersRepository();
