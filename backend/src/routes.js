import { Router } from "express";
import usersController from "./controllers/usersController.js";

const router = Router();

router.get("/verificarEmailESenha", usersController.verificarEmailESenha);
router.get(
  "/verificarNomeDeUsuario",
  usersController.verificacaoDoNomeDeUsuario
);
router.get("/verificarEmail", usersController.verificarEmail);
router.post("/cadastrar", usersController.criarConta);
router.put("/redefinir-senha", usersController.redefinicaoDeSenha);
router.put("/atualizar-conta", usersController.atualizarConta);

export default router;
