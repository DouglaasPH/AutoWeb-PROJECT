import usersRepository from "../repositories/usersRepository.js";

class usersController {
  async criarConta(req, res) {
    const newUser = req.body;
    console.log(newUser);
    const row = await usersRepository.criarConta(newUser);
    res.json(row);
  }
  async verificarEmailESenha(req, res) {
    const { email, senha } = req.query;
    const row = await usersRepository.verificarEmailESenha(email, senha);
    return res.json(row);
  }
  async verificacaoDoNomeDeUsuario(req, res) {
    const nomeDeUsuario = req.body;
    const row = await usersRepository.verificarNomeDeUsuario(nomeDeUsuario);
    return res.json(row);
  }
  async verificarEmail(req, res) {
    const email = req.query.email;
    const row = await usersRepository.verificarEmail(email);
    return res.json(row);
  }
}

export default new usersController();
