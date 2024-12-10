import usersRepository from "../repositories/usersRepository.js";

class usersController {
  async criarConta(req, res) {
    const newUser = req.body;
    const row = await usersRepository.criarConta(newUser);
    res.json(row);
  }
  async entrarConta(req, res) {
    const { email, senha } = req.query;
    const row = await usersRepository.entrarConta(email, senha);
    return res.json(row);
  }
  async verificarDados(req, res) {
    const dados = req.query;
    const row = await usersRepository.verificarDados(dados);
    return res.json(row);
  }
  async atualizarConta(req, res) {
    let { id, ...dados } = req.body;
    const row = await usersRepository.atualizarConta(dados, id);
    return res.json(row);
  }
}

export default new usersController();
